/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const RenderforestClient = require('../../lib/client')

const Renderforest = new RenderforestClient({ signKey: '<signKey>', clientId: -1 })

Renderforest.getProjectData(6221499)
  .then((projectDataInstance) => {
    return projectDataInstance.setSounds([
      {
        id: 61,
        duration: 7,
        genre: 'corporate',
        lowQuality: 'https://static.rfstat.com/mediahosting/file/Sounds/7_Second/569ac56e-8ab5-4e18-b7d9-7a40a613fc02.mp3',
        path: 'https://usersounds.rfstat.com/Sounds/7%20Second/Angular%2520Indie%2520Track.mp3',
        title: 'Angular Indie'
      }
    ])
      .save()
  }
  )
  .catch(console.error)
