import React from "react";
import { motion } from "framer-motion";

import {
    ArrowRight,
    MessageCircle,
    Phone,
    Sparkles,
} from "lucide-react";

import { Star, Sun } from "../svg/svg";

/* ============================================================
   CTA SECTION
============================================================ */

export default function AnyproCTA() {
    return (
        <section className="relative overflow-hidden bg-neutral-950 px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            {/* ==================================================
                BACKGROUND IMAGE
            ================================================== */}

            <div className="absolute inset-0">
                <img
                    src="https://media.istockphoto.com/id/491219472/photo/family-game-evening-with-self-made-board-game.jpg?s=612x612&w=0&k=20&c=Sw6TDWS-uY_r4REfRtT_Ap1-tMPyp4_1xaa4i3RB7hI="
                    alt=""
                    className="h-full w-full object-cover"
                />

                {/* Dark overlay */}

                <div className="absolute inset-0 bg-neutral-950/20" />

                {/* Gradient */}

                <div className="absolute inset-0 bg-gradient-to-r from-neutral-700 via-neutral-950/55 to-neutral-950/30" />

                {/* Bottom fade */}

                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-neutral-950/70 to-transparent" />
            </div>

            {/* ==================================================
                DECORATIVE GLOW
            ================================================== */}

            <div className="pointer-events-none absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-orange-500/20 blur-[100px]" />

            <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-purple-500/20 blur-[100px]" />

            {/* ==================================================
                DECORATIVE SVG
            ================================================== */}

            <motion.div
                className="
                    pointer-events-none
                    absolute
                    right-[8%]
                    top-10
                    hidden
                    lg:block
                "
                animate={{
                    rotate: [0, 10, -5, 0],
                    scale: [1, 1.08, 1],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <Star
                    size={30}
                    color="#FFD43B"
                />
            </motion.div>

            <motion.div
                className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-[6%]
                    hidden
                    lg:block
                "
                animate={{
                    rotate: [0, 8, 0, -8, 0],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <Sun className="scale-50 opacity-60" />
            </motion.div>

            <div className="relative z-10 mx-auto max-w-[1200px]">
                <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">

                    {/* ==================================================
                        LEFT CONTENT
                    ================================================== */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 30,
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
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        {/* Label */}

                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-[3px] w-9 rounded-full bg-[#FF6B35]" />

                            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-orange-400">
                                Let's Work Together
                            </span>
                        </div>

                        {/* Heading */}

                        <h2
                            className="
                                max-w-[760px]
                                text-4xl
                                font-black
                                leading-[0.95]
                                tracking-[-0.055em]
                                text-white
                                sm:text-5xl
                                lg:text-[68px]
                            "
                        >
                            Ready To Create
                            <br />

                            <span className="relative inline-block text-[#FF6B35]">
                                Something Amazing?
                                {/* <svg
                                    className="absolute -bottom-2 left-0 w-full"
                                    viewBox="0 0 500 18"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M3 12C120 2 350 2 497 10"
                                        stroke="#FFD43B"
                                        strokeWidth="6"
                                        strokeLinecap="round"
                                    />
                                </svg> */}
                            </span>
                        </h2>

                        {/* Description */}

                        <p className="mt-2 max-w-[600px] text-base font-medium leading-7 text-white/65 sm:text-lg">
                            Have an idea, project or requirement? Talk to
                            Anypro and let's turn your vision into an
                            experience people remember.
                        </p>

                        {/* Small trust line */}

                        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
                            <div className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-[#14A878]" />

                                <span className="text-xs font-bold text-white/60">
                                    Quick Response
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-[#FFD43B]" />

                                <span className="text-xs font-bold text-white/60">
                                    Custom Solutions
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-[#FF6B35]" />

                                <span className="text-xs font-bold text-white/60">
                                    Expert Support
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* ==================================================
                        RIGHT ACTIONS
                    ================================================== */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 30,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.3,
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.15,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="lg:pl-8"
                    >
                        <div className="rounded-[28px] border border-white/10 bg-white/[0.08] p-5 backdrop-blur-md sm:p-6">

                            {/* Main CTA */}

                            <motion.a
                                href="/inquiry"
                                whileHover={{
                                    scale: 1.02,
                                    y: -2,
                                }}
                                whileTap={{
                                    scale: 0.98,
                                }}
                                className="
                                    group
                                    flex
                                    items-center
                                    justify-between
                                    rounded-2xl
                                    bg-[#FF6B35]
                                    px-5
                                    py-4
                                    shadow-xl
                                    shadow-orange-950/30
                                "
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                                        <Sparkles
                                            size={22}
                                            className="text-white"
                                        />
                                    </div>

                                    <div>
                                        <p className="text-sm font-black text-white">
                                            Start Your Project
                                        </p>

                                        <p className="mt-0.5 text-[11px] font-medium text-white/70">
                                            Send us your inquiry
                                        </p>
                                    </div>
                                </div>

                                <span
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-white
                                        text-neutral-950
                                        transition-transform
                                        duration-300
                                        group-hover:rotate-[-45deg]
                                    "
                                >
                                    <ArrowRight size={17} />
                                </span>
                            </motion.a>

                            {/* Secondary actions */}

                            <div className="mt-3 grid grid-cols-2 gap-3">

                                {/* WhatsApp */}

                                <motion.a
                                    href="https://wa.me/919811117654"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{
                                        y: -3,
                                    }}
                                    whileTap={{
                                        scale: 0.98,
                                    }}
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                        rounded-2xl
                                        border
                                        border-white/10
                                        bg-white/10
                                        px-4
                                        py-4
                                        transition-colors
                                        hover:bg-white/15
                                    "
                                >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/15">
                                        <MessageCircle
                                            size={20}
                                            className="text-[#25D366]"
                                        />
                                    </div>

                                    <div>
                                        <p className="text-sm font-black text-white">
                                            WhatsApp
                                        </p>

                                        <p className="text-[10px] font-medium text-white/45">
                                            Chat with us
                                        </p>
                                    </div>
                                </motion.a>

                                {/* Contact */}

                                <motion.a
                                    href="/contact-us"
                                    whileHover={{
                                        y: -3,
                                    }}
                                    whileTap={{
                                        scale: 0.98,
                                    }}
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                        rounded-2xl
                                        border
                                        border-white/10
                                        bg-white/10
                                        px-4
                                        py-4
                                        transition-colors
                                        hover:bg-white/15
                                    "
                                >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#7C5CFC]/15">
                                        <Phone
                                            size={19}
                                            className="text-[#A993FF]"
                                        />
                                    </div>

                                    <div>
                                        <p className="text-sm font-black text-white">
                                            Contact Us
                                        </p>

                                        <p className="text-[10px] font-medium text-white/45">
                                            Get in touch
                                        </p>
                                    </div>
                                </motion.a>
                            </div>

                            {/* Bottom note */}

                            <div className="mt-4 flex items-center justify-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#14A878]" />

                                <span className="text-[10px] font-bold text-white/40">
                                    We're ready when you are
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}