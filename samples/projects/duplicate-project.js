/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const RenderforestClient = require('../../lib/client')

const renderforest = new RenderforestClient({ signKey: '<signKey>', clientId: -1 })

const payload = {
  projectId: 5000658
}
renderforest.duplicateProject(payload)
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
