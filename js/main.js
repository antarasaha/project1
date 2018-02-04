
    jQuery(document).ready(function($) {
        
        $('#customers-testimonials').owlCarousel( {
                loop: true,
                center: true,
                items: 1,
                autoplay: true,
                nav:true,
                autoplayTimeout: 8000,
                smartSpeed: 450,
                navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
                dots:true,
                dotsEach:true,
                dotsContainer:'.owl-dots',
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                    1170: {
                        items: 1
                    }
                }
            });

        });