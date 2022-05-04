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
