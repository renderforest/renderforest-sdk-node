/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const Api = require('../api')

const { API_PREFIX } = require('../config')

const { addGetSoundByIdToSounds } = require('../util/project-data')

/**
 * @param {Object} params - The sound params.
 * @returns {Promise.<Array>}
 */
const getCompanySoundsLimited = (params) => {
  const { duration } = params
  const options = {
    endpoint: `${API_PREFIX}/sounds`,
    qs: { duration }
  }

  return Api.authorizedRequest(options)
    .then((sounds) => addGetSoundByIdToSounds(sounds))
}

/**
 * @param {Object} params - The params to get sounds.
 * @returns {Promise.<Array>}
 */
const getSounds = (params) => {
  const { duration } = params
  const options = {
    endpoint: `${API_PREFIX}/sounds`,
    qs: { duration }
  }
  return Api.authorizedRequest(options)
    .then((sounds) => addGetSoundByIdToSounds(sounds))
}

/**
 * @param {Number} templateId - The template id of sounds.
 * @param {Object} params - The params to get recommended sounds.
 * @returns {Promise.<Array>}
 */
const getRecommendedSoundsLimited = (templateId, params) => {
  const { duration } = params
  const options = {
    endpoint: `${API_PREFIX}/sounds/recommended`,
    qs: {
      templateId,
      duration
    }
  }
  return Api.authorizedRequest(options)
    .then((sounds) => addGetSoundByIdToSounds(sounds))
}

/**
 * @param {Number} templateId - The template id to fet recommended sounds.
 * @param {Object} params - The params to get recommended sounds.
 * @returns {Promise.<Array>}
 */
const getRecommendedSounds = (templateId, params) => {
  const { duration } = params
  const options = {
    endpoint: `${API_PREFIX}/sounds/recommended`,
    qs: {
      templateId,
      duration
    }
  }
  return Api.authorizedRequest(options)
    .then((sounds) => addGetSoundByIdToSounds(sounds))
}

module.exports = {
  getCompanySoundsLimited,
  getSounds,
  getRecommendedSoundsLimited,
  getRecommendedSounds
}
