/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const crypto = require('crypto')

/**
 * Creates keyed-hash message authentication code (HMAC).
 *  Used core `crypto` module cryptographic hash function.
 *  Secret key - sha512.
 * @param {string} text
 * @param {string} key
 * @returns {string}
 */
const createHMAC = (text, key) => {
  return crypto.createHmac('sha512', key).update(text).digest('hex')
}

/**
 * Generates HMAC based on source and key.
 *  Source is defined as combination of clientId, path, qs, body, nonce and timestamp respectively.
 * @param {{clientId, qs, path, body, nonce, timestamp}} options
 * @param {string} key
 * @returns {string}
 */
const generateHash = (options, key) => {
  const { clientId, qs, path, body, nonce, timestamp } = options
  const hashSource = `${clientId}${path}${qs}${body}${nonce}${timestamp}`

  return createHMAC(hashSource, key)
}

/**
 * Generates nonce.
 *  Creates timestamp
 *  Gets the last 6 chars of the timestamp
 *  Generates random number between 10-99
 *  Combined the last two ones.
 * @returns {string}
 */
const generateNonce = () => {
  const timestamp = Date.now().toString()
  const str = timestamp.substring(timestamp.length - 6)
  const suffix = Math.floor(Math.random() * 90 + 9)

  return `${str}${suffix}`
}

/**
 * Generates HMAC based on source and key.
 *  Source is defined as combination of clientId, originalUrl, timestamp, signKey respectively.
 * @param {{clientId, originalUrl, timestamp, signKey}} options
 * @param {string} key
 * @return {string}
 */
const createSocketAuthHash = (options, key) => {
  const { clientId, originalUrl, timestamp } = options
  const hashSource = `${clientId}${originalUrl}${timestamp}`

  return createHMAC(hashSource, key)
}

module.exports = {
  createSocketAuthHash,
  generateHash,
  generateNonce
}
