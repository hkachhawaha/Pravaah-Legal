import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Initialize scroll progress bar dynamically
const createProgressBar = () => {
  const progress = document.createElement("div");
  progress.className = "scroll-progress";
  document.body.appendChild(progress);

  // Style the progress bar dynamically
  Object.assign(progress.style, {
    position: "fixed",
    top: "0",
    left: "0",
    height: "4px",
    backgroundColor: "var(--gold)",
    width: "100%",
    transform: "scaleX(0)",
    transformOrigin: "left",
    zIndex: "99999",
  });

  // Animate on scroll
  gsap.to(progress, {
    scaleX: 1,
    ease: "none",
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.3,
    },
  });
};

// Standard reveals
const initScrollReveals = () => {
  // Hero Content Load Animation
  gsap.from('.hero__content > *', {
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out"
  });

  gsap.from('.hero__visual', {
    scale: 0.95,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
    delay: 0.3
  });

  // Service Cards Grid Stagger Reveal
  gsap.from('.services-preview__grid .service-card', {
    scrollTrigger: {
      trigger: '.services-preview__grid',
      start: "top 85%",
      toggleActions: "play none none none"
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.12,
    ease: "power2.out"
  });

  // Timeline Items Slide Reveal
  document.querySelectorAll('.timeline__item').forEach((item) => {
    const isLeft = item.classList.contains('timeline__item--left');
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
        toggleActions: "play none none none"
      },
      x: isLeft ? -50 : 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });
  });

  // FAQ Accordion items stagger
  gsap.from('.faq__wrapper .faq-item', {
    scrollTrigger: {
      trigger: '.faq__wrapper',
      start: "top 85%",
      toggleActions: "play none none none"
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out"
  });

  // CTA Section Zoom
  gsap.from('.cta__wrapper', {
    scrollTrigger: {
      trigger: '.cta',
      start: "top 85%",
      toggleActions: "play none none none"
    },
    scale: 0.96,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });
};

// Stat increments
const initStatsCounters = () => {
  document.querySelectorAll('.hero-stat').forEach((statEl) => {
    const h2 = statEl.querySelector('h2');
    if (!h2) return;

    const rawText = h2.textContent || "";
    const numericPart = parseInt(rawText.replace(/[^\d]/g, ""), 10);
    const nonNumericPart = rawText.replace(/[\d]/g, ""); // Keep "+" or "%"

    if (isNaN(numericPart)) return;

    const counterObj = { value: 0 };

    gsap.to(counterObj, {
      value: numericPart,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: statEl,
        start: "top 85%",
        toggleActions: "play none none none"
      },
      onUpdate: () => {
        h2.textContent = Math.floor(counterObj.value) + nonNumericPart;
      }
    });
  });
};

// Floating Cards loop
const initFloatingLoops = () => {
  gsap.to('.hero-card--floating', {
    y: -15,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });
};

// Launch triggers after DOM is ready
window.addEventListener("DOMContentLoaded", () => {
  createProgressBar();
  initScrollReveals();
  initStatsCounters();
  initFloatingLoops();
});
