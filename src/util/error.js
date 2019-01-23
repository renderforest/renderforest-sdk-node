/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const CUSTOM_ERRORS = [
  'CharacterBasedDurationError',
  'DurationGreaterThanMaxPossibleError',
  'IconAdjustableError',
  'MissingOrderError',
  'RenderforestError',
  'ScreenHasVideoAreaError',
  'ScreenIdAlreadyExistsError'
]

const ERRORS = CUSTOM_ERRORS.reduce((acc, className) => {
  acc[className] = ({
    [className]: class extends Error {
      constructor (msg) {
        super(msg)
        this.name = this.constructor.name
      }
    }
  })[className]

  return acc
}, {})

module.exports = ERRORS
