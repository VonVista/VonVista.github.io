gsap.registerPlugin(ScrollTrigger);

const firstElem = document.querySelector(".sec");

const sec2_elem = document.querySelector(".sec2_elem");

function goToSection(i, anim) {
  gsap.to(window, {
    scrollTo: {y: i*innerHeight + firstElem.offsetTop, autoKill: false},
    duration: 1
  });
  
  if(anim) {
    anim.restart();
  }
}

// gsap.utils.toArray(".sec").forEach((panel, i) => {
//   ScrollTrigger.create({
//     trigger: panel,
//     onEnter: () => goToSection(i)
//   });
  
//   ScrollTrigger.create({
//     trigger: panel,
//     start: "bottom bottom",
//     onEnterBack: () => goToSection(i),
//   });
// });

// var bg = gsap.timeline({repeat: -1});
// bg.from("body", {backgroundPosition: "0% 100%", duration: 80, ease:Linear.easeNone });

// var text = gsap.timeline();
// text.from(".introText", {y: "100", duration: 1, ease: "circ.out"});
// text.to(".introText", {fontSize: "1000vh", y: "-200vh", opacity: 0, filter: "blur(4)", duration: 1, ease: "power1.inOut", delay: 0.5});
// text.from(".header", {y: "-300%", duration: 1, ease: "circ.out"}, "<1");

//ANIMATIONS

const sec1_tl = gsap.timeline({delay: 0});
sec1_tl.from(".sec1_elem", {
  y: "+=200",
  duration: 1,
  opacity: 0,
  stagger: {
    amount: 0.5
  }
})
sec1_tl.from(".title_sec1", {
  y: "100%",
  duration: 1,
  opacity: 1
}, "<");

const sec2_tl = gsap.timeline({paused: true});
sec2_tl.from(".sec2_elem", {
  y: "+=100",
  duration: 1,
  opacity: 0,
  stagger: {
    amount: 0.5
  }
})
sec2_tl.fromTo(".title_sec1", 
  {
    y: "100%",
    duration: 1,
    opacity: 1
  }, 
  {
    y: "0%",
    duration: 1,
    opacity: 1
  }, 
  "<");

const sec3_tl = gsap.timeline({paused: true});
// sec3_tl.from(".sec3_elem", {
//   y: "+=100",
//   duration: 1,
//   opacity: 0,
//   stagger: {
//     amount: 0.5
//   }
// })
sec3_tl.fromTo(".title_sec1", 
  {
    y: "100%",
    duration: 1,
    opacity: 1
  }, 
  {
    y: "0%",
    duration: 1,
    opacity: 1
  }, 
  "<");


//SCROLL TRIGGERS

ScrollTrigger.create({

  trigger: ".sec1",
  start: "10% 50%",
  end: "90% 50%",
  //toggleActions: "play reverse play reverse",
  onEnter: () => {
    sec1_tl.timeScale(1.0).play();
    title.innerHTML = "Home";
    console.log("e");
  },
  onLeave: () => {
    sec1_tl.timeScale(4.0).reverse();
    console.log("l");
  },
  onEnterBack: () => {
    sec1_tl.timeScale(1.0).play();
    title.innerHTML = "Home";
    console.log("eb");
  },
  onLeaveBack: () => {
    sec1_tl.timeScale(4.0).reverse();
    console.log("lb");
  },
  markers: false
  
})


ScrollTrigger.create({

  trigger: ".sec2",
  start: "10% 50%",
  end: "90% 50%",
  //toggleActions: "play reverse play reverse",
  onEnter: () => {
    sec2_tl.timeScale(1.0).play();
    title.innerHTML = "About";
    //console.log("e");
  },
  onLeave: () => {
    sec2_tl.timeScale(5.0).reverse();
    //console.log("l");
  },
  onEnterBack: () => {
    sec2_tl.timeScale(1.0).play();
    title.innerHTML = "About";
    //console.log("eb");
  },
  onLeaveBack: () => {
    sec2_tl.timeScale(5.0).reverse();
    //console.log("lb");
  },
  markers: false

})


ScrollTrigger.create({
  trigger: ".sec3",
  start: "0% 50%",
  end: "100% 50%",
  //toggleActions: "play reverse play reverse",
  onEnter: () => {
    sec3_tl.timeScale(1.0).play();
    title.innerHTML = "Projects";
    //console.log("e");
  },
  onLeave: () => {
    sec3_tl.timeScale(5.0).reverse();
    //console.log("l");
  },
  onEnterBack: () => {
    sec3_tl.timeScale(1.0).play();
    title.innerHTML = "Projects";
    //console.log("eb");
  },
  onLeaveBack: () => {
    sec3_tl.timeScale(5.0).reverse();
    //console.log("lb");
  },
  markers: false
})

gsap.set(".projectContainer", {
  autoAlpha: 0,
  y: "-100",
});

ScrollTrigger.batch(".projectContainer", {
  start: "-20% 50%",
  end: "120% 50%",
  onEnter: elements => {
    console.log("E")
    gsap.to(elements, {
      autoAlpha: 1,
      y: "0",
      stagger: 0.15
    });
    // for(element of elements){
    //   element.querySelector(".projectImage").style.display = "block";
    // }
  },
  onLeave: elements => {
    console.log("L")
    gsap.to(elements, {
      autoAlpha: 0,
      y: "-100",
      stagger: 0.15
    });
    // for(element of elements){
    //   element.querySelector(".projectImage").style.display = "none";
    // }
  },
  onEnterBack: elements => {
    console.log("EB")
    gsap.to(elements, {
      autoAlpha: 1,
      y: "0",
      stagger: 0.15
    });
    // for(element of elements){
    //   element.querySelector(".projectImage").style.display = "block";
    // }
  },
  onLeaveBack: elements => {
    console.log("LB")
    gsap.to(elements, {
      autoAlpha: 0,
      y: "-100",
      stagger: 0.15
    });
    // for(element of elements){
    //   element.querySelector(".projectImage").style.display = "none";
    // }
  },
  markers: false
});


const testAnim = gsap.timeline({paused:true})
testAnim.from(".hamburgMenu", {
  y: "-=100%",
  duration: 1
})
testAnim.to(".sec", {
  opacity: 0,
  duration: 1
},"<")
testAnim.to(".sec", {
  opacity: 0,
  duration: 1
},"<")
testAnim.to(".footer", {
  opacity: 0,
  duration: 1
},"<")


var isHamburg = false;

function hamburg() {
  console.log(isHamburg)
  if(isHamburg){
    isHamburg = false;
    testAnim.reverse()
  }
  else {
    isHamburg = true;
    testAnim.play()
  }
}


function projectHover(element, src) {
  element.querySelector(".projectImage").src = src;
}

function projectLeave(element, src) {
  element.querySelector(".projectImage").src = src;
}

function scrollToSection(name) {
  gsap.to(window, {duration: 2, scrollTo:name});
  isHamburg = false;
  testAnim.reverse()
}



// testAnim.to(".test2", {
//   y: "-=100%",
//   duration: 1
// })
// testAnim.to(".sec", {
//   opacity: 1,
//   duration: 1
// },"<")


function scale (number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}


// NOTE: IDEA FOR HORIZONTAL SCROLL BEHAVIOR
// function onMove() {
//   for(project of projects){
//     //console.log(project.getBoundingClientRect().left);
//     if(project.getBoundingClientRect().left < 400){
//       project.style.opacity = scale(project.getBoundingClientRect().left, -100, 0, 0, 1);
//       // console.log(0 - project.getBoundingClientRect().left)
//     }
//     if(project.getBoundingClientRect().right > window.innerWidth - 400){
//       project.style.opacity = scale(project.getBoundingClientRect().right, window.innerWidth, window.innerWidth + 100, 1, 0);
//       // console.log(0 - project.getBoundingClientRect().left)
//     }
//   }
// }
