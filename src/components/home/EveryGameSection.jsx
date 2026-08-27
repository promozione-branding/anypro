"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lottie from "lottie-web";
import CountUp from "react-countup";

gsap.registerPlugin(ScrollTrigger);

export default function EveryGameSection() {
    const sectionRef = useRef(null);
    const lottieRef = useRef(null);

    useLayoutEffect(() => {
        let animation;

        const ctx = gsap.context(() => {
            if (!lottieRef.current) return;

            animation = lottie.loadAnimation({
                container: lottieRef.current,
                renderer: "svg",
                loop: false,
                autoplay: false,
                path: "/animations/football.json",
                rendererSettings: {
                    preserveAspectRatio: "xMidYMid meet",
                },
            });

            animation.addEventListener("DOMLoaded", () => {
                const playhead = { frame: 0 };

                gsap.to(playhead, {
                    frame: animation.totalFrames - 1,
                    ease: "none",

                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: "+=1600",
                        pin: true,
                        scrub: 1,
                        invalidateOnRefresh: true,

                        onUpdate: () => {
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
            className="relative h-[100vh] min-h-[620px] w-full overflow-hidden bg-[#f5f5f3]"
        >
            {/* Content */}
            <div className="absolute inset-0 z-10">
                <div className="mx-auto flex h-full w-[calc(100%-2rem)] max-w-7xl items-center sm:w-[calc(100%-3rem)]">
                    <div className="max-w-xl">

                        {/* Eyebrow */}
                        <span className="mb-3 inline-block text-[10px] font-bold tracking-[0.22em] text-neutral-500 sm:text-xs">
                            BUILT FOR THE GAME
                        </span>

                        {/* Heading */}
                        <h2 className="text-5xl font-extrabold leading-[0.9] tracking-[-0.055em] text-neutral-900 sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                            One passion.
                            <br />
                            <span className="text-neutral-500">
                                Every game.
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="mt-4 max-w-md text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
                            From the court to the field and the beach, we
                            create products for people who live and breathe
                            sport.
                        </p>

                        {/* Stats */}
                        <div className="mt-7 grid max-w-md grid-cols-2 border-t border-neutral-300">

                            {/* Experience */}
                            <div className="min-h-[100px] border-b border-r border-neutral-300 py-5 pr-7">
                                <div className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
                                    <CountUp
                                        end={10}
                                        duration={2}
                                        enableScrollSpy
                                        scrollSpyOnce
                                    />
                                    +
                                </div>

                                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.13em] text-neutral-500 sm:text-xs">
                                    Years Experience
                                </p>
                            </div>

                            {/* Clients */}
                            <div className="min-h-[100px] border-b border-neutral-300 py-5 pl-7">
                                <div className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
                                    <CountUp
                                        end={250}
                                        duration={2}
                                        enableScrollSpy
                                        scrollSpyOnce
                                    />
                                    +
                                </div>

                                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.13em] text-neutral-500 sm:text-xs">
                                    Clients Served
                                </p>
                            </div>

                            {/* Projects */}
                            <div className="min-h-[100px] border-r border-neutral-300 py-5 pr-7">
                                <div className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
                                    <CountUp
                                        end={500}
                                        duration={2}
                                        enableScrollSpy
                                        scrollSpyOnce
                                    />
                                    +
                                </div>

                                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.13em] text-neutral-500 sm:text-xs">
                                    Projects Delivered
                                </p>
                            </div>

                            {/* Athletes */}
                            <div className="min-h-[100px] py-5 pl-7">
                                <div className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
                                    <CountUp
                                        end={50}
                                        duration={2}
                                        enableScrollSpy
                                        scrollSpyOnce
                                    />
                                    K+
                                </div>

                                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.13em] text-neutral-500 sm:text-xs">
                                    Athletes Reached
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Football */}
            <div
                ref={lottieRef}
                className="
                    absolute
                    right-[-8%]
                    top-1/2
                    z-0
                    w-[min(60vw,780px)]
                    -translate-y-1/2

                    sm:right-[-4%]
                    sm:w-[min(57vw,800px)]

                    lg:right-[0%]
                    lg:w-[min(50vw,820px)]
                "
            />

            {/* Scroll hint */}
            <div className="absolute bottom-[4%] left-1/2 z-20 -translate-x-1/2 text-center">
                <div className="mx-auto mb-2 h-6 w-px bg-neutral-300" />

                <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-400">
                    Scroll to play
                </p>
            </div>
        </section>
    );
}