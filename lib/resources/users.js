/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const ApiRequest = require('../api')

const { API_PREFIX } = require('../config')

class Users {
  /**
   * Get Current User.
   * @returns {Promise.<Object>}
   */
  static getCurrentUser () {
    const options = {
      endpoint: `${API_PREFIX}/users/current`
    }
    return ApiRequest.authorizedRequest(options)
  }
}

module.exports = Users
