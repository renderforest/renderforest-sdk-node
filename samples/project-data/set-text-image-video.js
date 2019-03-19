/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const RenderforestClient = require('../../lib/client')

const Renderforest = new RenderforestClient({ signKey: '<signKey>', clientId: -1 })

Renderforest.getProjectData(15220886)
  .then((projectDataInstance) => {
    const firstScreen = projectDataInstance.getScreen(0)
    const firstAreaFirstScreen = firstScreen.getArea(0)
    console.log(firstAreaFirstScreen.getRecommendedCharacterCount())
    firstAreaFirstScreen.setText('sample-text')

    const secondScreen = projectDataInstance.getScreen(1)
    const firstAreaSecondScreen = secondScreen.getArea(0)
    console.log(firstAreaSecondScreen.getAreaType())
    firstAreaSecondScreen.setImage({
      fileName: 'sample file name', // optional
      mime: 'image/png', // optional
      filePath: 'https://example.com/sample.png',
      webpPath: 'https://example.com/sample.webp', // optional
      fileType: 'image', // optional
      thumbnailPath: 'https://example.com/sample-thumbnail.png', // optional
      imageCropParams: {
        transform: 0,
        top: 11,
        left: 0,
        width: 798,
        height: 456
      }
    })

    const thirdScreen = projectDataInstance.getScreen(2)
    const firstAreaThirdScreen = thirdScreen.getArea(0)
    firstAreaThirdScreen.setVideo({
      fileName: 'sample file name', // optional
      mime: 'video/mp4', // optional
      filePath: 'https://example.com/sample.png',
      webpPath: 'https://example.com/sample.webp', // optional
      fileType: 'video', // optional
      videoCropParams: {
        duration: 6,
        mime: 'video/mp4',
        thumbnail: 'https://example.com/sample-thumbnail.png',
        thumbnailVideo: 'https://example.com/sample-thumbnail-video.mp4',
        trims: [0, 2, 3, 5],
        volume: {
          music: 10,
          video: 100
        }
      }
    })

    return projectDataInstance.save()
  })
  .catch(console.error)
