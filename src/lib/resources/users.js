/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const Http = require('../http/http')

class Users {
  /**
   * @returns {Promise.<Object>}
   * @description Get Current User.
   */
  static getCurrentUser () {
    const options = {
      endpoint: `${Users.API_PREFIX}/users/current`
    }
    return Http.authorizedRequest(options)
  }
}

Users.API_PREFIX = '/api/v1'

module.exports = Users
