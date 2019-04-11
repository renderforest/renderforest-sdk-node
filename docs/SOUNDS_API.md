## Sounds API

  - [Get All Sounds](#get-all-sounds)
  - [Get Recommended Sounds](#get-recommended-sounds)

### Get All Sounds

Retrieves sounds given the duration.

If the authorization is not present, then response limits to 5.
```js
const RenderforestClient = require('@renderforest/sdk-node')

RenderforestClient.getCompanySoundsLimited({ duration: 4 })
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```
[See example](/samples/sounds/get-company-sounds-limited.js)

With authorization it's possible to fetch all sounds.

```js
const RenderforestClient = require('@renderforest/sdk-node')

const Renderforest = new RenderforestClient({ signKey: '<signKey>', clientId: -1 })

Renderforest.getSounds({ duration: 4 })
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```
- The sounds will have greater or equal duration to the specified one.
- **Remember** — any given value of the duration greater than 180 will be overridden by 180!

[See example](/samples/sounds/get-sounds.js)


### Get Recommended Sounds

Retrieves recommended sounds for the given template.

If the authorization is not present, then response limits to 5.
 
```js
const RenderforestClient = require('@renderforest/sdk-node')

RenderforestClient.getRecommendedSoundsLimited(701, { duration: 5 })
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```
[See example](/samples/sounds/get-recommended-sounds-limited.js)

With authorization it's possible to fetch all recommended sounds.

```js
const RenderforestClient = require('@renderforest/sdk-node')

const Renderforest = new RenderforestClient({ signKey: '<signKey>', clientId: -1 })

Renderforest.getRecommendedSounds(701, { duration: 5 })
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```
- These sounds will have greater or equal duration to the specified one.
- **Remember** — any given value of the duration greater than 180 will be overridden by 180!

[See example](/samples/sounds/get-recommended-sounds.js)

**[⬆ back to the top](#sounds-api)**
