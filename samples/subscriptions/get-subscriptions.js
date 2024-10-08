/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const RenderforestClient = require('../../lib/client')

const Renderforest = new RenderforestClient({ signKey: '<signKey>', clientId: -1 })

Renderforest.getSubscriptions({
  status: 'active' // can be either 'active' or 'closed'
})
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
