import { createSlice } from '@reduxjs/toolkit';

/**
 * Describes all pages the app has.
 * If one adds a new page, it shall
 * be added to this object.
 * Bgc stands for background color.
 */
export const pages = {
  donate: {
    name: 'donate',
    path: '/donate',
    ariaLabel: 'Go to support Ukraine page',
    yellowBgc: true,
    icon: 'icon_heart.svg',
  },
  losses: {
    name: 'losses',
    path: '/',
    ariaLabel: 'Go back to the home page',
    yellowBgc: false,
    icon: 'icon_home.svg',
  },
  charts: {
    name: 'charts',
    path: '/charts',
    ariaLabel: 'Go to page displaying russia`s losses on charts',
    yellowBgc: false,
    icon: 'icon_chart.svg',
  },
  screenshot: {
    name: 'screenshot',
    path: '/screenshot',
    ariaLabel: 'Go to page saving infographic',
    yellowBgc: false,
    icon: 'icon_download.svg',
  },
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
  red: [pages.losses.name, pages.charts.name],
  white: [pages.donate.name, pages.screenshot.name],
};

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
