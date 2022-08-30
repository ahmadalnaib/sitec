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

