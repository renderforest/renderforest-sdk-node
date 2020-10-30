/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const Api = require('../api')

const { API_PREFIX } = require('../config')

/**
 * @param {Object} params - The params get subscriptions.
 * @returns {Promise.<Array>}
 */
const getSubscriptions = (params) => {
  const { status } = params
  const options = {
    endpoint: `${API_PREFIX}/subscriptions`,
    qs: {
      status
    }
  }
  return Api.authorizedRequest(options)
}

/**
 * @param {Object} subscriptionId - The subscription id to get.
 * @returns {Promise.<Object>}
 */
const getSubscription = (subscriptionId) => {
  const options = {
    endpoint: `${API_PREFIX}/subscriptions/${subscriptionId}`
  }
  return Api.authorizedRequest(options)
}

module.exports = {
  getSubscription,
  getSubscriptions
}
