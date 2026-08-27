import React, { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

import {
    ShieldCheck,
    Sparkles,
    HeartHandshake,
    Truck,
    ArrowRight,
    Star,
} from "lucide-react";

const features = [
    {
        id: 1,
        title: "Quality Toys",
        description:
            "Carefully selected toys made for safe, exciting and long-lasting play.",
        icon: ShieldCheck,
        number: "01",
        color: "#FF1744",
    },
    {
        id: 2,
        title: "Endless Fun",
        description:
            "A playful collection filled with games and activities for every age.",
        icon: Sparkles,
        number: "02",
        color: "#7C5CFC",
    },
    {
        id: 3,
        title: "Made With Love",
        description:
            "We choose products that bring families together and create memories.",
        icon: HeartHandshake,
        number: "03",
        color: "#14A878",
    },
    {
        id: 4,
        title: "Easy Shopping",
        description:
            "Simple browsing, quick delivery and a smooth shopping experience.",
        icon: Truck,
        number: "04",
        color: "#F2B705",
    },
];

function FeatureCard({ item, index }) {
    const Icon = item.icon;

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
                amount: 0.2,
            }}
            transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
                y: -6,
            }}
            className="
        group
        relative
        overflow-hidden
        rounded-[24px]
        border
        border-neutral-100
        bg-white
        p-6
        shadow-[0_12px_40px_rgba(0,0,0,0.06)]
        transition-shadow
        duration-300
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]
      "
        >
            {/* Number */}

            <span
                className="
          absolute
          right-5
          top-5
          text-[11px]
          font-black
          tracking-[0.15em]
          text-neutral-300
        "
            >
                {item.number}
            </span>

            {/* Icon */}

            <motion.div
                whileHover={{
                    rotate: 8,
                    scale: 1.08,
                }}
                className="
          mb-5
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
        "
                style={{
                    backgroundColor: `${item.color}15`,
                }}
            >
                <Icon
                    size={25}
                    strokeWidth={1.8}
                    style={{
                        color: item.color,
                    }}
                />
            </motion.div>

            {/* Title */}

            <h3
                className="
          text-[19px]
          font-black
          tracking-[-0.03em]
          text-neutral-950
        "
            >
                {item.title}
            </h3>

            {/* Description */}

            <p className="mt-2 text-[13px] leading-5 text-neutral-500">
                {item.description}
            </p>

            {/* Bottom accent */}

            <div
                className="
          absolute
          bottom-0
          left-0
          h-[3px]
          w-0
          transition-all
          duration-500
          group-hover:w-full
        "
                style={{
                    backgroundColor: item.color,
                }}
            />
        </motion.div>
    );
}

export default function WhyChooseUs() {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const textRef = useRef(null);
    const toyRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: {
                    ease: "power4.out",
                },
            });

            tl.fromTo(
                headingRef.current,
                {
                    y: 60,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                }
            )
                .fromTo(
                    textRef.current,
                    {
                        y: 30,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                    },
                    "-=0.45"
                )
                .fromTo(
                    toyRef.current,
                    {
                        x: 100,
                        opacity: 0,
                        scale: 0.9,
                    },
                    {
                        x: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 1,
                    },
                    "-=0.45"
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
        bg-[#fffaf4]
        px-5
        py-10
        sm:px-8
        lg:px-12
        lg:py-15
        border-b border-orange-200
      "
        >
            {/* ==================================================
          VERY LIGHT BACKGROUND
      ================================================== */}

            <div className="pointer-events-none absolute inset-0">
                <div
                    className="absolute inset-0 opacity-[0.25]"
                    style={{
                        backgroundImage:
                            "radial-gradient(#d6d6d6 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                    }}
                />

                <div
                    className="
            absolute
            -left-40
            top-20
            h-[450px]
            w-[450px]
            rounded-full
            bg-yellow-200/20
            blur-[110px]
          "
                />

                <div
                    className="
            absolute
            -right-40
            bottom-0
            h-[450px]
            w-[450px]
            rounded-full
            bg-pink-200/20
            blur-[110px]
          "
                />
            </div>

            {/* ==================================================
          CONTENT
      ================================================== */}

            <div
                className="
          relative
          z-10
          mx-auto
          grid
          max-w-[1400px]
          items-center
          gap-12
          lg:grid-cols-[1.1fr_0.9fr]
          lg:gap-16
        "
            >
                {/* ==================================================
            LEFT SIDE
        ================================================== */}

                <div>
                    {/* Label */}

                    <div className="mb-5 flex items-center gap-3">
                        <span className="h-[3px] w-10 rounded-full bg-[#FF1744]" />

                        <span
                            className="
                text-xs
                font-black
                uppercase
                tracking-[0.2em]
                text-[#FF1744]
              "
                        >
                            Why Toy Park?
                        </span>
                    </div>

                    {/* Heading */}

                    <h2
                        ref={headingRef}
                        className="
              max-w-[650px]
              text-4xl
              font-black
              leading-[0.95]
              tracking-[-0.06em]
              text-neutral-950
              sm:text-5xl
              lg:text-[66px]
            "
                    >
                        More Than Toys,
                        <br />

                        <span className="relative inline-block text-[#FF1744]">
                            We Create Fun.

                            {/* little underline */}

                            <svg
                                className="
                  absolute
                  -bottom-3
                  left-0
                  w-full
                "
                                viewBox="0 0 420 18"
                                fill="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M4 11C105 2 290 2 416 9"
                                    stroke="#FFD43B"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>
                    </h2>

                    {/* Paragraph */}

                    <p
                        ref={textRef}
                        className="
              mt-7
              max-w-[570px]
              text-base
              font-medium
              leading-7
              text-neutral-500
              sm:text-lg
            "
                    >
                        At Toy Park, we believe play is an important part of growing,
                        learning and connecting. That's why we bring together toys and
                        games that turn ordinary moments into unforgettable adventures.
                    </p>

                    {/* ==================================================
              FEATURE CARDS
          ================================================== */}

                    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {features.map((item, index) => (
                            <FeatureCard
                                key={item.id}
                                item={item}
                                index={index}
                            />
                        ))}
                    </div>

                    {/* CTA */}

                    <motion.button
                        whileHover={{
                            scale: 1.03,
                        }}
                        whileTap={{
                            scale: 0.97,
                        }}
                        className="
              group
              mt-8
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-neutral-950
              px-7
              py-4
              text-sm
              font-black
              text-white
              shadow-xl
            "
                    >
                        Discover Toy Park

                        <span
                            className="
                flex
                h-7
                w-7
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
                            <ArrowRight size={15} />
                        </span>
                    </motion.button>
                </div>

                {/* ==================================================
            RIGHT SIDE — TOY PNG
        ================================================== */}

                <div
                    ref={toyRef}
                    className="
            relative
            flex
            min-h-[450px]
            items-center
            justify-center
            lg:min-h-[650px]
          "
                >
                    {/* Soft circle behind toy */}

                    <motion.div
                        className="
              absolute
              h-[330px]
              w-[330px]
              rounded-full
              bg-[#FFD43B]
              sm:h-[430px]
              sm:w-[430px]
              lg:h-[500px]
              lg:w-[500px]
            "
                        animate={{
                            scale: [1, 1.04, 1],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Secondary circle */}

                    <div
                        className="
              absolute
              h-[270px]
              w-[270px]
              rounded-full
              border-[2px]
              border-dashed
              border-[#FF1744]/30
              sm:h-[360px]
              sm:w-[360px]
              lg:h-[430px]
              lg:w-[430px]
            "
                    />

                    {/* ==================================================
              TOY PNG
              
              Replace this path with your actual PNG.
          ================================================== */}

                    <motion.img
                        src="https://static.vecteezy.com/system/resources/thumbnails/045/686/300/small/black-rook-chess-piece-3d-icon-free-png.png"
                        alt="Colorful toy"
                        className="
              relative
              z-10
              w-[300px]
              max-w-[85%]
              object-contain
              drop-shadow-[0_30px_25px_rgba(0,0,0,0.18)]
              sm:w-[400px]
            "
                        animate={{
                            y: [0, -18, 0],
                            rotate: [-2, 2, -2],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    {/* ==================================================
              SMALL DECORATIONS
          ================================================== */}

                    {/* Star */}

                    <motion.div
                        className="
              absolute
              left-[5%]
              top-[20%]
              z-20
            "
                        animate={{
                            rotate: [0, 20, -10, 0],
                            scale: [1, 1.15, 1],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                        }}
                    >
                        <Star
                            size={34}
                            strokeWidth={2}
                            className="fill-[#FF1744] text-[#FF1744]"
                        />
                    </motion.div>

                    {/* Small star */}

                    <motion.div
                        className="
              absolute
              right-[8%]
              top-[25%]
              z-20
            "
                        animate={{
                            rotate: [0, -20, 10, 0],
                            y: [0, -8, 0],
                        }}
                        transition={{
                            duration: 4.5,
                            repeat: Infinity,
                        }}
                    >
                        <Star
                            size={25}
                            strokeWidth={2}
                            className="fill-[#7C5CFC] text-[#7C5CFC]"
                        />
                    </motion.div>

                    {/* Orange dot */}

                    <motion.div
                        className="
              absolute
              bottom-[17%]
              left-[12%]
              h-5
              w-5
              rounded-full
              bg-[#FF6B35]
            "
                        animate={{
                            y: [0, -12, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                        }}
                    />

                    {/* Purple dot */}

                    <motion.div
                        className="
              absolute
              bottom-[20%]
              right-[10%]
              h-4
              w-4
              rounded-full
              bg-[#7C5CFC]
            "
                        animate={{
                            y: [0, 10, 0],
                        }}
                        transition={{
                            duration: 3.5,
                            repeat: Infinity,
                        }}
                    />

                    {/* Small sparkle */}

                    <motion.div
                        className="
              absolute
              bottom-[32%]
              right-[18%]
              z-20
            "
                        animate={{
                            rotate: [0, 180, 360],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        <Sparkles
                            size={28}
                            strokeWidth={1.8}
                            className="text-[#FF1744]"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}