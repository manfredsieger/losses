import { configureStore } from '@reduxjs/toolkit';
import activePageReducer from './activePage';
import websiteLanguageReducer from './changeLang';

export default configureStore({
  reducer: {
    activePage: activePageReducer,
    websiteLanguage: websiteLanguageReducer,
  },
});
