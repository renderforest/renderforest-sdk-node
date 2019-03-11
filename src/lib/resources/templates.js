/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const ApiRequest = require('../request/api')
const WebRequest = require('../request/web')

const Params = require('../../util/params')

const { API_PREFIX, WEB_PREFIX } = require('../../config')

class Templates {
  /**
   * @param {Object} [payload]
   * @returns {Promise.<Array>}
   * @description Get All Templates.
   */
  static getTemplates (payload) {
    const qs = Params.destructParams(payload, ['categoryId', 'equalizer', 'limit', 'offset'])

    const options = {
      endpoint: `${API_PREFIX}/templates`,
      qs
    }
    return ApiRequest.unauthorizedRequest(options)
  }

  /**
   * @param {Object} [payload]
   * @returns {Promise.<Array>}
   * @description Get Templates Categories.
   */
  static getTemplatesCategories (payload) {
    const qs = Params.destructParams(payload, ['language'])

    const options = {
      endpoint: `${API_PREFIX}/templates/categories`,
      qs
    }
    return ApiRequest.unauthorizedRequest(options)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Object>}
   * @description Get a Specific Template.
   */
  static getTemplate (payload) {
    const qs = Params.destructParams(payload, ['language'])
    const templateId = Params.destructURLParam(payload, 'templateId')

    const options = {
      endpoint: `${WEB_PREFIX}${API_PREFIX}/templates/${templateId}`,
      qs
    }
    return ApiRequest.unauthorizedRequest(options)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Array>}
   * @description Get Color-Presets of the Template.
   */
  static getTemplateColorPresets (payload) {
    const templateId = Params.destructURLParam(payload, 'templateId')

    const options = {
      endpoint: `${API_PREFIX}/templates/${templateId}/color-presets`
    }
    return ApiRequest.unauthorizedRequest(options)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Array>}
   * @description Get Pluggable-Screens of the Template.
   */
  static getTemplatePluggableScreens (payload) {
    const templateId = Params.destructURLParam(payload, 'templateId')

    const options = {
      endpoint: `${API_PREFIX}/templates/${templateId}/pluggable-screens`
    }
    return ApiRequest.unauthorizedRequest(options)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Array>}
   * @description Get Recommended-Custom-Colors of the Template.
   */
  static getTemplateRecommendedCustomColors (payload) {
    const templateId = Params.destructURLParam(payload, 'templateId')

    const options = {
      endpoint: `${API_PREFIX}/templates/${templateId}/recommended-custom-colors`
    }
    return ApiRequest.unauthorizedRequest(options)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Array>}
   * @description Get Template-Presets of the Template.
   */
  static getTemplatePresets (payload) {
    const templateId = Params.destructURLParam(payload, 'templateId')

    const options = {
      endpoint: `${API_PREFIX}/templates/${templateId}/template-presets`
    }
    return ApiRequest.unauthorizedRequest(options)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<>}
   * @description Get Template-SVG-Content of the Template.
   */
  static getTemplateSVGContent (payload) {
    const templateId = Params.destructURLParam(payload, 'templateId')

    const options = {
      endpoint: `${WEB_PREFIX}/templates/termplatesvg/${templateId}`
    }

    return WebRequest.request(options)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Object>}
   * @description Get Theme of the Template.
   */
  static getTemplateTheme (payload) {
    const templateId = Params.destructURLParam(payload, 'templateId')

    const options = {
      endpoint: `${API_PREFIX}/templates/${templateId}/theme`
    }
    return ApiRequest.unauthorizedRequest(options)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Object>}
   * @description Get Transitions of the Template.
   */
  static getTemplateTransitions (payload) {
    const templateId = Params.destructURLParam(payload, 'templateId')

    const options = {
      endpoint: `${API_PREFIX}/templates/${templateId}/transitions`
    }
    return ApiRequest.unauthorizedRequest(options)
  }
}

module.exports = Templates
