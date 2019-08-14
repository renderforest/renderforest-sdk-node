/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const RenderforestClient = require('../../lib/client')

const Renderforest = new RenderforestClient({ signKey: '<signKey>', clientId: -1 })

Renderforest.getProjectData(7096113)
  .then((projectDataInstance) => {
    console.log('Project id:', projectDataInstance.getProjectId())
    console.log('Template id:', projectDataInstance.getTemplateId())
    console.log('Is equalizer:', projectDataInstance.isEqualizer())
    console.log('Is lego:', projectDataInstance.isLego())
    console.log('Title:', projectDataInstance.getTitle())
    console.log('Mute music:', projectDataInstance.getMuteMusic())
    console.log('Sounds:', projectDataInstance.getSounds())
    console.log('Styles:', projectDataInstance.getStyles())
    console.log('VoiceOver:', projectDataInstance.getVoiceOver())
    console.log('Project colors:', projectDataInstance.getProjectColors())
    console.log('Screens:', projectDataInstance.getScreens())
    console.log('Number of screens:', projectDataInstance.getNumberOfScreens())

    const firstScreen = projectDataInstance.getScreen(0)
    const firstAreaFirstScreen = firstScreen.getArea(0)
    console.log('First screen area:', firstAreaFirstScreen)
  })
  .catch(console.error) // handle the error
