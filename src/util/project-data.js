/**
 * @param {Array} screens - The screens array.
 * @param {Object} screen - The screen to insert.
 * @returns {Array} - Screens array,
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
 * @param {Array} screens - The screens array.
 * @param {Object} newScreen - The screen to insert.
 * @returns {Array}
 * @description Checks if given `newScreen`s order is more than last screen order, then appends new screen from the end.
 * In case order is less than 0 then inserts the new screen from the beginning, otherwise inserts new screen by order.
 */
function findAndInsertScreen (screens, newScreen) {
  const newScreenOrder = newScreen.hasOwnProperty('order') ? newScreen.order : screens[screens.length - 1].order
  const lastScreenOrder = screens[screens.length - 1].order

  if (newScreenOrder >= lastScreenOrder) {
    return [...screens, { ...newScreen, order: lastScreenOrder }]
  }

  if (newScreenOrder <= 0) {
    return [newScreen, ...screens]
  }

  return insertScreenByOrder(screens, newScreen)
}

/**
 * @param screens - The screens array.
 * @param newScreen - The screen to insert.
 * @returns {Array}
 * @description After inserting the new screen into given `screens` array, arranges `screen.order` property by index.
 */
function insertAndArrangeOrder (screens, newScreen) {
  return findAndInsertScreen(screens, newScreen)
    .map((screen, index) => {
      screen.order = index
      return screen
    })
}

module.exports = {
  insertAndArrangeOrder
}
