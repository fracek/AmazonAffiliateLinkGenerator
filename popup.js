window.onload = function() {
    var item = chrome.extension.getBackgroundPage().selectedItem;
    if (item) {
        chrome.tabs.getSelected(null, function(tab) {
            var tablink = tab.url,
                host = $.url(tablink).attr('host'),
                link = 'http://' + host + '/dp/' + item + '/?tag='
                        + localStorage['trackId'];
            console.log(link);
            $('#txt').val(link);
        });
    }
}