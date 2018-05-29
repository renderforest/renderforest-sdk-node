/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const Http = require('./http/http')

const Fonts = require('./resources/fonts')
const ProjectData = require('./resources/project-data')
const Projects = require('./resources/projects')
const Sounds = require('./resources/sounds')
const Supports = require('./resources/supports')
const Templates = require('./resources/templates')
const Users = require('./resources/users')

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
   * @param {Object} payload
   * @returns {Promise.<Object>}
   * @description Get Project-data.
   */
  getProjectData (payload) {
    return ProjectData.getProjectData(payload)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Object>}
   * @description Update Project-data (partial update)
   */
  updateProjectDataPartial (payload) {
    return ProjectData.updateProjectDataPartial(payload)
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
   * @description Get Trial Project.
   */
  static getTrialProject (payload) {
    return Projects.getTrialProject(payload)
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
   * @param {Object} payload
   * @returns {Promise.<Object>}
   * @description Render the Project.
   */
  renderProject (payload) {
    return Projects.renderProject(payload)
  }

  /**
   * @param {Object} [payload]
   * @returns {Promise.<Object>}
   * @description Get Sounds.
   */
  getSounds (payload) {
    return Sounds.getSounds(payload)
  }

  /**
   * @param {Object} [payload]
   * @returns {Promise.<Object>}
   * @description Get Recommended Sounds.
   */
  getRecommendedSounds (payload) {
    return Sounds.getRecommendedSounds(payload)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Object>}
   * @description Add Supports Ticket.
   */
  addSupportsTicket (payload) {
    return Supports.addSupportsTicket(payload)
  }

  /**
   * @returns {Promise.<Object>}
   * @description Get Current User.
   */
  getCurrentUser () {
    return Users.getCurrentUser()
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Array>}
   * @description Get Company Sounds (limited).
   */
  static getCompanySoundsLimited (payload) {
    return Sounds.getCompanySoundsLimited(payload)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Array>}
   * @description Get Recommended Sounds (limited).
   */
  static getRecommendedSoundsLimited (payload) {
    return Sounds.getRecommendedSoundsLimited(payload)
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
