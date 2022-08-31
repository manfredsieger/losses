/*
 The chart is not suitable for to be rendered on small screens.
 If the screen is too small it won't be readable. That is why
 one has to introduce such variable and not to render the chart
 on way to small screens.
 */
import lossesNames from './lossesConfig';
import translation from './translation';

export const SMALL_LANDSCAPE_SCREEN = 300;
/*
 The chart's width and height maintains aspect ratio automatically.
 But when one has a device with small screen width the chart gets too small.
 That is why the chart shall be handled differently before and after user's
 screen is 800px wide.
 One came up with the number 800 by testing.
 */
export const CHART_TO_GROW_SCREEN_WIDTH = 800;
