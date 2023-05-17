$(function() {
    $('.upper-bar .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        items: 1

    });
    $('.toggle').click(function() {
        $('.toggle-bar').addClass('fadeout');
        $('.nav').addClass('open');
    });
    $('.close').click(function() {
        $('.nav').removeClass('open');
    });
    $('.card').hover(function() {
        $('.card').toggleClass('active')
    });
    $('.close-tab').click(function() {
        $('.toggle-bar').removeClass('fadeout')
    });
    $('.slider .owl-carousel').owlCarousel({
        items: 1,
        loop: false,
        center: true,
        margin: 10,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: 'URLHash'
    });
    // canvas
    $('.chart').easyPieChart({
        size: 140,
        barColor: ' #08d665',
        scaleColor: false,
        lineWidth: 10,
        trackColor: '#fff',
        lineCap: 'circle',
        animate: 2000




    });
    $('.projects .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    $('.testmonial .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        items: 1
    });


    $('.blog .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // scrooltop
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('.nav-bar').addClass('add');
        } else {
            $('.nav-bar').removeClass('add')
        }
    });

    $('.gallar .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 2
            },
            425: {
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




});