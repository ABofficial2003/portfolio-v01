function locoScroll() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
}
locoScroll();

function loaderAnime() {
  var tl = gsap.timeline();

  tl.from("#loader h2", {
    x: 40,
    opacity: 0,
    delay: 0.8,
    duration: 0.8,
    stagger: 0.1,
  });

  tl.to("#loader h2", {
    x: -40,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.1,
  });

  tl.to("#loader", {
    opacity: 0,
  });

  tl.to("#loader", {
    display: "none",
  });
}
loaderAnime();

function navAnime() {
  gsap.from("#left img", {
    x: -40,
    opacity: 0,
    delay: 3.3,
    duration: 0.7,
  });

  gsap.from("#navbar", {
    y: -40,
    opacity: 0,
    delay: 3.3,
    duration: 0.5,
  });
}
navAnime();

function pageAnime() {
  let tl = gsap.timeline();

  tl.from("#left h1", {
    y: 40,
    opacity: 0,
    delay: 3.3,
    duration: 0.6,
    stagger: 0.2,
  });
  gsap.from("#right img", {
    opacity: 0,
    delay: 3.3,
    duration: 0.6,
    stagger: 0.2,
  });
  gsap.from("#left h3", {
    y: 40,
    opacity: 0,
    delay: 3.1,
    duration: 0.6,
    stagger: 0.2,
  });
  gsap.from("#left p", {
    y: 40,
    opacity: 0,
    delay: 3.5,
    duration: 0.6,
    stagger: 0.2,
  });
}
pageAnime();

// function aboutAnime() {
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".big-txt h1",
    start: "top center",
    end: "bottom center",
    // markers: true,
  },
});

tl.from(".big-txt h1", {
  y: 30,
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
});

// tl.from(".small-txt h2", {
//   y: 40,
//   opacity: 0,
//   duration: 0.6,
//   stagger: 0.1,
// });

// tl.from(".buttons button", {
//   duration: 0.3,
//   opacity: 0,
//   scale: 0,
// });
// }
// aboutAnime();
