/**
 * @param {Array} screens - The screens array.
 * @param {Object} screen - The screen to insert.
 * @returns {Array}
 * @description Inserts given `screen` into `screens` array by `screen` order.
 */
function insertScreenByOrder (screens, screen) {
  const screensLength = screens.length
  let screenIndex = screensLength - 1

  for (screenIndex; (screenIndex >= 0 && screens[screenIndex].order >= screen.order); screenIndex--) {
    screens[screenIndex + 1] = screens[screenIndex]
  }
  screens[screenIndex + 1] = screen

  return screens
}

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
 * @param {Array} screens - The screens array.
 * @param {Object} newScreen - The screen to insert.
 * @returns {Array}
 * @description After inserting the new screen into given `screens` array, arranges `screen.order` property by index.
 */
function insertAndNormalizeOrder (screens, newScreen) {
  return insertScreenByOrder(screens, newScreen)
    .map(normalizeOrders)
}

module.exports = {
  insertAndNormalizeOrder
}
