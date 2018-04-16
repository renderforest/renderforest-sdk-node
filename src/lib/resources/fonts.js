/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const Http = require('../http/http')

const Params = require('../../util/params')

class Fonts {
  /**
   * @param {Object} payload
   * @returns {Promise.<Array>}
   * @description Get All Fonts.
   */
  static getFonts (payload) {
    const qs = Params.destructParams(payload, ['templateId'])

    const options = {
      endpoint: `${Fonts.API_PREFIX}/fonts`,
      qs
    }
    return Http.authorizedRequest(options)
  }
}

Fonts.API_PREFIX = '/api/v1'

module.exports = Fonts
