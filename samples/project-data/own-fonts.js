/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const RenderforestClient = require('../../lib/client')

const Renderforest = new RenderforestClient({ signKey: '<signKey>', clientId: -1 })

Promise.all([Renderforest.getOwnFonts(), Renderforest.getProjectData(15873223)])
  .then(([fonts, projectDataInstance]) => {
    // to know if template has one or more fonts to choose
    console.log(projectDataInstance.getFonts())
    return projectDataInstance.resetFonts()
      .setFonts([fonts.getFontById(11), fonts.getFontById(29)])
      .save()
  })
  .then(console.log)
  .catch(console.error)
