/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const Api = require('../api')

const Params = require('../util/params')

const { API_PREFIX, WEB_PREFIX } = require('../config')

/**
 * Get All Templates.
 * @param {Object} [payload]
 * @returns {Promise.<Array>}
 */
const getTemplates = (payload) => {
  const qs = Params.destructParams(payload, ['categoryId', 'equalizer', 'limit', 'offset'])

  const options = {
    endpoint: `${API_PREFIX}/templates`,
    qs
  }
  return Api.unauthorizedRequest(options)
}

/**
 * Get Templates Categories.
 * @param {Object} [payload]
 * @returns {Promise.<Array>}
 */
const getTemplatesCategories = (payload) => {
  const qs = Params.destructParams(payload, ['language'])

  const options = {
    endpoint: `${API_PREFIX}/templates/categories`,
    qs
  }
  return Api.unauthorizedRequest(options)
}

/**
 * Get a Specific Template.
 * @param {Object} payload
 * @returns {Promise.<Object>}
 */
const getTemplate = (payload) => {
  const qs = Params.destructParams(payload, ['language'])
  const templateId = Params.destructURLParam(payload, 'templateId')

  const options = {
    endpoint: `${WEB_PREFIX}${API_PREFIX}/templates/${templateId}`,
    qs
  }
  return Api.unauthorizedRequest(options)
}

/**
 * Get Color-Presets of the Template.
 * @param {Object} payload
 * @returns {Promise.<Array>}
 */
const getTemplateColorPresets = (payload) => {
  const templateId = Params.destructURLParam(payload, 'templateId')

  const options = {
    endpoint: `${API_PREFIX}/templates/${templateId}/color-presets`
  }
  return Api.unauthorizedRequest(options)
}

/**
 * Get Pluggable-Screens of the Template.
 * @param {Object} payload
 * @returns {Promise.<Array>}
 */
const getTemplatePluggableScreens = (payload) => {
  const templateId = Params.destructURLParam(payload, 'templateId')

  const options = {
    endpoint: `${API_PREFIX}/templates/${templateId}/pluggable-screens`
  }
  return Api.unauthorizedRequest(options)
}

/**
 * Get Recommended-Custom-Colors of the Template.
 * @param {Object} payload
 * @returns {Promise.<Array>}
 */
const getTemplateRecommendedCustomColors = (payload) => {
  const templateId = Params.destructURLParam(payload, 'templateId')

  const options = {
    endpoint: `${API_PREFIX}/templates/${templateId}/recommended-custom-colors`
  }
  return Api.unauthorizedRequest(options)
}

/**
 * Get Template-Presets of the Template.
 * @param {Object} payload
 * @returns {Promise.<Array>}
 */
const getTemplatePresets = (payload) => {
  const templateId = Params.destructURLParam(payload, 'templateId')

  const options = {
    endpoint: `${API_PREFIX}/templates/${templateId}/template-presets`
  }
  return Api.unauthorizedRequest(options)
}

/**
 * Get Template-SVG-Content of the Template.
 * @param {Object} payload
 * @returns {Promise.<>}
 */
const getTemplateSVGContent = (payload) => {
  const templateId = Params.destructURLParam(payload, 'templateId')

  const options = {
    endpoint: `${WEB_PREFIX}/templates/termplatesvg/${templateId}`
  }

  return Api.webRequest(options)
}

/**
 * Get Theme of the Template.
 * @param {Object} payload
 * @returns {Promise.<Object>}
 */
const getTemplateTheme = (payload) => {
  const templateId = Params.destructURLParam(payload, 'templateId')

  const options = {
    endpoint: `${API_PREFIX}/templates/${templateId}/theme`
  }
  return Api.unauthorizedRequest(options)
}

/**
 * Get Transitions of the Template.
 * @param {Object} payload
 * @returns {Promise.<Object>}
 */
const getTemplateTransitions = (payload) => {
  const templateId = Params.destructURLParam(payload, 'templateId')

  const options = {
    endpoint: `${API_PREFIX}/templates/${templateId}/transitions`
  }
  return Api.unauthorizedRequest(options)
}

module.exports = {
  getTemplates,
  getTemplatesCategories,
  getTemplate,
  getTemplateColorPresets,
  getTemplatePluggableScreens,
  getTemplateRecommendedCustomColors,
  getTemplatePresets,
  getTemplateSVGContent,
  getTemplateTheme,
  getTemplateTransitions
}