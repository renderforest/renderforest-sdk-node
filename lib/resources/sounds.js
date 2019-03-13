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

class Sounds {
  /**
   * Get Company Sounds (limited).
   * @param {Object} payload
   * @returns {Promise.<Array>}
   */
  static getCompanySoundsLimited (payload) {
    const qs = Params.destructParams(payload, ['duration'])

    const options = {
      endpoint: `${API_PREFIX}/sounds`,
      qs
    }
    return Api.unauthorizedRequest(options)
  }

  /**
   * Get Sounds.
   * @param {Object} payload
   * @returns {Promise.<Array>}
   */
  static getSounds (payload) {
    const qs = Params.destructParams(payload, ['duration'])

    const options = {
      endpoint: `${API_PREFIX}/sounds`,
      qs
    }
    return Api.authorizedRequest(options)
  }

  /**
   * Get Recommended Sounds (limited).
   * @param {Object} payload
   * @returns {Promise.<Array>}
   */
  static getRecommendedSoundsLimited (payload) {
    const qs = Params.destructParams(payload, ['duration', 'templateId'])

    const options = {
      endpoint: `${API_PREFIX}/sounds/recommended`,
      qs
    }
    return Api.unauthorizedRequest(options)
  }

  /**
   * Get Recommended Sounds.
   * @param {Object} payload
   * @returns {Promise.<Array>}
   */
  static getRecommendedSounds (payload) {
    const qs = Params.destructParams(payload, ['duration', 'templateId'])

    const options = {
      endpoint: `${API_PREFIX}/sounds/recommended`,
      qs
    }
    return Api.authorizedRequest(options)
  }
}

module.exports = Sounds
