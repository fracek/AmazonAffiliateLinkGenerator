if (window == top) {
  chrome.extension.onRequest.addListener(function(req, sender, senderResponse) {
    senderResponse(findItemID());
  });
}

function findItemID() {
  var itemId = document.getElementById('ASIN').value;
  console.log(itemId);
  return itemId;
}
