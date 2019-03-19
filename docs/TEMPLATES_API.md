## Templates API

_No authorization is required for ./templates API's._

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

### Get All Templates

Retrieves all templates.
```js
const RenderforestClient = require('@renderforest/sdk-node')

RenderforestClient.getTemplates({
    categoryId: 3,
    equalizer: false,
    limit: 4,
    offset: 10
  })
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```
[See example](https://github.com/renderforest/renderforest-sdk-node/blob/master/samples/templates/get-templates.js)


### Get Templates Categories

Retrieves templates categories.

```js
const RenderforestClient = require('@renderforest/sdk-node')

RenderforestClient.getTemplatesCategories({ language: 'en' })
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```
- The supported language codes are: ar, de, en, es, fr, pt, ru, tr.

[See example](https://github.com/renderforest/renderforest-sdk-node/blob/master/samples/templates/get-templates-categories.js)


### Get a Specific Template

Retrieves a specific template.
```js
const RenderforestClient = require('@renderforest/sdk-node')

RenderforestClient.getTemplate(701, { language: 'en' })
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```
- The supported language codes are: ar, de, en, es, fr, pt, ru, tr.

[See example](https://github.com/renderforest/renderforest-sdk-node/blob/master/samples/templates/get-template.js)


### Get Color-Presets of the Template

Retrieves color-presets of the template.
You can apply these color presets to your project to give it better and unique look.
```js
const RenderforestClient = require('@renderforest/sdk-node')

RenderforestClient.getTemplateColorPresets(701)
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```
- The number of color-presets is varying from template to template.

[See example](https://github.com/renderforest/renderforest-sdk-node/blob/master/samples/templates/get-template-color-presets.js)


### Get Pluggable-Screens of the Template

Retrieves pluggable-screens of the template.
```js
const RenderforestClient = require('@renderforest/sdk-node')

RenderforestClient.getTemplatePluggableScreens(701)
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```
- Only lego templates might have a pluggable-screen. 
- The number of pluggable-screens is varying from template to template.
Pluggable-Screens are grouped by categories.

[See example](https://github.com/renderforest/renderforest-sdk-node/blob/master/samples/templates/get-template-pluggable-screens.js)


### Get Recommended-Custom-Colors of the Template

Retrieves recommended-custom-colors of the template.
You can apply these recommended custom colors to your project to give it better and unique look.
```js
const RenderforestClient = require('@renderforest/sdk-node')

RenderforestClient.getTemplateRecommendedCustomColors(701)
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```
- The number of recommended-custom-colors is varying from template to template.

[See example](https://github.com/renderforest/renderforest-sdk-node/blob/master/samples/templates/get-template-recommended-custom-colors.js)


### Get Template-Presets of the Template

Retrieves template-presets of the template.
```js
const RenderforestClient = require('@renderforest/sdk-node')

RenderforestClient.getTemplatePresets(701)
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```
- Only lego templates might have a template-preset.

- The number of template-presets is varying from template to template.
Template-presets are ready-made stories created from this template to fasten your video production.

[See example](https://github.com/renderforest/renderforest-sdk-node/blob/master/samples/templates/get-template-presets.js)


### Get SVG Content of the Template
Retrieves SVG content of the template.

```js
const RenderforestClient = require('@renderforest/sdk-node')

RenderforestClient.getTemplateSVGContent(701)
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```

[See example](https://github.com/renderforest/renderforest-sdk-node/blob/master/samples/templates/get-template-svg-content.js)


### Get Theme of the Template

Retrieves theme of the template.
```js
const RenderforestClient = require('@renderforest/sdk-node')

RenderforestClient.getTemplateTheme(701)
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```
- Both lego & non-lego templates might have a theme.

[See example](https://github.com/renderforest/renderforest-sdk-node/blob/master/samples/templates/get-template-theme.js)



### Get Transitions of the Template

Retrieves transitions of the template.
```js
const RenderforestClient = require('@renderforest/sdk-node')


RenderforestClient.getTemplateTransitions(701)
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```

[See example](https://github.com/renderforest/renderforest-sdk-node/blob/master/samples/templates/get-template-transitions.js)

**[⬆ back to the top](#templates-api)**
