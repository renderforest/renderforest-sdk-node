/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const RenderforestClient = require('../../lib/client')

const Renderforest = new RenderforestClient({ signKey: '<signKey>', clientId: -1 })

Promise.all([Renderforest.getRecommendedSounds(1021, { duration: 7 }), Renderforest.getProjectData(6221499)])
  .then(([sounds, projectDataInstance]) => {
    console.log(projectDataInstance.getSounds)
    return projectDataInstance.setSounds([sounds.getSoundById(61), sounds.getSoundById(68)])
      .save()
  })
  .then(console.log)
  .catch(console.error)
