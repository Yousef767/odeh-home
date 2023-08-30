var swiper2 = new Swiper(".sw2", {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      autoplay: {
        delay: 1500,
        disableOnInteraction: true,
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        451: {
          slidesPerView: 1.2,
        },
        575: {
          slidesPerView: 1.5,
        },
        700: {
          slidesPerView: 1.9,
        },
        800: {
          slidesPerView: 2.1,
        },
        950: {
          slidesPerView: 2.5,
        },
        1140: {
          slidesPerView: 3,
        },
      },
    });