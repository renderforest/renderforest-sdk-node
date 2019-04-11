## Fonts API

  - [Get Template Available Fonts](#get-template-available-fonts)

### Get template available fonts

Retrieves template available fonts.
```js
const RenderforestClient = require('@renderforest/sdk-node')

const Renderforest = new RenderforestClient({ signKey: '<signKey>', clientId: -1 })

Renderforest.getTemplateAvailableFonts(1021)
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```

[See example](/samples/fonts/get-template-available-fonts.js)

`getTemplateAvailabeFonts ` function returns an object containing all fonts. 
The returned object has `getFontById ` method which accepts `fontId` parameter. 
`getFontId` method returns flattened font.

**Be careful**: `setFonts()` project data instance setter accepts only flattened font. 

```js
const primaryFont = fonts.getFontById(256) // returns flatten font with tuned character size
```

Now the flatten font can be used as parameter for `setFonts` setter in project data instance.

[See setFonts() setter in project data](/docs/project-data-api/PROJECT_DATA_API.md#set-project-fonts)

**[⬆ back to the top](#fonts-api)**
