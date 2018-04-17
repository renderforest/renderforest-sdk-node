/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const Http = require('../http/http')

const Params = require('../../util/params')

class Supports {
  /**
   * @param {Object} payload
   * @returns {Promise.<Object>}
   * @description Add Supports Ticket.
   */
  static addSupportsTicket (payload) {
    const body = Params.destructParams(payload, ['message', 'mailType', 'subject'])

    const options = {
      method: 'POST',
      endpoint: `${Supports.API_PREFIX}/supports/ticket`,
      body
    }
    return Http.authorizedRequest(options)
  }
}

Supports.API_PREFIX = '/api/v1'

module.exports = Supports
