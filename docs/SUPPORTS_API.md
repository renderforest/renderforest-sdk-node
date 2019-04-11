## Supports API

  - [Add Supports Ticket](#add-supports-ticket)

### Add Supports Ticket

Creates supports ticket.
```js
const RenderforestClient = require('@renderforest/sdk-node')

const Renderforest = new RenderforestClient({ signKey: '<signKey>', clientId: -1 })

Renderforest.addSupportsTicket({
    message: 'I need to...',
    mailType: 'Creative team',
    subject: 'Some help in ..'
  })
  .then(console.log) // handle the success
  .catch(console.error) // handle the error
```
- The possible values of ticket `mailType` are: 'Sales', 'Report a bug', 'Editing process', 'Creative team', 'Other'.

[See example](/samples/supports/add-supports-ticket.js)

**[⬆ back to the top](#supports-api)**
