/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const url = require('url')

const AuthUtil = require('./util/auth')

const { SOCKET_ORIGINAL_URL } = require('./config')

/**
 * Set Authorization for api requests.
 */
const setAuthorization = (options, signKey, clientId) => {
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

/**
 * Builds authorization string for socket connection.
 * @return {String}
 */
const createSocketAuthorizationString = (clientId, signKey, timestamp) => AuthUtil.createSocketAuthHash({
  clientId,
  timestamp,
  originalUrl: SOCKET_ORIGINAL_URL
}, signKey)

/**
 * Creates authorization query based on auth, clientId and timestamp.
 * @return {String}
 */
const createAuthorizationQuery = (clientId, signKey) => {
  const timestamp = Date.now()
  const auth = createSocketAuthorizationString(clientId, signKey, timestamp)

  return `authorization=${auth}&user_id=${clientId}&timestamp=${timestamp}`
}

module.exports = {
  createAuthorizationQuery,
  setAuthorization
}
