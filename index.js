// Nav link color changing.

// About section interactivity.
const about_btn = document.querySelectorAll(".about");
const about_svg = document.querySelectorAll(".about_svg_div");

for (let i = 0; i < about_btn.length; i++) {
    about_btn[i].addEventListener("click", () => {
        about_btn.forEach((btn) => btn.classList.remove("about_active"));
        about_btn[i].classList.add("about_active");
    });
}
