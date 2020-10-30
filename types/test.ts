import RenderforestClient from 'renderforest-sdk-node';

const Renderforest = new RenderforestClient({
  signKey: '<signKey>',
  clientId: -1
});

Renderforest.addProject(701)
  .then(console.log) // handle the success
  .catch(console.error); // handle the error

Renderforest.deleteProjectVideos(4120385, 360)
  .then(console.log) // handle the success
  .catch(console.error); // handle the error

Renderforest.deleteProject(5000658)
  .then(console.log) // handle the success
  .catch(console.error); // handle the error

Renderforest.duplicateProject(5000658)
  .then(console.log) // handle the success
  .catch(console.error); // handle the error

Renderforest.getProject(5000295)
  .then(console.log) // handle the success
  .catch(console.error); // handle the error

Renderforest.getProjects({
  limit: 2,
  offset: 10,
  includeApiProjects: false,
  order: 'DESC',
  orderBy: 'order',
  search: ''
})
  .then(console.log) // handle the success
  .catch(console.error); // handle the error

Renderforest.getSubscription(122)
  .then(console.log) // handle the success
  .catch(console.error); // handle the error

Renderforest.getSubscriptions({
    status: 'active'
  })
    .then(console.log) // handle the success
    .catch(console.error); // handle the error

const unsubscribe = Renderforest.getRenderingStatus((error, percentage) => {
  if (error) {
    console.log(error);
  }
  // take percentage from here
  console.log(percentage);
  // if you want in unsubscribe in some case, then you can call unsubscribe method manually
  unsubscribe();
});

// Just a blank project for given tempalte
RenderforestClient.getTrialProject(701)
  .then(console.log) // handle the success
  .catch(console.error); // handle the error

// Project data with preloaded preset data of given template.
RenderforestClient.getTrialProject(701, 2)
  .then(console.log) // handle the success
  .catch(console.error); // handle the error

Renderforest.renderProject(4120385, {
  quality: 360,
  watermark: 'https://example.com/watermark.png'
})
  .then(console.log) // handle the success
  .catch(console.error); // handle the error

Renderforest.updateProjectPartial(5000658, { customTitle: 'Graduation' })
  .then(console.log) // handle the success
  .catch(console.error); // handle the error

Renderforest.getProjectData(7096113)
  .then((projectDataInstance: any) => {
    console.log('Project id:', projectDataInstance.getProjectId());
    console.log('Template id:', projectDataInstance.getTemplateId());
    console.log('Is equalizer:', projectDataInstance.isEqualizer());
    console.log('Is lego:', projectDataInstance.isLego());
    console.log('Title:', projectDataInstance.getTitle());
  })
  .catch(console.error); // handle the error

Renderforest.getProjectData(15220886)
  .then((projectDataInstance: any) => {
    // Set the screen which snapshot must be returned.
    // Required only for lego templates.
    projectDataInstance.setCurrentScreenId(2);

    const projectData = projectDataInstance.getRawProjectData();
    return Renderforest.getScreenSnapshot({ projectData });
  })
  .then(console.log)
  .catch(console.error);

Renderforest.getTemplateAvailableFonts(1021)
  .then(console.log) // handle the success
  .catch(console.error); // handle the error

RenderforestClient.getCompanySoundsLimited({ duration: 4 })
  .then(console.log) // handle the success
  .catch(console.error); // handle the error

RenderforestClient.getRecommendedSoundsLimited(701, { duration: 5 })
  .then(console.log) // handle the success
  .catch(console.error); // handle the error

Renderforest.getRecommendedSounds(701, { duration: 5 })
  .then(console.log) // handle the success
  .catch(console.error); // handle the error

Renderforest.getSounds({ duration: 4 })
  .then(console.log) // handle the success
  .catch(console.error); // handle the error

Renderforest.addSupportsTicket({
  message: 'I need to...',
  mailType: 'Creative team',
  subject: 'Some help in ..'
})
  .then(console.log) // handle the success
  .catch(console.error); // handle the error

Renderforest.getCurrentUser()
  .then(console.log) // handle the success
  .catch(console.error); // handle the error

RenderforestClient.getTemplateColorPresets(701)
  .then(console.log) // handle the success
  .catch(console.error); // handle the error

RenderforestClient.getTemplates({
  categoryId: 3,
  equalizer: false,
  limit: 4,
  offset: 10
})
  .then(console.log) // handle the success
  .catch(console.error); // handle the error

RenderforestClient.getTemplatesCategories({ language: 'en' })
  .then(console.log) // handle the success
  .catch(console.error); // handle the error

RenderforestClient.getTemplate(701, { language: 'en' })
  .then(console.log) // handle the success
  .catch(console.error); // handle the error

RenderforestClient.getTemplateTransitions(701)
  .then(console.log) // handle the success
  .catch(console.error); // handle the error

RenderforestClient.getTemplateTheme(701)
  .then(console.log) // handle the success
  .catch(console.error); // handle the error

RenderforestClient.getTemplateSVGContent(701)
  .then(console.log) // handle the success
  .catch(console.error); // handle the error

RenderforestClient.getTemplateRecommendedCustomColors(701)
  .then(console.log) // handle the success
  .catch(console.error); // handle the error

RenderforestClient.getTemplatePresets(701)
  .then(console.log) // handle the success
  .catch(console.error); // handle the error

RenderforestClient.getTemplatePluggableScreens(701)
  .then(console.log) // handle the success
  .catch(console.error); // handle the error
