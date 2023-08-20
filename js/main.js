let tl = gsap.timeline();

tl.from(".title, .subtitle", {
  duration: 1.5,
  opacity: 0,
  x: 300,
  scale: 0.1,
  color: "black",
  borderColor: "white",
  ease: "linear",
});
tl.from(".circle-1, .circle-2, .circle-3", {
  duration: 1,
  opacity: 0,
  y: 150,
  stagger: 0.25,
  ease: "back",
});
