import { createSlice } from '@reduxjs/toolkit';
import languages from '../utils/languagesConfig';

export const languageSlice = createSlice({
  name: 'websiteLanguage',
  initialState: {
    websiteLanguage: languages.eng,
  },
  reducers: {
    setWebsiteLanguage: (state, action) => {
      if (Object.values(languages).includes(action.payload)) {
        state.websiteLanguage = action.payload;
      }
    },
  },
});

export const { setWebsiteLanguage } = languageSlice.actions;

export default languageSlice.reducer;
