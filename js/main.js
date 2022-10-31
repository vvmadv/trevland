$(document).ready(function () {
    $(".sliders").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        
        prevArrow:"<button type='button' class='btn-slick-prev  btn btn-slider'><img src='images/arrow-left.svg' alt='prev'></button>",
        nextArrow:"<button type='button' class='btn-slick-next btn btn-slider'><img src='images/arrow-right.svg' alt='next'></button>",
        responsive: [
             {
            breakpoint: 1401,
            settings: {
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: true,
            }
          },
          {
            breakpoint: 1101,
            settings: {
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true,
            }
          },
          {
            breakpoint: 851,
            settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 4000,
            }
          },
          {
            breakpoint: 551,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 4000,
            }
          },
        ]
    })


$(".mobile-menu").click(function() {
    $(".mobile-menu span").toggleClass('active');
    $(".menu").toggleClass('active');
    $("body").toggleClass('overlay');
})


$(window).scroll(function() {
if($(this).scrollTop() > 35 ) {
  $(".header-top").addClass("header-top__fixed")
  $(".header-btn").addClass("header-btn__fixed")
}else {

$(".header-top").removeClass("header-top__fixed")
$(".header-btn").removeClass("header-btn__fixed")
}
})
});



AOS.init({
  duration:1200
}
);