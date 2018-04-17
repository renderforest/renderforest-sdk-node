/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const PackageJson = require('../../package.json')

class ProjectData {
  /**
   * @constructor
   * @param {Object} projectDataJson
   */
  constructor (projectDataJson) {
    this.projectDataJson = projectDataJson
    this.setGenerator()
  }

  /**
   * @description Set the generator.
   */
  setGenerator () {
    this.projectDataJson.data['generator'] = ProjectData.generator
  }

  /**
   * @returns {Object}
   * @description Get the raw data.
   */
  getRawData () {
    return Object.assign({}, this.projectDataJson)
  }

  /**
   * @returns {number}
   * @description Get the project id.
   */
  getProjectId () {
    return this.projectDataJson.projectId
  }

  /**
   * @returns {number}
   * @description Get the template id.
   */
  getTemplateId () {
    return this.projectDataJson.data['templateId']
  }

  /**
   * @returns {boolean}
   * @description Check whether is equalizer or not.
   */
  isEqualizer () {
    return this.projectDataJson.data['equalizer']
  }

  /**
   * @returns {boolean}
   * @description Check whether is lego or not.
   */
  isLego () {
    return this.projectDataJson.data['isLego']
  }

  /**
   * @returns {boolean}
   * @description Get the project muteMusic property.
   */
  getMuteMusic () {
    return this.projectDataJson.data['muteMusic']
  }

  /**
   * @param {boolean} muteMusic
   * @description Set the project muteMusic property.
   */
  setMuteMusic (muteMusic) {
    this.projectDataJson.data['muteMusic'] = muteMusic
  }

  /**
   * @returns {Array}
   * @description Get the project colors.
   */
  getProjectColors () {
    return this.projectDataJson.data['projectColors']
  }

  /**
   * @param {Array} projectColors
   * @description Set the project colors.
   */
  setProjectColors (projectColors) {
    this.projectDataJson.data['projectColors'] = projectColors
  }

  /**
   * @returns {Object}
   * @description Get the project theme.
   */
  getTheme () {
    return {
      themeVariableName: this.projectDataJson.data['themeVariableName'],
      themeVariableValue: this.projectDataJson.data['themeVariableValue']
    }
  }

  /**
   * @param {Object} payload
   * @param {string} payload.themeVariableName
   * @param {string} payload.themeVariableValue
   * @description Set the project theme.
   */
  setTheme (payload) {
    this.projectDataJson.data['themeVariableName'] = payload.themeVariableName
    this.projectDataJson.data['themeVariableValue'] = payload.themeVariableValue
  }

  /**
   * @returns {Array}
   * @description Get the project sounds.
   */
  getSounds () {
    return this.projectDataJson.data['sounds']
  }

  /**
   * @param {Array} sounds
   * @description Set the project sounds.
   */
  setSounds (sounds) {
    this.projectDataJson.data['sounds'] = sounds
  }

  /**
   * @returns {string}
   * @description Get the project title.
   */
  getTitle () {
    return this.projectDataJson.data['title']
  }

  /**
   * @returns {Array}
   * @description Get screens (add methods on screens & screen areas).
   */
  getScreens () {
    const screens = this.projectDataJson.data['screens']
    return screens.map((screen) => {
      return this.constructScreen(screen)
    })
  }

  /**
   * @param {Object} screen
   * @returns {Object}
   * @description Construct screen.
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
      getAreas: () => {
        return areas.map((area) => {
          return this.constructArea(area)
        })
      }
    }
  }

  /**
   * @param {Object} area
   * @returns {Object}
   * @description Construct area.
   */
  constructArea (area) {
    const {
      id, fileName, height, width, value, cords, title, wordCount, originalHeight, originalWidth, order, type,
      mimeType, webpPath, fileType, thumbnailPath, imageCropParams, videoCropParams
    } = area

    const result = { id, height, width, value, cords, title, wordCount, order, type }

    if (area.type === 'text') {
      result.setText = (text) => {
        area.value = text
      }
    }

    if (area.type === 'image') {
      Object.assign(result, {
        fileName, originalHeight, originalWidth, mimeType, webpPath, fileType, thumbnailPath, imageCropParams
      })
      result.setImage = (image) => {
        ProjectData.setAreaImage(area, image)
      }
    }

    if (area.type === 'video') {
      Object.assign(result, {
        fileName, originalHeight, originalWidth, mimeType, webpPath, fileType, thumbnailPath, videoCropParams
      })
      result.setVideo = (video) => {
        ProjectData.setAreaVideo(area, video)
      }
    }

    return result
  }

  /**
   * @param {Object} area
   * @param {{fileName, mime, filePath, webpPath, fileType, thumbnailPath, imageCropParams}} image
   * @param {{transform, top, left, width, height}} image.imageCropParams
   * @description Set image on area.
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
    area.imageCropParams = {
      transform: `rotate(${transform}deg)`,
      top: `${top}px`,
      left: `${left}px`,
      width,
      height
    }
  }

  /**
   * @param {Object} area
   * @param {{fileName, mime, filePath, webpPath, fileType, videoCropParams}} video
   * @param {{duration, end, mime, start, stockFootageId, thumbnail, thumbnailVideo, videoVoiceTreatment}} video.videoCropParams
   * @description Set video on area.
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
