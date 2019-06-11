# Areas API

## Table of Contents

- [Areas API](#areas-api)
  - [Table of Contents](#table-of-contents)
  - [Getters](#getters)
    - [Get area type](#get-area-type)
    - [Get recommended character count](#get-recommended-character-count)
  - [Setters](#setters)
    - [Set text](#set-text)
      - [Set text scale](#set-text-scale)
    - [Set image](#set-image)
    - [Set video](#set-video)
  - [Return project data](#return-project-data)
  - [Save](#save)

## Getters

### Get area type

Gets area type. Possible values for area types are: `text`, `image`, `video`.

```js
console.log(projectDataInstance.getScreen(1)
  .getArea(0)
  .getAreaType()
)
```

### Get recommended character count

Gets recommended character count for `text` areas. On other types throws error.

```js
console.log(projectDataInstance.getScreen(1)
  .getArea(0)
  .getRecommendedCharacterCount()
)
```

## Setters

### Set text

If area is `text`, then sets given value, otherwise throws error.

```js
Renderforest.getProjectData(15220886)
  .then((projectDataInstance) => {
    projectDataInstance.getScreen(0)
      .getArea(0)
      .setText('sample-text')
  })
```

#### Set text scale

It's possible to set text scale by percentage. The value must be between 80 and 120.
```js
projectDataInstance.getScreen(0)
  .getArea(0)
  .setText('sample-text')
  .setTextScale(120)
```

### Set image

If area is `image`, then sets given image params, otherwise throws error.

```js
Renderforest.getProjectData(15220886)
  .then((projectDataInstance) => {
    projectDataInstance.getScreen(1)
      .getArea(0)
      .setImage({
        fileName: 'sample file name', // optional
        mime: 'image/png', // optional
        filePath: 'https://example.com/sample.png',
        webpPath: 'https://example.com/sample.webp', // optional
        fileType: 'image', // optional
        thumbnailPath: 'https://example.com/sample-thumbnail.png', // optional
        imageCropParams: {
          transform: 0,
          top: 11,
          left: 0,
          width: 798,
          height: 456
        }
    })
  })
``` 

### Set video

If area is `video`, then sets given video params, otherwise throws error.

```js
Renderforest.getProjectData(15220886)
  .then((projectDataInstance) => {
    projectDataInstance.getScreen(2)
      .getArea(0)
      .setVideo({
        fileName: 'sample file name', // optional
        mime: 'video/mp4', // optional
        filePath: 'https://example.com/sample.png',
        webpPath: 'https://example.com/sample.webp', // optional
        fileType: 'video', // optional
        videoCropParams: {
          duration: 6,
          mime: 'video/mp4',
          thumbnail: 'https://example.com/sample-thumbnail.png',
          thumbnailVideo: 'https://example.com/sample-thumbnail-video.mp4',
          trims: [0, 2, 3, 5],
          volume: {
            music: 10,
            video: 100
          }
        }
    })
  })
```

## Return project data

For project data manipulation sometimes there is need to step back from
area object to project data for further development. 

```js
projectDataInstance.getScreen(0)
  .getArea(1)
  .setText('sample-text')
  .setTextScale(100)
  .returnProjectData()
  .getScreen(1)
  .getArea(0)
  .setText('mock-text')
```

## Save

Save method works with the same logic as the project data one. 
From the hood it steps back to project data then calls save method.

```js
projectDataInstance.getScreen(0)
  .getArea(1)
  .setText('sample-text')
  .setTextScale(100)
  .save()
```

[See advanced example for areas](/samples/project-data/set-text-image-video.js)

**[⬆ back to the top](#areas-api)**
