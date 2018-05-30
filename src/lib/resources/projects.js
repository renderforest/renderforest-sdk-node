/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const Http = require('../http/http')

const Params = require('../../util/params')

class Projects {
  /**
   * @param {Object} [payload]
   * @returns {Promise.<Array>}
   * @description Get All Projects.
   */
  static getProjects (payload) {
    const qs = Params.destructParams(payload, ['limit', 'offset'])

    const options = {
      endpoint: `${Projects.API_PREFIX}/projects`,
      qs
    }
    return Http.authorizedRequest(options)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Object>}
   * @description Add Project.
   */
  static addProject (payload) {
    const body = Params.destructParams(payload, ['templateId'])

    const options = {
      method: 'POST',
      endpoint: `${Projects.API_PREFIX}/projects`,
      body
    }
    return Http.authorizedRequest(options)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Object>}
   * @description Get Trial Project.
   */
  static getTrialProject (payload) {
    const qs = Params.destructParams(payload, ['templateId'])

    const options = {
      endpoint: `${Projects.API_PREFIX}/projects/trial`,
      qs
    }
    return Http.unauthorizedRequest(options)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Object>}
   * @description Update the Project (partial update).
   */
  static updateProjectPartial (payload) {
    const body = Params.destructParams(payload, ['customTitle'])
    const projectId = Params.destructURLParam(payload, 'projectId')

    const options = {
      method: 'PATCH',
      endpoint: `${Projects.API_PREFIX}/projects/${projectId}`,
      body
    }
    return Http.authorizedRequest(options)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Object>}
   * @description Delete a Specific Project.
   */
  static deleteProject (payload) {
    const projectId = Params.destructURLParam(payload, 'projectId')

    const options = {
      method: 'DELETE',
      endpoint: `${Projects.API_PREFIX}/projects/${projectId}`
    }
    return Http.authorizedRequest(options)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Object>}
   * @description Apply Template Preset on the Project.
   */
  static applyTemplatePresetOnProject (payload) {
    const body = Params.destructParams(payload, ['presetId'])
    const projectId = Params.destructURLParam(payload, 'projectId')

    const options = {
      method: 'POST',
      endpoint: `${Projects.API_PREFIX}/projects/${projectId}/apply-template-preset`,
      body
    }
    return Http.authorizedRequest(options)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Object>}
   * @description Duplicate the Project.
   */
  static duplicateProject (payload) {
    const projectId = Params.destructURLParam(payload, 'projectId')

    const options = {
      method: 'POST',
      endpoint: `${Projects.API_PREFIX}/projects/${projectId}/duplicate`
    }
    return Http.authorizedRequest(options)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Object>}
   * @description Render the Project.
   */
  static renderProject (payload) {
    const body = Params.destructParams(payload, ['quality'])
    const projectId = Params.destructURLParam(payload, 'projectId')

    const options = {
      method: 'POST',
      endpoint: `${Projects.API_PREFIX}/projects/${projectId}/render`,
      body
    }
    return Http.authorizedRequest(options)
  }
}

Projects.API_PREFIX = '/api/v1'

module.exports = Projects
