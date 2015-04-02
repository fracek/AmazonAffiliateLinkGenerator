window.onload = function() {
    var item = chrome.extension.getBackgroundPage().selectedItem;
    if (item) {
        chrome.tabs.getSelected(null, function(tab) {
            var tablink = tab.url,
                host = $.url(tablink).attr('host'),
                link = 'http://' + host + '/dp/' + item + '/?tag='
                        + localStorage['trackId'];

            console.log(link);
            console.log(localStorage['shortenUrl']);

            if(localStorage['shortenUrl'] == 1) {
                var api_key = localStorage['bitlyApiKey'];

                $.get(
                    "https://api-ssl.bitly.com/v3/shorten",
                    {
                        "access_token" : api_key,
                        "uri" : link,
                        "format": "txt"
                    },
                    function(response) {
                        $('#txt').val(response);
                    }
                );
            } else {
                $('#txt').val(link);
            }
        });
    }
}

