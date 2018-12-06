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
   * @param {Object} payload
   * @param {Array} props
   * @returns {Object}
   * @description Destruct given properties from the payload.
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
   * @param {Object} payload
   * @param {string} param
   * @returns {number|undefined}
   * @throws RenderforestError
   * @description Destruct URL param from the payload.
   */
  static destructURLParam (payload, param) {
    if (!payload || !Object.keys(payload).length || payload[param] === undefined) {
      throw new RenderforestError(`Missing required parameter: ${param}.`)
    }

    return payload[param]
  }
}

module.exports = Params
