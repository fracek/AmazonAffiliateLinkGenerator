function restoreOptions() {
    var trackId = localStorage['trackId'];
    if (!trackId)
        return;
    $('#tracking-id-text').val(trackId);
}

function hideStatus() {
    setTimeout(function() {
            $('#status').slideUp('slow');
        }, 2000);
}

function saveOptions() {
    var trackId = $('#tracking-id-text').val();
    console.log(trackId);
    if (trackId && trackId.length > 0) {
        localStorage['trackId'] = trackId;
        var successBlock = "<span class='success'>Options Saved</span>";
        $('#status').html(successBlock);
        $('#status').slideDown('slow', hideStatus());
    } else {
        var errorBlock = "<span class='error'>UHO, something went wrong</span>";
        $('#status').html(errorBlock);
        $('#status').slideDown('slow', hideStatus());
    }
}

$(document).ready(function(){
    $('#saveButton').click(saveOptions);
    restoreOptions();
});

