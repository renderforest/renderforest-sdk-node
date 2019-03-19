/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const RenderforestClient = require('../../lib/client')

const Renderforest = new RenderforestClient({ signKey: '<signKey>', clientId: -1 })

Renderforest.getProjectData(15220886)
  .then((projectDataInstance) => {
    const screen = projectDataInstance.getScreen(0)
    // these steps are not necessary
    const screenDuration = screen.calculateScreenDuration()
    console.log(screenDuration)
    const maxDuration = screen.getMaxPossibleDuration()
    console.log(maxDuration)

    return screen.setDuration(5)
      .toggleIconPosition()
  })
  .catch(console.error)
