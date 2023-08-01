

const responsive = {

    0: {
      items: 1
    },
    
      320 : {
        items: 1
      },
    560: {
      items: 2
    },
    960: {
      items: 3
    }
     
    }

$(document).ready(function(){


    // $("h1").css("color", "blue");


$nav = $(".nam");
$toggleCollapse = $(".toggle-collapsm");

/** --------------- click event on toggle menu --------------------- */

$toggleCollapse.click(function(){

    $nav.toggleClass("collapsm");

})


   //------------------- ow-corousel --------------------//
    
   $(".owl-carousel").owlCarousel({
    loop:true,
    // autoplay:true,
    // autoplayTimeout: 3000,
    dots: false,
    nav: true,
    navText:[$(".owl-navigation .owl-nav-prev"), $(".owl-navigation .owl-nav-next")],
    responsive: responsive
});

// click to scroll up
$(".move-up span").click(function(){
$("html, body").animate({
  scrollTop:0  
}, 1000);
});

// AOS Instance


AOS.init();

/**  first slick slider  */

// $(".slider-one")
// .not(".slick-initialized")
// .slick({
//   autoplay:true,
//   autoplaySpeed: 3000,
//   dots: true,
// prevArrow:".site-slider .slider-btn .prev",
// nextArrow:".site-slider .slider-btn .next",

// });


/**  second slick slider  */

$(".slider-two")
.not(".slick-initialized")
.slick({
  
prevArrow:".site-slider-two .prev",
nextArrow:".site-slider-two .next",
slidesToShow:6,
autoplay: true,
// dots: true,
slidesToScroll:1,
autoplaySpeed: 3000,
responsive: [
  {
    breakpoint: 1500,
    settings:{
      slidesToShow: 5,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 1100,
    settings:{
      slidesToShow: 4,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 870,
    settings:{
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 640,
    settings:{
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 420,
    settings:{
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]
});


/**  third slick slider  */

$(".slider-three")
.not(".slick-initialized")
.slick({
  
prevArrow:".site-slider-three .prev",
nextArrow:".site-slider-three .next",
slidesToShow:6,
autoplay: true,
// dots: true,
slidesToScroll:1,
autoplaySpeed: 3000,
responsive: [
  {
    breakpoint: 1500,
    settings:{
      slidesToShow: 5,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 1100,
    settings:{
      slidesToShow: 4,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 870,
    settings:{
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 640,
    settings:{
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 420,
    settings:{
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]
});

/**  forth slick slider  */

$(".slider-four")
.not(".slick-initialized")
.slick({
  
prevArrow:".site-slider-four .prev",
nextArrow:".site-slider-four .next",
slidesToShow:6,
autoplay: true,
// dots: true,
slidesToScroll:1,
autoplaySpeed: 3000,
responsive: [
  {
    breakpoint: 1500,
    settings:{
      slidesToShow: 5,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 1100,
    settings:{
      slidesToShow: 4,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 870,
    settings:{
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 640,
    settings:{
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 420,
    settings:{
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]
});

/**  fifth slick slider  */

$(".slider-five")
.not(".slick-initialized")
.slick({
  
prevArrow:".site-slider-five .prev",
nextArrow:".site-slider-five .next",
slidesToShow:6,
autoplay: true,
// dots: true,
slidesToScroll:1,
autoplaySpeed: 3000,
responsive: [
  {
    breakpoint: 1500,
    settings:{
      slidesToShow: 5,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 1100,
    settings:{
      slidesToShow: 4,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 870,
    settings:{
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 640,
    settings:{
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 420,
    settings:{
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]
});


/**  sixth slick slider  */

$(".slider-six")
.not(".slick-initialized")
.slick({
  
prevArrow:".site-slider-six .prev",
nextArrow:".site-slider-six .next",
slidesToShow:6,
autoplay: true,
// dots: true,
slidesToScroll:1,
autoplaySpeed: 3000,
responsive: [
  {
    breakpoint: 1500,
    settings:{
      slidesToShow: 5,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 1100,
    settings:{
      slidesToShow: 4,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 870,
    settings:{
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 640,
    settings:{
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 420,
    settings:{
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]
});


/**  seventh slick slider  */

$(".slider-seven")
.not(".slick-initialized")
.slick({
  
prevArrow:".site-slider-seven .prev",
nextArrow:".site-slider-seven .next",
slidesToShow:6,
autoplay: true,
// dots: true,
slidesToScroll:1,
autoplaySpeed: 3000,
responsive: [
  {
    breakpoint: 1500,
    settings:{
      slidesToShow: 5,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 1100,
    settings:{
      slidesToShow: 4,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 870,
    settings:{
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 640,
    settings:{
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 420,
    settings:{
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]
});




});










    
    






