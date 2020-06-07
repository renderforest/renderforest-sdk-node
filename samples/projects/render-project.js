/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const RenderforestClient = require('../../lib/client')

const Renderforest = new RenderforestClient({ signKey: '<signKey>', clientId: -1 })

Renderforest.renderProject(4120385, { quality: 360, watermark: 'https://example.com/watermark.png' })
  .then(console.log) // handle the success
  .catch(console.error) // handle the error

// Render project with specified duration (only applicable to visualizer projects and will be dismissed for others.)
Renderforest.renderProject(4120386, { quality: 360, duration: 10, startSecond: 1 })
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
