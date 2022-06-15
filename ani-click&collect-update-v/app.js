const tl=gsap.timeline({defaults:{duration:2,ease:"power1.out"}})


tl.fromTo('#text-one-gsap',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:0.50})
tl.fromTo('#shop',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:1})

tl.fromTo('#text-two-gsap',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:0.50})
tl.to('#boxs', 1, {x:60, ease:Cubic.easeOut});


tl.fromTo('#text-three-gsap',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:0.50})
tl.fromTo('#not',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:1})

tl.fromTo('#text-four-gsap',{scale:0},{scale:1,ease:"elastic.out(1,0.4)",duration:0.50})
tl.to('#bo', 1, {x:-50,y:20, ease:Cubic.easeOut});



//  tl.fromTo('#door',{opacity:1,x:0,rotation:'0deg'},{opacity:1,x:-10,rotationY:'40deg',rotation:'40deg'})

// gsap.set("#Group33",{transfirmOrigin:"top"});
// tl.fromTo("#door",{scale:5},{scale:0.9});
// tl.fromtO('#door',{scale:1},{scale:-1},"<")
