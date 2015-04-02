function restoreOptions() {
    var trackId = localStorage['trackId'];
    if (!trackId)
        return;
    $('#tracking-id-text').val(trackId);

    var shortenUrl = localStorage['shortenUrl'];
    if(shortenUrl == 1) {
        $('#shorten-url').attr('checked', 'checked');

        $('#bitly-api-key').val(localStorage['bitlyApiKey']);

        $('#bitly-options').show();
    }
}

function hideStatus() {
    setTimeout(function() {
            $('#status').slideUp('slow');
        }, 2000);
}

function saveOptions() {
    var trackId = $('#tracking-id-text').val(),
        shortenUrl = $('#shorten-url').prop('checked') ? 1 : 0
        bitlyApiKey = $('#bitly-api-key').val();

    if (trackId && trackId.length > 0) {
        localStorage['trackId'] = trackId;
        localStorage['shortenUrl'] = shortenUrl;
        if(shortenUrl == 0)
            localStorage['bitlyApiKey'] = '';
        else
            localStorage['bitlyApiKey'] = bitlyApiKey;

        var successBlock = "<span class='success'>Options Saved</span>";
        $('#status').html(successBlock);
        $('#status').slideDown('slow', hideStatus());
    } else {
        var errorBlock = "<span class='error'>UHO, something went wrong</span>";
        $('#status').html(errorBlock);
        $('#status').slideDown('slow', hideStatus());
    }
}

$(document).ready(function() {
    $('#saveButton').click(saveOptions);
    restoreOptions();

    $('#shorten-url').change(function() {
        if($('#shorten-url').prop('checked')) {
            $('#bitly-options').slideDown('fast');
        } else {
            $('#bitly-options').slideUp('fast');
        }
    });
});

