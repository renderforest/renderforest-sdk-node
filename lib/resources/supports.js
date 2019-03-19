/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const Api = require('../api')

const { API_PREFIX } = require('../config')

/**
 * @param {Object} params - The params to submit support ticket.
 * @returns {Promise.<Object>}
 */
const addSupportsTicket = (params) => {
  const { message, mailType, subject } = params
  const options = {
    method: 'POST',
    endpoint: `${API_PREFIX}/supports/ticket`,
    body: {
      message,
      mailType,
      subject
    }
  }
  return Api.authorizedRequest(options)
}

module.exports = {
  addSupportsTicket
}
