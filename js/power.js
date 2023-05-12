	$('#our-review').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:false,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


    // owlCarousel 2


        $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})


        // login

$('.mobi-view').click(function(){
    $('.mobi-view').toggleClass('open')
    $('.desktop-view').toggleClass('show')
})