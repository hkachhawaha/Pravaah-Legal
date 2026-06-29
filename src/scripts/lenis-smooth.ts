import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Initialize Lenis smooth scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

// Update ScrollTrigger on Lenis scroll events
lenis.on('scroll', ScrollTrigger.update);

// Easing physics RAF loop
function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
