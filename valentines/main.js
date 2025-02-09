$(document).ready(function() {
    // Click event to open the envelope
    $('.frame').click(function() {
        $('.top').addClass('open');
        $('.message').addClass('pull');
    });

    // Update Valentine's invitation details
    let valentineName = "Your Special Someone";
    let valentineDate = "February 15-16, 2025";

    $('#valentineName').text(valentineName);
    $('#valentineDate').text(valentineDate);
    $('#valentineTime').text(valentineTime);

    // Modal functionality for the cat GIF
    var modal = $("#catModal");
    var catGif = $("#catGif");
    var close = $(".close");

    // Yes Button - Show Happy Cat and Redirect
    $("#yesButton").click(function() {
        catGif.attr("src", "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXF2Z2xmaHEwN3h5b3RoN2tpYXhyYWM2cmtxaHB1aWd4YTE1MmFuYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/MDJ9IbxxvDUQM/giphy.gif"); // Happy Cat GIF
        modal.fadeIn();

        // Redirect to date.html after 3 seconds
        setTimeout(function() {
            window.location.href = "date.html";
        }, 3000);
    });

    // No Button - Show Sad Cat
    $("#noButton").click(function() {
        catGif.attr("src", "https://media.giphy.com/media/8vQSQ3cNXuDGo/giphy.gif"); // Sad Cat GIF
        modal.fadeIn();
    });

    // Close Modal
    close.click(function() {
        modal.fadeOut();
    });

    $(window).click(function(event) {
        if (event.target.id === "catModal") {
            modal.fadeOut();
        }
    });
});
