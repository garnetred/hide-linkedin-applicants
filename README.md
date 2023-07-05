# No LinkedIn Profile Stats

## Abstract
This browser extension hides the page view and post impression statistics on LinkedIn.

## Tech Stack
This project uses vanilla JS, CSS, and HTML.

## Setup/Installation
You can clone the repo locally using `git clone`.

[This article](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked) offers detailed instructions on loading an unpacked chrome extension. You can navigate to the chrome extensions page via the puzzle piece icon in the toolbar. Enable "developer mode" on the top-right. From there, you can click "load unpacked extension" and choose the folder via the popup. You should then see the chart icon appear in the toolbar. When you click on it, you can see "Hide LinkedIn Profile Stats." If you navigate to `linkedin.com/feed` while logged in, on the left-hand side of the page you should no longer see "Impressions of your post" or "Profile views." If you have a business account, you should no longer see "Page notifications" or "Page visitors" on the left-hand side, either. If you navigate to your profile page (url should include `linkedin.com/in`) or someone else's, on the right-hand side of the page you should no longer see suggestions of people or pages to follow.



