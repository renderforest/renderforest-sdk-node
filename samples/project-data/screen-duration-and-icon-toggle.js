/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const RenderforestClient = require('../../lib/client')

const Renderforest = new RenderforestClient({ signKey: '<signKey>', clientId: -1 })

Renderforest.getProjectData(16165971)
  .then((projectDataInstance) => {
    const screen = projectDataInstance.getScreen(0)
    // these steps are not necessary
    const screenDuration = screen.calculateScreenDuration()
    console.log(screenDuration)
    const maxDuration = screen.getMaxPossibleDuration()
    console.log(maxDuration)

    return projectDataInstance
      .getScreen(0)
      .setDuration(5)
      .returnProjectData()
      .getScreen(1)
      .toggleIconPosition()
      .save()
  })
  .catch(console.error)
