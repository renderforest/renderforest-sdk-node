# Projects-data API 

## Table of Contents

- [Projects-data API](#projects-data-api)
  - [Table of Contents](#table-of-contents)
    - [Get Project-data](#get-project-data)
    - [Getters and Setters of Project-data Instance](#getters-and-setters-of-project-data-instance)
      - [Getters](#getters)
        - [Get project id](#get-project-id)
        - [Get raw project data](#get-raw-project-data)
        - [Get template id](#get-template-id)
        - [Check if project is Equalizer](#check-if-project-is-equalizer)
        - [Check if project is Lego](#check-if-project-is-lego)
        - [Get project title](#get-project-title)
        - [Get mute music](#get-mute-music)
        - [Get project sounds](#get-project-sounds)
        - [Get project styles](#get-project-styles)
        - [Get project voice over](#get-project-voice-over)
        - [Get project fonts](#get-project-fonts)
        - [Get project colors](#get-project-colors)
        - [Get project duration](#get-project-duration)
        - [Get screen](#get-screen)
        - [Get screens](#get-screens)
                - [Get the number of screens](#get-the-number-of-screens)
      - [Setters](#setters)
        - [Set mute music](#set-mute-music)
        - [Set project styles](#set-project-styles)
        - [Set project voice over](#set-project-voice-over)
        - [Set project sounds](#set-project-sounds)
        - [Set project colors](#set-project-colors)
        - [Set project fonts](#set-project-fonts)
        - [Reset project fonts](#reset-project-fonts)
        - [Push screen](#push-screen)
                - [Remove screen](#remove-screen)
      - [Save changes](#save-changes)
    - [Get project screen snapshot](#get-project-screen-snapshot)

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
    console.log('Project duration:', projectDataInstance.getProjectDuration())
    console.log('Screens:', projectDataInstance.getScreens())
    console.log('Number of screens:', projectDataInstance.getNumberOfScreens())


    const firstScreen = projectDataInstance.getScreen(0)
    const firstAreaFirstScreen = firstScreen.getArea(0)
    console.log('First screen area:', firstAreaFirstScreen)
  })
  .catch(console.error) // handle the error
```
[See get project data example](/samples/project-data/get-project-data.js)

### Getters and Setters of Project-data Instance

#### Getters 

##### Get project id

```js
projectDataInstance.getProjectId()  // 7096113
```

##### Get raw project data
```js
projectDataInstance.getRawProjectData()  // Data object
```

##### Get template id
```js
projectDataInstance.getTemplateId()  // 701
```

##### Check if project is Equalizer
```js
projectDataInstance.isEqualizer()  // false
```

##### Check if project is Lego
```js
projectDataInstance.isLego()  // true
```

##### Get project title
```js
projectDataInstance.getTitle()  // 'Explainer Video Toolkit'
```

##### Get mute music
```js
projectDataInstance.getMuteMusic()  // false
```

##### Get project sounds
```js
projectDataInstance.getSounds()  // array of sound objects
```

##### Get project styles
```js
projectDataInstance.getStyles()  // { theme: '1', transition: '2' }
```

##### Get project voice over
```js
projectDataInstance.getVoiceOver() // { path: 'https://example.com/voice-over.mp3' }
```

##### Get project fonts
```js
projectDataInstance.getFonts() // object with default and current fonts
```

##### Get project colors
```js
projectDataInstance.getProjectColors()  // array of color objects
```

##### Get project duration
```js
projectDataInstance.getProjectDuration()  // Project duration
```

##### Get screen
```js
projectDataInstance.getScreen(0)  // screen object or if there is no screen, throws error
```

##### Get screens
```js
projectDataInstance.getScreens() // array of screen objects
```

##### Get the number of screens
```js
projectDataInstance.getNumberOfScreens() // array of screen objects
```

- [See screens API documentation](/docs/project-data-api/SCREENS_API.md)
- [See areas API documentation](/docs/project-data-api/AREAS_API.md)

#### Setters

All the setters of project-data instance can be called with chaining.

##### Set mute music
```js
projectDataInstance.setMuteMusic(true) // returns project data instance
```

##### Set project styles
```js
projectDataInstance.setStyles({ theme: '1', transition: '2' }) // returns project data instance
```

##### Set project voice over
```js
projectDataInstance.setVoiceOver({ path: 'https://example.com/voice-ower.mp3' }) // returns project data instance
```

##### Set project sounds
```js
projectDataInstance.setSounds([
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
   ]) // returns project data instance
```

##### Set project colors
```js
projectDataInstance.setProjectColors([
    'ffffff', 'a1d4ec', '1d2e54', '61a371', 'a0b6e7', 'e0d0ef', '5c1313', 'b2e1f4', '706bb5', 'b4ddf5'
  ]) // returns project data instance
```

##### Set project fonts
```js 
projectDataInstance.setFonts([fontObject1, fontObject2]) // returns project data instance
```

As parameters `setFonts` setter accepts only flatten fonts.

- [See how to get flatten fonts](/docs/FONTS.md#get-template-available-fonts) 
- [See fonts manipulation example](/samples/project-data/template-fonts.js) 

##### Reset project fonts
```js
projectDataInstance.resetFonts() // returns project data instance
```


##### Push screen

Inserts new `screen`, arrange screens by `screen.order` property and normalize orders to have consequent numbers.
In case `screen.order` is less than `0`, then inserts the new `screen` at the beginning of screens.
If `screen.order` property is more than last `screen's` order property, then appends to the end of screens.
Throws `MissingOrderError` if `screen.order` property is missing.

**Push screen method can be called in chain.**

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

##### Remove screen

Removes `screen` by index, arrange screens by `screen.order` property and normalize orders to have consequent numbers.
Can be called only on Lego template projects.
Throws `InvalidScreenOperationError` if called on non-lego template project.

**Remove screen method can be called in chain.**

```js
projectDataInstance.removeScreen(0)
.save()
``` 

Here is example for chaining the setters of project data instance.

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

#### Save changes

After modification of project data with project-data instance setters, you **must** call `save()` method to sync all 
your changes with API. Save method can be called with chaining.

**Save method also can be called in chain.**

```js
Renderforest.getProjectData(15220886)
  .then((projectDataInstance) =>
    projectDataInstance.setMuteMusic(true)
      // do some changes, then call save() method
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

- [See update project data example](/samples/project-data/update-project-data-partial.js)

### Get project screen snapshot

Retrieves a specific screen snapshot. The current screen Id must be set for lego templates.

```js
const Renderforest = require('../../src/lib/renderforest')
const renderforest = new Renderforest({ signKey: '<signKey>', clientId: -1 })
const payload = {
  projectId: 5180504
}
renderforest.getProjectData(payload)
  .then((projectDataInstance) => {
    // Set the screen which snapshot must be returned.
    // Required only for lego templates.
    projectDataInstance.setCurrentScreenId(0)
    const projectData = projectDataInstance.getRawProjectData()
    return renderforest.getScreenSnapshot({ projectData })
  })
  .then(console.log)
  .catch(console.error) // handle the error
  ```
[See get screen snapshot example](/samples/project-data/get-screen-snapshot.js)


**[⬆ back to the top](#projects-data-api)**
