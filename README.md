# renderforest-sdk-node
Renderforest SDK for Node.js.

[![Build Status](https://travis-ci.org/renderforest/renderforest-sdk-node.svg?branch=master)](https://travis-ci.org/renderforest/renderforest-sdk-node)


[API Reference](https://developers.renderforest.com)


# Introduction

Welcome to the Renderforest API! You can use our API to:

* [Projects API](#projects-api)
  - [Get All Projects](#get-all-projects)
  - [Add Project](#add-project)
  - [Get Trial Project](#get-trial-project)
  - [Get a Specific Project](#get-a-specific-project)
  - [Update the Project - partial update](#update-the-project---partial-update)
  - [Delete a Specific Project](#delete-a-specific-project)
  - [Apply Template Preset on the Project](#apply-template-preset-on-the-project)
  - [Duplicate the Project](#duplicate-the-project)
  - [Render the Project](#render-the-project)
* [Projects-data API](#projects-data-api)
  - [Get Project-data](#get-project-data)
  - [Update Project-data - partial update](#update-project-data---partial-update)
  - [Getters and Setters of Project-data Instance](#getters-and-setters-of-project-data-instance)
    * [Getters](#getters)
      - [Get project id](#get-project-id)
      - [Get template id](#get-template-id)
      - [Check whether is equalizer or not](#check-whether-is-equalizer-or-not)
      - [Check whether is lego or not](#check-whether-is-lego-or-not)
      - [Get title](#get-title)
      - [Get mute music](#get-mute-music)
      - [Get sounds](#get-sounds)
      - [Get styles](#get-styles)
      - [Get voice-over](#get-voice-over)
      - [Get project colors](#get-project-colors)
      - [Get project duration](#get-project-duration)
      - [Get screens](#get-screens)
      - [Get screen areas](#get-screen-areas)
      - [Get patch object](#get-patch-object)
    * [Setters](#setters)
      - [Set styles](#set-styles)
      - [Set voice-over](#set-voice-over)
      - [Set mute music](#set-mute-music)
      - [Set sounds](#set-sounds)
      - [Set screen duration](#set-screen-duration)
      - [Set icon position](#set-the-icon-position)
      - [Set text on text holder area](#set-text-on-text-holder-area)
      - [Set image on image holder area](#set-image-on-image-holder-area)
      - [Set video on video holder area](#set-video-on-video-holder-area)
      - [Set project colors](#set-project-colors)
      - [Set screens](#set-screens)  
    * [Push Screen](#push-screen)
* [Sounds API](#sounds-api)
  - [Get All Sounds](#get-all-sounds)
  - [Get Recommended Sounds](#get-recommended-sounds)
* [Supports API](#supports-api)
  - [Add Supports Ticket](#add-supports-ticket)
* [Templates API](#templates-api)
  - [Get All Templates](#get-all-templates)
  - [Get Templates Categories](#get-templates-categories)
  - [Get a Specific Template](#get-a-specific-template)
  - [Get Color-Presets of the Template](#get-color-presets-of-the-template)
  - [Get Pluggable-Screens of the Template](#get-pluggable-screens-of-the-template)
  - [Get Recommended-Custom-Colors of the Template](#get-recommended-custom-colors-of-the-template)
  - [Get Template-Presets of the Template](#get-template-presets-of-the-template)
  - [Get SVG Content of the Template](#get-svg-content-of-the-template)
  - [Get Theme of the Template](#get-theme-of-the-template)
  - [Get Transitions of the Template](#get-transitions-of-the-template)
* [Users API](#users-api)
  - [Get Current User](#get-current-user)
 
 
# API



## Projects API

### Get All Projects

Retrieves the projects.
```js
const Renderforest = require('@renderforest/sdk-node')

const renderforest = new Renderforest({ signKey: '<signKey>', clientId: -1 })

const payload = {
  limit: 2,
  offset: 10
}
renderforest.getProjects(payload)
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```
- The renderedQualities property is optional and present if the project is in renders queue (ongoing rend).

[See example](https://github.com/renderforest/renderforest-sdk-node/blob/master/examples/projects/get-projects.js)


### Add Project

Creates a project.
```js
const Renderforest = require('@renderforest/sdk-node')

const renderforest = new Renderforest({ signKey: '<signKey>', clientId: -1 })

const payload = {
  templateId: 701
}
renderforest.addProject(payload)
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```
- Also, project-data is created with the following list of initial properties: 
  templateId, title, duration, equalizer, isLego, extendableScreens, fps, projectVersion, screens, muteMusic, 
  currentScreenId, projectColors (optional), themeVariableName (optional), themeVariableValue (optional).


- The "muteMusic" is false initially. 
- If template is lego ("isLego": true), then no initial screen is added and "screens" defaults to []. Otherwise, at least one screen is present. 
- The "currentScreenId" is the id of the first screen for non-lego templates & null for lego templates. 
- The "projectColors" is optional and gets value if the template has default colors. Both lego & non-lego templates might have default colors.
- Both "themeVariableName" & "themeVariableValue" are optional and are added (both) if template has theme. Both lego & non-lego templates might have a theme. 

[See example](https://github.com/renderforest/renderforest-sdk-node/blob/master/examples/projects/add-project.js)


### Get Trial Project

This endpoint retrieves a trial project. Designed to allow the user to make a project (trial - without saving) before
 getting logged in to get an overall idea.
The data can be used later to create real project (create project, update project-data with this data).

_No authorization is required for this endpoint._
```js
const Renderforest = require('@renderforest/sdk-node')

const payload = {
  templateId: 701
}
Renderforest.getTrialProject(payload)
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```
[See example](https://github.com/renderforest/renderforest-sdk-node/blob/master/examples/projects/get-trial-project.js)


### Get a Specific Project

Gets a specific project.
```js
const Renderforest = require('@renderforest/sdk-node')

const renderforest = new Renderforest({ signKey: '<signKey>', clientId: -1 })

const payload = {
  projectId: 5000295
}
renderforest.getProject(payload)
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```
[See example](https://github.com/renderforest/renderforest-sdk-node/blob/master/examples/projects/get-project.js)


### Update the Project - partial update

Updates the project (partial update).
```js
const Renderforest = require('@renderforest/sdk-node')

const renderforest = new Renderforest({ signKey: '<signKey>', clientId: -1 })

const payload = {
  projectId: 5000658,
  customTitle: 'Graduation'
}
renderforest.updateProjectPartial(payload)
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```
[See example](https://github.com/renderforest/renderforest-sdk-node/blob/master/examples/projects/update-project-partial.js)


### Delete a Specific Project

Deletes a specific project.
```js
const Renderforest = require('@renderforest/sdk-node')

const renderforest = new Renderforest({ signKey: '<signKey>', clientId: -1 })

const payload = {
  projectId: 5000658
}
renderforest.deleteProject(payload)
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```
[See example](https://github.com/renderforest/renderforest-sdk-node/blob/master/examples/projects/delete-project.js)


### Apply Template Preset on the Project

Applies template preset on the project.
```js
const Renderforest = require('@renderforest/sdk-node')

const renderforest = new Renderforest({ signKey: '<signKey>', clientId: -1 })

const payload = {
  projectId: 5000658,
  presetId: 55
}
renderforest.applyTemplatePresetOnProject(payload)
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```
[See example](https://github.com/renderforest/renderforest-sdk-node/blob/master/examples/projects/apply-template-preset-on-project.js)


### Duplicate the Project

Duplicates the project.
```js
const Renderforest = require('@renderforest/sdk-node')

const renderforest = new Renderforest({ signKey: '<signKey>', clientId: -1 })

const payload = {
  projectId: 5000658
}
renderforest.duplicateProject(payload)
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```
[See example](https://github.com/renderforest/renderforest-sdk-node/blob/master/examples/projects/duplicate-project.js)


### Render the Project

Renders the project.
```js
const Renderforest = require('@renderforest/sdk-node')

const renderforest = new Renderforest({ signKey: '<signKey>', clientId: -1 })

const payload = {
  projectId: 5000658,
  quality: 1080
}
renderforest.renderProject(payload)
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```
- The possible values of the quality are: 0, 360, 720, and 1080.

[See example](https://github.com/renderforest/renderforest-sdk-node/blob/master/examples/projects/render-project.js)



## Projects-data API

### Get Project-data

Retrieves a specific project-data.

```js
const Renderforest = require('@renderforest/sdk-node')

const renderforest = new Renderforest({ signKey: '<signKey>', clientId: -1 })

const payload = {
  projectId: 5180504
}
renderforest.getProjectData(payload)
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

    const screens = projectDataInstance.getScreens()
    const firstScreenAreas = screens && screens[0] && screens[0].getAreas()
    console.log('First screen area:', firstScreenAreas)
  })
  .catch(console.error) // handle the error
```
[See example](https://github.com/renderforest/renderforest-sdk-node/blob/master/examples/project-data/get-project-data.js)

See the [Getters and Setters of Project-data Instance](#getters-and-setters-of-project-data-instance)


### Update Project-data - partial update

Updates the project-data (partial update).

```js
const Renderforest = require('@renderforest/sdk-node')

const renderforest = new Renderforest({ signKey: '<signKey>', clientId: -1 })

const payload = {
  projectId: 7096113
}

async function sample () {
  const projectDataInstance = await renderforest.getProjectData(payload)

  // make some change
  projectDataInstance.setMuteMusic(true)

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
```
- You can update the following list of properties: `currentScreenId, duration, generator, muteMusic, themeVariableName, 
  themeVariableValue, projectColors, simple, sounds, screens, voiceSoundId`.
- Any top-level properties (writable) can be updated separately (except `themeVariableName` & `themeVariableValue`), as
  well as all of them at the same time.
- The `themeVariableName` & `themeVariableValue` are related to the template theme and both should be updated at the same 
  time. Possible values you can get in the template theme section 
  (https://developers.renderforest.com/#get-theme-of-the-template).
- The `iconAdjustable` field of the screen takes one of the 0, 1 or 2 values. If iconAdjustable is 0, then the icon is 
  not updatable. The value 1 indicates that the icon is on the left side, and the value 2 indicates that the icon is on 
  the right side. You can update 1 <-> 2 to change the icon from left <-> right.
- No blob data accepted for the value field of a screen area.


- [See example](https://github.com/renderforest/renderforest-sdk-node/blob/master/examples/project-data/update-project-data-partial.js)
- [See advanced example](https://github.com/renderforest/renderforest-sdk-node/blob/master/examples/project-data/update-project-data-partial-advanced.js)

See the [Getters and Setters of Project-data Instance](#getters-and-setters-of-project-data-instance)


### Getters and Setters of Project-data Instance

#### Getters

##### Get project id
```js
projectDataInstance.getProjectId()  // 7096113
```

##### Get template id
```js
projectDataInstance.getTemplateId()  // 701
```

##### Check whether is equalizer or not
```js
projectDataInstance.isEqualizer()  // false
```

##### Check whether is lego or not
```js
projectDataInstance.isLego()  // true
```

##### Get title
```js
projectDataInstance.getTitle()  // 'Explainer Video Toolkit'
```

##### Get mute music
```js
projectDataInstance.getMuteMusic()  // false
```

##### Get sounds
```js
projectDataInstance.getSounds()  // Array of sound objects
```

##### Get styles
```js
projectDataInstance.getStyles()  // { theme: '1', transition: '2' }
```

##### Get voice-over
```js
projectDataInstance.getVoiceOver() // { path: 'https://example.com/voice-over.mp3' }
```

##### Get project colors
```js
projectDataInstance.getProjectColors()  // Array of color objects
```

##### Get project duration
```js
projectDataInstance.getProjectDuration()  // Project duration  
```

##### Get screens
```js
projectDataInstance.getScreens()  // Array of screen objects
```

##### Get screen areas
```js
const screens = projectDataInstance.getScreens()

const firstScreenAreas = screens && screens[0] && screens[0].getAreas()  // Array of area objects
```

##### Get patch object
```js
projectDataInstance.getPatchObject()  // Object containing local updates. Used to update project-data (partial). 
```


#### Setters

##### Set styles
```js
// get theme/transition from .templates API
const styles = {
  theme: '1', // optional
  transition: '2' // optional
}
projectDataInstance.setStyles(styles)
```

##### Set voice-over
```js
const voiceOver = {
  path: 'https://example.com/voice-ower.mp3' // optional
}
projectDataInstance.setVoiceOver(voiceOver)
```

##### Set mute music
```js
projectDataInstance.setMuteMusic(true)
```

##### Set sounds
```js
// sound from ./sounds API
const sound1 = {
  duration: 120,
  id: 559,
  genre: 'Rock', // optional
  lowQuality: 'https://example.com/sample-low.mp3',
  path: 'https://example.com/sample.mp3',
  title: 'Inspiring Piano'
}

// your own sound
const sound2 = {
  duration: 12,
  fileSize: 198658,
  id: 952626,
  path: 'https://example.com/sample.mp3',
  title: 'sound sample.mp3',
  userId: 1469277,
  voiceOver: false
}

const sounds = [ sound1, sound2 ]
projectDataInstance.setSounds(sounds)
```

##### Set screen duration

It's possible to check if `screen` duration is adjustable, get current screen duration via `calculateScreenDuration`, 
get maximum possible duration for current screen, and to set your desired duration. 
```js
const screens = projectDataInstance.getScreens()

if (screens && screens[0]) {
  const isAdjustable = screens[0].isDurationAdjustable()
  
    if (isAdjustable) {
      const calculateDuration = screens[0].calculateScreenDuration()
      console.log(calculateDuration)
      const maxDuration = screens[0].getMaxPossibleDuration()
      const desiredDuration = 5

      if (desiredDuration <= maxDuration) {
        screens[0].setDuration(desiredDuration)
      }
    }
}
``` 

##### Set icon position

There is two methods `isIconPositionAdjustable` and `changeIconPosition`.
The first one checks if it's possible to adjust icon position. If it returns `0` then it's not possible, 
if a number is greater than `0` it means that icon position is adjustable.
The value `1` stands for the right position, accordingly, the value `2` stands for left position.  
For changing the icon position here is `changeIconPosition` method. It changes icon position value `1<-->2`.
```js
const screens = projectDataInstance.getScreens()

if (screens && screens[0]) {
  if (screens[0].isIconPositionAdjustable()) {
    screens[0].changeIconPosition()
  }
}
```

##### Set text on text holder area
```js
const screens = projectDataInstance.getScreens()

if (screens && screens[0]) {
  const areas = screens[0].getAreas()

  const area = areas[0]
  if (area && area.type === 'text') {
    area.setText('sample text')
  }
}
```

##### Set image on image holder area
```js
const screens = projectDataInstance.getScreens()

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
```

##### Set video on video holder area
```js
const screens = projectDataInstance.getScreens()

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
```

##### Set project colors
```js
// get project colors from ./templates API
const projectColors = [
  'ffffff', 'a1d4ec', '1d2e54', '61a371', 'a0b6e7', 'e0d0ef', '5c1313', 'b2e1f4', '706bb5', 'b4ddf5'
]
projectDataInstance.setProjectColors(projectColors)
```

##### Set screens
```js
// get screen from ./templates API
const screen = {
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
const _screens = projectDataInstance.pushScreen(screen)
projectDataInstance.setScreens(_screens)
```

#### Push screen

Inserts new `screen`, arrange screens by `screen.order` property and normalize orders to have consequent numbers.
In case `screen.order` is less than `0`, then inserts the new `screen` at the beginning of screens.
If `screen.order` property is more than last `screen's` order property, then appends to the end of screens.
Throws `MissingOrderError` if `screen.order` property is missing.
 
```js
const _screens = projectDataInstance.pushScreen(screen) // Array of screens
```

## Sounds API

### Get All Sounds

Retrieves sounds given the duration.

The endpoint supports both authorized and unauthorized requests. If the authorization is not present, then response 
 limits to 5.
```js
const Renderforest = require('@renderforest/sdk-node')

const payload = {
  duration: 4
}

Renderforest.getCompanySoundsLimited(payload)
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```
```js
const Renderforest = require('@renderforest/sdk-node')

const renderforest = new Renderforest({ signKey: '<signKey>', clientId: -1 })

const payload = {
  duration: 4
}
renderforest.getSounds(payload)
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```
- The sounds will have greater or equal duration to the specified one.
- Remember — any given value of the duration greater than 180 will be overridden by 180!

[See example](https://github.com/renderforest/renderforest-sdk-node/blob/master/examples/sounds/get-company-sounds-limited.js)

[See example](https://github.com/renderforest/renderforest-sdk-node/blob/master/examples/sounds/get-sounds.js)


### Get Recommended Sounds

Retrieves recommended sounds for the given template.

The endpoint supports both authorized and unauthorized requests. If the authorization is not present, then response 
 limits to 5.
 
```js
const Renderforest = require('@renderforest/sdk-node')

const payload = {
  templateId: 701,
  duration: 5
}

Renderforest.getRecommendedSoundsLimited(payload)
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```
```js
const Renderforest = require('@renderforest/sdk-node')

const renderforest = new Renderforest({ signKey: '<signKey>', clientId: -1 })

const payload = {
  templateId: 701,
  duration: 5
}
renderforest.getRecommendedSounds(payload)
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```
- These sounds will have greater or equal duration to the specified one.
- Remember — any given value of the duration greater than 180 will be overridden by 180!

[See example](https://github.com/renderforest/renderforest-sdk-node/blob/master/examples/sounds/get-recommended-sounds-limited.js)

[See example](https://github.com/renderforest/renderforest-sdk-node/blob/master/examples/sounds/get-recommended-sounds.js)



## Supports API

### Add Supports Ticket

Creates supports ticket.
```js
const Renderforest = require('@renderforest/sdk-node')

const renderforest = new Renderforest({ signKey: '<signKey>', clientId: -1 })

const payload = {
  message: 'I need to...',
  mailType: 'Sales',
  subject: 'Some help in ..'
}
renderforest.addSupportsTicket(payload)
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```
- The possible values of ticket mailType are: 'Sales', 'Report a bug', 'Editing process', 'Creative team', 'Other'.

[See example](https://github.com/renderforest/renderforest-sdk-node/blob/master/examples/supports/add-supports-ticket.js)



## Templates API

_No authorization is required for ./templates API's._

### Get All Templates

Retrieves all templates.
```js
const Renderforest = require('@renderforest/sdk-node')

const payload = {
  categoryId: 3,
  equalizer: false,
  limit: 4,
  offset: 10
}
Renderforest.getTemplates(payload)
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```
[See example](https://github.com/renderforest/renderforest-sdk-node/blob/master/examples/templates/get-templates.js)


### Get Templates Categories

Retrieves templates categories.

```js
const Renderforest = require('@renderforest/sdk-node')

const payload = {
  language: 'en'
}
Renderforest.getTemplatesCategories(payload)
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```
- The supported language codes are: ar, de, en, es, fr, pt, ru, tr.

[See example](https://github.com/renderforest/renderforest-sdk-node/blob/master/examples/templates/get-templates-categories.js)


### Get a Specific Template

Retrieves a specific template.
```js
const Renderforest = require('@renderforest/sdk-node')

const payload = {
  templateId: 701,
  language: 'en'
}
Renderforest.getTemplate(payload)
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```
- The supported language codes are: ar, de, en, es, fr, pt, ru, tr.

[See example](https://github.com/renderforest/renderforest-sdk-node/blob/master/examples/templates/get-template.js)


### Get Color-Presets of the Template

Retrieves color-presets of the template.
You can apply these color presets to your project to give it better and unique look.
```js
const Renderforest = require('@renderforest/sdk-node')

const payload = {
  templateId: 701
}
Renderforest.getTemplateColorPresets(payload)
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```
- The number of color-presets is varying from template to template.

[See example](https://github.com/renderforest/renderforest-sdk-node/blob/master/examples/templates/get-template-color-presets.js)


### Get Pluggable-Screens of the Template

Retrieves pluggable-screens of the template.
```js
const Renderforest = require('@renderforest/sdk-node')

const payload = {
  templateId: 701
}
Renderforest.getTemplatePluggableScreens(payload)
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```
- Only lego templates might have a pluggable-screen. 
- The number of pluggable-screens is varying from template to template.
Pluggable-Screens are grouped by categories.

[See example](https://github.com/renderforest/renderforest-sdk-node/blob/master/examples/templates/get-template-pluggable-screens.js)


### Get Recommended-Custom-Colors of the Template

Retrieves recommended-custom-colors of the template.
You can apply these recommended custom colors to your project to give it better and unique look.
```js
const Renderforest = require('@renderforest/sdk-node')

const payload = {
  templateId: 701
}
Renderforest.getTemplateRecommendedCustomColors(payload)
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```
- The number of recommended-custom-colors is varying from template to template.

[See example](https://github.com/renderforest/renderforest-sdk-node/blob/master/examples/templates/get-template-recommended-custom-colors.js)


### Get Template-Presets of the Template

Retrieves template-presets of the template.
```js
const Renderforest = require('@renderforest/sdk-node')

const payload = {
  templateId: 701
}
Renderforest.getTemplatePresets(payload)
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```
- Only lego templates might have a template-preset.

- The number of template-presets is varying from template to template.
Template-presets are ready-made stories created from this template to fasten your video production.

[See example](https://github.com/renderforest/renderforest-sdk-node/blob/master/examples/templates/get-template-presets.js)


### Get SVG Content of the Template
Retrieves SVG content of the template.

```js
const Renderforest = require('@renderforest/sdk-node')

const payload = {
  templateId: 701
}
Renderforest.getTemplateSVGContent(payload)
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```

[See example](https://github.com/renderforest/renderforest-sdk-node/blob/master/examples/templates/get-template-svg-content.js)


### Get Theme of the Template

Retrieves theme of the template.
```js
const Renderforest = require('@renderforest/sdk-node')

const payload = {
  templateId: 701
}
Renderforest.getTemplateTheme(payload)
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```
- Both lego & non-lego templates might have a theme.

[See example](https://github.com/renderforest/renderforest-sdk-node/blob/master/examples/templates/get-template-theme.js)



### Get Transitions of the Template

Retrieves transitions of the template.
```js
const Renderforest = require('@renderforest/sdk-node')

const payload = {
  templateId: 701
}
Renderforest.getTemplateTransitions(payload)
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```

[See example](https://github.com/renderforest/renderforest-sdk-node/blob/master/examples/templates/get-template-transitions.js)


## Users API


### Get Current User

Retrieves the current user.
```js
const Renderforest = require('@renderforest/sdk-node')

const renderforest = new Renderforest({ signKey: 'signKey', clientId: -1 })

renderforest.getCurrentUser()
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```
[See example](https://github.com/renderforest/renderforest-sdk-node/blob/master/examples/users/get-current-user.js)
