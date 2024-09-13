/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const { ScreenIdAlreadyExistsError } = require('./error')

/**
 * Sets `screen.order` value to given `index`.
 * @param {Object} screen - The screen to normalize.
 * @param {Number} index - The value to set.
 * @returns {Object}
 */
const normalizeOrders = (screen, index) => {
  screen.order = index
  return screen
}

/**
 * Sort factory.
 *  Sorting function which sorts with given `prop`.
 * @param {string} prop - The property to sort with.
 * @return {Function}
 */
const sortFactory = (prop) => (a, b) => parseInt(a[prop]) - parseInt(b[prop])

/**
 * Inserts screen at the right order.
 * @param {Array} screens - The screens array.
 * @param {Object} newScreen - The screen to insert.
 * @returns {Array}
 */
const insertScreenAtOrder = (screens, newScreen) => {
  if (screens.length === 0) {
    return [newScreen]
  }

  if (newScreen.order >= screens[screens.length - 1].order) {
    return [...screens, newScreen]
  }

  if (newScreen.order < 0) {
    return [newScreen, ...screens]
  }

  return screens.reduce((acc, screen) => {
    if (screen.order === newScreen.order) {
      acc.push(newScreen)
    }

    if (screen.order >= newScreen.order) {
      screen.order++
    }
    acc.push(screen)
    return acc
  }, [])
}

/**
 * Checks if there is already `screen` with given id, then returns `false`, otherwise `true`.
 * @param {Array} screens - The screens array.
 * @param {Object} newScreen - The screen to insert.
 * @return {boolean}
 */
const ifNewScreenIdExists = (screens, newScreen) =>
  screens.findIndex(screen => screen.id === newScreen.id) < 0

/**
 * Inserting new screen, arranges screens by `screen.order`
 *  and normalize orders to have consequent numbers.
 * @param {Array} screens - The screens array.
 * @param {Object} newScreen - The screen to insert.
 * @returns {Array}
 */
const insertAndNormalizeOrder = (screens, newScreen) => {
  if (!ifNewScreenIdExists(screens, newScreen)) {
    throw new ScreenIdAlreadyExistsError('There is already one screen with current `screen.id`.')
  }

  return insertScreenAtOrder(screens, newScreen)
    .sort(sortFactory('order'))
    .map(normalizeOrders)
}

/**
 * Removes screen from screens array.
 * @param {Array} screens - The screens array.
 * @param {Number} index The index of screen to be removed.
 * @returns {Array}
 */
const removeAndNormalizeOrder = (screens, id) => {
  return screens.filter((screen) => screen.id !== id)
    .sort(sortFactory('order'))
    .map(normalizeOrders)
}

/**
 * Checks if area's type is desired one.
 * @param {Object} area - The area to check.
 * @param {String} type - Desired type to be.
 * @return {Function}
 */
const checkAreaType = (area, type) => (error) => {
  if (area.type !== type) {
    throw error()
  }
}

/**
 * Takes only fields that needed to update.
 * @param {Object} font
 * @return {Object}
 */
const flattenFont = (font) => {
  const { id, postscriptName: name, characterSize, path } = font
  return Object.assign({ id, name, characterSize }, path ? { path } : {})
}

module.exports = {
  flattenFont,
  insertAndNormalizeOrder,
  checkAreaType,
  removeAndNormalizeOrder
}
