/* =============================================
   by.anara — Main JavaScript
   ============================================= */

/* ---------- Navbar scroll effect ---------- */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

/* ---------- Mobile nav toggle ---------- */
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");

hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
});

function closeMobileNav() {
    mobileNav.classList.remove("open");
}

/* ---------- Fade-up on scroll ---------- */
const fadeEls = document.querySelectorAll(
    ".hero__text, .hero__visual, .product-card, .lookbook__item, .tentang__img, .tentang__text, .section-header",
);

fadeEls.forEach((el) => el.classList.add("fade-up"));

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, i * 80);
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.1 },
);

fadeEls.forEach((el) => observer.observe(el));

/* ---------- Smooth active nav link ---------- */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar__links a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((sec) => {
        const top = sec.offsetTop - 100;
        if (window.scrollY >= top) current = sec.getAttribute("id");
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});
