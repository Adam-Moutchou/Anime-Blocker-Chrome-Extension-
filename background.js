chrome.runtime.onInstalled.addListener(() => {
    chrome.tabs.create({
        url: 'alert.html'
    })
});