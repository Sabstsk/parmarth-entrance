import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Adds simple fade & slide animations to any element that has the class "gs-reveal".
 * Call this once at the root (e.g., inside App component).
 */
export const useGsapAnimations = () => {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.gs-reveal');

    elements.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        },
      });
    });
  }, []);
};
