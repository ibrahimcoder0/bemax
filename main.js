$ (document) .ready(function () {

    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
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
    });

});


// $(document).ready(function(){
//     $("p").click(function(){
//       $(this).hide();
//     });
//   });


