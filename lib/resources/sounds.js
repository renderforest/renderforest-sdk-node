/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const Api = require('../api')

const { API_PREFIX } = require('../config')

const { SoundNotFoundError } = require('../util/error')

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
    .then((sounds) => {
      /**
       * @param {Number} id - The sound id.
       * @return {Object}
       */
      sounds.getSoundById = (id) => {
        const desiredSound = sounds.find((sound) => sound.id === id)
        if (!desiredSound) {
          throw new SoundNotFoundError(`Sound with id: ${id} was not found.`)
        }
        return desiredSound
      }

      return sounds
    })
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
    .then((sounds) => {
      sounds.getSoundById = (id) => {
        const desiredSound = sounds.find((sound) => sound.id === id)
        if (!desiredSound) {
          throw new SoundNotFoundError(`Sound with id: ${id} was not found.`)
        }
        return desiredSound
      }

      return sounds
    })
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
    .then((sounds) => {
      sounds.getSoundById = (id) => {
        const desiredSound = sounds.find((sound) => sound.id === id)
        if (!desiredSound) {
          throw new SoundNotFoundError(`Sound with id: ${id} was not found.`)
        }
        return desiredSound
      }

      return sounds
    })
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
    .then((sounds) => {
      sounds.getSoundById = (id) => {
        const desiredSound = sounds.find((sound) => sound.id === id)
        if (!desiredSound) {
          throw new SoundNotFoundError(`Sound with id: ${id} was not found.`)
        }
        return desiredSound
      }

      return sounds
    })
}

module.exports = {
  getCompanySoundsLimited,
  getSounds,
  getRecommendedSoundsLimited,
  getRecommendedSounds
}
