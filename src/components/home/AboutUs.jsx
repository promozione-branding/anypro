"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    FiActivity,
    FiShield,
    FiHeart,
    FiArrowRight,
} from "react-icons/fi";

const features = [
    {
        icon: <FiActivity />,
        title: "Premium Quality",
        text: "We provide carefully selected toys designed for fun, creativity and everyday play.",
    },
    {
        icon: <FiShield />,
        title: "Safe & Reliable",
        text: "Every product is selected with safety, durability and a great play experience in mind.",
    },
    {
        icon: <FiHeart />,
        title: "Made For Kids",
        text: "Our collection brings imagination, learning and happiness together for every child.",
    },
];

export default function AboutUs() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-white pt-10 md:pt-15 pb-5"
        >
            {/* =====================================================
                BACKGROUND DECORATIONS
            ====================================================== */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                {/* Top right dots */}
                <svg
                    className="absolute right-[8%] top-10 h-28 w-28 opacity-40"
                    viewBox="0 0 120 120"
                    fill="none"
                >
                    <pattern
                        id="aboutDots"
                        width="16"
                        height="16"
                        patternUnits="userSpaceOnUse"
                    >
                        <circle
                            cx="4"
                            cy="4"
                            r="2.5"
                            fill="#d1d1d1"
                        />
                    </pattern>

                    <rect
                        width="120"
                        height="120"
                        fill="url(#aboutDots)"
                    />
                </svg>

                {/* Big decorative text */}
                <div className="absolute left-[42%] top-[15%] hidden select-none text-[180px] font-black leading-none text-gray-100/80 xl:block">
                    TOY
                </div>

                {/* Background wave */}
                <svg
                    className="absolute left-[3%] top-[45%] h-20 w-40 text-[#e31e24]/20"
                    viewBox="0 0 160 80"
                    fill="none"
                >
                    <path
                        d="M0 30C20 5 40 55 60 30C80 5 100 55 120 30C140 5 150 25 160 30"
                        stroke="currentColor"
                        strokeWidth="5"
                    />

                    <path
                        d="M0 50C20 25 40 75 60 50C80 25 100 75 120 50C140 25 150 45 160 50"
                        stroke="currentColor"
                        strokeWidth="5"
                    />
                </svg>
            </div>

            <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                <div className="grid items-center gap-14 md:grid-cols-2 lg:gap-10 xl:gap-16">

                    {/* =================================================
                        LEFT IMAGE AREA
                    ================================================== */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -80,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative mx-auto h-[500px] w-full max-w-[600px] sm:h-[580px] lg:h-[650px]"
                    >
                        {/* =================================================
                            RED ORGANIC SVG BACKGROUND
                        ================================================== */}

                        <motion.svg
                            initial={{
                                scale: 0.85,
                                opacity: 0,
                            }}
                            whileInView={{
                                scale: 1,
                                opacity: 1,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 sm:h-[520px] sm:w-[520px] lg:h-[580px] lg:w-[580px]"
                            viewBox="0 0 600 600"
                            fill="none"
                        >
                            <path
                                d="M300 10C465 10 590 120 590 300C590 475 475 590 300 590C120 590 10 475 10 300C10 120 120 10 300 10Z"
                                fill="#e31e24"
                            />
                        </motion.svg>

                        {/* =================================================
                            SVG WHITE DECORATION
                        ================================================== */}

                        <svg
                            className="absolute left-[8%] top-[22%] z-10 h-24 w-36 text-white"
                            viewBox="0 0 150 100"
                            fill="none"
                        >
                            <path
                                d="M5 25C20 5 35 45 50 25C65 5 80 45 95 25C110 5 125 45 145 25"
                                stroke="currentColor"
                                strokeWidth="5"
                            />

                            <path
                                d="M5 50C20 30 35 70 50 50C65 30 80 70 95 50C110 30 125 70 145 50"
                                stroke="currentColor"
                                strokeWidth="5"
                            />

                            <path
                                d="M5 75C20 55 35 95 50 75C65 55 80 95 95 75C110 55 125 95 145 75"
                                stroke="currentColor"
                                strokeWidth="5"
                            />
                        </svg>

                        {/* =================================================
                            LARGE "T" DECORATION
                        ================================================== */}

                        <div className="absolute right-[2%] top-[5%] z-10 select-none text-[170px] font-black leading-none text-gray-200/80 sm:text-[210px]">
                            T
                        </div>

                        {/* =================================================
                            DOT PATTERN
                        ================================================== */}

                        <svg
                            className="absolute right-[5%] top-[0%] z-10 h-32 w-32 opacity-70"
                            viewBox="0 0 120 120"
                            fill="none"
                        >
                            <pattern
                                id="imageDots"
                                width="14"
                                height="14"
                                patternUnits="userSpaceOnUse"
                            >
                                <circle
                                    cx="4"
                                    cy="4"
                                    r="2.3"
                                    fill="#d4d4d4"
                                />
                            </pattern>

                            <rect
                                width="120"
                                height="120"
                                fill="url(#imageDots)"
                            />
                        </svg>

                        {/* =================================================
                            TERMOLINE PNG
                        ================================================== */}

                        <motion.img
                            src="https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-trampoline-clipart-funny-cartoon-trampoline-with-colored-net-vector-illustration-isolated-png-image_6817750.png"
                            // src="https://png.pngtree.com/png-clipart/20230913/original/pngtree-trampoline-clipart-trampoline-for-children-flat-illustration-cartoon-vector-png-image_11075554.png"
                            // src="https://png.pngtree.com/png-clipart/20230914/original/pngtree-trampolin-clipart-trampoline-set-and-gate-isolated-on-white-background-vector-png-image_12150871.png"
                            alt="Toy Park"
                            initial={{
                                opacity: 0,
                                y: 50,
                                scale: 0.92,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.25,
                            }}
                            transition={{
                                duration: 1,
                                delay: 0.15,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            whileHover={{
                                y: -8,
                                scale: 1.02,
                                transition: {
                                    duration: 0.4,
                                },
                            }}
                            className="absolute bottom-0 left-1/2 z-20 w-[85%] max-w-[520px] -translate-x-1/2 object-contain drop-shadow-2xl"
                        />

                        {/* =================================================
                            SMALL RED CIRCLE
                        ================================================== */}

                        <motion.div
                            initial={{
                                scale: 0,
                            }}
                            whileInView={{
                                scale: 1,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                delay: 0.5,
                                type: "spring",
                                stiffness: 180,
                                damping: 12,
                            }}
                            className="absolute bottom-[12%] left-[5%] z-30 flex h-16 w-16 items-center justify-center rounded-full border-[8px] border-white bg-[#e31e24] shadow-xl"
                        >
                            <span className="text-xl font-black text-white">
                                +
                            </span>
                        </motion.div>
                    </motion.div>

                    {/* =================================================
                        RIGHT CONTENT
                    ================================================== */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 70,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative"
                    >
                        {/* =================================================
                            LABEL
                        ================================================== */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 15,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.5,
                            }}
                            className="relative mb-5 inline-block"
                        >
                            <svg
                                className="absolute -inset-x-4 -inset-y-2 h-12 w-[calc(100%+32px)]"
                                viewBox="0 0 250 55"
                                fill="none"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M8 15C55 5 190 8 242 13L232 38C175 32 65 40 10 34L8 15Z"
                                    fill="#ff1744"
                                />

                                <path
                                    d="M3 38C60 47 190 43 246 37"
                                    stroke="#ff1744"
                                    strokeWidth="7"
                                    strokeLinecap="round"
                                />
                            </svg>

                            <span className="relative z-10 px-3 text-sm font-bold uppercase tracking-wide text-white">
                                About Toy Park
                            </span>
                        </motion.div>

                        {/* =================================================
                            HEADING
                        ================================================== */}

                        <motion.h2
                            initial={{
                                opacity: 0,
                                y: 25,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 0.1,
                            }}
                            className="max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight text-black sm:text-5xl lg:text-[52px]"
                        >
                            We Bring
                            <br />

                            <span className="relative inline-block">
                                Fun & Imagination
                                <svg
                                    className="absolute -bottom-5 left-0 w-full"
                                    viewBox="0 0 400 35"
                                    fill="none"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M5 24C90 5 180 10 260 15C315 18 350 14 395 8"
                                        stroke="#ff1744"
                                        strokeWidth="7"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>

                            <br />

                            To Every Child!
                        </motion.h2>

                        {/* =================================================
                            DESCRIPTION
                        ================================================== */}

                        <motion.p
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 0.2,
                            }}
                            className="mt-10 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg"
                        >
                            Toy Park is a place where play meets
                            imagination. We bring together exciting,
                            creative and safe toys that make every
                            moment of childhood more memorable.
                        </motion.p>

                        {/* =================================================
                            FEATURES
                        ================================================== */}

                        <div className="mt-10 space-y-7">

                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{
                                        opacity: 0,
                                        x: 40,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.2,
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.25 + index * 0.12,
                                    }}
                                    className="group flex gap-5"
                                >
                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{
                                            scale: 1.08,
                                            rotate: -4,
                                        }}
                                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-red-50 text-2xl text-[#e31e24] transition-colors duration-300 group-hover:bg-[#e31e24] group-hover:text-white"
                                    >
                                        {feature.icon}
                                    </motion.div>

                                    {/* Content */}
                                    <div>
                                        <h3 className="text-xl font-bold text-black">
                                            {feature.title}
                                        </h3>

                                        <p className="mt-2 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
                                            {feature.text}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* =================================================
                            BUTTON
                        ================================================== */}
                        <Link href="/products">
                            <motion.button
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    delay: 0.6,
                                }}
                                whileHover={{
                                    x: 5,
                                }}
                                whileTap={{
                                    scale: 0.96,
                                }}
                                className="mt-10 flex items-center gap-3 rounded-full bg-[#e31e24] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-200 transition-shadow hover:shadow-xl"
                            >
                                Discover More

                                <FiArrowRight size={18} />
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}