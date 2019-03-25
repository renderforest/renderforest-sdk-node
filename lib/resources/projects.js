/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const Api = require('../api')

const { API_PREFIX } = require('../config')

/**
 * @param {Object} [params] - The params to filter projects.
 * @returns {Promise.<Array>}
 */
const getProjects = (params) => {
  const { limit, offset, includeApiProjects, order, orderBy, search } = params
  const options = {
    endpoint: `${API_PREFIX}/projects`,
    qs: {
      limit,
      offset,
      includeApiProjects,
      order,
      orderBy,
      search
    }
  }
  return Api.authorizedRequest(options)
}

/**
 * @param {Object} templateId - The params to add project.
 * @returns {Promise.<Object>}
 */
const addProject = (templateId) => {
  const options = {
    method: 'POST',
    endpoint: `${API_PREFIX}/projects`,
    body: { templateId }
  }
  return Api.authorizedRequest(options)
}

/**
 * @param {Number} templateId - The params to get trial project.
 * @returns {Promise.<Object>}
 */
const getTrialProject = (templateId) => {
  const options = {
    endpoint: `${API_PREFIX}/projects/trial`,
    qs: { templateId }
  }
  return Api.unauthorizedRequest(options)
}

/**
 * @param {Object} projectId - The project id to get.
 * @returns {Promise.<Object>}
 */
const getProject = (projectId) => {
  const options = {
    endpoint: `${API_PREFIX}/projects/${projectId}`
  }
  return Api.authorizedRequest(options)
}

/**
 * @param {Number} projectId - The project id to update.
 * @param {Object} params - The params to update project.
 * @returns {Promise.<Object>}
 */
const updateProjectPartial = (projectId, params) => {
  const { customTitle, privacy } = params
  const options = {
    method: 'PATCH',
    endpoint: `${API_PREFIX}/projects/${projectId}`,
    body: {
      customTitle,
      privacy
    }
  }
  return Api.authorizedRequest(options)
}

/**
 * @param {Object} projectId - The project id to delete.
 * @returns {Promise.<Object>}
 */
const deleteProject = (projectId) => {
  const options = {
    method: 'DELETE',
    endpoint: `${API_PREFIX}/projects/${projectId}`
  }
  return Api.authorizedRequest(options)
}

/**
 * @param {Number} projectId - The project id to delete videos.
 * @param {Number} [quality] - The quality to delete videos (id it's not specified then removes all videos).
 * @returns {Promise.<Object>}
 */
const deleteProjectVideos = (projectId, quality = '') => {
  const options = {
    method: 'DELETE',
    endpoint: `${API_PREFIX}/projects/${projectId}/videos/${quality}`
  }
  return Api.authorizedRequest(options)
}

/**
 * @param {Number} projectId - The project id to apply on.
 * @param {Number} presetId - The preset id to apply.
 * @returns {Promise.<Object>}
 */
const applyTemplatePresetOnProject = (projectId, presetId) => {
  const options = {
    method: 'POST',
    endpoint: `${API_PREFIX}/projects/${projectId}/apply-template-preset`,
    body: { presetId }
  }
  return Api.authorizedRequest(options)
}

/**
 * @param {Number} projectId - The project to duplicate.
 * @returns {Promise.<Object>}
 */
const duplicateProject = (projectId) => {
  const options = {
    method: 'POST',
    endpoint: `${API_PREFIX}/projects/${projectId}/duplicate`
  }
  return Api.authorizedRequest(options)
}

/**
 * @param {Number} projectId - The project id to render.
 * @param {Object} params - The params to apply.
 * @returns {Promise.<Object>}
 */
const renderProject = (projectId, params) => {
  const { quality, watermark } = params
  const options = {
    method: 'POST',
    endpoint: `${API_PREFIX}/projects/${projectId}/render`,
    body: {
      quality,
      watermark
    }
  }
  return Api.authorizedRequest(options)
}

/**
 * @param {Function} callback - The callback function for handling render status result.
 */
const getRenderingStatus = (callback) => Api.socketConnection(callback)

module.exports = {
  getProject,
  addProject,
  getProjects,
  getTrialProject,
  updateProjectPartial,
  deleteProject,
  deleteProjectVideos,
  applyTemplatePresetOnProject,
  duplicateProject,
  renderProject,
  getRenderingStatus
}
