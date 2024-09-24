const RenderforestClient = require('../../lib/client')

const Renderforest = new RenderforestClient({ signKey: '<signKey>', clientId: -1 })

Renderforest.getProjectPreviewUrls(88172301, { quality: 720 })
  .then((previewUrls) => {
    console.log('Project preview URLs:', previewUrls)
  })
  .catch((error) => {
    console.error('Error getting project preview URLs:', error)
  })
