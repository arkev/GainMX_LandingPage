$(document).ready(function(){$('a[href^="#"]').on("click",function(a){var e=$(this.getAttribute("href"));e.length&&(a.preventDefault(),$("html, body").stop().animate({scrollTop:e.offset().top},1e3))}),$(".tab1").on("click",function(){$("#agile-form").addClass("activo").removeClass("apagado"),$("#paso2").addClass("apagado").removeClass("activo"),$("#paso3").addClass("apagado").removeClass("activo"),$(this).addClass("activa"),$(".tab2, .tab3").removeClass("activa")}),$(".tab2").on("click",function(){$("#agile-form").addClass("apagado").removeClass("activo"),$("#paso2").addClass("activo").removeClass("apagado"),$("#paso3").addClass("apagado").removeClass("activo"),$(this).addClass("activa"),$(".tab1, .tab3").removeClass("activa")}),$(".tab3").on("click",function(){$("#agile-form").addClass("apagado").removeClass("activo"),$("#paso2").addClass("apagado").removeClass("activo"),$("#paso3").addClass("activo").removeClass("apagado"),$(this).addClass("activa"),$(".tab1, .tab2").removeClass("activa")})});var countDownDate=new Date("April 13, 2018 8:00:00").getTime(),countdownfunction=setInterval(function(){var a=(new Date).getTime(),e=countDownDate-a,o=Math.floor(e/864e5),t=Math.floor(e%864e5/36e5),s=Math.floor(e%36e5/6e4),l=Math.floor(e%6e4/1e3);document.getElementById("cuentaRegresiva").innerHTML=o+":"+t+":"+s+":"+l,e<0&&(clearInterval(countdownfunction),document.getElementById("cuentaRegresiva").innerHTML="Llegó la hora!")},1e3);