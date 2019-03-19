/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const crypto = require('crypto')

class AuthUtil {
  /**
   * Creates keyed-hash message authentication code (HMAC).
   *  Used core `crypto` module cryptographic hash function.
   *  Secret key - sha512.
   * @param {string} text
   * @param {string} key
   * @returns {string}
   */
  static createHMAC (text, key) {
    return crypto.createHmac('sha512', key).update(text).digest('hex')
  }

  /**
   * Generates HMAC based on source and key.
   *  Source is defined as combination of clientId, path, qs, body, nonce and timestamp respectively.
   * @param {{clientId, qs, path, body, nonce, timestamp}} options
   * @param {string} key
   * @returns {string}
   */
  static generateHash (options, key) {
    const clientId = options.clientId
    const qs = options.qs
    const path = options.path
    const body = options.body
    const nonce = options.nonce
    const timestamp = options.timestamp
    const hashSource = `${clientId}${path}${qs}${body}${nonce}${timestamp}`

    return AuthUtil.createHMAC(hashSource, key)
  }

  /**
   * Generates nonce.
   *  Creates timestamp
   *  Gets the last 6 chars of the timestamp
   *  Generates random number between 10-99
   *  Combined the last two ones.
   * @returns {string}
   */
  static generateNonce () {
    const timestamp = Date.now().toString()
    const str = timestamp.substring(timestamp.length - 6)
    const suffix = Math.floor(Math.random() * 90 + 9)

    return `${str}${suffix}`
  }
}

module.exports = AuthUtil
