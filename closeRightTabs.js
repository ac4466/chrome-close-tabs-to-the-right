const closeRightTabs = async () => {
  const currentTab = (await chrome.tabs.query({ currentWindow: true, active: true }))[0];
  if (!currentTab) {
    return;
  }

  const allTabs = await chrome.tabs.query({ currentWindow: true, pinned: false });
  const tabIdsToRemove = allTabs.filter((tab) => tab.index > currentTab.index).map((tab) => tab.id);
  await chrome.tabs.remove(tabIdsToRemove);
};

chrome.action.onClicked.addListener(closeRightTabs);
