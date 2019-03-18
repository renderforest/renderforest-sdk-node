/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const RenderforestClient = require('../../lib/client')

const Renderforest = new RenderforestClient({ signKey: '<signKey>', clientId: -1 })

Renderforest.getProjects({
  limit: 2,
  offset: 10,
  includeApiProjects: false,
  order: 'DESC',
  orderBy: 'order',
  search: ''
})
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
