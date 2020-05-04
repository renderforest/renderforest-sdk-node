/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const {
  CharacterBasedDurationError,
  DurationGreaterThanMaxPossibleError,
  IconAdjustableError,
  InvalidScreenIdError,
  InvalidScreenOperationError,
  InvalidTextScaleValue,
  LowerThirdAdjustableError,
  NotImageAreaError,
  NotTextAreaError,
  NotVideoAreaError,
  MissingOrderError,
  ScreenHasVideoAreaError,
  ScreenNotFoundError
} = require('./util/error')

const { getScreenDuration } = require('./util/screen-duration')
const { checkAreaType, insertAndNormalizeOrder, removeAndNormalizeOrder } = require('./util/project-data')

const { AVERAGE_CHARS_IN_WORD, PROJECT_DATA_GENERATOR } = require('./config')

class ProjectData {
  /**
   * @constructor
   * @param {Object} projectDataJson - The project data.
   * @param {Function} updateProjectData - Project data updater.
   */
  constructor (projectDataJson, updateProjectData) {
    this.projectDataJson = projectDataJson
    this.patchProperties = []
    this.setGenerator()
    this.updateProjectData = updateProjectData
  }

  /**
   * Set the generator.
   * @private
   */
  setGenerator () {
    this.projectDataJson.data['generator'] = ProjectData.generator
    this.patchProperties.push('generator')
  }

  /**
   * Get patch object.
   * @private
   */
  getPatchObject () {
    return this.patchProperties.reduce((acc, property) => {
      acc[property] = this.projectDataJson.data[property]

      return acc
    }, {})
  }

  /**
   * Reset patch object.
   * @private
   */
  resetPatchObject () {
    this.patchProperties = []
  }

  /**
   * Get the project id.
   * @returns {number}
   */
  getProjectId () {
    return this.projectDataJson.projectId
  }

  /**
   * @returns {Object}
   * @description Get the raw project data.
   */
  getRawProjectData () {
    return this.projectDataJson.data
  }

  /**
   * Get the template id.
   * @returns {number}
   */
  getTemplateId () {
    return this.projectDataJson.data['templateId']
  }

  /**
   * Check whether is equalizer or not.
   * @returns {boolean}
   */
  isEqualizer () {
    return this.projectDataJson.data['equalizer']
  }

  /**
   * Check whether is lego or not.
   * @returns {boolean}
   */
  isLego () {
    return this.projectDataJson.data['isLego']
  }

  /**
   * Get the project muteMusic property.
   * @returns {boolean}
   */
  getMuteMusic () {
    return this.projectDataJson.data['muteMusic']
  }

  /**
   * Set the project muteMusic property.
   * @param {boolean} muteMusic
   * @returns {ProjectData}
   */
  setMuteMusic (muteMusic) {
    this.projectDataJson.data['muteMusic'] = muteMusic
    this.patchProperties.push('muteMusic')
    return this
  }

  /**
   * Get the project fonts.
   * @returns {Object}
   */
  getFonts () {
    return this.projectDataJson.data['fonts']
  }

  /**
   * Reset project fonts to default values.
   * @returns {ProjectData}
   */
  resetFonts () {
    const fonts = this.getFonts()
    fonts.selected = fonts.defaults
    return this
  }

  /**
   * Set given fonts.
   * @param {Array} fonts - The fonts to set.
   * @returns {ProjectData}
   */
  setFonts (fonts) {
    const projectFonts = this.getFonts()
    projectFonts.selected = { ...fonts }
    this.patchProperties.push('fonts')
    return this
  }

  /**
   * Get the project colors.
   * @returns {Array}
   */
  getProjectColors () {
    return this.projectDataJson.data['projectColors']
  }

  /**
   * Get the project duration.
   * @returns {Array}
   */
  getProjectDuration () {
    return this.projectDataJson.data['duration']
  }

  /**
   * Set the project colors.
   * @param {Array} projectColors
   * @returns {ProjectData}
   */
  setProjectColors (projectColors) {
    this.projectDataJson.data['projectColors'] = projectColors
    this.patchProperties.push('projectColors')
    return this
  }

  /**
   * Get the project sounds.
   * @returns {Array}
   */
  getSounds () {
    return this.projectDataJson.data['sounds']
  }

  /**
   * Set the project sounds.
   * @param {Array} sounds
   * @returns {ProjectData}
   */
  setSounds (sounds) {
    this.projectDataJson.data['sounds'] = sounds
    this.patchProperties.push('sounds')
    return this
  }

  /**
   * Get the project styles.
   * @returns {Object}
   */
  getStyles () {
    return this.projectDataJson.data['styles']
  }

  /**
   * Set the project styles.
   * @param {Object} styles
   * @returns {ProjectData}
   */
  setStyles (styles) {
    this.projectDataJson.data['styles'] = styles
    this.patchProperties.push('styles')
    return this
  }

  /**
   * Get the project voiceOver.
   * @returns {Object}
   */
  getVoiceOver () {
    return this.projectDataJson.data['voiceOver']
  }

  /**
   * Set the project voiceOver.
   * @param {Object} voiceOver
   * @returns {ProjectData}
   */
  setVoiceOver (voiceOver) {
    this.projectDataJson.data['voiceOver'] = voiceOver
    this.patchProperties.push('voiceOver')
    return this
  }

  /**
   * Get the project title.
   * @returns {string}
   */
  getTitle () {
    return this.projectDataJson.data['title']
  }

  /**
   * Get screens (add methods on screens & screen areas).
   * @returns {Array}
   */
  getScreens () {
    const screens = this.projectDataJson.data['screens']
    return screens.map((screen) => {
      return this.constructScreen(screen)
    })
  }

  /**
   * Gets screen with given `index`. If there is such one then returns it.
   *  Otherwise throws error.
   * @param {Number} index - The screen index to get.
   * @throws {ScreenNotFoundError}
   * @returns {Object}
   */
  getScreen (index) {
    const screens = this.getScreens()
    if (typeof screens[index] !== 'undefined') {
      return screens[index]
    }
    throw new ScreenNotFoundError(`Screen with index: ${index} is not found.`)
  }

  /**
   * Removes screen from screens array.
   * @param {Number} index index - The screen index to get.
   * @returns {Object}
   */
  removeScreen (id) {
    if (!this.isLego()) {
      throw new InvalidScreenOperationError(`Only lego templates screens can be removed.`)
    }
    const screens = this.getScreens()
    const screen = screens.find(screen => screen.id === id)
    if (!screen) {
      return this
    }

    this.projectDataJson.data['screens'] = removeAndNormalizeOrder(this.getScreens(), id)
    this.patchProperties.push('screens')
    return this
  }

  /**
   * Removes all screens from screens array.
   * @returns {Object}
   */
  removeAllScreens () {
    if (!this.isLego()) {
      throw new InvalidScreenOperationError(`Only lego templates screens can be removed.`)
    }

    this.projectDataJson.data['screens'] = []
    this.patchProperties.push('screens')
    return this
  }

  /**
 * Gets the number of screens of the project.
 * @returns {Number}
 */
  getNumberOfScreens () {
    const screens = this.projectDataJson.data['screens']
    return screens.length
  }

  /**
   * Gets payload data for partial update based on project id and patch object.
   * @returns {Promise.<>}
   */
  save () {
    const projectId = this.getProjectId()
    const data = this.getPatchObject()
    this.resetPatchObject()
    return this.updateProjectData(projectId, { data })
  }

  /**
   * Pushes the given `screen` to `screens` array.
   * @param {Object} newScreen - The new screen to push.
   * @returns {ProjectData}
   */
  pushScreen (newScreen) {
    if (!newScreen.hasOwnProperty('order')) {
      throw new MissingOrderError('Screen order property is missing.')
    }

    this.projectDataJson.data['screens'] = insertAndNormalizeOrder(this.getScreens(), newScreen)
    this.patchProperties.push('screens')
    return this
  }

  /**
   * @param {Number} screenId The screen Id to set as current.
   * @description Sets the project current screen.
   */
  setCurrentScreenId (screenId) {
    if (!this.projectDataJson.data['screens'].some(screen => screen.id === screenId)) {
      throw new InvalidScreenIdError(`Invalid current screen id.`)
    }
    this.projectDataJson.data['currentScreenId'] = screenId
    this.patchProperties.push('currentScreenId')
    return this
  }

  /**
   * Construct screen, adds methods to `screen` object.
   * @param {Object} screen
   * @returns {Object}
   */
  constructScreen (screen) {
    const self = this
    const {
      id, characterBasedDuration, compositionName, duration, extraVideoSecond, gifBigPath, gifPath, gifThumbnailPath,
      hidden, iconAdjustable, isFull, maxDuration, order, path, tags, title, type, areas,
      lowerThirdStart, lowerThirdDuration, lowerThirdAdjustable
    } = screen

    return {
      id,
      characterBasedDuration,
      compositionName,
      duration,
      extraVideoSecond,
      gifBigPath,
      gifPath,
      gifThumbnailPath,
      hidden,
      iconAdjustable,
      isFull,
      maxDuration,
      lowerThirdStart,
      lowerThirdDuration,
      lowerThirdAdjustable,
      order,
      path,
      tags,
      title,
      type,
      areas,
      /**
       * Maps through areas array and adds it's methods.
       * @returns {Object}
       */
      getAreas: () => areas.map((area) => this.constructArea(area)),
      /**
       * Gets area with given `index`.
       * @param {number} index - The area index.
       * @returns {Object}
       */
      getArea: function (index) {
        const areas = this.getAreas()
        if (typeof areas[index] !== 'undefined') {
          return areas[index]
        }
        throw new ScreenNotFoundError(`Area with index: ${index} is not found.`)
      },
      /**
       * Calculates screen duration using screen duration utility.
       * @see Screen duration util.
       * @returns {number}
       */
      calculateScreenDuration: () => getScreenDuration(screen),
      /**
       * Filters areas to find only video ones.
       *  Checks if count of video areas is more than 0, then counts sum of `wordCount`s.
       *  Otherwise returns `maxDuration` or `duration`.
       * @returns {number}
       */
      getMaxPossibleDuration: () => {
        const videoAreas = areas.filter((area) => area.type === 'video')

        if (videoAreas.length > 0) {
          return videoAreas.reduce((acc, videoArea) => acc + videoArea.wordCount, 0)
        }

        return maxDuration || duration
      },
      /**
       * Checks if `characterBasedDuration` is falsy, then throws error.
       *  If `duration` is more than maximum possible duration, then throws error.
       *  Otherwise sets `selectedDuration`.
       * @param {number} duration - The new duration to set.
       * @throws {CharacterBasedDurationError, DurationGreaterThanMaxPossibleError}
       */
      setDuration: function (duration) {
        const videoAreas = areas.filter((area) => area.type === 'video')
        if (videoAreas.length > 0) {
          throw new ScreenHasVideoAreaError('The screen has video area.')
        }

        if (!characterBasedDuration) {
          throw new CharacterBasedDurationError('Current screen\'s duration is not adjustable.')
        }

        if (duration > this.getMaxPossibleDuration()) {
          throw new DurationGreaterThanMaxPossibleError('Given `value` is greater than maximum possible duration.')
        }

        if (characterBasedDuration) {
          screen.selectedDuration = duration
          self.patchProperties.push('screens')
        }

        return this
      },
      /**
       * Checks if icon position is not adjustable then throws error.
       *  Otherwise does `xor` bitwise operation with `iconAdjustable` and 3.
       *  Number `3` stands for converting 1->2 and 2->1.
       * @throws {IconAdjustableError}
       */
      toggleIconPosition: function () {
        if (!iconAdjustable) {
          throw new IconAdjustableError('Icon position is not adjustable.')
        }

        screen.iconAdjustable ^= 3
        self.patchProperties.push('screens')
        return this
      },
      /**
       * Checks if lower third settings are not adjustable then throws error.
       *  Otherwise sets `start` and `duration` params for lower third settings.
       * @param {number} start - The start of lower third (seconds).
       * @param {number} duration - The duration of lower third (seconds).
       * @throws {LowerThirdAdjustableError}
       */
      setLowerThirdSettings: function (start, duration) {
        if (!(screen.hasOwnProperty('lowerThirdAdjustable') && screen.lowerThirdAdjustable)) {
          throw new LowerThirdAdjustableError('Lower third settings are not adjustable.')
        }

        screen.lowerThirdStart = start
        screen.lowerThirdDuration = duration
        self.patchProperties.push('screens')
        return this
      },
      /**
       * Returns project data object for further chain
       * @returns {ProjectData}
       */
      returnProjectData: () => self,
      /**
       * Call Project data's save method from screen object.
       * @returns {Promise}
       */
      save: () => self.save()
    }
  }

  /**
   * Construct area.
   * @param {Object} area
   * @returns {Object}
   */
  constructArea (area) {
    const self = this
    const {
      id, fileName, height, width, value, cords, title, wordCount, originalHeight, originalWidth, order, type,
      mimeType, webpPath, fileType, thumbnailPath, imageCropParams, colorFilters, videoCropParams, font
    } = area

    const result = {
      id,
      height,
      width,
      value,
      cords,
      title,
      wordCount,
      order,
      type,
      font,
      /**
       * Returns area type.
       * @returns {String}
       */
      getAreaType: () => area.type,
      /**
       * Checks if area type is `text`, then sets the given value.
       * @param {String} text - The text value to set.
       * @throws {NotTextAreaError}
       * @returns {result}
       */
      setText: function (text) {
        const areaChecker = checkAreaType(area, 'text')
        areaChecker(NotTextAreaError.of(`Area with id: ${id} is not text.`))

        area.value = text
        self.patchProperties.push('screens')
        return this
      },
      /**
       *
       * @param scale
       * @returns {result}
       */
      setTextScale: function (scale) {
        const areaChecker = checkAreaType(area, 'text')
        areaChecker(NotTextAreaError.of(`Area with id: ${id} is not text.`))

        if (scale < 80 || scale > 120) {
          throw new InvalidTextScaleValue('The text scale value must be between 80 and 120.')
        }
        font.scale = scale
        self.patchProperties.push('screens')
        return this
      },
      /**
       * Checks if area is `text`, then returns recommended character count.
       * @returns {Number}
       * @throws {NotTextAreaError}
       */
      getRecommendedCharacterCount: () => {
        const areaChecker = checkAreaType(area, 'text')
        areaChecker(NotTextAreaError.of(`Area with id: ${id} is not text.`))

        return Math.floor(parseInt(wordCount) * AVERAGE_CHARS_IN_WORD)
      },
      /**
       * Checks if area is `image`, then sets the new image.
       * @param {Object} image - The image properties.
       * @throws {NotImageAreaError}
       */
      setImage: function (image) {
        const areaChecker = checkAreaType(area, 'image')
        areaChecker(NotImageAreaError.of(`Area with id: ${id} is not image.`))

        Object.assign(result, {
          fileName, originalHeight, originalWidth, mimeType, webpPath, fileType, thumbnailPath, imageCropParams, colorFilters
        })
        ProjectData.setAreaImage(area, image)
        self.patchProperties.push('screens')
        return this
      },
      /**
       * Checks if area is `video`, then sets the new video.
       * @param {Object} video - The image properties.
       * @throws {NotImageAreaError}
       */
      setVideo: function (video) {
        const areaChecker = checkAreaType(area, 'video')
        areaChecker(NotVideoAreaError.of(`Area with id: ${id} is not video.`))

        Object.assign(result, {
          fileName, originalHeight, originalWidth, mimeType, webpPath, fileType, thumbnailPath, videoCropParams
        })
        ProjectData.setAreaVideo(area, video)
        self.patchProperties.push('screens')
        return this
      },
      /**
       * Returns project data instance for further development.
       * @returns {ProjectData} Project data instance.
       */
      returnProjectData: () => this,
      /**
       * Calls project data's save method from area object.
       * @returns {Promise}
       */
      save: () => this.save()
    }

    return result
  }

  /**
   * Set image on area.
   * @param {Object} area
   * @param {{fileName, mime, filePath, webpPath, fileType, thumbnailPath, imageCropParams}} image
   * @param {{transform, top, left, width, height}} image.imageCropParams
   */
  static setAreaImage (area, image) {
    const { fileName, mime, filePath, webpPath, fileType, thumbnailPath, imageCropParams, colorFilters } = image
    const { transform, top, left, width, height } = imageCropParams
    const { sepia, contrast, grayscale, saturate, huerotate, brightness } = colorFilters

    area.fileName = fileName
    area.mimeType = mime
    area.value = filePath
    area.webpPath = webpPath
    area.fileType = fileType
    area.thumbnailPath = thumbnailPath
    area.imageCropParams = { transform, top, left, width, height }
    area.colorFilters = { sepia, contrast, grayscale, saturate, huerotate, brightness }
  }

  /**
   * Set video on area.
   * @param {Object} area
   * @param {{fileName, mime, filePath, webpPath, fileType, videoCropParams}} video
   * @param {{duration, end, mime, start, stockFootageId, thumbnail, thumbnailVideo, videoVoiceTreatment}} video.videoCropParams
   */
  static setAreaVideo (area, video) {
    const { fileName, mime, filePath, webpPath, fileType, videoCropParams } = video

    Object.assign(area, {
      fileName, mimeType: mime, value: filePath, webpPath, fileType, videoCropParams
    })
  }
}

ProjectData.generator = PROJECT_DATA_GENERATOR

module.exports = ProjectData
