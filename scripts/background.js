chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const tabUrl = tab.url ?? tab.pendingUrl;
  if (
    (changeInfo.status === "complete" &&
      tabUrl &&
      tabUrl.includes("linkedin.com/jobs/search")) ||
    tabUrl.includes("linkedin.com/jobs/collections")
  ) {
    chrome.scripting.insertCSS({
      target: { tabId: tabId },
      files: ["css/search.css"],
    });
  } else if (
    changeInfo.status === "complete" &&
    tabUrl &&
    tabUrl.includes("linkedin.com/jobs/view")
  ) {
    chrome.scripting.insertCSS({
      target: { tabId: tabId },
      files: ["css/view.css"],
    });
  }
});
