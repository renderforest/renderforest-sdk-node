## Areas API 

  * [Getters](#getters)
    - [Get area type](#get-area-type)
    - [Get recommended character count](#get-recommended-character-count)
  * [Setters](#setters)
    - [Set text](#set-text)
    - [Set image](#set-image)
    - [Set video](#set-video)

## Getters

### Get area type

Gets area type. Possible values are: `text`, `image`, `video`.

```js
const secondScreen = projectDataInstance.getScreen(1)
const firstAreaSecondScreen = secondScreen.getArea(0)

firstAreaSecondScreen.getAreaType()
```

### Get recommended character count

Gets recommended character count for `text` areas. On other types throws error.

```js
const firstScreen = projectDataInstance.getScreen(0)
const firstAreaFirstScreen = firstScreen.getArea(0)

firstAreaFirstScreen.getRecommendedCharacterCount()
```

## Setters

### Set text

If area is `text`, then sets given value, otherwise throws error.

```js
Renderforest.getProjectData(15220886)
  .then((projectDataInstance) => {
    const firstScreen = projectDataInstance.getScreen(0)
    const firstAreaFirstScreen = firstScreen.getArea(0)
    
    firstAreaFirstScreen.setText('sample-text')
  })
```

### Set image

If area is `image`, then sets given image params, otherwise throws error.

```js
Renderforest.getProjectData(15220886)
  .then((projectDataInstance) => {
    const secondScreen = projectDataInstance.getScreen(1)
    const firstAreaSecondScreen = secondScreen.getArea(0)
    
    firstAreaSecondScreen.setImage({
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
    const thirdScreen = projectDataInstance.getScreen(2)
    const firstAreaThirdScreen = thirdScreen.getArea(0)
    
    firstAreaThirdScreen.setVideo({
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

[See advanced example for areas](/samples/project-data/set-text-image-video.js)

**[⬆ back to the top](#areas-api)**
