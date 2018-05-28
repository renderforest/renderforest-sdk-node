# renderforest-sdk-node
Renderforest SDK for Node.js.

[![Build Status](https://travis-ci.org/renderforest/renderforest-sdk-node.svg?branch=master)](https://travis-ci.org/renderforest/renderforest-sdk-node)


[API Reference](https://developers.renderforest.com)


# Introduction

Welcome to the Renderforest API! You can use our API to:

* [Fonts API](#fonts-api)
  - [Get All Fonts](#get-all-fonts)
* [Projects API](#projects-api)
  - [Get All Projects]()
  - [Add Project]()
  - [Get Trial Project]()
  - [Update the Project (partial update)]()
  - [Delete a Specific Project]()
  - [Apply Template Preset on the Project]()
  - [Duplicate the Project]()
  - [Render the Project]()
* [Projects-data API](#projects-data-api)
  - [Get Project-data]()
  - [Update Project-data (partial update)]()
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
  - [Get Theme of the Template](#get-theme-of-the-template)
* [Users API](#users-api)
  - [Get Current User](#get-current-user)
 
 
# API



## Fonts API

### Get All Fonts

Retrieves the fonts for the specific template.
```js
const Renderforest = require('@renderforest/sdk-node')

const renderforest = new Renderforest({ signKey: '<signKey>', clientId: -1 })

const payload = {
  templateId: 805
}
renderforest.getFonts(payload)
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```
- The fontType field takes 0, 1 values at this moment, where 0 is a primary and 1 is a secondary font of the template. 
It might be extended later on to take more values.

[See example](https://github.com/renderforest/renderforest-sdk-node/blob/master/examples/fonts/get-fonts.js)



## Projects API



## Projects-data API



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
