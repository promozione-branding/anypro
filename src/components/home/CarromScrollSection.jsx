"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lottie from "lottie-web";

gsap.registerPlugin(ScrollTrigger);

export default function CarromScrollSection() {
  const sectionRef = useRef(null);
  const lottieRef = useRef(null);

  useLayoutEffect(() => {
    let animation;

    const ctx = gsap.context(() => {
      animation = lottie.loadAnimation({
        container: lottieRef.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "/animations/carrom.json",
        rendererSettings: {
          preserveAspectRatio: "xMidYMid meet",
        },
      });

      animation.addEventListener("DOMLoaded", () => {
        const playhead = {
          frame: 0,
        };

        gsap.to(playhead, {
          frame: animation.totalFrames - 1,
          ease: "none",

          scrollTrigger: {
            trigger: sectionRef.current,

            // Start when section reaches top
            start: "top top",

            // Increase this for slower animation
            end: "+=1800",

            // Keep carrom board fixed while animation plays
            pin: true,

            // Smooth scroll-controlled animation
            scrub: 1,

            // Optional snapping
            // snap: {
            //   snapTo: 1,
            //   duration: 0.4,
            //   ease: "power2.out",
            // },

            invalidateOnRefresh: true,

            onUpdate: (self) => {
              animation.goToAndStop(
                Math.floor(playhead.frame),
                true
              );
            },
          },
        });

        ScrollTrigger.refresh();
      });
    }, sectionRef);
 
    return () => {
      ctx.revert();

      if (animation) {
        animation.destroy();
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-[#f7f7f7]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#f7f7f7]" />

      {/* Optional heading */}
      <div className="absolute left-1/2 top-[8%] z-10 -translate-x-1/2 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.35em] text-neutral-500">
          Precision in Motion
        </p>

        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900 md:text-6xl">
          Every Move Matters
        </h2>
      </div>

      {/* Lottie */}
      <div
        ref={lottieRef}
        className="
          absolute
          left-1/2
          top-1/2
          w-[min(85vw,850px)]
          -translate-x-1/2
          -translate-y-1/2
        "
      />

      {/* Scroll hint */}
      <div className="absolute bottom-[7%] left-1/2 -translate-x-1/2 text-center">
        <div className="mx-auto mb-3 h-10 w-[1px] bg-neutral-300" />

        <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
          Scroll to play
        </p>
      </div>
    </section>
  );
}