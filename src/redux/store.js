import { configureStore } from '@reduxjs/toolkit';
import activePageReducer from './activePage';
import websiteLanguageReducer from './changeLang';
import modalWindowReducer from './modalWindow';

export default configureStore({
  reducer: {
    activePage: activePageReducer,
    websiteLanguage: websiteLanguageReducer,
    modalWindowText: modalWindowReducer,
  },
});
