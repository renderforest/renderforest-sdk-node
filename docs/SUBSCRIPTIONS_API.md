## Subscriptions API

- [Subscriptions API](#subscriptions-api)
    - [Get All Subscriptions](#get-all-subscriptions)
    - [Get a Specific Subscription](#get-a-specific-subscription)

### Get All Subscriptions

Retrieves the subscriptions.
```js
const RenderforestClient = require('@renderforest/sdk-node')

const Renderforest = new RenderforestClient({ signKey: '<signKey>', clientId: -1 })

Renderforest.getSubscriptions({
  status: 'active'
})
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```
- The possible values of subscription `status` are: 'active', 'closed'.

[See example](/samples/subscriptions/get-subscriptions.js)

### Get a Specific Subscription

Gets a specific subscription.
```js
const RenderforestClient = require('@renderforest/sdk-node')

const Renderforest = new RenderforestClient({ signKey: '<signKey>', clientId: -1 })

Renderforest.getSubscription(122)
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```
[See example](/samples/subscriptions/get-subscription.js)

**[⬆ back to the top](#subscriptions-api)**
