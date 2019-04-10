/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const RenderforestClient = require('../../lib/client')

const Renderforest = new RenderforestClient({ signKey: '<signKey>', clientId: -1 })

Promise.all([Renderforest.getTemplateAvailableFonts(1021), Renderforest.getProjectData(15873223)])
  .then(([fonts, projectDataInstance]) => {
    // to know if template has one or more fonts to choose
    console.log(projectDataInstance.getFonts())
    const primaryFont = fonts.getFontById(256).setCharacterSize(20)
    const secondaryFont = fonts.getFontById(1586).setCharacterSize(10)

    return projectDataInstance.resetFonts()
      .setFonts([primaryFont, secondaryFont])
      .save()
  })
  .then(console.log)
  .catch(console.error)
