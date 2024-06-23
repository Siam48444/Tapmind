// Lenis
const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// Appear after load animations.
gsap.from("nav", { duration: 0.5, delay: 0.3, y: "-100%", ease: "power1.out" });
gsap.from(".appear_after_load", { opacity: 0, duration: 0.5, stagger: 0.1, delay: 0.3, y: 50, ease: "power1.out" });

// Scroll animations.
document.querySelectorAll(".appear_with_scroll").forEach((appear) => {
    gsap.from(appear, { opacity: 0, duration: 0.5, scale: 0.9, scrollTrigger: { trigger: appear, start: "top 60%" } });
});

document.querySelectorAll(".primary_color_text").forEach((primary_text) => {
    gsap.from(primary_text, { color: "#050505", delay: 1.5, duration: 0.5, scrollTrigger: { trigger: primary_text, start: "top 60%" } });
});

// Navigation link color changing animations.
const nav_link = document.querySelectorAll(".nav_link");

const home = document.querySelector("#home");
const services_section = document.querySelector("#services_section");

gsap.to(".nav_link", { color: "#838383", scrollTrigger: { trigger: services_section, start: "top 0" } });
gsap.to(nav_link[1], { color: "#6c63ff", scrollTrigger: { trigger: services_section, start: "top 0" } });
