"use client";

import { useEffect } from "react";

/** One-time scroll-reveal observer, mirrors the site's scripts.js behaviour. */
export default function Reveal() {
  useEffect(() => {
    const targets = document.querySelectorAll("#main-content > section:first-child");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("visible"));
      return;
    }
    const o = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            o.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    targets.forEach((el) => {
      el.classList.add("reveal");
      o.observe(el);
    });
    return () => o.disconnect();
  }, []);
  return null;
}