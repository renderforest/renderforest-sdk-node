/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const Api = require('../api')

const { API_PREFIX, WEB_PREFIX } = require('../config')

/**
 * @param {Object} [params] - The params to get templates.
 * @returns {Promise.<Array>}
 */
const getTemplates = (params) => {
  const { categoryId, equalizer, limit, offset } = params

  const options = {
    endpoint: `${API_PREFIX}/templates`,
    qs: {
      categoryId,
      equalizer,
      limit,
      offset
    }
  }
  return Api.unauthorizedRequest(options)
}

/**
 * @param {Object} [params] - The params to get template categories.
 * @returns {Promise.<Array>}
 */
const getTemplatesCategories = (params) => {
  const { language } = params
  const options = {
    endpoint: `${API_PREFIX}/templates/categories`,
    qs: { language }
  }
  return Api.unauthorizedRequest(options)
}

/**
 * @param {Number} templateId - The template id to get.
 * @param {Object} params - The params for template.
 * @returns {Promise.<Object>}
 */
const getTemplate = (templateId, params) => {
  const { language } = params
  const options = {
    endpoint: `${WEB_PREFIX}${API_PREFIX}/templates/${templateId}`,
    qs: { language }
  }
  return Api.unauthorizedRequest(options)
}

/**
 * @param {Number} templateId - The template id to get color presets.
 * @returns {Promise.<Array>}
 */
const getTemplateColorPresets = (templateId) => {
  const options = {
    endpoint: `${API_PREFIX}/templates/${templateId}/color-presets`
  }
  return Api.unauthorizedRequest(options)
}

/**
 * @param {Number} templateId - The template id to get pluggable screens.
 * @returns {Promise.<Array>}
 */
const getTemplatePluggableScreens = (templateId) => {
  const options = {
    endpoint: `${API_PREFIX}/templates/${templateId}/pluggable-screens`
  }
  return Api.unauthorizedRequest(options)
}

/**
 * @param {Number} templateId - The template id to get recommended custom colors.
 * @returns {Promise.<Array>}
 */
const getTemplateRecommendedCustomColors = (templateId) => {
  const options = {
    endpoint: `${API_PREFIX}/templates/${templateId}/recommended-custom-colors`
  }
  return Api.unauthorizedRequest(options)
}

/**
 * @param {Number} templateId - The template id to get presets.
 * @returns {Promise.<Array>}
 */
const getTemplatePresets = (templateId) => {
  const options = {
    endpoint: `${API_PREFIX}/templates/${templateId}/template-presets`
  }
  return Api.unauthorizedRequest(options)
}

/**
 * @param {Number} templateId - The template id to get svg content.
 * @returns {Promise.<>}
 */
const getTemplateSVGContent = (templateId) => {
  const options = {
    endpoint: `${WEB_PREFIX}/templates/termplatesvg/${templateId}`
  }
  return Api.webRequest(options)
}

/**
 * @param {Number} templateId - The template id to get theme.
 * @returns {Promise.<Object>}
 */
const getTemplateTheme = (templateId) => {
  const options = {
    endpoint: `${API_PREFIX}/templates/${templateId}/theme`
  }
  return Api.unauthorizedRequest(options)
}

/**
 * @param {Number} templateId - The template id to get transitions.
 * @returns {Promise.<Object>}
 */
const getTemplateTransitions = (templateId) => {
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
