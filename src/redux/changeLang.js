import { createSlice } from '@reduxjs/toolkit';

export const languages = {
  eng: 'eng',
  ua: 'ua',
};

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
