/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const RenderforestClient = require('../../lib/client')

const Renderforest = new RenderforestClient({ signKey: '<signKey>', clientId: -1 })

const unsubscribe = Renderforest.getRenderingStatus((error, percentage) => {
  if (error) {
    console.log(error)
  }
  // take percentage from here
  console.log(percentage)
  // if you want in unsubscribe in some case, then you can call unsubscribe method manually
  unsubscribe()
})
