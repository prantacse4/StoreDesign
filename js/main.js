/**  Second Slider */

$('.slider-two')
    .not(".slick-initialized")
    .slick({
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: ".site-slider-two .slider-btn .prev",
        nextArrow: ".site-slider-two .slider-btn .next",
        slidesToShow: 3,
        slidesToScroll: 3

    });

$('.slider-three')
    .not(".slick-initialized")
    .slick({
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: ".site-slider-three .slider-btn .prev",
        nextArrow: ".site-slider-three .slider-btn .next",
        slidesToShow: 5,
        slidesToScroll: 1

    });



// Scroll to skickyHeader
window.onscroll = function() { myFunction() };
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")


    } else {
        navbar.classList.remove("sticky");
    }
}