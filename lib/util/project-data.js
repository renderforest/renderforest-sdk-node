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

module.exports = {
  insertAndNormalizeOrder
}
