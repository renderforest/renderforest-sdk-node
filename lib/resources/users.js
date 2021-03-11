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
 * @returns {Promise.<Object>}
 */
const getCurrentUser = () => {
  const options = {
    endpoint: `${API_PREFIX}/users/me`
  }
  return Api.authorizedRequest(options)
}

module.exports = {
  getCurrentUser
}
