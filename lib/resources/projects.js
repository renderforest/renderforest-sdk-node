/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const Api = require('../api')

const Params = require('../util/params')

const { API_PREFIX } = require('../config')

/**
 * Get All Projects.
 * @param {Object} [payload]
 * @returns {Promise.<Array>}
 */
const getProjects = (payload) => {
  const qs = Params.destructParams(payload,
    ['limit', 'offset', 'includeApiProjects', 'order', 'orderBy', 'search'])

  const options = {
    endpoint: `${API_PREFIX}/projects`,
    qs
  }
  return Api.authorizedRequest(options)
}

/**
 * Add Project.
 * @param {Object} payload
 * @returns {Promise.<Object>}
 */
const addProject = (payload) => {
  const body = Params.destructParams(payload, ['templateId'])

  const options = {
    method: 'POST',
    endpoint: `${API_PREFIX}/projects`,
    body
  }
  return Api.authorizedRequest(options)
}

/**
 * Get Trial Project.
 * @param {Object} payload
 * @returns {Promise.<Object>}
 */
const getTrialProject = (payload) => {
  const qs = Params.destructParams(payload, ['templateId'])

  const options = {
    endpoint: `${API_PREFIX}/projects/trial`,
    qs
  }
  return Api.unauthorizedRequest(options)
}

/**
 * Get a Specific Project.
 * @param {Object} payload
 * @returns {Promise.<Object>}
 */
const getProject = (payload) => {
  const projectId = Params.destructURLParam(payload, 'projectId')

  const options = {
    endpoint: `${API_PREFIX}/projects/${projectId}`
  }
  return Api.authorizedRequest(options)
}

/**
 * Update the Project (partial update).
 * @param {Object} payload
 * @returns {Promise.<Object>}
 */
const updateProjectPartial = (payload) => {
  const body = Params.destructParams(payload, ['customTitle'])
  const projectId = Params.destructURLParam(payload, 'projectId')

  const options = {
    method: 'PATCH',
    endpoint: `${API_PREFIX}/projects/${projectId}`,
    body
  }
  return Api.authorizedRequest(options)
}

/**
 * Delete a Specific Project.
 * @param {Object} payload
 * @returns {Promise.<Object>}
 */
const deleteProject = (payload) => {
  const projectId = Params.destructURLParam(payload, 'projectId')

  const options = {
    method: 'DELETE',
    endpoint: `${API_PREFIX}/projects/${projectId}`
  }
  return Api.authorizedRequest(options)
}

/**
 * Delete Specific Project Videos.
 * @param {Object} payload
 * @returns {Promise.<Object>}
 */
const deleteProjectVideos = (payload) => {
  const projectId = Params.destructURLParam(payload, 'projectId')
  const quality = Params.destructOptionalURLParam(payload, 'quality')

  const options = {
    method: 'DELETE',
    endpoint: `${API_PREFIX}/projects/${projectId}/videos/${quality}`
  }
  return Api.authorizedRequest(options)
}

/**
 * Apply Template Preset on the Project.
 * @param {Object} payload
 * @returns {Promise.<Object>}
 */
const applyTemplatePresetOnProject = (payload) => {
  const body = Params.destructParams(payload, ['presetId'])
  const projectId = Params.destructURLParam(payload, 'projectId')

  const options = {
    method: 'POST',
    endpoint: `${API_PREFIX}/projects/${projectId}/apply-template-preset`,
    body
  }
  return Api.authorizedRequest(options)
}

/**
 * Duplicate the Project.
 * @param {Object} payload
 * @returns {Promise.<Object>}
 */
const duplicateProject = (payload) => {
  const projectId = Params.destructURLParam(payload, 'projectId')

  const options = {
    method: 'POST',
    endpoint: `${API_PREFIX}/projects/${projectId}/duplicate`
  }
  return Api.authorizedRequest(options)
}

/**
 * Render the Project.
 * @param {Object} payload
 * @returns {Promise.<Object>}
 */
const renderProject = (payload) => {
  const body = Params.destructParams(payload, ['quality', 'watermark'])
  const projectId = Params.destructURLParam(payload, 'projectId')

  const options = {
    method: 'POST',
    endpoint: `${API_PREFIX}/projects/${projectId}/render`,
    body
  }
  return Api.authorizedRequest(options)
}

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
  renderProject
}
