/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const RenderforestClient = require('../../lib/client')

const Renderforest = new RenderforestClient({ signKey: '<signKey>', clientId: -1 })

Renderforest.getProjectData(88172301)
  .then((projectDataInstance) => {
    const projectData = projectDataInstance.getRawProjectData()
    const screenIds = projectData.screens.map((screen) => screen.id)
    return Renderforest.getLegoScreensPreviews(88172301, { quality: 0, screenIds })
  })
  .then(console.log)
  .catch(console.error)
