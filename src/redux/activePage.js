import { createSlice } from '@reduxjs/toolkit';
import { pages } from '../utils/pageNavConfig';

export const activePageSlice = createSlice({
  name: 'activePage',
  initialState: {
    activePage: pages.losses.name,
  },
  reducers: {
    setActivePage: (state, action) => {
      if (pages[action.payload].name) {
        state.activePage = action.payload;
      }
    },
  },
});

export const { setActivePage } = activePageSlice.actions;

export default activePageSlice.reducer;
