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

const { PROJECT_DATA_API_PREFIX } = require('../config')

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
  return Api.authorizedRequest(options)
    .then((projectDataInstance) => new ProjectData(projectDataInstance, updateProjectDataPartial))
}

module.exports = {
  getProjectData
}
