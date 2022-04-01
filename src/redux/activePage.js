import { createSlice } from '@reduxjs/toolkit';

/**
 * Describes all pages the app has.
 * If one adds a new page, it shall
 * be added to this object.
 */
export const pages = {
  losses: 'losses',
  donate: 'donate',
  charts: 'charts',
  screenshot: 'screenshot',
};

/**
 * Currently all app pages have either red
 * or white background. This has implications
 * on the styles of few elements in the app.
 * If new page is added to the app, developer
 * shall define its background color and add
 * this new page to the array of red, white
 * or other pages.
 */
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
