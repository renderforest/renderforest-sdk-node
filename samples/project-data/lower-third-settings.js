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
  projectId: 15220886
}

renderforest.getProjectData(payload)
  .then((projectDataInstance) => {
    const screen = projectDataInstance.getScreen(0)

    screen
      .setLowerThirdSettings(2, 5)

    return projectDataInstance.save()
  })
  .catch(console.error)
