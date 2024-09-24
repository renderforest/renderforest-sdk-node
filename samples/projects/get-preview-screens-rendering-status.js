/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const RenderforestClient = require('../../lib/client')

const Renderforest = new RenderforestClient({ signKey: '<signKey>', clientId: -1 })

Renderforest.getLegoPreviewRenderingStatus((error, status) => {
  if (error) {
    console.log(error)
  }
  // take status from here
  console.log(status)
})
