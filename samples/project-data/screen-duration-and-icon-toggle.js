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
    // these steps are not necessary
    const screenDuration = screen.getMaxPossibleDuration()
    console.log(screenDuration)
    const maxDuration = screen.calculateScreenDuration()
    console.log(maxDuration)

    return screen.setDuration(5)
      .toggleIconPosition()
  })
  .catch(console.error)
