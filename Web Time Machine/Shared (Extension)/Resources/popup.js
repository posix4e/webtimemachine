document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('input');
    const button = document.getElementById('button');
    const saveHistoryButton = document.getElementById('saveHistory');
    const sitesList = document.getElementById('sites-list');

    // Function to create and append history item to list
    function appendHistoryItem(item) {
        var listItem = document.createElement('li');
        var anchor = document.createElement('a');
        anchor.href = item.url;
        anchor.target = '_blank';
        anchor.textContent = item.url;
        anchor.classList.add('truncate');
        listItem.appendChild(anchor);
        sitesList.insertBefore(listItem, sitesList.firstChild); // Insert at the top
    }

    // Append an example item for testing on load
    appendHistoryItem({ url: 'http://example.com' });
    appendHistoryItem({ url: "example" });
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // tabs[0] is the active tab in the current window
        var currentURL = tabs[0].url;
        
        // Do something with the URL
        appendHistoryItem({ url: currentURL });

        console.log(currentURL);
      });
    // Fetch history items and append to list initially
    
    // Search history when the button is clicked
    // Save the current tab's URL when the "Save Current URL" button is clicked
    saveHistoryButton.addEventListener('click', function () {
        
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            // tabs[0] is the active tab in the current window
            var currentURL = tabs[0].url;
            
            // Do something with the URL
            appendHistoryItem({ url: currentURL });

            console.log(currentURL);
          });
    });
});
