/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const RenderforestClient = require('../../lib/client')

// Just a blank project for given tempalte
RenderforestClient.getTrialProject(701)
  .then(console.log) // handle the success
  .catch(console.error) // handle the error

// Project data with preloaded preset data of given template.
RenderforestClient.getTrialProject(701, 2)
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
