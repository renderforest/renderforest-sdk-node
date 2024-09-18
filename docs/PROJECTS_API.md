## Projects API

- [Get All Projects](#get-all-projects)
- [Add Project](#add-project)
- [Get Trial Project](#get-trial-project)
- [Get a Specific Project](#get-a-specific-project)
- [Update the Project - partial update](#update-the-project---partial-update)
- [Delete a Specific Project](#delete-a-specific-project)
- [Delete Specific Project Videos](#delete-specific-project-videos)
- [Duplicate the Project](#duplicate-the-project)
- [Render the Project](#render-the-project)
- [Get rendering status](#get-rendering-status)

### Get All Projects

Retrieves the projects.

```js
const RenderforestClient = require("@renderforest/sdk-node");

const Renderforest = new RenderforestClient({ signKey: "<signKey>", clientId: -1 });

Renderforest.getProjects({
  limit: 2,
  offset: 10,
  includeApiProjects: false,
  order: "DESC",
  orderBy: "order",
  search: "",
})
  .then(console.log) // handle the success
  .catch(console.error); // handle the error
```

- The renderedQualities property is optional and present if the project is in renders queue (ongoing rend).
- All the properties of `payload` object are optional.

[See example](/samples/projects/get-projects.js)

### Add Project

Creates a project.

```js
const RenderforestClient = require("@renderforest/sdk-node");

const Renderforest = new RenderforestClient({ signKey: "<signKey>", clientId: -1 });

Renderforest.addProject(701)
  .then(console.log) // handle the success
  .catch(console.error); // handle the error
```

- Also, project-data is created with the following list of initial properties:
  templateId, title, duration, equalizer, isLego, extendableScreens, fps, projectVersion, screens, muteSfx,
  currentScreenId, projectColors (optional), themeVariableName (optional), themeVariableValue (optional).

- The "muteSfx" is false initially.
- If template is lego ("isLego": true), then no initial screen is added and "screens" defaults to []. Otherwise, at least one screen is present.
- The "currentScreenId" is the id of the first screen for non-lego templates & null for lego templates.
- The "projectColors" is optional and gets value if the template has default colors. Both lego & non-lego templates might have default colors.
- Both "themeVariableName" & "themeVariableValue" are optional and are added (both) if template has theme. Both lego & non-lego templates might have a theme.

[See example](/samples/projects/add-project.js)

### Get Trial Project

This endpoint retrieves a trial project. Designed to allow the user to make a project (trial - without saving) before
getting logged in to get an overall idea.
The data can be used later to create real project (create project, update project-data with this data).
Additionally you can get preloaded project data with particular preset of template.

_No authorization is required for this endpoint._

```js
const RenderforestClient = require("@renderforest/sdk-node");

// Just a blank project for given tempalte
RenderforestClient.getTrialProject(701)
  .then(console.log) // handle the success
  .catch(console.error); // handle the error

// Project data with preloaded preset data of given template.
RenderforestClient.getTrialProject(701, 2)
  .then(console.log) // handle the success
  .catch(console.error); // handle the error
```

[See example](/samples/projects/get-trial-project.js)

### Get a Specific Project

Gets a specific project.

```js
const RenderforestClient = require("@renderforest/sdk-node");

const Renderforest = new RenderforestClient({ signKey: "<signKey>", clientId: -1 });

Renderforest.getProject(5000295)
  .then(console.log) // handle the success
  .catch(console.error); // handle the error
```

[See example](/samples/projects/get-project.js)

### Update the Project - partial update

Updates the project (partial update).

```js
const RenderforestClient = require("@renderforest/sdk-node");

const Renderforest = new RenderforestClient({ signKey: "<signKey>", clientId: -1 });

Renderforest.updateProjectPartial(5000658, { customTitle: "Graduation" })
  .then(console.log) // handle the success
  .catch(console.error); // handle the error
```

[See example](/samples/projects/update-project-partial.js)

### Delete a Specific Project

Deletes a specific project.

```js
const RenderforestClient = require("@renderforest/sdk-node");

const Renderforest = new RenderforestClient({ signKey: "<signKey>", clientId: -1 });

Renderforest.deleteProject(5000658)
  .then(console.log) // handle the success
  .catch(console.error); // handle the error
```

[See example](/samples/projects/delete-project.js)

### Delete Specific Project Videos

Deletes specific project videos. The quality parameter is optional.

**IMPORTANT**: If you want to delete only a single quality video, you have to specify quality parameter,
otherwise all quality videos of the project will be deleted.

```js
const RenderforestClient = require("@renderforest/sdk-node");

const Renderforest = new RenderforestClient({ signKey: "<signKey>", clientId: -1 });

Renderforest.deleteProjectVideos(4120385, 360)
  .then(console.log) // handle the success
  .catch(console.error); // handle the error
```

[See example](/samples/projects/delete-project-videos.js)

### Duplicate the Project

Duplicates the project.

```js
const RenderforestClient = require("@renderforest/sdk-node");

const Renderforest = new RenderforestClient({ signKey: "<signKey>", clientId: -1 });

Renderforest.duplicateProject(5000658)
  .then(console.log) // handle the success
  .catch(console.error); // handle the error
```

[See example](/samples/projects/duplicate-project.js)

### Render the Project

Renders the project with given quality. The possible values for the quality are: 0, 360, 720, and 1080.
The watermark parameter is optional, must be in '.png' file format and have canvas size of 1920 x 1080 pixels,
url length must not exceed 250 characters.

```js
const RenderforestClient = require("@renderforest/sdk-node");

const Renderforest = new RenderforestClient({ signKey: "<signKey>", clientId: -1 });

Renderforest.renderProject(4120385, { quality: 360, watermark: "https://example.com/watermark.png" })
  .then(console.log) // handle the success
  .catch(console.error); // handle the error

Renderforest.renderProject(4120386, { quality: 360, duration: 15, startSecond: 10 })
  .then(console.log) // handle the success
  .catch(console.error); // handle the error
```

- The possible values of the quality are: 0, 360, 720, and 1080.
- Additionally, `duration` and `startSecond` parameters can be specified as rendering options. These
  parameters are only applicable to visualizer projects. They will be dismissed for other projects.

[See example](/samples/projects/render-project.js)

### Get rendering status

Our rendering status method uses user's defined `callback` to manage rendering status percentage
and uses error first callback pattern. If you want to unsubscribe from getting rendering status
(before rendering finishes) then simply call
`unsubscribe` (`getRenderingStatus` method returns function to unsubscribe from getting rendering status).

```js
const RenderforestClient = require("@renderforest/sdk-node");

const Renderforest = new RenderforestClient({ signKey: "<signKey>", clientId: -1 });

Renderforest.renderProject(15431416, { quality: 720 }).then(() => {
  const unsubscribe = Renderforest.getRenderingStatus((error, percentage) => {
    if (error) {
      console.log(error);
    }
    // take percentage from here
    console.log(percentage);
    // if you want in unsubscribe (before rendering finishes) for some reason, then simply call unsubscribe
    unsubscribe();
  });
});
```

### Preview Screens for lego templates

Generates a preview of the lego project's screens.

```js
const Renderforest = require("../../src/lib/renderforest");
const renderforest = new Renderforest({ signKey: "<signKey>", clientId: -1 });

renderforest
  .getProjectData(7096113)
  .then((projectDataInstance) => {
    const projectData = projectDataInstance.getRawProjectData();
    const screenIds = projectData.screens.map((screen) => screen.id);
    return Renderforest.generateLegoScreensPreviews(projectData.projectId, screenIds);
  })
  .then((previewData) => {
    console.log("Preview data:", previewData);
  })
  .catch(console.error); // handle the error
```

[See lego preview screens example](/samples/projects/preview-screens.js)

### Get rendering status of screens for lego templates

Retrieves the rendering status of individual screens for lego templates. This method allows you to track the progress of rendering for each screen in a lego project.

```js
const RenderforestClient = require("../../lib/client");

const Renderforest = new RenderforestClient({ signKey: "<signKey>", clientId: -1 });

Renderforest.getLegoPreviewRenderingStatus((error, status) => {
  if (error) {
    console.log(error);
  }
  // take percentage from here
  console.log(status);
});
```

[See get rendering status of screens for lego templates example](/samples/projects/get-preview-screens-rendering-status.js)

### Cancel Lego Preview

Cancels the lego preview.

```js
const RenderforestClient = require("../../lib/client");

const Renderforest = new RenderforestClient({ signKey: "<signKey>", clientId: -1 });

Renderforest.cancelLegoPreview(88172301, [101628322])
  .then(console.log) // handle the success
  .catch(console.error); // handle the error
```

[See cancel lego preview example](/samples/projects/cancel-lego-preview.js)

**[⬆ back to the top](#projects-api)**
