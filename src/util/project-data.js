/**
 * @param {Object} screen - The screen to normalize.
 * @param {Number} index - The value to set.
 * @returns {Object}
 * @description Sets `screen.order` value to given `index`.
 */
function normalizeOrders (screen, index) {
  screen.order = index
  return screen
}

/**
 * @param {string} prop - The property to sort with.
 * @return {Function}
 * @description Sort factory.
 * Sorting function which sorts with given `prop`.
 */
function sortFactory (prop) {
  return function (a, b) {
    return parseInt(a[prop]) - parseInt(b[prop])
  }
}

/**
 * @param {Array} screens - The screens array.
 * @param {Object} newScreen - The screen to insert.
 * @returns {Array}
 * @description Inserts screen at the right order.
 */
function insertScreenAtOrder (screens, newScreen) {
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
 * @returns {Array}
 * @description Inserting new screen, arranges screens by `screen.order`
 * and normalize orders to have consequent numbers.
 */
function insertAndNormalizeOrder (screens, newScreen) {
  return insertScreenAtOrder(screens, newScreen)
    .sort(sortFactory('order'))
    .map(normalizeOrders)
}

module.exports = {
  insertAndNormalizeOrder
}
