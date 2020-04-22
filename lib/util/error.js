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
  'FontNotFoundError',
  'IconAdjustableError',
  'InvalidScreenIdError',
  'InvalidScreenOperationError',
  'InvalidTextScaleValue',
  'LowerThirdAdjustableError',
  'NotImageAreaError',
  'NotTextAreaError',
  'NotVideoAreaError',
  'MissingOrderError',
  'RenderforestError',
  'ScreenHasVideoAreaError',
  'ScreenIdAlreadyExistsError',
  'ScreenNotFoundError',
  'SocketConnectionError'
]

const ERRORS = CUSTOM_ERRORS.reduce((acc, className) => {
  acc = {
    ...acc,
    [className]: class extends Error {
      constructor (message) {
        super(message)
        this.name = this.constructor.name
      }

      static of (msg) {
        return () => new acc[className](msg)
      }
    }
  }

  return acc
}, {})

/**
 * @property CharacterBasedDurationError
 * @property DurationGreaterThanMaxPossibleError
 * @property FontNotFoundError
 * @property IconAdjustableError
 * @property InvalidTextScaleValue
 * @property InvalidScreenOperationError
 * @property InvalidScreenIdError
 * @property LowerThirdAdjustableError
 * @property NotImageAreaError
 * @property NotTextAreaError
 * @property NotVideoAreaError
 * @property MissingOrderError
 * @property RenderforestError
 * @property ScreenHasVideoAreaError
 * @property ScreenIdAlreadyExistsError
 * @property ScreenNotFoundError
 * @property SocketConnectionError
 */
module.exports = ERRORS
