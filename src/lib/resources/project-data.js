/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const ApiRequest = require('../request/api')

const ProjectDataClass = require('../../classes/project-data')

const Params = require('../../util/params')

const { PROJECT_DATA_API_PREFIX } = require('../../config/config')

class ProjectData {
  /**
   * @param {Object} payload
   * @returns {Promise.<Object>}
   * @description Get Project-data.
   */
  static getProjectData (payload) {
    const projectId = Params.destructURLParam(payload, 'projectId')

    const options = {
      endpoint: `${PROJECT_DATA_API_PREFIX}/project-data/${projectId}`
    }
    return ApiRequest.authorizedRequest(options)
      .then((projectDataJson) => new ProjectDataClass(projectDataJson))
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Object>}
   * @description Update Project-data (partial update)
   */
  static updateProjectDataPartial (payload) {
    const body = Params.destructParams(payload, ['data'])
    const projectId = Params.destructURLParam(payload, 'projectId')

    const options = {
      method: 'PATCH',
      endpoint: `${PROJECT_DATA_API_PREFIX}/project-data/${projectId}`,
      body
    }
    return ApiRequest.authorizedRequest(options)
  }
}

module.exports = ProjectData
