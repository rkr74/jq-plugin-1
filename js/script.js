AOS.init({
	offset:200,
	duration:1000
});

$(document).ready(function(){

// counter
$('.counter').counterUp({
    delay: 10,
    time: 700
})

// owlcarousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    responsiveClass:true,
    smartSpeed:1500,
    dots:false,
    nav:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
        }
    }
})

});
