$(document).ready(function(){
  $('.slider').slick({
    arrows: false,
    dots: true,

    autoplay: false,
    autoplaySpeed: 4500,
    speed: 1500,
    infinite: true,
    fade: true,

     responsive: [
            {
                breakpoint: 998,
                settings: {
                    dots: false,
                    arrows: true,
                    slidesToShow: 1,
                }
            },
            {breakpoint: 768,
                settings: {
                    dots: false,
                    arrows: false,
                    autoplaySpeed: 3000,
                    speed: 800,
                }  
            },
        ]

  });
});