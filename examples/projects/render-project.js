/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const Renderforest = require('../../src/lib/renderforest')

const renderforest = new Renderforest({ signKey: '<signKey>', clientId: -1 })

const payload = {
  projectId: 5000658,
  quality: 360,
  watermark: 'watermarkURL'
}
renderforest.renderProject(payload)
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
