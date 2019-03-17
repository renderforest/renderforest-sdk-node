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

/**
 * Add Supports Ticket.
 * @param {Object} payload
 * @returns {Promise.<Object>}
 */
const addSupportsTicket = (payload) => {
  const body = Params.destructParams(payload, ['message', 'mailType', 'subject'])

  const options = {
    method: 'POST',
    endpoint: `${API_PREFIX}/supports/ticket`,
    body
  }
  return Api.authorizedRequest(options)
}

module.exports = {
  addSupportsTicket
}
