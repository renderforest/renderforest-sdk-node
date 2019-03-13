/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const ApiRequest = require('./api')

const ProjectData = require('./resources/project-data')
const Projects = require('./resources/projects')
const Sounds = require('./resources/sounds')
const Supports = require('./resources/supports')
const Templates = require('./resources/templates')
const Users = require('./resources/users')

class RenderforestClient {
  /**
   * @constructor
   * @param {Object} options
   * @param {string} options.signKey
   * @param {number} options.clientId
   */
  constructor (options) {
    ApiRequest.setConfig(options.signKey, options.clientId)
  }

  /**
   * Get Project-data.
   * @param {Object} payload
   * @returns {Promise.<Object>}
   */
  getProjectData (payload) {
    return ProjectData.getProjectData(payload)
  }

  /**
   * Update Project-data (partial update)
   * @param {Object} payload
   * @returns {Promise.<Object>}
   */
  updateProjectDataPartial (payload) {
    return ProjectData.updateProjectDataPartial(payload)
  }

  /**
   * Get All Projects.
   * @param {Object} [payload]
   * @returns {Promise.<Array>}
   */
  getProjects (payload) {
    return Projects.getProjects(payload)
  }

  /**
   * Add Project.
   * @param {Object} payload
   * @returns {Promise.<Object>}
   */
  addProject (payload) {
    return Projects.addProject(payload)
  }

  /**
   * Get Trial Project.
   * @param {Object} payload
   * @returns {Promise.<Object>}
   */
  static getTrialProject (payload) {
    return Projects.getTrialProject(payload)
  }

  /**
   * Get a Specific Project.
   * @param {Object} payload
   * @returns {Promise.<Object>}
   */
  getProject (payload) {
    return Projects.getProject(payload)
  }

  /**
   * Update the Project (partial update).
   * @param {Object} payload
   * @returns {Promise.<Object>}
   */
  updateProjectPartial (payload) {
    return Projects.updateProjectPartial(payload)
  }

  /**
   * Delete a Specific Project.
   * @param {Object} payload
   * @returns {Promise.<Object>}
   */
  deleteProject (payload) {
    return Projects.deleteProject(payload)
  }

  /**
   * Delete Specific Project Videos.
   * @param {Object} payload
   * @returns {Promise.<Object>}
   */
  deleteProjectVideos (payload) {
    return Projects.deleteProjectVideos(payload)
  }

  /**
   * Apply Template Preset on the Project.
   * @param {Object} payload
   * @returns {Promise.<Object>}
   */
  applyTemplatePresetOnProject (payload) {
    return Projects.applyTemplatePresetOnProject(payload)
  }

  /**
   * Duplicate the Project.
   * @param {Object} payload
   * @returns {Promise.<Object>}
   */
  duplicateProject (payload) {
    return Projects.duplicateProject(payload)
  }

  /**
   * Render the Project.
   * @param {Object} payload
   * @returns {Promise.<Object>}
   */
  renderProject (payload) {
    return Projects.renderProject(payload)
  }

  /**
   * Get Sounds.
   * @param {Object} [payload]
   * @returns {Promise.<Object>}
   */
  getSounds (payload) {
    return Sounds.getSounds(payload)
  }

  /**
   * Get Recommended Sounds.
   * @param {Object} [payload]
   * @returns {Promise.<Object>}
   */
  getRecommendedSounds (payload) {
    return Sounds.getRecommendedSounds(payload)
  }

  /**
   * Add Supports Ticket.
   * @param {Object} payload
   * @returns {Promise.<Object>}
   */
  addSupportsTicket (payload) {
    return Supports.addSupportsTicket(payload)
  }

  /**
   * Get Current User.
   * @returns {Promise.<Object>}
   */
  getCurrentUser () {
    return Users.getCurrentUser()
  }

  /**
   * Get Company Sounds (limited).
   * @param {Object} payload
   * @returns {Promise.<Array>}
   */
  static getCompanySoundsLimited (payload) {
    return Sounds.getCompanySoundsLimited(payload)
  }

  /**
   * Get Recommended Sounds (limited).
   * @param {Object} payload
   * @returns {Promise.<Array>}
   */
  static getRecommendedSoundsLimited (payload) {
    return Sounds.getRecommendedSoundsLimited(payload)
  }

  /**
   * Get All Templates.
   * @param {Object} payload
   * @returns {Promise.<Array>}
   */
  static getTemplates (payload) {
    return Templates.getTemplates(payload)
  }

  /**
   * Get Templates Categories.
   * @param {Object} payload
   * @returns {Promise.<Array>}
   */
  static getTemplatesCategories (payload) {
    return Templates.getTemplatesCategories(payload)
  }

  /**
   * Get a Specific Template.
   * @param {Object} payload
   * @returns {Promise.<Object>}
   */
  static getTemplate (payload) {
    return Templates.getTemplate(payload)
  }

  /**
   * Get Color-Presets of the Template.
   * @param {Object} payload
   * @returns {Promise.<Array>}
   */
  static getTemplateColorPresets (payload) {
    return Templates.getTemplateColorPresets(payload)
  }

  /**
   * Get Pluggable-Screens of the Template.
   * @param {Object} payload
   * @returns {Promise.<Array>}
   */
  static getTemplatePluggableScreens (payload) {
    return Templates.getTemplatePluggableScreens(payload)
  }

  /**
   * Get Recommended-Custom-Colors of the Template.
   * @param {Object} payload
   * @returns {Promise.<Array>}
   */
  static getTemplateRecommendedCustomColors (payload) {
    return Templates.getTemplateRecommendedCustomColors(payload)
  }

  /**
   * Get Template-SVG-Content of the Template.
   * @param {Object} payload
   * @returns {Promise.<Array>}
   */
  static getTemplateSVGContent (payload) {
    return Templates.getTemplateSVGContent(payload)
  }

  /**
   * Get Template-Presets of the Template.
   * @param {Object} payload
   * @returns {Promise.<Array>}
   */
  static getTemplatePresets (payload) {
    return Templates.getTemplatePresets(payload)
  }

  /**
   * Get Template-Theme of the Template.
   * @param {Object} payload
   * @returns {Promise.<Object>}
   */
  static getTemplateTheme (payload) {
    return Templates.getTemplateTheme(payload)
  }

  /**
   * Get Template-Transitions of the Template.
   * @param {Object} payload
   * @returns {Promise.<Object>}
   */
  static getTemplateTransitions (payload) {
    return Templates.getTemplateTransitions(payload)
  }
}

module.exports = RenderforestClient
