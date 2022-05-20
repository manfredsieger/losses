# What are the files inside the utils folder?

The folder contains files that either contain function that are shared between multiple files or functions / 
   configs that I wanted to store somewhere else to keep my react-components clean and small

### donations.js
`donations.js` provides banking details of all charitable organizations that are mentioned on the website.

### helpers.js
`helpers.js` contains function which are used by multiple react-components but are declared only once.

### languagesConfig.js
`languagesConfig.js` defines languages that are used to display the text on the website as well as languages used to 
translate dates

### lineChartConfig.js
`lineChartConfig.js` provides configuration for the chart on the charts page. It determines how the chart should look 
like, color of the grid etc. It also contains function which create sets of data for each type of losses and array 
of dates to be displayed on the horizontal bottom line of the chart.

### losses.js
`losses.js` was used first as a local database and all data was imported from this file.
After that the project got its own database. But I left the `losses.js` file just in case one needs it (not idea for 
what reason, just in case).

### lossesConfig.js
`lossesConfig.js` is very important file. It contains an object with:
1. Names of losses that will be searched in the json received from server
2. Statement whether this particular losses type shall be rendered or not.

### mapConfig.js
`mapConfig.js` contains information on which legend icons shall be rendered and whether they shall have an image or 
a colored circle. 

### pageNavConfig.js
`pageNavConfig.js` contains configuration on what shall be the configuration buttons and which icons shall they have.

### screenshotConfig.js
`screenshotConfig.js` holds configuration for buttons on the screenshot page which allow user to choose the type of 
image to download

### svgSources.js
`svgSources.js` contains a list of all sources which were used to download icons

### translation.js
`translation.js` holds a translation of the website since it is a bilingual one (English-Ukrainian)
