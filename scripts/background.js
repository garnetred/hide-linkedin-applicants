chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const tabUrl = tab.url ?? tab.pendingUrl;
  if (
    changeInfo.status === 'complete' &&
    tabUrl &&
    (tabUrl.includes('linkedin.com/feed') || tabUrl.includes('linkedin.com/in'))
  ) {
    chrome.scripting.insertCSS({
      target: { tabId: tabId },
      files: ['css/global.css'],
    });
  }
});
