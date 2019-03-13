/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const Api = require('../api')

const ProjectDataClass = require('../project-data')

const Params = require('../util/params')

const { PROJECT_DATA_API_PREFIX } = require('../config')

class ProjectData {
  /**
   * Get Project-data.
   * @param {Object} payload
   * @returns {Promise.<Object>}
   */
  static getProjectData (payload) {
    const projectId = Params.destructURLParam(payload, 'projectId')

    const options = {
      endpoint: `${PROJECT_DATA_API_PREFIX}/project-data/${projectId}`
    }
    return Api.authorizedRequest(options)
      .then((projectDataJson) => new ProjectDataClass(projectDataJson))
  }

  /**
   * Update Project-data (partial update)
   * @param {Object} payload
   * @returns {Promise.<Object>}
   */
  static updateProjectDataPartial (payload) {
    const body = Params.destructParams(payload, ['data'])
    const projectId = Params.destructURLParam(payload, 'projectId')

    const options = {
      method: 'PATCH',
      endpoint: `${PROJECT_DATA_API_PREFIX}/project-data/${projectId}`,
      body
    }
    return Api.authorizedRequest(options)
  }
}

module.exports = ProjectData
