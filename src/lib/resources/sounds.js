/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const Http = require('../http/http')

const Params = require('../../util/params')

class Sounds {
  /**
   * @param {Object} payload
   * @returns {Promise.<Array>}
   * @description Get Company Sounds (limited).
   */
  static getCompanySoundsLimited (payload) {
    const qs = Params.destructParams(payload, ['duration'])

    const options = {
      endpoint: `${Sounds.API_PREFIX}/sounds`,
      qs
    }
    return Http.unauthorizedRequest(options)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Array>}
   * @description Get Sounds.
   */
  static getSounds (payload) {
    const qs = Params.destructParams(payload, ['duration'])

    const options = {
      endpoint: `${Sounds.API_PREFIX}/sounds`,
      qs
    }
    return Http.authorizedRequest(options)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Array>}
   * @description Get Recommended Sounds (limited).
   */
  static getRecommendedSoundsLimited (payload) {
    const qs = Params.destructParams(payload, ['duration', 'templateId'])

    const options = {
      endpoint: `${Sounds.API_PREFIX}/sounds/recommended`,
      qs
    }
    return Http.unauthorizedRequest(options)
  }

  /**
   * @param {Object} payload
   * @returns {Promise.<Array>}
   * @description Get Recommended Sounds.
   */
  static getRecommendedSounds (payload) {
    const qs = Params.destructParams(payload, ['duration', 'templateId'])

    const options = {
      endpoint: `${Sounds.API_PREFIX}/sounds/recommended`,
      qs
    }
    return Http.authorizedRequest(options)
  }
}

Sounds.API_PREFIX = '/api/v1'

module.exports = Sounds
