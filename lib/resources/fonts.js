/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const Api = require('../api')

const { API_PREFIX } = require('../config')

const { flattenFont } = require('../util/project-data')

const { FontNotFoundError } = require('../util/error')

/**
 * @param {Number} templateId - The template id to get fonts.
 * @return {Promise.<Array>}
 */
const getTemplateAvailableFonts = (templateId) => {
  const options = {
    endpoint: `${API_PREFIX}/fonts`,
    qs: { templateId }
  }
  return Api.authorizedRequest(options)
    .then((fonts) => {
      /**
       * Gets flatten font by id.
       * @param {Number} id - The font id.
       * @return {Object}
       */
      fonts.getFontById = (id) => {
        const desiredFont = fonts.find((font) => font.id === id)
        if (!desiredFont) {
          throw new FontNotFoundError(`Font with id: ${id} was not found.`)
        }
        return {
          ...flattenFont(desiredFont),
          setCharacterSize: function (count) {
            this.characterSize = count

            return this
          }
        }
      }

      return fonts
    })
}

module.exports = {
  getTemplateAvailableFonts
}
