chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const tabUrl = tab.url ?? tab.pendingUrl;
  if (
    changeInfo.status === "complete" &&
    tabUrl &&
    tabUrl.includes("linkedin.com/jobs/view")
  ) {
    chrome.scripting.insertCSS({
      target: { tabId: tabId },
      files: ["css/view.css"],
    });
  } else if (
    changeInfo.status === "complete" &&
    tabUrl &&
    tabUrl.includes("linkedin.com/jobs")
  ) {
    chrome.scripting.insertCSS({
      target: { tabId: tabId },
      files: ["css/search.css"],
    });
  }
});
