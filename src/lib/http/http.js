/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const QueryString = require('querystring')

const RequestPromise = require('request-promise')

const Auth = require('../auth/auth')

const PackageJson = require('../../../package.json')

class Http {
  /**
   * @constructor
   */
  constructor () {
    this.signKey = null
    this.clientId = null
  }

  /**
   * @param {string} signKey
   * @param {number} clientId
   * @description Set config.
   */
  setConfig (signKey, clientId) {
    this.signKey = signKey
    this.clientId = clientId
  }

  /**
   * @param {Object} options
   * @description Append query params.
   *  Format object parameters into GET request query string.
   */
  static appendQueryParams (options) {
    if (options.method === 'GET' && options.qs && Object.keys(options.qs).length) {
      const queryParams = QueryString.stringify(options.qs)
      options.endpoint = `${options.endpoint}?${queryParams}`
    }
  }

  /**
   * @param {Object} options
   * @description Append URI.
   */
  static appendURI (options) {
    options.uri = `${Http.HOST}${options.endpoint}`
  }

  /**
   * @param {Object} options
   * @description Prepare request.
   */
  static prepareRequest (options) {
    Http.appendQueryParams(options)
    Http.appendURI(options)
  }

  /**
   * @param {Object} options
   * @returns {Promise.<>}
   * @description Request.
   */
  static request (options) {
    return RequestPromise(options)
      .then((response) => (response && response.data))
  }

  /**
   * @param {Object} options
   * @returns {Promise.<>}
   * @description Unauthorized request.
   */
  unauthorizedRequest (options) {
    const _options = Object.assign({}, Http.DEFAULT_OPTIONS, options)

    Http.prepareRequest(_options)

    return Http.request(_options)
  }

  /**
   * @param {Object} options
   * @returns {Promise.<>}
   * @description Authorized request.
   */
  authorizedRequest (options) {
    const _options = Object.assign({}, Http.DEFAULT_OPTIONS, options)

    Http.prepareRequest(_options)
    Auth.setAuthorization(_options, this.signKey, this.clientId)

    return Http.request(_options)
  }
}

Http.HOST = 'https://api.renderforest.com'
Http.DEFAULT_OPTIONS = {
  method: 'GET',
  json: true,
  headers: {
    'Accept': 'application/json',
    'User-Agent': `renderforest/sdk-node/${PackageJson.version}`
  }
}

module.exports = new Http()
