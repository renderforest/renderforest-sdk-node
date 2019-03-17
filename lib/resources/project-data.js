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
 * Update Project-data (partial update)
 * @param {Object} payload - The params to update project-data.
 * @returns {Promise.<Object>}
 */
const updateProjectDataPartial = (payload) => {
  const body = Params.destructParams(payload, ['data'])
  const projectId = Params.destructURLParam(payload, 'projectId')

  const options = {
    method: 'PATCH',
    endpoint: `${PROJECT_DATA_API_PREFIX}/project-data/${projectId}`,
    body
  }
  return Api.authorizedRequest(options)
}

/**
 * Get Project-data.
 * @param {Object} payload - The params to update project-data.
 * @returns {Promise.<Object>}
 */
const getProjectData = (payload) => {
  const projectId = Params.destructURLParam(payload, 'projectId')

  const options = {
    endpoint: `${PROJECT_DATA_API_PREFIX}/project-data/${projectId}`
  }
  return Api.authorizedRequest(options)
    .then((projectDataInstance) => new ProjectData(projectDataInstance, updateProjectDataPartial))
}

module.exports = {
  getProjectData
}
