/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const Http = require('../http/http')

const ProjectDataClass = require('../../classes/project-data')

const Params = require('../../util/params')

class ProjectData {
  /**
   * @param {Object} payload
   * @returns {Promise.<Object>}
   * @description Get Project-data.
   */
  static getProjectData (payload) {
    const projectId = Params.destructURLParam(payload, 'projectId')

    const options = {
      endpoint: `${ProjectData.API_PREFIX}/project-data/${projectId}`
    }
    return Http.authorizedRequest(options)
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
      endpoint: `${ProjectData.API_PREFIX}/project-data/${projectId}`,
      body
    }
    return Http.authorizedRequest(options)
  }
}

ProjectData.API_PREFIX = '/api/v5'

module.exports = ProjectData
