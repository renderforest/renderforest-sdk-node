/**
 * Copyright (c) 2018-present, Renderforest, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory.
 */

const RenderforestClient = require('../../lib/client')

const Renderforest = new RenderforestClient({ signKey: '<signKey>', clientId: -1 })

Renderforest.getProjectData(7125672)
  .then((projectDataInstance) =>
    projectDataInstance.setMuteMusic(true)
      .setStyles({ theme: '1', transition: '2' })
      .setVoiceOver({ path: 'https://example.com/voice-ower.mp3' })
      .setSounds([
        {
          duration: 120,
          id: 559,
          genre: 'Rock', // optional
          lowQuality: 'https://example.com/sample-low.mp3',
          path: 'https://example.com/sample.mp3',
          title: 'Inspiring Piano'
        },
        {
          duration: 12,
          fileSize: 198658,
          id: 952626,
          path: 'https://example.com/sample.mp3',
          title: 'sound sample.mp3',
          userId: 1469277,
          voiceOver: false
        }
      ])
      .setProjectColors([
        'ffffff', 'a1d4ec', '1d2e54', '61a371', 'a0b6e7', 'e0d0ef', '5c1313', 'b2e1f4', '706bb5', 'b4ddf5'
      ])
      .pushScreen({
        id: 2125620,
        characterBasedDuration: true,
        compositionName: '191_man_Angry_2',
        duration: 5,
        extraVideoSecond: 0,
        iconAdjustable: 0,
        gifPath: 'https://example.com/191_man_Angry_2_1.gif',
        gifBigPath: 'https://example.com/191_man_Angry_2_1.gif',
        gifThumbnailPath: 'https://example.com/191_man_Angry_2_n.jpg',
        hidden: false,
        maxDuration: 15,
        order: 1900,
        path: 'https://example.com/191_man_Angry_2_n.jpg',
        tags: 'business, computer, chair, desk, laptop, occupation, office, worker, arms, boss, boy, businessman,chef, company, employer, professional',
        title: 'Angry Office worker with arms crossed',
        type: 1,
        areas: [
          {
            id: 3562168,
            cords: [656, 224, 1048, 224, 1048, 332, 656, 332],
            height: 108,
            order: 0,
            title: 'char_Angry_2',
            type: 'text',
            value: '',
            wordCount: 40,
            width: 392
          }
        ]
      })
      .removeScreen(0)
      .save()
  )
  .catch(console.error)
