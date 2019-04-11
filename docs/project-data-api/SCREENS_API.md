## Screens API 

  * [Getters](#getters)
    - [Get areas](#get-areas)
    - [Get area](#get-area)
    - [Calculate screen duration](#calculate-screen-duration)
    - [Get max possible duration](#get-max-possible-duration)
  * [Setters](#setters)
    - [Set duration](#set-duration)
    - [Toggle icon position](#toggle-icon-position)
    - [Set lower third settings](#set-lower-third-settings)

## Getters

### Get areas

Maps through `areas` array and adds it's methods.

```js
const firstScreen = projectDataInstance.getScreen(0)

firstScreen.getAreas() // array of areas object
```

### Get area

Gets area with given `index`.

```js
const firstScreen = projectDataInstance.getScreen(0)

firstScreen.getArea(0) // gets area with index 0 (first area)
```

### Calculate screen duration

Calculates screen duration. It's useful when there is need to manually set screen duration.

```js
const screen = projectDataInstance.getScreen(0)

screen.calculateScreenDuration()
```

### Get max possible duration

Filters areas to find only video ones. Checks if count of video areas is more than 0, then counts sum of `wordCount`s.
 Otherwise returns `maxDuration` if there is one, or `duration`.

```js
const screen = projectDataInstance.getScreen(0)

screen.getMaxPossibleDuration()
```

## Setters

All the setters of screen instance can be called with chaining.

### Set duration

If screen's duration is not adjustable, then throws error. If given `duration` is more than max possible duration,
then also throws error. Otherwise sets given value.

```js
Renderforest.getProjectData(15220886)
  .then((projectDataInstance) => {
    const screen = projectDataInstance.getScreen(0)
    // these steps are not necessary
    const screenDuration = screen.calculateScreenDuration()
    console.log(screenDuration)
    const maxDuration = screen.getMaxPossibleDuration()
    console.log(maxDuration)

    return screen.setDuration(5)
  })
```

### Toggle icon position

If screen does not have icon adjustment, then throws error. Otherwise toggles icon position.

```js
Renderforest.getProjectData(15220886)
  .then((projectDataInstance) => {
    const screen = projectDataInstance.getScreen(0)

    return screen.setDuration(5)
      .toggleIconPosition()
  })
``` 

[See screen duration and toggle icon position adjustment example](/samples/project-data/screen-duration-and-icon-toggle.js)

### Set lower third settings

If screen does'nt have lower third settings then throws error.
Otherwise sets `start` and `duration` params for lower third settings.

```js
Renderforest.getProjectData(15220886)
  .then((projectDataInstance) => {
    const screen = projectDataInstance.getScreen(0)

    screen
      .setLowerThirdSettings(2, 5)

    return projectDataInstance.save()
  })
  .catch(console.error)
```

[See lower third settings adjustment example](/samples/project-data/lower-third-settings.js)

**[⬆ back to the top](#screens-api)**
