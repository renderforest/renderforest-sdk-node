/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const PackageJson = require('../package.json')

const {
  CharacterBasedDurationError,
  DurationGreaterThanMaxPossibleError,
  IconAdjustableError,
  LowerThirdAdjustableError,
  NotImageAreaError,
  NotTextAreaError,
  NotVideoAreaError,
  MissingOrderError,
  ScreenHasVideoAreaError,
  ScreenNotFoundError
} = require('./util/error')

const screenDurationUtil = require('./util/screen-duration')
const projectDataUtil = require('./util/project-data')

const { AVERAGE_CHARS_IN_WORD } = require('./config')

class ProjectData {
  /**
   * @constructor
   * @param {Object} projectDataJson
   */
  constructor (projectDataJson) {
    this.projectDataJson = projectDataJson
    this.patchProperties = []
    this.setGenerator()
  }

  /**
   * Set the generator.
   */
  setGenerator () {
    this.projectDataJson.data['generator'] = ProjectData.generator
    this.patchProperties.push('generator')
  }

  /**
   * Get patch object.
   */
  getPatchObject () {
    return this.patchProperties.reduce((acc, property) => {
      acc[property] = this.projectDataJson.data[property]

      return acc
    }, {})
  }

  /**
   * Reset patch object.
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
   */
  setMuteMusic (muteMusic) {
    this.projectDataJson.data['muteMusic'] = muteMusic
    this.patchProperties.push('muteMusic')

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
   * @return {Object}
   */
  getScreen (index) {
    const screens = this.getScreens()

    if (typeof screens[index] !== 'undefined') {
      return screens[index]
    }
    throw new ScreenNotFoundError(`Screen with index: ${index} is not found.`)
  }

  /**
   * Gets payload data for partial update based on project id and patch object.
   * @return {{data: Object, projectId: number}}
   */
  getPayloadData () {
    const payloadData = {
      projectId: this.getProjectId(),
      data: this.getPatchObject()
    }
    this.resetPatchObject()

    return payloadData
  }

  /**
   * Pushes the given `screen` to `screens` array.
   * @param {Object} newScreen - The new screen to push.
   */
  pushScreen (newScreen) {
    if (!newScreen.hasOwnProperty('order')) {
      throw new MissingOrderError('Screen order property is missing.')
    }

    this.projectDataJson.data['screens'] = projectDataUtil.insertAndNormalizeOrder(this.getScreens(), newScreen)
    this.patchProperties.push('screens')

    return this
  }

  /**
   * Construct screen, adds methods to `screen` object.
   * @param {Object} screen
   * @returns {Object}
   */
  constructScreen (screen) {
    const {
      id, characterBasedDuration, compositionName, duration, extraVideoSecond, gifBigPath, gifPath, gifThumbnailPath,
      hidden, iconAdjustable, isFull, maxDuration, order, path, tags, title, type, areas
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
       * @return {Object}
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
       * @return {number}
       */
      calculateScreenDuration: () => screenDurationUtil.getScreenDuration(screen),
      /**
       * Filters ares to find only video ones.
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
          this.selectedDuration = duration
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

        this.iconAdjustable ^= 3
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

        this.lowerThirdStart = start
        this.lowerThirdDuration = duration
        return this
      }
    }
  }

  /**
   * Construct area.
   * @param {Object} area
   * @returns {Object}
   */
  constructArea (area) {
    const {
      id, fileName, height, width, value, cords, title, wordCount, originalHeight, originalWidth, order, type,
      mimeType, webpPath, fileType, thumbnailPath, imageCropParams, videoCropParams
    } = area

    const result = { id, height, width, value, cords, title, wordCount, order, type }

    result.getAreaType = () => area.type

    result.setText = (text) => {
      if (area.type !== 'text') {
        throw new NotTextAreaError(`Area with id: ${id} is not text.`)
      }
      area.value = text
      this.patchProperties.push('screens')
    }

    result.getRecommendedCharacterCount = () => {
      if (area.type !== 'text') {
        throw new NotTextAreaError(`Area with id: ${id} is not text.`)
      }
      return Math.floor(parseInt(wordCount) * AVERAGE_CHARS_IN_WORD)
    }

    result.setImage = (image) => {
      if (area.type !== 'image') {
        throw new NotImageAreaError(`Area with id: ${id} is not image.`)
      }
      Object.assign(result, {
        fileName, originalHeight, originalWidth, mimeType, webpPath, fileType, thumbnailPath, imageCropParams
      })
      ProjectData.setAreaImage(area, image)
      this.patchProperties.push('screens')
    }

    result.setVideo = (video) => {
      if (area.type !== 'video') {
        throw new NotVideoAreaError(`Area with id: ${id} is not video.`)
      }
      Object.assign(result, {
        fileName, originalHeight, originalWidth, mimeType, webpPath, fileType, thumbnailPath, videoCropParams
      })
      ProjectData.setAreaVideo(area, video)
      this.patchProperties.push('screens')
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
    const { fileName, mime, filePath, webpPath, fileType, thumbnailPath, imageCropParams } = image
    const { transform, top, left, width, height } = imageCropParams

    area.fileName = fileName
    area.mimeType = mime
    area.value = filePath
    area.webpPath = webpPath
    area.fileType = fileType
    area.thumbnailPath = thumbnailPath
    area.imageCropParams = { transform, top, left, width, height }
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

ProjectData.generator = `renderforest/sdk-node/${PackageJson.version}`

module.exports = ProjectData
