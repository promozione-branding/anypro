"use client";

import { useEffect } from "react";
import gsap from "gsap";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      syncTouch: false,
      autoRaf: false,
    });

    const update = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    // Make Lenis available to other components
    window.lenis = lenis;

    return () => {
      gsap.ticker.remove(update);

      lenis.destroy();

      delete window.lenis;
    };
  }, []);

  return null;
}