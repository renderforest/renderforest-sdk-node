## Projects-data API 

  - [Get Project-data](#get-project-data)
    * [Getters](#getters)
    * [Setters](#setters)
    * [Push Screen](#push-screen)
    * [Save changes](#save-changes)

### Get Project-data

Retrieves a specific project-data.

```js
const RenderforestClient = require('@renderforest/sdk-node')

const Renderforest = new RenderforestClient({ signKey: '<signKey>', clientId: -1 })

Renderforest.getProjectData(7096113)
  .then((projectDataInstance) => {
    console.log('Project id:', projectDataInstance.getProjectId())
    console.log('Template id:', projectDataInstance.getTemplateId())
    console.log('Is equalizer:', projectDataInstance.isEqualizer())
    console.log('Is lego:', projectDataInstance.isLego())
    console.log('Title:', projectDataInstance.getTitle())
    console.log('Mute music:', projectDataInstance.getMuteMusic())
    console.log('Sounds:', projectDataInstance.getSounds())
    console.log('Styles:', projectDataInstance.getStyles())
    console.log('VoiceOver:', projectDataInstance.getVoiceOver())
    console.log('Project colors:', projectDataInstance.getProjectColors())
    console.log('Screens:', projectDataInstance.getScreens())

    const firstScreen = projectDataInstance.getScreen(0)
    const firstAreaFirstScreen = firstScreen.getArea(0)
    console.log('First screen area:', firstAreaFirstScreen)
  })
  .catch(console.error) // handle the error
```
[See example](https://github.com/renderforest/renderforest-sdk-node/blob/master/samples/project-data/get-project-data.js)

### Update project data

```js
const Renderforest = new RenderforestClient({ signKey: '<signKey>', clientId: -1 })

Renderforest.getProjectData(7125672)
  .then((projectDataInstance) =>
    projectDataInstance.setMuteMusic(true)
      .setStyles({ theme: '1', transition: '2' })
      .setVoiceOver({ path: 'https://example.com/voice-ower.mp3' })
      .save()
  )
  .catch(console.error)
```

- You can update the following list of properties: `currentScreenId, duration, generator, muteMusic, themeVariableName, 
  themeVariableValue, projectColors, simple, sounds, screens, voiceSoundId`.
- Any top-level properties (writable) can be updated separately (except `themeVariableName` & `themeVariableValue`), as
  well as all of them at the same time.
- The `themeVariableName` & `themeVariableValue` are related to the template theme and both should be updated at the same 
  time. Possible values you can get in the template theme section 
  (https://developers.renderforest.com/#get-theme-of-the-template).
- The `iconAdjustable` field of the screen takes one of the 0, 1 or 2 values. If iconAdjustable is 0, then the icon is 
  not adjustable. The value 1 indicates that the icon is on the left side, and the value 2 indicates that the icon is on 
  the right side. You can update 1 <-> 2 to change the icon from left <-> right.
- No blob data accepted for the value field of a screen area.

### Getters and Setters of Project-data Instance

#### Getters

```js
// get project id
projectDataInstance.getProjectId()  // 7096113

// get template id
projectDataInstance.getTemplateId()  // 701

// check whether is equalizer or not
projectDataInstance.isEqualizer()  // false

// check whether is lego or not
projectDataInstance.isLego()  // true

// get title
projectDataInstance.getTitle()  // 'Explainer Video Toolkit'

// get mute music
projectDataInstance.getMuteMusic()  // false

// get sounds
projectDataInstance.getSounds()  // array of sound objects

// get styles
projectDataInstance.getStyles()  // { theme: '1', transition: '2' }

// get voice over
projectDataInstance.getVoiceOver() // { path: 'https://example.com/voice-over.mp3' }

// get project colors
projectDataInstance.getProjectColors()  // array of color objects

// get project duration
projectDataInstance.getProjectDuration()  // Project duration

// get screen
projectDataInstance.getScreen(0)  // screen object or if there is no screen, throws error

// get screens
projectDataInstance.getScreens() // array of screen objects
```

- [See screens API documentation](https://github.com/renderforest/renderforest-sdk-node/blob/master/docs/project-data-api/SCREENS_API.md)
- [See areas API documentation](https://github.com/renderforest/renderforest-sdk-node/blob/master/docs/project-data-api/AREAS_API.md)

#### Setters

All the setters of project-data instance can be called with chaining.  

```js
projectDataInstance.setMuteMusic(true)
      .setStyles({ theme: '1', transition: '2' }) // get theme/transition from .templates API
      .setVoiceOver({ path: 'https://example.com/voice-ower.mp3' }) // optional
      .setSounds([
        { // sound from ./sounds API
          duration: 120,
          id: 559,
          genre: 'Rock', // optional
          lowQuality: 'https://example.com/sample-low.mp3',
          path: 'https://example.com/sample.mp3',
          title: 'Inspiring Piano'
        },
        { // your own sound
          duration: 12,
          fileSize: 198658,
          id: 952626,
          path: 'https://example.com/sample.mp3',
          title: 'sound sample.mp3',
          userId: 1469277,
          voiceOver: false
        }
      ])
      .setProjectColors([ // get project colors from ./templates API
        'ffffff', 'a1d4ec', '1d2e54', '61a371', 'a0b6e7', 'e0d0ef', '5c1313', 'b2e1f4', '706bb5', 'b4ddf5'
      ])
``` 

#### Push screen

Inserts new `screen`, arrange screens by `screen.order` property and normalize orders to have consequent numbers.
In case `screen.order` is less than `0`, then inserts the new `screen` at the beginning of screens.
If `screen.order` property is more than last `screen's` order property, then appends to the end of screens.
Throws `MissingOrderError` if `screen.order` property is missing.

**Push screen method also can be called in chain.**

```js
projectDataInstance.pushScreen({
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
```

#### Save changes

After modification of project data with project-data instance setters, you **must** call `save()` method to sync all 
your changes with API. Save method can be called with chaining.

**save method also can be called in chain.**

```js
Renderforest.getProjectData(15220886)
  .then((projectDataInstance) =>
    projectDataInstance.setMuteMusic(true)
      /// do some changes, then call save() method
      .save()
  )
  .catch(console.error)
``` 

- [See update project data example](https://github.com/renderforest/renderforest-sdk-node/blob/master/samples/project-data/update-project-data-partial.js)

**[⬆ back to the top](#projects-data-api)**
