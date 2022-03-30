import { createSlice } from '@reduxjs/toolkit';

export const pages = {
  losses: 'losses',
  donate: 'donate',
  charts: 'charts',
  screenshot: 'screenshot',
};

export const stylePages = {
  red: [pages.losses, pages.charts],
  white: [pages.donate, pages.screenshot],
};

export const activePageSlice = createSlice({
  name: 'activePage',
  initialState: {
    activePage: pages.losses,
  },
  reducers: {
    setActivePage: (state, action) => {
      if (Object.values(pages).includes(action.payload)) {
        state.activePage = action.payload;
      }
    },
  },
});

export const { setActivePage } = activePageSlice.actions;

export default activePageSlice.reducer;
