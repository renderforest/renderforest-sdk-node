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
  projectId: 7125672
}

async function sample () {
  const projectDataInstance = await renderforest.getProjectData(payload)

  // make some change
  projectDataInstance.setMuteMusic(true)

  const theme = {
    themeVariableName: 'num',
    themeVariableValue: '2'
  }
  projectDataInstance.setTheme(theme) // get theme from ./templates API

  // sound from ./sounds API
  const sound1 = {
    duration: 120,
    id: 559,
    genre: 'Rock', // optional
    lowQuality: 'hosting/file/Sounds/120_second/Inspiring%20Piano%20120%20preview.mp3',
    path: 'https://usersounds.rfstat.com/Sounds/120_second/Inspiring%2520Piano%2520120.mp3',
    title: 'Inspiring Piano'
  }

  // your own sound
  const sound2 = {
    duration: 12,
    fileSize: 198658,
    id: 952626,
    path: 'https://usersounds.rfstat.com/user_1469277/bf69833d-a895-43b4-bedf-f37eeabdc5f7.mp3',
    title: 'sound sample.mp3',
    userId: 1469277,
    voiceOver: false
  }

  projectDataInstance.setSounds([sound1, sound2])

  const screens = projectDataInstance.getScreens()
  // set text on text holder area
  if (screens && screens[0]) {
    const areas = screens[0].getAreas()

    const area = areas[0]
    if (area && area.type === 'text') {
      area.setText('sample text')
    }
  }
  // set image on image holder area
  if (screens && screens[1]) {
    const areas = screens[1].getAreas()

    const area = areas[0]
    if (area && area.type === 'image') {
      const image = {
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
      }

      area.setImage(image)
    }
  }
  // set video on video holder area
  if (screens && screens[2]) {
    const areas = screens[2].getAreas()

    const area = areas[0]
    if (area && area.type === 'video') {
      const video = {
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
      }

      area.setVideo(video)
    }
  }

  const projectColors = [
    { id: 0, hexCode: 'ffffff' },
    { id: 1, hexCode: 'a1d4ec' },
    { id: 2, hexCode: '1d2e54' },
    { id: 3, hexCode: '61a371' },
    { id: 4, hexCode: 'a0b6e7' },
    { id: 5, hexCode: 'e0d0ef' },
    { id: 6, hexCode: '5c1313' },
    { id: 7, hexCode: 'b2e1f4' },
    { id: 8, hexCode: '706bb5' },
    { id: 9, hexCode: 'b4ddf5' }
  ]
  projectDataInstance.setProjectColors(projectColors) // get project colors from ./templates API

  const screen = {
    id: 2125620,
    characterBasedDuration: true,
    compositionName: '191_man_Angry_2',
    duration: 5,
    extraVideoSecond: 0,
    iconAdjustable: 0,
    gifPath: 'https://static.rfstat.com/media/Screens_2016/3rd_gen_2016/Explainer-Video-Toolkit-3gen/Gif/191_man_Angry_2_1.gif',
    gifBigPath: 'https://static.rfstat.com/media/Screens_2016/3rd_gen_2016/Explainer-Video-Toolkit-3gen/Gif/Big-Gif/191_man_Angry_2_1.gif',
    gifThumbnailPath: 'https://static.rfstat.com/media/Screens_2016/3rd_gen_2016/Explainer-Video-Toolkit-3gen/Gif/Gif-thumb/191_man_Angry_2_n.jpg',
    hidden: false,
    maxDuration: 15,
    order: 1900,
    path: 'https://static.rfstat.com/media/Screens_2016/3rd_gen_2016/Explainer-Video-Toolkit-3gen/Screen/191_man_Angry_2_n.jpg',
    tags: 'business, computer, chair, desk, laptop, occupation, office, worker, arms, boss, boy, businessman,chef, company, employer, professional',
    title: 'Angry Office worker with arms crossed',
    type: 1,
    areas: [
      {
        id: 3562168,
        cords: [ 656, 224, 1048, 224, 1048, 332, 656, 332 ],
        height: 108,
        order: 0,
        title: 'char_Angry_2',
        type: 'text',
        value: '',
        wordCount: 40,
        width: 392
      }
    ]
  }
  const _screens = projectDataInstance.getScreens()
  _screens.push(screen)
  projectDataInstance.setScreens(_screens) // get screen from ./templates API

  // get payload data
  const projectId = projectDataInstance.getProjectId()
  const data = projectDataInstance.getPatchObject()

  const result = await renderforest.updateProjectDataPartial({ projectId, data })

  projectDataInstance.resetPatchObject()

  return result
}

sample()
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
