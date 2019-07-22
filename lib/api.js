/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const RequestPromise = require('request-promise')
const socketClient = require('socket.io-client')

const { createAuthorizationQuery, setAuthorization } = require('./auth')

const {
  API_HOST,
  WEB_HOST,
  HTTP_DEFAULT_OPTIONS,
  SOCKET_HOST,
  REND_FINISHED_STATE,
  REND_NOT_FINISHED_STATE
} = require('./config')

const { SocketConnectionError } = require('./util/error')

class Api {
  /**
   * @constructor
   */
  constructor () {
    this.signKey = null
    this.clientId = null
  }

  /**
   * Set config.
   * @param {string} signKey
   * @param {number} clientId
   */
  setConfig (signKey, clientId) {
    this.signKey = signKey
    this.clientId = clientId
  }

  /**
   * Append query params.
   *  Format object parameters into GET request query string.
   * @param {Object} options
   */
  static appendQueryParams (options) {
    if (options.method === 'GET' && options.qs && Object.keys(options.qs).length) {
      const queryParams = Object.keys(options.qs).filter(key => options.qs[key] !== undefined).map(key => key + '=' + options.qs[key]).join('&')
      options.endpoint = `${options.endpoint}?${queryParams}`
    }
  }

  /**
   * Append URI.
   * @param {Object} options - The request options.
   * @param {Number} host - The request host.
   */
  static appendURI (options, host) {
    options.uri = `${host}${options.endpoint}`
  }

  /**
   * Prepare request.
   * @param {Object} options
   */
  static prepareRequest (options) {
    Api.appendQueryParams(options)
    Api.appendURI(options, API_HOST)
  }

  /**
   * Request.
   * @param {Object} options
   * @returns {Promise.<>}
   */
  static request (options) {
    return RequestPromise(options)
      .then((response) => (response && response.data))
  }

  /**
   * Unauthorized request.
   * @param {Object} options
   * @returns {Promise.<>}
   */
  unauthorizedRequest (options) {
    const _options = Object.assign({}, HTTP_DEFAULT_OPTIONS, options)
    Api.prepareRequest(_options)

    return Api.request(_options)
  }

  /**
   * Authorized request.
   * @param {Object} options
   * @returns {Promise.<>}
   */
  authorizedRequest (options) {
    const _options = Object.assign({}, HTTP_DEFAULT_OPTIONS, options)
    Api.prepareRequest(_options)
    setAuthorization(_options, this.signKey, this.clientId)

    return Api.request(_options)
  }

  /**
   * Appends URI and makes request with default options.
   * @param {Object} options
   * @returns {Promise.<>}
   */
  webRequest (options) {
    const _options = Object.assign({}, HTTP_DEFAULT_OPTIONS, options)
    Api.appendURI(_options, WEB_HOST)

    return RequestPromise(_options)
  }

  /**
   * @param {Function} callback - The callback function for handling render status result.
   * @return {unsubscribe}
   */
  socketConnection (callback) {
    const renderStatus = socketClient(SOCKET_HOST, {
      query: createAuthorizationQuery(this.clientId, this.signKey)
    })

    renderStatus.on('error', (error) => callback(new SocketConnectionError(error)))
    renderStatus.on('event', (status) => {
      if (status.state === 'rended') {
        renderStatus.close()
        return callback(null, REND_FINISHED_STATE)
      } else {
        // if `status.state` is not `rended` but percent is 100, then show rend not finished state
        return callback(null, Math.min(REND_NOT_FINISHED_STATE, status.percent))
      }
    })

    // if socket is still open, then force close manually.
    const unsubscribe = () => {
      renderStatus.close()
    }

    return unsubscribe
  }
}

module.exports = new Api()
