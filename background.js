chrome.tabs.query({ active: true, lastFocusedWindow: true }, function(tabs) {
    var currentTab = tabs[0]; // there will be only one in this array
    console.log(currentTab.url); // this is the URL of the current tab
  });

chrome.history.search({ text: '', maxResults: 10 }, function(data) {
  data.forEach(function(page) {
    console.log(page.url);
  });
});

chrome.history.search({ text: '', maxResults: 10 }, function(historyItems) {
    historyItems.forEach(function(item) {
        var img = document.createElement('img');
        img.src = 'http://www.google.com/s2/favicons?domain_url=' + encodeURIComponent(item.url);
        img.alt = 'Favicon';
        document.body.appendChild(img);
      });
      
  });