/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const ApiRequest = require('../request/api')

const Params = require('../../util/params')

const { API_PREFIX } = require('../../config/config')

class Projects {
  /**
   * @param {Object} [payload]
   * @returns {Promise.<Array>}
   * @description Get All Projects.
   */
  static getProjects (payload) {
    const qs = Params.destructParams(payload, ['limit', 'offset'])

    const options = {
      endpoint: `${API_PREFIX}/projects`,
      qs
    }
    return ApiRequest.authorizedRequest(options)
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
      endpoint: `${API_PREFIX}/projects`,
      body
    }
    return ApiRequest.authorizedRequest(options)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Object>}
   * @description Get Trial Project.
   */
  static getTrialProject (payload) {
    const qs = Params.destructParams(payload, ['templateId'])

    const options = {
      endpoint: `${API_PREFIX}/projects/trial`,
      qs
    }
    return ApiRequest.unauthorizedRequest(options)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Object>}
   * @description Get a Specific Project.
   */
  static getProject (payload) {
    const projectId = Params.destructURLParam(payload, 'projectId')

    const options = {
      endpoint: `${API_PREFIX}/projects/${projectId}`
    }
    return ApiRequest.authorizedRequest(options)
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
      endpoint: `${API_PREFIX}/projects/${projectId}`,
      body
    }
    return ApiRequest.authorizedRequest(options)
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
      endpoint: `${API_PREFIX}/projects/${projectId}`
    }
    return ApiRequest.authorizedRequest(options)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Object>}
   * @description Delete Specific Project Videos.
   */
  static deleteProjectVideos (payload) {
    const projectId = Params.destructURLParam(payload, 'projectId')
    const quality = Params.destructOptionalURLParam(payload, 'quality')

    const options = {
      method: 'DELETE',
      endpoint: `${API_PREFIX}/projects/${projectId}/videos/${quality}`
    }
    return ApiRequest.authorizedRequest(options)
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
      endpoint: `${API_PREFIX}/projects/${projectId}/apply-template-preset`,
      body
    }
    return ApiRequest.authorizedRequest(options)
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
      endpoint: `${API_PREFIX}/projects/${projectId}/duplicate`
    }
    return ApiRequest.authorizedRequest(options)
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
      endpoint: `${API_PREFIX}/projects/${projectId}/render`,
      body
    }
    return ApiRequest.authorizedRequest(options)
  }
}

module.exports = Projects
