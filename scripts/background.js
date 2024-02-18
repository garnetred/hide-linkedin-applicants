chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const tabUrl = tab.url ?? tab.pendingUrl;
  if (
    changeInfo.status === "complete" &&
    tabUrl &&
    tabUrl.includes("linkedin.com/jobs/")
  ) {
    console.log(tabUrl, "taburl");
    chrome.scripting.insertCSS({
      target: { tabId: tabId },
      files: ["css/global.css"],
    });
  }
});
