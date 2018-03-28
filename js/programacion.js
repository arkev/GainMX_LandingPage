$(document).ready(function () {

    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

});

// Set the date we're counting down to
var countDownDate = new Date("April 13, 2018 8:00:00").getTime();

// Update the count down every 1 second
var countdownfunction = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("cuentaRegresiva").innerHTML = days + ":" + hours + ":" +
        minutes + ":" + seconds;

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("cuentaRegresiva").innerHTML = "Llegó la hora!";
    }
}, 1000);
