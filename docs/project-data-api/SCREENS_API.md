# Screens API

## Table of Contents

- [Screens API](#screens-api)
  - [Table of Contents](#table-of-contents)
  - [Getters](#getters)
    - [Get areas](#get-areas)
    - [Get area](#get-area)
    - [Calculate screen duration](#calculate-screen-duration)
    - [Get max possible duration](#get-max-possible-duration)
  - [Setters](#setters)
    - [Set duration](#set-duration)
    - [Toggle icon position](#toggle-icon-position)
    - [Set lower third settings](#set-lower-third-settings)
  - [Return project data](#return-project-data)
  - [Save](#save)

## Getters

### Get areas

Gets areas for current screen.

```js
console.log(projectDataInstance.getScreen(0).getAreas()) // array of areas object
```

### Get area

Gets area with given `index` for current screen.

```js
console.log(projectDataInstance.getScreen(0).getArea(0)) // gets area with index 0 (first area)
```

### Calculate screen duration

Calculates screen duration. It's useful when there is need to manually set screen duration.

```js
console.log(projectDataInstance.getScreen(0).calculateScreenDuration())
```

### Get max possible duration

Filters areas to find only video ones. Checks if count of video areas is more than 0, then counts sum of `wordCount`s.
 Otherwise returns `maxDuration` if there is one, or `duration`.

```js
console.log(projectDataInstance.getScreen(0).getMaxPossibleDuration())
```

## Setters

All the setters of screen instance can be called in chain.

### Set duration

If screen's duration is not adjustable, then throws error. If given `duration` is more than max possible duration,
then also throws error. Otherwise sets given value.

```js
Renderforest.getProjectData(15220886)
  .then((projectDataInstance) => 
    projectDataInstance.getScreen(0)
      .setDuration(5)
      .save()
  )
```

### Toggle icon position

If screen does not have icon adjustment, then throws error. Otherwise toggles icon position.

```js
Renderforest.getProjectData(15220886)
  .then((projectDataInstance) => 
    projectDataInstance.setDuration(5)
      .toggleIconPosition()
      .save()
  )
``` 

[See screen duration and toggle icon position adjustment example](/samples/project-data/screen-duration-and-icon-toggle.js)

### Set lower third settings

If screen does'nt have lower third settings then throws error.
Otherwise sets `start` and `duration` params for lower third settings.

```js
Renderforest.getProjectData(15220886)
  .then((projectDataInstance) => 
      projectDataInstance.getScreen(0)
        .setLowerThirdSettings(2, 5)
        .save()
  )
```

[See lower third settings adjustment example](/samples/project-data/lower-third-settings.js)

## Return project data

For project data manipulation sometimes there is need to step back from
area object to project data for further development. 

```js
projectDataInstance.getScreen(0)
  .setLowerThirdSettings(2, 5)
  .returnProjectData()
  .getScreen(1)
  .setDuration(8)
```

## Save

Save method works with the same logic as the project data one. 
From the hood it steps back project data then calls save method. 

```js
projectDataInstance.getScreen(0)
  .setLowerThirdSettings(2, 5)
  .returnProjectData()
  .getScreen(1)
  .setDuration(8)
  .save()
```

**[⬆ back to the top](#screens-api)**
