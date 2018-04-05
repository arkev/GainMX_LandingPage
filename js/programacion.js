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
    
    $(".tab1").on("click", function () {
        //activar el paso 1
        $("#agile-form").addClass("activo").removeClass("apagado");
        //desactivar el paso 2
        $("#paso2").addClass("apagado").removeClass("activo");
        //Desactivar el paso 3activo
        $("#paso3").addClass("apagado").removeClass("activo");
        //agregarle la clase activa a la pesaña que hicimos click
        $(this).addClass("activa");
        $(".tab2, .tab3").removeClass("activa");
    });
    
    $(".tab2").on('click', function () {
        //Desactivar el paso 1
        $("#agile-form").addClass("apagado").removeClass("activo");
        //activar el paso 2
        $("#paso2").addClass("activo").removeClass("apagado");
        //Desactivar el paso 3
        $("#paso3").addClass("apagado").removeClass("activo");
        //agregarle la clase activa a la pesaña que hicimos click
        $(this).addClass("activa");
        $(".tab1, .tab3").removeClass("activa");
    });
    
    $(".tab3").on('click', function () {
        //Desactivar el paso 1
        $("#agile-form").addClass("apagado").removeClass("activo");
        //activar el paso 2
        $("#paso2").addClass("apagado").removeClass("activo");
        //Desactivar el paso 3
        $("#paso3").addClass("activo").removeClass("apagado");
        //agregarle la clase activa a la pesaña que hicimos click
        $(this).addClass("activa");
        $(".tab1, .tab2").removeClass("activa");
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
