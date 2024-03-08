$(document).ready(function () {

  // header menu
     jQuery('#mobile-menu').meanmenu({
        meanScreenWidth: "768",
        meanMenuContainer: '.main-menu',
        meanShowChildren: 'true',
        meanMenuOpen: "<span></span><span></span><span></span>",


        

    });

  // slider area
  $('.slider-active').owlCarousel({
    loop: true,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  
  // project-active
  $('.project-active').owlCarousel({
    loop: true,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });
  // post-active
  $('.post-active').owlCarousel({
    loop: true,
    nav: true,
    navText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  // testimonial-active
  $('.testimonial-active').owlCarousel({
    loop: true,
    nav: true,
    navText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  // clietn-active
  $('.clietn-active').owlCarousel({
    loop: true,
    nav: true,
    margin:10,
    navText: true,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });
  
  
  
  
  
  // video link popup
  $('.video-link').magnificPopup({
    type: 'image'
    // other options
  });





});