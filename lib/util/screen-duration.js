/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

/**
 * Get video trims duration.
 * @param {Array} trims
 * @returns {number}
 */
const _getVideoTrimsDuration = (trims) => trims.reduce((acc, elem, index) => {
  if (index % 2 === 0) {
    return acc + (trims[index + 1] - elem)
  }
  return acc
}, 0)

/**
 * Get screen areas duration.
 * @param {Array} areas
 * @returns {number}
 */
const _getScreenAreasDuration = (areas) => areas.reduce((acc, area) => {
  const videoCropParams = area && area.type === 'video' ? area.videoCropParams : null
  if (!videoCropParams) return acc

  if (videoCropParams.duration) {
    return acc + _getVideoTrimsDuration(videoCropParams.trims)
  }

  return acc
}, 0)

/**
 * Get screen duration.
 * @param {Object} screen
 * @param {Array} screen.areas
 * @returns {number}
 */
const getScreenDuration = (screen) => {
  const { characterBasedDuration, selectedDuration, extraVideoSecond, areas, duration } = screen

  // If screen duration is adjustable and have selectedDuration, return selectedDuration
  if (characterBasedDuration && selectedDuration) {
    return selectedDuration
  }

  const extra = extraVideoSecond
    ? parseInt(extraVideoSecond, 10) || 0
    : 0

  const videoArea = areas.find((area) => area.type === 'video')
  const conditionScreenDuration = videoArea
    ? 0
    : parseInt(duration, 10) || 0

  return (_getScreenAreasDuration(areas) + extra + conditionScreenDuration)
}

module.exports = {
  getScreenDuration
}
