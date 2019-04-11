/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const Api = require('./api')

const Fonts = require('./resources/fonts')
const ProjectData = require('./resources/project-data')
const Projects = require('./resources/projects')
const Sounds = require('./resources/sounds')
const Supports = require('./resources/supports')
const Templates = require('./resources/templates')
const Users = require('./resources/users')

class RenderforestClient {
  /**
   * @param {Object} options
   */
  constructor (options) {
    Api.setConfig(options.signKey, options.clientId)
  }

  /**
   * @param {Number} templateId
   * @return {Promise.<Array>}
   */
  getTemplateAvailableFonts (templateId) {
    return Fonts.getTemplateAvailableFonts(templateId)
  }

  /**
   * @param {Object} projectId
   * @returns {Promise.<Object>}
   */
  getProjectData (projectId) {
    return ProjectData.getProjectData(projectId)
  }

  /**
   * @param {Object} [params]
   * @returns {Promise.<Array>}
   */
  getProjects (params) {
    return Projects.getProjects(params)
  }

  /**
   * @param {Object} templateId
   * @returns {Promise.<Object>}
   */
  addProject (templateId) {
    return Projects.addProject(templateId)
  }

  /**
   * @param {Number} templateId
   * @returns {Promise.<Object>}
   */
  static getTrialProject (templateId) {
    return Projects.getTrialProject(templateId)
  }

  /**
   * @param {Object} projectId
   * @returns {Promise.<Object>}
   */
  getProject (projectId) {
    return Projects.getProject(projectId)
  }

  /**
   * @param {Number} projectId
   * @param {Object} params
   * @returns {Promise.<Object>}
   */
  updateProjectPartial (projectId, params) {
    return Projects.updateProjectPartial(projectId, params)
  }

  /**
   * @param {Object} projectId
   * @returns {Promise.<Object>}
   */
  deleteProject (projectId) {
    return Projects.deleteProject(projectId)
  }

  /**
   * @param {Number} projectId
   * @param {Number} [quality]
   * @returns {Promise.<Object>}
   */
  deleteProjectVideos (projectId, quality) {
    return Projects.deleteProjectVideos(projectId, quality)
  }

  /**
   * @param {Number} projectId
   * @param {Number} presetId
   * @returns {Promise.<Object>}
   */
  applyTemplatePresetOnProject (projectId, presetId) {
    return Projects.applyTemplatePresetOnProject(projectId, presetId)
  }

  /**
   * @param {Number} projectId
   * @returns {Promise.<Object>}
   */
  duplicateProject (projectId) {
    return Projects.duplicateProject(projectId)
  }

  /**
   * @param {Number} projectId
   * @param {Object} params
   * @returns {Promise.<Object>}
   */
  renderProject (projectId, params) {
    return Projects.renderProject(projectId, params)
  }

  /**
   * @param {Function} callback
   * @return {WebSocket}
   */
  getRenderingStatus (callback) {
    return Projects.getRenderingStatus(callback)
  }

  /**
   * @param {Object} params
   * @returns {Promise.<Object>}
   */
  getSounds (params) {
    return Sounds.getSounds(params)
  }

  /**
   * @param {Number} templateId
   * @param {Object} [params]
   * @returns {Promise.<Object>}
   */
  getRecommendedSounds (templateId, params) {
    return Sounds.getRecommendedSounds(templateId, params)
  }

  /**
   * @param {Object} params
   * @returns {Promise.<Object>}
   */
  addSupportsTicket (params) {
    return Supports.addSupportsTicket(params)
  }

  /**
   * @returns {Promise.<Object>}
   */
  getCurrentUser () {
    return Users.getCurrentUser()
  }

  /**
   * @param {Object} params
   * @returns {Promise.<Array>}
   */
  static getCompanySoundsLimited (params) {
    return Sounds.getCompanySoundsLimited(params)
  }

  /**
   * @param {Number} templateId
   * @param {Object} params
   * @returns {Promise.<Array>}
   */
  static getRecommendedSoundsLimited (templateId, params) {
    return Sounds.getRecommendedSoundsLimited(templateId, params)
  }

  /**
   * @param {Object} params
   * @returns {Promise.<Array>}
   */
  static getTemplates (params) {
    return Templates.getTemplates(params)
  }

  /**
   * @param {Object} params
   * @returns {Promise.<Array>}
   */
  static getTemplatesCategories (params) {
    return Templates.getTemplatesCategories(params)
  }

  /**
   * @param {Number} templateId
   * @param {Object} params
   * @returns {Promise.<Object>}
   */
  static getTemplate (templateId, params) {
    return Templates.getTemplate(templateId, params)
  }

  /**
   * @param {Number} templateId
   * @returns {Promise.<Array>}
   */
  static getTemplateColorPresets (templateId) {
    return Templates.getTemplateColorPresets(templateId)
  }

  /**
   * @param {Number} templateId
   * @returns {Promise.<Array>}
   */
  static getTemplatePluggableScreens (templateId) {
    return Templates.getTemplatePluggableScreens(templateId)
  }

  /**
   * @param {Number} templateId
   * @returns {Promise.<Array>}
   */
  static getTemplateRecommendedCustomColors (templateId) {
    return Templates.getTemplateRecommendedCustomColors(templateId)
  }

  /**
   * @param {Number} templateId
   * @returns {Promise.<Array>}
   */
  static getTemplateSVGContent (templateId) {
    return Templates.getTemplateSVGContent(templateId)
  }

  /**
   * @param {Number} templateId
   * @returns {Promise.<Array>}
   */
  static getTemplatePresets (templateId) {
    return Templates.getTemplatePresets(templateId)
  }

  /**
   * @param {Number} templateId
   * @returns {Promise.<Object>}
   */
  static getTemplateTheme (templateId) {
    return Templates.getTemplateTheme(templateId)
  }

  /**
   * @param {Number} templateId
   * @returns {Promise.<Object>}
   */
  static getTemplateTransitions (templateId) {
    return Templates.getTemplateTransitions(templateId)
  }
}

module.exports = RenderforestClient
