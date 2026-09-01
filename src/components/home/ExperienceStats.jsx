
import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

import {
    Award,
    Users,
    FolderKanban,
    Trophy,
    Sparkles,
} from "lucide-react";

import { Star } from "../svg/svg";

/* ============================================================
   STATS DATA
============================================================ */

const stats = [
    {
        id: 1,
        number: 10,
        suffix: "+",
        title: "Years Experience",
        icon: Award,
        color: "#FF6B35",
        bg: "#fff4ee",
    },
    {
        id: 2,
        number: 250,
        suffix: "+",
        title: "Clients Served",
        icon: Users,
        color: "#7C5CFC",
        bg: "#f3f0ff",
    },
    {
        id: 3,
        number: 500,
        suffix: "+",
        title: "Projects Delivered",
        icon: FolderKanban,
        color: "#14A878",
        bg: "#eafaf4",
    },
    {
        id: 4,
        number: 50,
        suffix: "K+",
        title: "Athletes Reached",
        icon: Trophy,
        color: "#F2B705",
        bg: "#fff9df",
    },
];

/* ============================================================
   STAT ITEM
============================================================ */

function StatItem({ stat, index }) {
    const Icon = stat.icon;

    return (
        <motion.div
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
                amount: 0.3,
            }}
            transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
                y: -4,
            }}
            className="group relative"
        >
            <div
                className="
          relative
          flex
          items-center
          gap-4
          overflow-hidden
          rounded-[20px]
          border
          border-black/5
          px-5
          py-5
          shadow-[0_10px_35px_rgba(0,0,0,0.05)]
          transition-shadow
          duration-300
          group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]
        "
                style={{
                    backgroundColor: stat.bg,
                }}
            >
                {/* Decorative dots */}

                <div
                    className="
            pointer-events-none
            absolute
            -right-5
            -top-5
            h-16
            w-16
            rounded-full
            opacity-30
          "
                    style={{
                        backgroundColor: stat.color,
                    }}
                />

                {/* Icon */}

                <motion.div
                    whileHover={{
                        rotate: 8,
                        scale: 1.08,
                    }}
                    className="
            relative
            z-10
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-white
            shadow-sm
          "
                    style={{
                        border: `1.5px solid ${stat.color}30`,
                    }}
                >
                    <Icon
                        size={23}
                        strokeWidth={1.8}
                        style={{
                            color: stat.color,
                        }}
                    />
                </motion.div>

                {/* Content */}

                <div className="relative z-10 min-w-0">
                    <div className="flex items-baseline">
                        <span
                            className="
                text-3xl
                font-black
                leading-none
                tracking-[-0.06em]
                text-neutral-950
                sm:text-[34px]
              "
                        >
                            <CountUp
                                end={stat.number}
                                duration={1.8}
                                enableScrollSpy
                                scrollSpyOnce
                            />
                        </span>

                        <span
                            className="ml-0.5 text-xl font-black"
                            style={{
                                color: stat.color,
                            }}
                        >
                            {stat.suffix}
                        </span>
                    </div>

                    <p className="mt-1 text-sm font-bold text-neutral-600">
                        {stat.title}
                    </p>
                </div>

                {/* Small sparkle */}

                <motion.div
                    className="absolute bottom-3 right-3"
                    animate={{
                        rotate: [0, 10, -5, 0],
                        scale: [1, 1.12, 1],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <Sparkles
                        size={13}
                        style={{
                            color: stat.color,
                            opacity: 0.55,
                        }}
                    />
                </motion.div>
            </div>
        </motion.div>
    );
}

/* ============================================================
   MAIN SECTION
============================================================ */

export default function ExperienceStats() {
    return (
        <section
            className="
        relative
        overflow-hidden
        bg-white
        px-5
       
        sm:px-8
        lg:px-12
        pb-10
      "
        >
            {/* ================================================
          SUBTLE BACKGROUND
      ================================================= */}

            <div className="pointer-events-none absolute inset-0">
                <div
                    className="absolute inset-0 opacity-[0.2]"
                    style={{
                        backgroundImage:
                            "radial-gradient(#d4d4d4 1px, transparent 1px)",
                        backgroundSize: "22px 22px",
                    }}
                />

                <div className="absolute -left-24 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-orange-200/20 blur-[80px]" />

                <div className="absolute -right-24 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-purple-200/20 blur-[80px]" />
            </div>

            {/* ================================================
          CONTENT
      ================================================= */}

            <div className="relative z-10 mx-auto max-w-[1450px]">

                {/* Small heading */}

                <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="h-[3px] w-8 rounded-full bg-orange-500" />

                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500">
                            By The Numbers
                        </span>
                    </div>

                    <motion.div
                        animate={{
                            rotate: [0, 8, -5, 0],
                            scale: [1, 1.08, 1],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="hidden sm:block"
                    >
                        <Star
                            size={24}
                            color="#FFD43B"
                        />
                    </motion.div>
                </div>

                {/* Stats */}

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, index) => (
                        <StatItem
                            key={stat.id}
                            stat={stat}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}