// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const scrollTopBtn = document.getElementById("scrollTop");

  // SCROLL-TO-TOP BUTTON
  const toggleScrollButton = () => {
    if (!scrollTopBtn) return;
    scrollTopBtn.style.display = window.scrollY > 250 ? "flex" : "none";
  };

  window.addEventListener("scroll", toggleScrollButton);

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Hover effect helper (general)
  const addHoverEffect = (elements, hoverClass) => {
    elements.forEach(el => {
      el.addEventListener("mouseenter", () => el.classList.add(hoverClass));
      el.addEventListener("mouseleave", () => el.classList.remove(hoverClass));
    });
  };

  // APPLY HOVERS (UPDATED TO MATCH YOUR HTML)
  addHoverEffect(document.querySelectorAll(".featured-card img"), "art-hover");
  addHoverEffect(document.querySelectorAll(".artist-card"), "artist-hover");
  addHoverEffect(document.querySelectorAll(".service-card"), "service-hover");

  // Fade-in on scroll (IntersectionObserver)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, { threshold: 0.1 });

  // Elements you want to animate on scroll
  const fadeElements = document.querySelectorAll(
    ".featured-card, .artist-card, .service-card"
  );
  fadeElements.forEach(el => observer.observe(el));
});
