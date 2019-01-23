const { ScreenIdAlreadyExistsError } = require('../util/error')

/**
 * @param {Object} screen - The screen to normalize.
 * @param {Number} index - The value to set.
 * @returns {Object}
 * @description Sets `screen.order` value to given `index`.
 */
const normalizeOrders = (screen, index) => {
  screen.order = index
  return screen
}

/**
 * @param {string} prop - The property to sort with.
 * @return {Function}
 * @description Sort factory.
 * Sorting function which sorts with given `prop`.
 */
const sortFactory = (prop) => (a, b) => parseInt(a[prop]) - parseInt(b[prop])

/**
 * @param {Array} screens - The screens array.
 * @param {Object} newScreen - The screen to insert.
 * @returns {Array}
 * @description Inserts screen at the right order.
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
 * @param {Array} screens - The screens array.
 * @param {Object} newScreen - The screen to insert.
 * @return {boolean}
 * @description Checks if there is already `screen` with given id, then returns `false`, otherwise `true`.
 */
const ifNewScreenIdExists = (screens, newScreen) =>
  screens.findIndex(screen => screen.id === newScreen.id) < 0

/**
 * @param {Array} screens - The screens array.
 * @param {Object} newScreen - The screen to insert.
 * @returns {Array}
 * @description Inserting new screen, arranges screens by `screen.order`
 * and normalize orders to have consequent numbers.
 */
const insertAndNormalizeOrder = (screens, newScreen) => {
  if (!ifNewScreenIdExists(screens, newScreen)) {
    throw new ScreenIdAlreadyExistsError('There is already one screen with current `screen.id`.')
  }

  return insertScreenAtOrder(screens, newScreen)
    .sort(sortFactory('order'))
    .map(normalizeOrders)
}

module.exports = {
  insertAndNormalizeOrder
}
