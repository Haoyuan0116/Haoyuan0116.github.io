gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

tl.from( ".black", 1, { x: 20, y: 150 })
.from( ".red", 1, { x: -20, y: -50 },'-=1')
.from( ".blue", 1, { x: 50, y: -190 },'-=1')
.from( ".orange", 1, { x: -300, y: -210 },'-=1')
.from( ".green", 1, { x: -50, y: -200 },'-=1')
.from( ".yellow", 1, { x: 0, y: -550 },'-=1')
.from( "span", .5, { opacity: 0 })

ScrollTrigger.create({
  animation: tl,
  trigger: ".red",
  scrub: .5,
  // markers: true,
  start: "top 75%",
  end: "top 10%",
})

gsap.to(".blue", {
  scrollTrigger: {
    trigger: ".blue",
    scrub: .5,
    // markers: true,
    start: "top 10%",
    end: "bottom -80%"
  },
  top: '200px'
});