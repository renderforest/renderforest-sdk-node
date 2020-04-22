/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const RenderforestClient = require('../../lib/client')

const Renderforest = new RenderforestClient({ signKey: '<signKey>', clientId: -1 })

Renderforest.getProjectData(16165971)
  .then((projectDataInstance) =>
    projectDataInstance.getScreen(0)
      .getArea(0)
      .setText('sample-text')
      .setTextScale(120)
      .returnProjectData()
      .getScreen(1)
      .getArea(0)
      .setImage({
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
        },
        colorFilters: { // optional
          sepia: 0, // optional (range is between 0-1, default value is 0)
          contrast: 1, // optional (range is between 0-2.5, default value is 1)
          grayscale: 0, // optional (range is between 0-1, default value is 0)
          saturate: 1, // optional (range is between 0-2.5, default value is 1)
          huerotate: 0, // optional (range is between 0-360)
          brightness: 1 // optional (range is between 0-2.5, default value is 1)
        }
      })
      .returnProjectData()
      .getScreen(2)
      .getArea(0)
      .setVideo({
        fileName: 'sample file name', // optional
        mime: 'video/mp4', // optional
        filePath: 'https://example.com/sample.png',
        webpPath: 'https://example.com/sample.webp', // optional
        fileType: 'video', // optional
        videoCropParams: {
          duration: 6,
          mime: 'video/mp4',
          transform: 0, // angle of the video. Valid values are 0, 90, 180, 270
          thumbnail: 'https://example.com/sample-thumbnail.png',
          thumbnailVideo: 'https://example.com/sample-thumbnail-video.mp4',
          trims: [0, 2, 3, 5],
          volume: {
            music: 10,
            video: 100
          }
        }
      })
      .save()
  )
  .catch(console.error)
