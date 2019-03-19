/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

/**
 * Destruct given properties from the payload.
 * @param {Object} payload - The payload to destruct.
 * @param {Array} props - The props to destruct from payload.
 * @returns {Object}
 */
const destructParams = (payload, props) => {
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

module.exports = {
  destructParams
}
