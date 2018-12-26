/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const RequestPromise = require('request-promise')

const { HTTP_DEFAULT_OPTIONS, WEB_HOST } = require('../../config/config')

class WebRequest {
  /**
   * @param {Object} options
   * @description Append URI.
   */
  static appendURI (options) {
    options.uri = `${WEB_HOST}${options.endpoint}`
  }

  /**
   * @param {Object} options
   * @returns {Promise.<>}
   * @description Appends URI and makes request with default options.
   */
  request (options) {
    const _options = Object.assign({}, HTTP_DEFAULT_OPTIONS, options)

    WebRequest.appendURI(_options)

    return RequestPromise(_options)
  }
}

module.exports = new WebRequest()
