// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.swiper-wrapper',
//     start: '0%',
//     end: '100%',
//   },
// });

// // const tl=gsap.timeline({defaults:{duration:2,ease:"power1.out"}})

// tl.fromTo(
//   '.one',
//   { background: '#666' },
//   { background: '#ce111e', ease: 'elastic.out(1,0.4)', duration: 0.5 }
// );
// tl.fromTo(
//   '#shop',
//   { scale: 0 },
//   { scale: 1, ease: 'elastic.out(1,0.4)', duration: 1 }
// );

// tl.fromTo(
//   '.two',
//   { background: '#666' },
//   { background: '#ce111e', ease: 'elastic.out(1,0.4)', duration: 0.5 }
// );

// tl.to('#boxs', 0.5, { y: -20, ease: Cubic.easeOut });
// tl.fromTo(
//   '#boxs',
//   { scale: 1 },
//   { scale: 0, ease: 'elastic.out(1,0.4)', duration: 0.5 }
// );
// tl.fromTo(
//   '#twotwo',
//   { opacity: 0 },
//   { opacity: 1, ease: 'elastic.out(1,0.4)', duration: 0.5 }
// );

// tl.fromTo(
//   '.three',
//   { background: '#666' },
//   { background: '#ce111e', ease: 'elastic.out(1,0.4)', duration: 0.5 }
// );

// tl.fromTo(
//   '#not',
//   { scale: 0 },
//   { scale: 1, ease: 'elastic.out(1,0.4)', duration: 1 }
// );

// tl.fromTo(
//   '.four',
//   { background: '#666' },
//   { background: '#ce111e', ease: 'elastic.out(1,0.4)', duration: 0.5 }
// );

// tl.to('#bo', 1, { x: -50, y: 20, ease: Cubic.easeOut });

// swiper

const swiper = new Swiper('.swiper', {
 
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  
  },
});


