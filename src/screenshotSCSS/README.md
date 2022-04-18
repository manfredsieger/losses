# The screenshotSCSS folder

1. The screenshotSCSS folder has scss-files containing rules for 4 types of infographic on the Screenshot page - two for Facebook, one for Instagram and one for Twitter.

2. All 4 types of infographic consist of components that are already used on the home page of the website. This means, that both the home page and those 4 infographic types share common components and styles. 

3. At the same time those 4 infographics have different dimensions. Although some styles stay unchanged, the others shall be altered for specific infographic to look good. So, one needed to:
    1. Keep using common global styles
    2. Add new scss rules to adjust all infographic elements to the new layout

4. That is why the screenshotSCSS folder contains 5 files:
    1. screenshotCommon - rules for overall infographic padding
    2. screenshotDates, screenshotHeader, screenshotLogo, screenshotLosses - rules for section with dates, header, logo and losses

5. Each of these 5 files has 4 sections (each for a separate infographic type). Rules of each section apply only for infographic with a certain dimensions.
In other words, `screenshotDates.scss`, for example, contains rules for Dates section for:
    1. 1024 * 512 infographic
    2. 1080 * 1920 infographic
    3. 1080 * 1080 infographic
    4. 940 * 788 infographic

The same applies also for remaining four files.
