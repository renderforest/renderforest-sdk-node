/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

class RenderforestError extends Error {
  constructor (message) {
    super()
    this.message = message
    this.name = this.constructor.name
  }
}

module.exports = RenderforestError
