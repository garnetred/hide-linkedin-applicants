# Hide LinkedIn Applicants

## Abstract
This browser extension hides the page view and post impression statistics on LinkedIn.

## Tech Stack
This project uses vanilla JS, CSS, and HTML.

## Setup/Installation
You can clone the repo locally using `git clone`.

[This article](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked) offers detailed instructions on loading an unpacked chrome extension. You can navigate to the chrome extensions page via the puzzle piece icon in the toolbar. Enable "developer mode" on the top-right. From there, you can click "load unpacked extension" and choose the folder via the popup. You should then see the chart icon appear in the toolbar. When you click on it, you can see "Hide LinkedIn Applicants."

If you navigate to `linkedin.com/jobs` while logged in and select a specific job, you should no longer see the number of applicants below the job title. You should also not see it in the list next to an option to reactivate premium if you're not a Premium member.

