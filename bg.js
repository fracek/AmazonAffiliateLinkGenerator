// Global accessor that the popup uses.
var items = {};
var selectedItem = null;
var selectedId = null;

function updateItem(tabId) {
    chrome.tabs.sendMessage(tabId, {}, function(item) {
        items[tabId] = item;
        if (!item) {
          chrome.pageAction.hide(tabId);
        } else {
          chrome.pageAction.show(tabId);
          if (selectedId == tabId) {
            updateSelected(tabId);
          }
        }
      });
}

function updateSelected(tabId) {
  selectedItem = items[tabId];
  if (selectedItem)
    chrome.pageAction.setTitle({tabId:tabId, title:selectedItem});
}
chrome.tabs.onUpdated.addListener(function(tabId, change, tab) {
  if (change.status == "complete") {
      updateItem(tabId);
  }
});

chrome.tabs.onSelectionChanged.addListener(function(tabId, info) {
  selectedId = tabId;
  updateItem(tabId);
});

// Ensure the current selected tab is set up.
chrome.tabs.getSelected(null, function(tab) {
  updateItem(tab.id);
});