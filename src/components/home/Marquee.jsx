
import React, { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

import {
    Dice5,
    Puzzle,
    Trophy,
    Gamepad2,
    Sparkles,
} from "lucide-react";

import { Sun, Star } from "../svg/svg";

/* ============================================================
   MARQUEE DATA
============================================================ */

const topItems = [
    {
        text: "PLAY",
        icon: Dice5,
        color: "#FF6B35",
    },
    {
        text: "SPORT",
        icon: Trophy,
        color: "#14A878",
    },
    {
        text: "CREATE",
        icon: Puzzle,
        color: "#7C5CFC",
    },
    {
        text: "FUN",
        icon: Gamepad2,
        color: "#F2B705",
    },
];

const bottomItems = [
    {
        text: "TABLE GAMES",
        color: "#7C5CFC",
    },
    {
        text: "BOARD GAMES",
        color: "#FF6B35",
    },
    {
        text: "SPORTS GOODS",
        color: "#14A878",
    },
    {
        text: "RECREATION",
        color: "#F2B705",
    },
];

/* ============================================================
   TOP MARQUEE ITEM
============================================================ */

function TopItem({ item }) {
    const Icon = item.icon;

    return (
        <div className="flex shrink-0 items-center gap-4">
            <span
                className="
                    whitespace-nowrap
                    text-[34px]
                    font-black
                    uppercase
                    leading-none
                    tracking-[-0.055em]
                    text-neutral-950
                    sm:text-[42px]
                    lg:text-[48px]
                "
            >
                {item.text}
            </span>

            <motion.div
                animate={{
                    rotate: [0, 8, -8, 0],
                    scale: [1, 1.06, 1],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    sm:h-12
                    sm:w-12
                "
                style={{
                    backgroundColor: `${item.color}18`,
                }}
            >
                <Icon
                    size={21}
                    strokeWidth={1.8}
                    style={{
                        color: item.color,
                    }}
                />
            </motion.div>
        </div>
    );
}

/* ============================================================
   BOTTOM MARQUEE ITEM
============================================================ */

function BottomItem({ item }) {
    return (
        <div className="flex shrink-0 items-center gap-4">
            <span
                className="
                    whitespace-nowrap
                    text-[20px]
                    font-black
                    uppercase
                    tracking-[-0.035em]
                    text-neutral-500
                    sm:text-[24px]
                    lg:text-[28px]
                "
            >
                {item.text}
            </span>

            <span
                className="text-xl font-black sm:text-2xl"
                style={{
                    color: item.color,
                }}
            >
                ✦
            </span>
        </div>
    );
}

/* ============================================================
   MAIN SECTION
============================================================ */

export default function AnyproMarquee() {
    const sectionRef = useRef(null);

    const topTrackRef = useRef(null);
    const bottomTrackRef = useRef(null);

    const topTween = useRef(null);
    const bottomTween = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const topTrack = topTrackRef.current;
            const bottomTrack = bottomTrackRef.current;

            /* ================================================
               TOP → LEFT
            ================================================= */

            if (topTrack) {
                const width = topTrack.scrollWidth / 2;

                topTween.current = gsap.to(topTrack, {
                    x: -width,
                    duration: 22,
                    ease: "none",
                    repeat: -1,
                });
            }

            /* ================================================
               BOTTOM → RIGHT
            ================================================= */

            if (bottomTrack) {
                const width = bottomTrack.scrollWidth / 2;

                bottomTween.current = gsap.fromTo(
                    bottomTrack,
                    {
                        x: -width,
                    },
                    {
                        x: 0,
                        duration: 27,
                        ease: "none",
                        repeat: -1,
                    }
                );
            }

            /* ================================================
               PAUSE ON HOVER
            ================================================= */

            const section = sectionRef.current;

            const pause = () => {
                topTween.current?.pause();
                bottomTween.current?.pause();
            };

            const resume = () => {
                topTween.current?.resume();
                bottomTween.current?.resume();
            };

            section?.addEventListener("mouseenter", pause);
            section?.addEventListener("mouseleave", resume);

            return () => {
                section?.removeEventListener("mouseenter", pause);
                section?.removeEventListener("mouseleave", resume);
            };
        }, sectionRef);

        return () => {
            topTween.current?.kill();
            bottomTween.current?.kill();
            ctx.revert();
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="
                relative
                overflow-hidden
                border-y
                border-neutral-200
                bg-[#FFFDF8]
                py-7
                sm:py-9
            "
        >
            {/* ==================================================
                SUBTLE BACKGROUND
            ================================================== */}

            <div className="pointer-events-none absolute inset-0">
                <div
                    className="absolute inset-0 opacity-[0.18]"
                    style={{
                        backgroundImage:
                            "radial-gradient(#cfcfcf 1px, transparent 1px)",
                        backgroundSize: "22px 22px",
                    }}
                />

                <div className="absolute -left-32 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-orange-200/20 blur-[80px]" />

                <div className="absolute -right-32 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-purple-200/20 blur-[80px]" />
            </div>

            {/* ==================================================
                SMALL SVG DECORATIONS
            ================================================== */}

            {/* Sun */}

            {/* <motion.div
                className="
                    pointer-events-none
                    absolute
                    -right-2
                    -top-4
                    hidden
                    sm:block
                    lg:right-8
                    lg:top-1
                "
                animate={{
                    rotate: [0, 8, 0, -8, 0],
                    scale: [1, 1.04, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <Sun className="scale-75 opacity-70 lg:scale-90" />
            </motion.div> */}

            {/* Left star */}

            <motion.div
                className="
                    pointer-events-none
                    absolute
                    left-[5%]
                    top-8
                    hidden
                    lg:block
                "
                animate={{
                    rotate: [0, 12, -5, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <Star
                    size={20}
                    color="#FF1744"
                />
            </motion.div>

            {/* Right star */}

            <motion.div
                className="
                    pointer-events-none
                    absolute
                    bottom-7
                    right-[8%]
                    hidden
                    lg:block
                "
                animate={{
                    rotate: [0, -10, 5, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <Star
                    size={18}
                    color="#FFD43B"
                />
            </motion.div>

            {/* ==================================================
                CONTENT
            ================================================== */}

            <div className="relative z-10">

                {/* Small label */}

                <div className="mb-5 flex items-center justify-center gap-2">
                    <Sparkles
                        size={13}
                        className="text-orange-500"
                    />

                    <span
                        className="
                            text-[9px]
                            font-black
                            uppercase
                            tracking-[0.25em]
                            text-neutral-400
                        "
                    >
                        Discover Anypro
                    </span>

                    <Sparkles
                        size={13}
                        className="text-orange-500"
                    />
                </div>

                {/* ==================================================
                    TOP MARQUEE
                ================================================== */}

                <div className="relative overflow-hidden">
                    <div
                        ref={topTrackRef}
                        className="
                            flex
                            w-max
                            items-center
                            gap-8
                            sm:gap-10
                            lg:gap-12
                        "
                    >
                        {[
                            ...topItems,
                            ...topItems,
                            ...topItems,
                            ...topItems,
                        ].map((item, index) => (
                            <React.Fragment key={`top-${index}`}>
                                <TopItem item={item} />

                                <span
                                    className="
                                        text-xl
                                        font-black
                                        text-[#FFD43B]
                                        sm:text-2xl
                                    "
                                >
                                    ✦
                                </span>
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* ==================================================
                    CENTER BRAND
                ================================================== */}

                <div className="my-5 flex items-center justify-center gap-4 sm:my-6">
                    <div className="h-px flex-1 bg-neutral-200" />

                    <div
                        className="
                            rounded-full
                            bg-neutral-950
                            px-5
                            py-2
                            sm:px-6
                        "
                    >
                        <span
                            className="
                                text-sm
                                font-black
                                tracking-[-0.04em]
                                text-white
                                sm:text-base
                            "
                        >
                            Anypro
                        </span>
                    </div>

                    <div className="h-px flex-1 bg-neutral-200" />
                </div>

                {/* ==================================================
                    BOTTOM MARQUEE
                ================================================== */}

                <div className="relative overflow-hidden">
                    <div
                        ref={bottomTrackRef}
                        className="
                            flex
                            w-max
                            items-center
                            gap-6
                            sm:gap-8
                            lg:gap-10
                        "
                    >
                        {[
                            ...bottomItems,
                            ...bottomItems,
                            ...bottomItems,
                            ...bottomItems,
                        ].map((item, index) => (
                            <BottomItem
                                key={`bottom-${index}`}
                                item={item}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}