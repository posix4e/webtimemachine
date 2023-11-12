
// Event listener for messages from the content script
safari.application.addEventListener("message", handleMessage, false);

function handleMessage(event) {
  if (event.name === "SaveURL") {
    let url = event.message.url;
    // Save the URL using Safari's storage API
    safari.extension.settings.setItem('lastURL', url);
    console.log(url);
  }
}

