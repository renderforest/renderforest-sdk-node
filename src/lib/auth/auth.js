/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const url = require('url')

const AuthUtil = require('./auth-util')

class Auth {
  /**
   * @param {Object} options
   * @param {string} signKey
   * @param {number} clientId
   * @description Set Authorization.
   */
  static setAuthorization (options, signKey, clientId) {
    const { path, query } = url.parse(options.uri)

    const headers = {}
    headers.nonce = AuthUtil.generateNonce()
    headers.clientid = clientId
    headers.timestamp = Date.now()
    headers.authorization = AuthUtil.generateHash({
      clientId: clientId,
      path: path || '',
      qs: query || '',
      body: JSON.stringify(options.body || {}),
      nonce: headers.nonce,
      timestamp: headers.timestamp
    }, signKey)

    options.headers = Object.assign({}, options.headers, headers)
  }
}

module.exports = Auth
