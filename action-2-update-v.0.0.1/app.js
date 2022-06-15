
const  swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints:{
  500:{
    slidesPerView: 2,
    spaceBetween: 20,
  },
  800:{
    slidesPerView: 3,
    spaceBetween: 30,
  }
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