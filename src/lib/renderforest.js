/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const Http = require('./http/http')

const Fonts = require('./resources/fonts')
const Projects = require('./resources/projects')
const Templates = require('./resources/templates')

class Renderforest {
  /**
   * @constructor
   * @param {Object} options
   * @param {string} options.signKey
   * @param {number} options.clientId
   */
  constructor (options) {
    Http.setConfig(options.signKey, options.clientId)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Array>}
   * @description Get All Fonts.
   */
  getFonts (payload) {
    return Fonts.getFonts(payload)
  }

  /**
   * @param {Object} [payload]
   * @returns {Promise.<Array>}
   * @description Get All Projects.
   */
  getProjects (payload) {
    return Projects.getProjects(payload)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Object>}
   * @description Add Project.
   */
  addProject (payload) {
    return Projects.addProject(payload)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Object>}
   * @description Update the Project (partial update).
   */
  updateProjectPartial (payload) {
    return Projects.updateProjectPartial(payload)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Object>}
   * @description Delete a Specific Project.
   */
  deleteProject (payload) {
    return Projects.deleteProject(payload)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Object>}
   * @description Apply Template Preset on the Project.
   */
  applyTemplatePresetOnProject (payload) {
    return Projects.applyTemplatePresetOnProject(payload)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Object>}
   * @description Duplicate the Project.
   */
  duplicateProject (payload) {
    return Projects.duplicateProject(payload)
  }

  /**
   * @param {Object} [payload]
   * @returns {Promise.<Array>}
   * @description Get All Templates.
   */
  static getTemplates (payload) {
    return Templates.getTemplates(payload)
  }

  /**
   * @param {Object} [payload]
   * @returns {Promise.<Array>}
   * @description Get Templates Categories.
   */
  static getTemplatesCategories (payload) {
    return Templates.getTemplatesCategories(payload)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Object>}
   * @description Get a Specific Template.
   */
  static getTemplate (payload) {
    return Templates.getTemplate(payload)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Array>}
   * @description Get Color-Presets of the Template.
   */
  static getTemplateColorPresets (payload) {
    return Templates.getTemplateColorPresets(payload)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Array>}
   * @description Get Pluggable-Screens of the Template.
   */
  static getTemplatePluggableScreens (payload) {
    return Templates.getTemplatePluggableScreens(payload)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Array>}
   * @description Get Recommended-Custom-Colors of the Template.
   */
  static getTemplateRecommendedCustomColors (payload) {
    return Templates.getTemplateRecommendedCustomColors(payload)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Array>}
   * @description Get Template-Presets of the Template.
   */
  static getTemplatePresets (payload) {
    return Templates.getTemplatePresets(payload)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Object>}
   * @description Get Template-Presets of the Template.
   */
  static getTemplateTheme (payload) {
    return Templates.getTemplateTheme(payload)
  }
}

module.exports = Renderforest
