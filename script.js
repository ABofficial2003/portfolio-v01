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
    delay: 3.5,
    duration: 0.7,
  });

  gsap.from("#navbar", {
    y: -40,
    opacity: 0,
    delay: 3.5,
    duration: 0.7,
  });
}
navAnime();

function pageAnime() {
  gsap.from("#left", {
    y: 50,
    opacity: 0,
    delay: 3.6,
    duration: 0.7,
    stagger: 0.2,
  });

  gsap.from("#right", {
    opacity: 0,
    delay: 3.6,
    duration: 0.7,
  });
}
pageAnime();

gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll(".reveal-type");

splitTypes.forEach((char, i) => {
  const text = new SplitType(char, { types: "chars" });

  gsap.from(text.chars, {
    scrollTrigger: {
      trigger: char,
      start: "top 90%",
      end: "end 50%",
      scrub: true,
    },
    opacity: 0.3,
    stagger: 0.1,
  });
});

gsap.from(".reveal-box", {
  scrollTrigger: {
    trigger: ".reveal-box",
    start: "top 100%",
    end: "bottom 30%",
    scrub: true,
  },
  y: 100,
  opacity: 0,
  stagger: 0.2,
});

gsap.from(".reveal-social", {
  scrollTrigger: {
    trigger: ".reveal-social",
    start: "top 90%",
    end: "bottom 10%",
    scrub: true,
  },
  y: 100,
  opacity: 0.8,
  stagger: 0.2,
});

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
