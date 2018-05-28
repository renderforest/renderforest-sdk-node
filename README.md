# renderforest-sdk-node
Renderforest SDK for Node.js.

[![Build Status](https://travis-ci.org/renderforest/renderforest-sdk-node.svg?branch=master)](https://travis-ci.org/renderforest/renderforest-sdk-node)


# Introduction

Welcome to the Renderforest API! You can use our API to:

* [Fonts API](#fonts-api)
  - [Get All Fonts]()
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
  - [Get All Sounds]()
  - [Get Recommended Sounds]()
* [Supports API](#supports-api)
  - [Add Supports Ticket]()
* [Templates API](#templates-api)
  - [Get All Templates]()
  - [Get Templates Categories]()
  - [Get a Specific Template]()
  - [Get Color-Presets of the Template]()
  - [Get Pluggable-Screens of the Template]()
  - [Get Recommended-Custom-Colors of the Template](#get-recommended-custom-colors-of-the-template)
  - [Get Template-Presets of the Template](#get-template-presets-of-the-template)
  - [Get Theme of the Template](#get-theme-of-the-template)
* [Users API](#users-api)
  - [Get Current User](#get-current-user)
 
 
# API

## Fonts API

## Projects API

## Projects-data API

## Sounds API

## Supports API

## Templates API

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
