const tl = gsap.timeline({
  defaults: {
    duration: 2,
    ease: 'power1.out',
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
  },
});

tl.fromTo(
  '#php',
  { opacity: 0 },
  { opacity: 1, ease: 'elastic.out(1,0.4)', duration: 1 }
);

tl.fromTo(
  '#phptwo',
  { opacity: 0 },
  { opacity: 1, ease: 'elastic.out(1,0.4)', duration: 1 }
);

tl.fromTo(
  '#phpthree',
  { opacity: 0 },
  { opacity: 1, ease: 'elastic.out(1,0.4)', duration: 1 }
);


const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 5500,
    speed: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    500: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    800: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    900: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
