/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const Renderforest = require('../../src/lib/renderforest')

const renderforest = new Renderforest({ signKey: '<signKey>', clientId: -1 })

const payload = {
  projectId: 7096113
}
renderforest.getProjectData(payload)
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

    const screens = projectDataInstance.getScreens()
    const firstScreenAreas = screens && screens[0] && screens[0].getAreas()
    console.log('First screen area:', firstScreenAreas)
  })
  .catch(console.error) // handle the error
