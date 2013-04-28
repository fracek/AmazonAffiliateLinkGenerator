if (window == top) {
  chrome.extension.onMessage.addListener(function(req, sender, senderResponse) {
    senderResponse(findItemID());
  });
}

function findItemID() {
  if (window.location.host === 'www.amazon.de') {
    var itemId = document.getElementsByName('ASIN.0')[0].value;
    console.log(itemId);
    return itemId;
  } else {
    var itemId = document.getElementById('ASIN').value;
    console.log(itemId);
    return itemId;
  }
}
