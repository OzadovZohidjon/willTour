$('.gallery__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '.gallery__slider-arrow__next',
    prevArrow: '.gallery__slider-arrow__prev',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true

            }
        },
        {
            breakpoint: 568,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true

            }
        }
    ]
});

$('.partners__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '.partners__slider-arrow__next',
    prevArrow: '.partners__slider-arrow__prev',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: true

            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true

            }
        },
        {
            breakpoint: 568,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true

            }
        }
    ]
});
