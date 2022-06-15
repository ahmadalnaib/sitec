
 var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



//  const tl=gsap.timeline({defaults:{duration:4,ease:"slow"}})



//  tl.fromTo('.sub-1',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:1})
//  tl.fromTo('.sub-2',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:1})
//  tl.fromTo('.sub-3',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:1})
//  tl.fromTo('.b-1',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:0.50})
//  tl.fromTo('.b-2',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:0.50})
//  tl.fromTo('.b-3',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:0.50})
//  tl.fromTo('.b-4',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:0.50})
//  tl.fromTo('.b-5',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:0.50})
//  tl.fromTo('.b-6',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:0.50})
//  tl.fromTo('.b-7',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:0.50})
//  tl.fromTo('.b-8',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:0.50})
//  tl.fromTo('.b-9',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:0.50})
//  tl.fromTo('.b-10',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:0.50})
//  tl.fromTo('.b-11',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:0.50})
//  tl.fromTo('.b-12',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:0.50})
//  tl.fromTo('.b-13',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:0.50})
//  tl.fromTo('.b-14',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:0.50})
//  tl.fromTo('.b-15',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:0.50})


const tlIntrol=gsap.timeline({
  scrollTrigger:{
    trigger:".first-page",
    start:"0%",
    end:"100%",
   
   
   
  },
});

tlIntrol.fromTo('.sub-1',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:0.40})
tlIntrol.fromTo('.sub-2',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:0.40})
tlIntrol.fromTo('.sub-3',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:0.50})
tlIntrol.fromTo('.b-2',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:0.30})
tlIntrol.fromTo('.b-3',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:0.30})
tlIntrol.fromTo('.b-4',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:0.30})
tlIntrol.fromTo('.b-5',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:0.30})
tlIntrol.fromTo('.b-6',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:0.30})
tlIntrol.fromTo('.b-7',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:0.30})
tlIntrol.fromTo('.b-8',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:0.30})
tlIntrol.fromTo('.b-9',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:0.30})
tlIntrol.fromTo('.b-10',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:0.30})
tlIntrol.fromTo('.b-11',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:0.30})
tlIntrol.fromTo('.b-12',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:0.30})
tlIntrol.fromTo('.b-13',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:0.30})
tlIntrol.fromTo('.b-14',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:0.30})
tlIntrol.fromTo('.b-15',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:0.30})


// gsap.to(".b-1", {
//   duration: 4,
//   motionPath: {
//     path: "#home-circle1",
//     align: "#home-circle1",
//     alignOrigin: [0.5, 0.5],
//     autoRotate: true
//   },
//   scale: 1.5,
//   yoyo: true,
//   repeat: -1,
//   repeatDelay: 0.75,
//   ease: "power3.inOut"
// });

