/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const Http = require('../http/http')

const Params = require('../../util/params')

class Templates {
  /**
   * @param {Object} [payload]
   * @returns {Promise.<Array>}
   * @description Get All Templates.
   */
  static getTemplates (payload) {
    const qs = Params.destructParams(payload, ['categoryId', 'equalizer', 'limit', 'offset'])

    const options = {
      endpoint: `${Templates.API_PREFIX}/templates`,
      qs
    }
    return Http.unauthorizedRequest(options)
  }

  /**
   * @param {Object} [payload]
   * @returns {Promise.<Array>}
   * @description Get Templates Categories.
   */
  static getTemplatesCategories (payload) {
    const qs = Params.destructParams(payload, ['language'])

    const options = {
      endpoint: `${Templates.API_PREFIX}/templates/categories`,
      qs
    }
    return Http.unauthorizedRequest(options)
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
      endpoint: `${Templates.API_PREFIX}/templates/${templateId}`,
      qs
    }
    return Http.unauthorizedRequest(options)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Array>}
   * @description Get Color-Presets of the Template.
   */
  static getTemplateColorPresets (payload) {
    const templateId = Params.destructURLParam(payload, 'templateId')

    const options = {
      endpoint: `${Templates.API_PREFIX}/templates/${templateId}/color-presets`
    }
    return Http.unauthorizedRequest(options)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Array>}
   * @description Get Pluggable-Screens of the Template.
   */
  static getTemplatePluggableScreens (payload) {
    const templateId = Params.destructURLParam(payload, 'templateId')

    const options = {
      endpoint: `${Templates.API_PREFIX}/templates/${templateId}/pluggable-screens`
    }
    return Http.unauthorizedRequest(options)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Array>}
   * @description Get Recommended-Custom-Colors of the Template.
   */
  static getTemplateRecommendedCustomColors (payload) {
    const templateId = Params.destructURLParam(payload, 'templateId')

    const options = {
      endpoint: `${Templates.API_PREFIX}/templates/${templateId}/recommended-custom-colors`
    }
    return Http.unauthorizedRequest(options)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Array>}
   * @description Get Template-Presets of the Template.
   */
  static getTemplatePresets (payload) {
    const templateId = Params.destructURLParam(payload, 'templateId')

    const options = {
      endpoint: `${Templates.API_PREFIX}/templates/${templateId}/template-presets`
    }
    return Http.unauthorizedRequest(options)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Object>}
   * @description Get Theme of the Template.
   */
  static getTemplateTheme (payload) {
    const templateId = Params.destructURLParam(payload, 'templateId')

    const options = {
      endpoint: `${Templates.API_PREFIX}/templates/${templateId}/theme`
    }
    return Http.unauthorizedRequest(options)
  }
}

Templates.API_PREFIX = '/api/v1'

module.exports = Templates
