/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const { RenderforestError } = require('./error')

class Params {
  /**
   * Destruct given properties from the payload.
   * @param {Object} payload - The payload to destruct.
   * @param {Array} props - The props to destruct from payload.
   * @returns {Object}
   */
  static destructParams (payload, props) {
    if (!payload || !Object.keys(payload).length) {
      return {}
    }

    return props.reduce((acc, prop) => {
      if (payload[prop] !== undefined) {
        acc[prop] = payload[prop]
      }

      return acc
    }, {})
  }

  /**
   * Destruct URL param from the payload.
   * @param {Object} payload - The payload to destruct.
   * @param {string} param - The param to destruct from payload.
   * @returns {number|string}
   * @throws {RenderforestError}
   */
  static destructURLParam (payload, param) {
    if (!payload || !Object.keys(payload).length || payload[param] === undefined) {
      throw new RenderforestError(`Missing required parameter: ${param}.`)
    }

    return payload[param]
  }

  /**
   * Destruct optional URL param from the payload.
   * @param {Object} payload
   * @param {string} param
   * @returns {number|string}
   */
  static destructOptionalURLParam (payload, param) {
    if (!payload || !Object.keys(payload).length || payload[param] === undefined) {
      return ''
    }

    return payload[param]
  }
}

module.exports = Params
