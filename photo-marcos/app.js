const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,

  
  },
  breakpoints: {
  
    900: {
      slidesPerView: 5,
      spaceBetween: 1,
    },
  },
  
 
});