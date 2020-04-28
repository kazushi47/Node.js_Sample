$(() => {
    $('#form').submit((e) => {
        e.preventDefault();
        const message = $('#message').val();
        $('#messages').append($('<li>').text(message));
        $('#message').val('').focus();
    });
});