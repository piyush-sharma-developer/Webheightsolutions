$(document).ready(function () {

        $('.main-slider').slick({
                autoplay: true,
                prevArrow: ".prev-btn",
                nextArrow: ".next-btn"
        });

        $('.main-slider2').slick({
                autoplay: true,
                dots: false,
                prevArrow: false,
                nextArrow: false


        });
     
        $('.nav-trigger').click(function(){
                $('.site-content-wrapper').toggleClass('scaled');
             })

             $(".nav-top .menu-mobile").on("click", function() {
                console.log($(this).siblings("ul"))
                $(this).siblings("ul").toggleClass("hide")
                $(this).toggleClass("lickchange")
                
        })
        

});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active2");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
