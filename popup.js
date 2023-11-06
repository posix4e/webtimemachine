document.addEventListener('DOMContentLoaded', function () {
    chrome.history.search({ text: '', maxResults: 10 }, function (historyItems) {
      var sitesList = document.getElementById('sites-list');
  
      historyItems.forEach(function (item) {
        // Create a function to fetch the high-res favicon
        function fetchFavicon(url) {
          // Assuming you have permission to make cross-origin requests to the domain
          fetch(url).then(response => response.text()).then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const iconLink = doc.querySelector('link[rel="icon"][sizes="192x192"], link[rel="icon"][sizes="180x180"], link[rel="apple-touch-icon"]');
  
            return iconLink ? iconLink.href : 'http://www.google.com/s2/favicons?domain_url=' + encodeURIComponent(item.url);
          }).catch(() => {
            // Fallback if the fetch fails or icon not found
            return 'http://www.google.com/s2/favicons?domain_url=' + encodeURIComponent(item.url);
          }).then(faviconUrl => {
            // Create list item with high-res favicon
            var listItem = document.createElement('li');
            var img = document.createElement('img');
            var textContainer = document.createElement('div'); // Container for text and date
            var titleSpan = document.createElement('span'); // Create a span for the title
            titleSpan.classList.add('truncate'); // Add the truncate class
            var titleText = document.createTextNode(item.title || item.url);
            titleSpan.appendChild(titleText);
            
            // Create a div for the date
            var dateDiv = document.createElement('div');
            dateDiv.classList.add('date'); // Add the date class for styling
            var visitDate = new Date(item.lastVisitTime); // Convert lastVisitTime to Date object
            var dateText = document.createTextNode(visitDate.toLocaleDateString()); // Convert Date to a date-only string
            dateDiv.appendChild(dateText);

            img.src = faviconUrl;
            img.alt = 'Favicon';

            textContainer.appendChild(titleSpan); // Append the title span to the text container
            textContainer.appendChild(dateDiv); // Append the date div to the text container
            listItem.appendChild(img);
            listItem.appendChild(textContainer); // Append the text container to the list item
            sitesList.appendChild(listItem);
          });
        }
  
        // Call the fetchFavicon function with the URL of the history item
        fetchFavicon(item.url);
      });
    });
  });
  