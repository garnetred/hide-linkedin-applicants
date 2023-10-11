# Hide LinkedIn Applicants

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/decemberthedeveloper)

## Abstract
This browser extension hides the number of job applicants for any given job on LinkedIn.

**Note**: this has *not* been tested with LinkedIn Premium. If you're still seeing job applicants on LinkedIn premium feel free to shoot me a message or create an issue so I can work to fix this. 

This extension is also available via the [Chrome Web Store](https://chrome.google.com/webstore/detail/hide-linkedin-applicants/kijengemjcefglfhbkjhfnilepigfcop). 

## Tech Stack
This project uses vanilla JS, CSS, and HTML.

## Setup/Installation
You can clone the repo locally using `git clone`.

[This article](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked) offers detailed instructions on loading an unpacked chrome extension. You can navigate to the chrome extensions page via the puzzle piece icon in the toolbar. Enable "developer mode" on the top-right. From there, you can click "load unpacked extension" and choose the folder via the popup. You should then see the chart icon appear in the toolbar. When you click on it, you can see "Hide LinkedIn Applicants."

If you navigate to `linkedin.com/jobs` while logged in and view specific jobs or browse the list of recommended jobs, you should no longer see the number of applicants. 

## Screenshots

<img width="576" alt="Screen Shot 2023-07-05 at 5 29 11 PM" src="https://github.com/garnetred/hide-linkedin-applicants/assets/59572865/7681f9f8-698b-4c31-90b5-dd1ee3696604">

<img width="538" alt="Screen Shot 2023-07-05 at 5 29 19 PM" src="https://github.com/garnetred/hide-linkedin-applicants/assets/59572865/33a1f3f1-ca1a-4e7d-8c31-b0b71bc36371">


<img width="267" alt="Screen Shot 2023-07-05 at 5 30 08 PM" src="https://github.com/garnetred/hide-linkedin-applicants/assets/59572865/1035b208-8722-4964-81d8-69741e4ee10e">


## Future Changes
I think the same code used to hide the job applicant insights in the unordered list below each job title may also be hiding job posting verification - this is because both elements have the same class. In the future I'd like to come up to a solution to fix this.
I'd also like to create a Firefox version of this extension at some point.

