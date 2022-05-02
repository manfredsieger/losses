# What are the files inside the utils folder?

The folder contains files that either contain function that are shared between multiple files or functions / 
   configs that I wanted to store somewhere else to keep my react-components clean and small

### chartsConfig.js
`chartsConfig.js` provides configuration for the chart on the charts page. It determines how the chart should look 
like, color of the grid etc. It also contains function which create sets of data for each type of losses and array 
of dates to be displayed on the horizontal bottom line of the chart.

### helpers.js
`helpers.js` contains function which are used by multiple react-components but are declared only once.

### losses.js
`losses.js` was used first as a local database and all data was imported from this file.
After that the project got its own database. But I left the `losses.js` file just in case one needs it (not idea for 
what reason, just in case).

### lossesConfig.js
`lossesConfig.js` is very important file. It contains an object with:
1. Names of losses that will be searched in the json received from server
2. Statement whether this particular losses type shall be rendered or not.

### screenshotConfig.js
`screenshotConfig.js` holds configuration for buttons on the screenshot page which allow user to choose the type of 
image to download

### svgSources.js
`svgSources.js` contains a list of all sources which were used to download icons

### translation.js
`translation.js` holds a translation of the website since it is a bilingual one (English-Ukrainian)

---

# How to add new losses types to the app?

1. Come up with a short name for this type of loss. I.e. 'mrbm' for medium-range ballistic missiles or 'submarine' for 
   submarines
2. Go to the `lossesConfig.js` file (losses/src/utils/lossesConfig.js) and add a new key to the object with the name 
   you came up with on the step #1. Add the following object as a value of this key:
   ```
   'name you came up with': {
      name: 'name you came up with',
      display: true,
   },
   ```
3. Go to the `translation.js` file (losses/src/utils/translation.js). In the object in this file go to two places:
   1. `eng.main.losses`
   2. `ua.main.losses`
   
   And add there a new record:
   ```
   [lossesNames.'name you came up with'.name]: {
   name: 'FULL name of the losses type',
   },
   ```
   
   If you use an abbreviation instead of a full name of this losses type, put the abbreviation to the 'name' field and 
   the full explanation of the abbreviation to the 'descr' field:
   ```
   [lossesNames.'name you came up with'.name]: {
   name: 'Abbreviation of the losses type',
   descr: 'FULL name of the losses type',
   },
   ```
4. The last step is to add a svg-icon to the `src/img`-folder. The icon shall be named as `the name you came up with.
   svg`.
