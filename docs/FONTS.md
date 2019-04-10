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

Function returns object containing all fonts. The object which returned has method `getFontById` which accepts `fontId` 
as parameter and returns flatten font. Also given flatten font'a `character size` can be modified by calling 
`setCharacterSize` which accepts font size as parameter.

```js
const primaryFont = fonts.getFontById(256).setCharacterSize(20) // returns flatten font with tuned character size
```

Now the flatten font can be used as parameter for `setFonts` setter in project data instance.

[See setFonts() setter in project data](/docs/project-data-api/PROJECT_DATA_API.md#set-project-fonts)

**[⬆ back to the top](#fonts-api)**
