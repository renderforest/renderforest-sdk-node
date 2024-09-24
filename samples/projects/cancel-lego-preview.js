/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const RenderforestClient = require('../../lib/client')

const Renderforest = new RenderforestClient({ signKey: '<signKey>', clientId: -1 })

const projectId = 88172301
const queueIds = [101628322]

Renderforest.cancelLegoPreview(projectId, queueIds)
  .then(response => {
    console.log('Lego preview cancelled successfully:', response)
  })
  .catch(error => {
    console.error('Error cancelling lego preview:', error)
  })
