/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const Api = require('../api')

const ProjectData = require('../project-data')

const Params = require('../util/params')

const { PROJECT_DATA_API_PREFIX, API_PREFIX } = require('../config')

/**
 * @param {Number} projectId - The project id to update data.
 * @param {Object} params - The params to update data.
 * @returns {Promise.<Object>}
 */
const updateProjectDataPartial = (projectId, params) => {
  const body = Params.destructParams(params, ['data'])
  const options = {
    method: 'PATCH',
    endpoint: `${PROJECT_DATA_API_PREFIX}/project-data/${projectId}`,
    body
  }
  return Api.authorizedRequest(options)
}

/**
 * @param {Object} projectId - The project id to get data.
 * @returns {Promise.<Object>}
 */
const getProjectData = (projectId) => {
  const options = {
    endpoint: `${PROJECT_DATA_API_PREFIX}/project-data/${projectId}`
  }
  return Api.authorizedRequest(options).then(
    (projectDataInstance) => new ProjectData(projectDataInstance, updateProjectDataPartial)
  )
}

/**
 * @param {Object} data
 * @returns {Promise.<String>}
 * @description Get screen snapshot.
 */
const getScreenSnapshot = (data) => {
  const options = {
    method: 'POST',
    endpoint: `${API_PREFIX}/preview/generate`,
    body: data
  }
  return Api.previewRequest(options)
}

/**
 * @param {Object} data
 * @returns {Promise.<String>}
 * @description Get lego screens previews.
 */
const getLegoScreensPreviews = (projectId, params) => {
  const { quality, screenIds } = params
  const options = {
    method: 'POST',
    endpoint: `${API_PREFIX}/projects/${projectId}/preview-lego-render`,
    body: {
      quality,
      screenIds
    }
  }
  return Api.authorizedRequest(options)
}

module.exports = {
  getProjectData,
  getLegoScreensPreviews,
  getScreenSnapshot
}
