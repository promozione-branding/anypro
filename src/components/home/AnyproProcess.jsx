
import React, { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
    Search,
    Lightbulb,
    Palette,
    Rocket,
    ArrowRight,
    Sparkles,
} from "lucide-react";

import { Sun, Star, Cloud } from "../svg/svg";

gsap.registerPlugin(ScrollTrigger);

/* ============================================================
   DATA
============================================================ */

const steps = [
    {
        number: "01",
        title: "Discover",
        short: "Understand",
        description:
            "We start by understanding your goals, audience and exactly what you need.",
        icon: Search,
        color: "#FF6B35",
    },
    {
        number: "02",
        title: "Plan",
        short: "Strategy",
        description:
            "We turn your ideas into a clear and practical plan built around your goals.",
        icon: Lightbulb,
        color: "#7C5CFC",
    },
    {
        number: "03",
        title: "Create",
        short: "Build",
        description:
            "Our team brings everything together with creativity, attention and purpose.",
        icon: Palette,
        color: "#14A878",
    },
    {
        number: "04",
        title: "Deliver",
        short: "Impact",
        description:
            "We deliver a smooth experience that is ready to make a real difference.",
        icon: Rocket,
        color: "#F2B705",
    },
];

/* ============================================================
   STEP ITEM
============================================================ */

function StepItem({ step, index }) {
    const Icon = step.icon;

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 35,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.3,
            }}
            transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex-1"
        >
            {/* MOBILE CONNECTOR */}

            {index !== steps.length - 1 && (
                <div className="absolute left-[27px] top-[70px] h-[calc(100%-25px)] w-px bg-neutral-200 lg:hidden" />
            )}

            {/* DESKTOP CONNECTOR DOT */}

            <div
                className="
                    absolute
                    left-1/2
                    top-[37px]
                    hidden
                    h-3
                    w-3
                    -translate-x-1/2
                    rounded-full
                    border-[3px]
                    border-[#FFFDF8]
                    lg:block
                "
                style={{
                    backgroundColor: step.color,
                }}
            />

            <div className="relative flex gap-5 lg:block lg:text-center">

                {/* NUMBER / ICON */}

                <motion.div
                    whileHover={{
                        scale: 1.08,
                        rotate: 4,
                    }}
                    className="
                        relative
                        z-20
                        flex
                        h-20
                        w-20
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border-[5px]
                        border-[#FFFDF8]
                        shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                        lg:mx-auto
                    "
                    style={{
                        backgroundColor: step.color,
                    }}
                >
                    <Icon
                        size={25}
                        color="white"
                        strokeWidth={1.8}
                    />

                    {/* Number badge */}

                    <span
                        className="
                            absolute
                            -right-2
                            -top-2
                            flex
                            h-6
                            w-6
                            items-center
                            justify-center
                            rounded-full
                            bg-neutral-950
                            text-[9px]
                            font-black
                            text-white
                        "
                    >
                        {step.number}
                    </span>
                </motion.div>

                {/* CONTENT */}

                <div className="pb-10 lg:mt-2 lg:pb-0">
                    <span
                        className="
                            text-[10px]
                            font-black
                            uppercase
                            tracking-[0.2em]
                        "
                        style={{
                            color: step.color,
                        }}
                    >
                        {step.short}
                    </span>

                    <h3
                        className="
                            mt-1
                            text-2xl
                            font-black
                            tracking-[-0.045em]
                            text-neutral-950
                            sm:text-[28px]
                        "
                    >
                        {step.title}
                    </h3>

                    <p
                        className="
                            mx-auto
                            max-w-[250px]
                            text-sm
                            font-medium
                            leading-6
                            text-neutral-500
                        "
                    >
                        {step.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

/* ============================================================
   MAIN
============================================================ */

export default function AnyproProcess() {
    const sectionRef = useRef(null);
    const pathRef = useRef(null);
    const glowRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            /* ================================================
               ANIMATED JOURNEY LINE
            ================================================= */

            gsap.fromTo(
                pathRef.current,
                {
                    scaleX: 0,
                },
                {
                    scaleX: 1,
                    transformOrigin: "left center",
                    ease: "none",
                    scrollTrigger: {
                        trigger: pathRef.current,
                        start: "top 80%",
                        end: "top 35%",
                        scrub: 1,
                    },
                }
            );

            /* ================================================
               MOVING GLOW
            ================================================= */

            gsap.fromTo(
                glowRef.current,
                {
                    left: "0%",
                    opacity: 0,
                },
                {
                    left: "100%",
                    opacity: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: pathRef.current,
                        start: "top 80%",
                        end: "top 35%",
                        scrub: 1,
                    },
                }
            );

            /* ================================================
               HEADER REVEAL
            ================================================= */

            gsap.fromTo(
                ".process-heading",
                {
                    y: 45,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 78%",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="
                relative
                overflow-hidden
                border-b
                border-neutral-200
                bg-[#FFFDF8]
                px-5
                py-10
                sm:px-8
                sm:py-12
                lg:px-12
                lg:py-15
            "
        >
            {/* ==================================================
                BACKGROUND
            ================================================== */}

            <div className="pointer-events-none absolute inset-0">
                <div
                    className="absolute inset-0 opacity-[0.22]"
                    style={{
                        backgroundImage:
                            "radial-gradient(#d4d4d4 1px, transparent 1px)",
                        backgroundSize: "22px 22px",
                    }}
                />

                <div className="absolute -left-40 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-orange-200/20 blur-[100px]" />

                <div className="absolute -right-40 bottom-0 h-[350px] w-[350px] rounded-full bg-purple-200/20 blur-[100px]" />
            </div>

            {/* ==================================================
                DECORATIONS
            ================================================== */}

            {/* Sun */}

            <motion.div
                className="
                    pointer-events-none
                    absolute
                    -right-3
                    -top-3
                    hidden
                    lg:block
                "
                animate={{
                    rotate: [0, 8, 0, -8, 0],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <Sun className="opacity-60" />
            </motion.div>

            {/* Star */}
            <motion.div
                className="
                    pointer-events-none
                    absolute
                    left-[8%]
                    top-12
                    hidden
                    lg:block
                "
                animate={{
                    rotate: [0, 15, -5, 0],
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <Star
                    size={25}
                    color="#FF1744"
                />
            </motion.div>

            {/* Cloud */}
            <motion.div
                className="
                    pointer-events-none
                    absolute
                    -left-14
                    bottom-2
                    hidden
                    xl:block
                "
                animate={{
                    x: [0, 15, 0],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <Cloud
                    size={145}
                    className="opacity-50"
                />
            </motion.div>

            <div className="relative z-10 mx-auto max-w-[1250px]">
                <div className="process-heading mx-auto max-w-[720px] text-center">
                    <div className="mb-4 inline-flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.23em] text-[#FF6B35]">
                            Our Process
                        </span>
                    </div>

                    <h2
                        className="
                            text-4xl
                            font-black
                            leading-[0.95]
                            tracking-[-0.06em]
                            text-neutral-950
                            sm:text-5xl
                            lg:text-[58px]
                        "
                    >
                        We Make It
                        <br />

                        <span className="relative inline-block text-[#FF6B35]">
                            Simple &amp; Fun

                            {/* <svg
                                className="absolute -bottom-2 left-0 w-full"
                                viewBox="0 0 300 16"
                                fill="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M3 11C80 2 210 2 297 9"
                                    stroke="#FFD43B"
                                    strokeWidth="5"
                                    strokeLinecap="round"
                                />
                            </svg> */}
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-[570px] text-sm font-medium leading-6 text-neutral-500 sm:text-base">
                        From the first idea to the final result, our process
                        keeps everything clear, creative and focused on what
                        matters.
                    </p>
                </div>

                <div className="relative mt-5">

                    {/* Desktop line */}

                    <div
                        className="
                            absolute
                            left-[12.5%]
                            right-[12.5%]
                            top-[37px]
                            hidden
                            h-[3px]
                            overflow-hidden
                            rounded-full
                            bg-neutral-200
                            lg:block
                        "
                    >
                        {/* Animated path */}

                        <div
                            ref={pathRef}
                            className="
                                absolute
                                inset-y-0
                                left-0
                                w-full
                                origin-left
                                rounded-full
                                bg-[#FF6B35]
                            "
                        />

                        {/* Moving glow */}

                        <div
                            ref={glowRef}
                            className="
                                absolute
                                -top-[3px]
                                h-3
                                w-3
                                -translate-x-1/2
                                rounded-full
                                bg-white
                                shadow-[0_0_15px_5px_rgba(255,107,53,0.45)]
                            "
                        />
                    </div>

                    <div className="grid lg:grid-cols-4">
                        {steps.map((step, index) => (
                            <StepItem
                                key={step.number}
                                step={step}
                                index={index}
                            />
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.96,
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                    className="
                        mx-auto
                        mt-8
                        flex
                        max-w-[700px]
                        items-center
                        justify-center
                        gap-3
                        rounded-full
                        border
                        border-black/5
                        bg-white
                        px-5
                        py-3
                        shadow-[0_10px_35px_rgba(0,0,0,0.05)]
                    "
                >
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFF0E8]">
                        <Sparkles
                            size={14}
                            className="text-[#FF6B35]"
                        />
                    </div>

                    <span className="text-xs font-bold text-neutral-600 sm:text-sm">
                        One team. One process. One goal —
                    </span>

                    <span className="text-xs font-black text-neutral-950 sm:text-sm">
                        making it happen.
                    </span>

                    <motion.div
                        animate={{
                            x: [0, 4, 0],
                        }}
                        transition={{
                            duration: 1.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <ArrowRight
                            size={16}
                            className="text-[#FF6B35]"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
