new Swiper(".topics-slider", {
    slidesPerView: 4,
    slidesPerColumn: 3,
    slidesPerColumnFill: 'row',
    spaceBetween: 30,
    pagination: {
        el: ".topics-slider__pagination",
    },
})


new Swiper('.courses-slider', {
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    slidesPerView: 3,
    spaceBetween: 30,

    pagination: {
        el: '.courses-slider__pagination',
    },

});

new Swiper('.news-slider', {
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    slidesPerView: 3,
    spaceBetween: 30,

    pagination: {
        el: '.news-slider__pagination',
    },
});

new Swiper('.themes-slider', {
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    slidesPerView: 9,
    spaceBetween: 20,

    navigation: {
        nextEl: '.def-button-next',
        prevEl: '.def-button-prev',
    },
});