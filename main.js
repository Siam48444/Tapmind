// Lenis
const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// Appear after load animations.
gsap.from("nav", { opacity: 0, duration: 0.5, delay: 0.3, y: "-100%", ease: "power1.out" });
gsap.from(".appear_after_load", { opacity: 0, duration: 0.5, stagger: 0.1, delay: 0.3, y: 50, ease: "power1.out" });
