## Users API

  - [Get Current User](#get-current-user)

### Get Current User

Retrieves the current user.
```js
const RenderforestClient = require('@renderforest/sdk-node')

const Renderforest = new RenderforestClient({ signKey: 'signKey', clientId: -1 })

Renderforest.getCurrentUser()
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```

[See example](/samples/users/get-current-user.js)

**[⬆ back to the top](#users-api)**
