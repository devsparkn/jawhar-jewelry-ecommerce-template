"use client";

import { useEffect, useRef } from "react";

export type RevealOptions = {
  /** Fraction of element visible before triggering (default: 0.12) */
  threshold?: number;
  /** Root margin string (default: "0px") */
  rootMargin?: string;
  /** Only trigger once (default: true) */
  once?: boolean;
};

/**
 * useScrollReveal
 * ---------------
 * Attach this hook in any Client Component to enable IntersectionObserver-
 * driven reveal animations. All child elements that have the
 * `reveal-on-scroll` class will fade+slide in when they enter the viewport.
 *
 * Usage:
 *   const sectionRef = useScrollReveal();
 *   <section ref={sectionRef}>
 *     <p className="reveal-on-scroll reveal-delay-1">...</p>
 *   </section>
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  options: RevealOptions = {},
) {
  const { threshold = 0.1, rootMargin = "0px 0px -40px 0px", once = true } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const targets = Array.from(
      container.querySelectorAll<HTMLElement>(".reveal-on-scroll"),
    );

    if (targets.length === 0) return;

    // Skip if user prefers reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold, rootMargin },
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
}
