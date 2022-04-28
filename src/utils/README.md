# utils folder

The folder contains files that either contain function that are shared between multiple files or functions / 
   configs that I wanted to store somewhere else to keep my react-components clean and small

## chartsConfig.js
`chartsConfig.js` provides configuration for the chart on the charts page. It determines how the chart should look 
like, color of the grid etc. It also contains function which create sets of data for each type of losses and array 
of dates to be displayed on the horizontal bottom line of the chart.

## helpers.js
`helpers.js` contains function which are used by multiple react-components but are declared only once.

## losses.js
`losses.js` was used first as a local database and all data was imported from this file.
After that the project got its own database. But I left the `losses.js` file just in case one needs it (not idea for 
what reason, just in case).

## screenshotConfig.js
`screenshotConfig.js` holds configuration for buttons on the screenshot page which allow user to choose the type of 
image to download

## svgSources.js
`svgSources.js` contains a list of all sources which were used to download icons

## translation.js
`translation.js` holds a translation of the website since it is a bilingual one (English-Ukrainian)
