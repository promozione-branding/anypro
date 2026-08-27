import React, { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

import {
  ArrowRight,
  Dice5,
  Puzzle,
  Trophy,
  Gamepad2,
  Sparkles,
  Shapes,
} from "lucide-react";

import { Cloud, Sun, Star, Balloon } from "../svg/svg";

import "swiper/css";
import "swiper/css/navigation";

const categories = [
  {
    id: 1,
    title: "Table Games",
    description:
      "Classic games, exciting challenges and fun moments for every player.",
    icon: Dice5,
    tag: "PLAY & WIN",
    color: "#FF6B35",
    bg: "linear-gradient(135deg, #fff0e8 0%, #ffd9c7 100%)",
    pattern: "table",
    image:
      "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=1000&q=85",
  },

  {
    id: 2,
    title: "Board Game",
    description:
      "Bring everyone together with strategy, adventure and endless fun.",
    icon: Puzzle,
    tag: "THINK & PLAY",
    color: "#7C5CFC",
    bg: "linear-gradient(135deg, #f0edff 0%, #ddd5ff 100%)",
    pattern: "board",
    image:
      "https://images.unsplash.com/photo-1629760946220-5693ee4c46ac?auto=format&fit=crop&w=1000&q=85",
  },

  {
    id: 3,
    title: "Sports Goods",
    description:
      "Everything you need to move, compete, practice and become your best.",
    icon: Trophy,
    tag: "GET ACTIVE",
    color: "#14A878",
    bg: "linear-gradient(135deg, #e6faf3 0%, #c8f1e1 100%)",
    pattern: "sports",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=85",
  },

  {
    id: 4,
    title: "Activity & Recreational Games",
    description:
      "Discover exciting activities designed for energy, creativity and fun.",
    icon: Gamepad2,
    tag: "HAVE FUN",
    color: "#F2B705",
    bg: "linear-gradient(135deg, #fff8dc 0%, #ffed9e 100%)",
    pattern: "activity",
    image:
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1000&q=85",
  },
];

/* ============================================================
   FLOATING SHAPE
============================================================ */

function FloatingShape({ className = "", children }) {
  return (
    <motion.div
      className={`pointer-events-none absolute ${className}`}
      animate={{
        y: [0, -8, 0],
        rotate: [-3, 3, -3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

/* ============================================================
   CATEGORY CARD
============================================================ */

function CategoryCard({ category, index }) {
  const Icon = category.icon;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 60,
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
        duration: 0.65,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -10,
      }}
      className="group relative min-w-0"
    >
      <div
        className="
          relative
          h-[450px]
          overflow-hidden
          rounded-[28px]
          border
          border-black/5
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
        "
        style={{
          background: category.bg,
        }}
      >
        {/* ==================================================
            BACKGROUND DOT PATTERN
        ================================================== */}

        <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(
                  circle at 20px 20px,
                  ${category.color} 1.5px,
                  transparent 1.5px
                )
              `,
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        {/* ==================================================
            IMAGE
        ================================================== */}

        <div className="absolute left-5 right-5 top-5 h-[235px] overflow-hidden rounded-[22px]">
          <img
            src={category.image}
            alt={category.title}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-110
            "
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          {/* Category tag */}
          <div className="absolute left-4 top-4">
            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                px-4
                py-2
                text-[10px]
                font-black
                tracking-[0.16em]
                text-white
                shadow-lg
              "
              style={{
                backgroundColor: category.color,
              }}
            >
              <Sparkles
                size={12}
                strokeWidth={3}
              />

              {category.tag}
            </span>
          </div>
        </div>

        {/* ==================================================
            FLOATING SHAPE
        ================================================== */}

        {/* <FloatingShape className="right-7 top-[105px] z-10">
          <div
            className="
              flex
              h-14
              w-14
              rotate-12
              items-center
              justify-center
              rounded-2xl
              bg-white
              shadow-xl
            "
            style={{
              border: `2px solid ${category.color}40`,
            }}
          >
            <Shapes
              size={28}
              strokeWidth={1.8}
              style={{
                color: category.color,
              }}
            />
          </div>
        </FloatingShape> */}

        {/* ==================================================
            DECORATIVE DOTS
        ================================================== */}

        <motion.div
          className="absolute left-[12%] top-[265px] h-4 w-4 rounded-full"
          style={{
            backgroundColor: category.color,
          }}
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute right-[14%] top-[290px] h-3 w-3 rounded-full"
          style={{
            backgroundColor: category.color,
          }}
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            z-20
            rounded-t-[20px]
            bg-white
            p-6
          "
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3
                className="
                  max-w-[230px]
                  text-[24px]
                  font-black
                  leading-[1.05]
                  tracking-[-0.04em]
                  text-neutral-950
                "
              >
                {category.title}
              </h3>

              <p className="mt-2 max-w-[250px] text-sm font-medium leading-5 text-neutral-500">
                {category.description}
              </p>
            </div>

            {/* Icon */}
            <motion.div
              whileHover={{
                scale: 1.12,
                rotate: 8,
              }}
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-full
              "
              style={{
                backgroundColor: `${category.color}15`,
              }}
            >
              <Icon
                size={27}
                strokeWidth={1.7}
                style={{
                  color: category.color,
                }}
              />
            </motion.div>
          </div>

          {/* Bottom line */}

          <div className="mt-5 h-[3px] w-full overflow-hidden rounded-full bg-neutral-100">
            <motion.div
              className="h-full origin-left"
              style={{
                backgroundColor: category.color,
              }}
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.15 + 0.5,
                duration: 0.8,
              }}
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ============================================================
   MAIN SECTION
============================================================ */

export default function ToyParkCategories() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const lineRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        titleRef.current,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power4.out",
        }
      ).fromTo(
        lineRef.current,
        {
          scaleX: 0,
          transformOrigin: "left center",
        },
        {
          scaleX: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
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
        border-red-100
        bg-[#fff]
        px-5
        py-10
        sm:px-8
        lg:px-12
        lg:py-15
      "
    >
      {/* ==================================================
          BACKGROUND
      ================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(#d4d4d4 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        <div className="absolute -left-32 top-20 h-[400px] w-[400px] rounded-full bg-orange-200/20 blur-[100px]" />

        <div className="absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-purple-200/20 blur-[100px]" />
      </div>

      {/* ==================================================
          CLOUDS + SUN + STARS
      ================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* SUN */}

        <motion.div
          className="
            absolute
            -right-4
            -top-4
            z-0
            hidden
            sm:block
            lg:right-10
            lg:top-5
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
          <Sun />
        </motion.div>

        {/* CLOUD LEFT */}

        <motion.div
          className="
            absolute
            -left-5
            top-8
            z-0
            hidden
            md:block
          "
          animate={{
            x: [0, 18, 0],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Cloud
            size={190}
            className="opacity-90"
          />
        </motion.div>

        {/* CLOUD CENTER */}

        <motion.div
          className="
            absolute
            left-[38%]
            top-[25px]
            z-0
            hidden
            lg:block
          "
          animate={{
            x: [0, -15, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Cloud
            size={125}
            className="opacity-70"
          />
        </motion.div>

        {/* CLOUD RIGHT */}

        <motion.div
          className="
            absolute
            -right-10
            bottom-[80px]
            z-0
            hidden
            xl:block
          "
          animate={{
            x: [0, -20, 0],
            y: [0, 7, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Cloud
            size={200}
            className="opacity-80"
          />
        </motion.div>

        {/* RED STAR */}

        <motion.div
          className="
            absolute
            left-[28%]
            top-[105px]
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
            size={32}
            color="#FF1744"
          />
        </motion.div>

        {/* YELLOW STAR */}

        <motion.div
          className="
            absolute
            right-[25%]
            bottom-[50px]
            hidden
            md:block
          "
          animate={{
            rotate: [0, -15, 5, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Star
            size={28}
            color="#FFD43B"
          />
        </motion.div>

        {/* BALLOON */}

        <motion.div
          className="
            absolute
            right-[7%]
            top-[155px]
            hidden
            xl:block
          "
          animate={{
            y: [0, -18, 0],
            rotate: [-4, 4, -4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Balloon color="#FF1744" />
        </motion.div>

        {/* SMALL YELLOW DOT */}

        <motion.div
          className="
            absolute
            left-[48%]
            top-[110px]
            h-3
            w-3
            rounded-full
            bg-[#FFD43B]
          "
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />

        {/* ORANGE DOT */}

        <motion.div
          className="
            absolute
            bottom-[90px]
            left-[30%]
            h-5
            w-5
            rounded-full
            bg-[#FF8A3D]
          "
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
      </div>

      {/* ==================================================
          CONTENT
      ================================================== */}

      <div className="relative z-10 mx-auto max-w-[1450px]">

        {/* HEADER */}

        <div className="mb-12 grid items-end gap-8 lg:grid-cols-[0.8fr_1.2fr]">

          {/* TITLE */}

          <div>
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-[3px] w-10 rounded-full bg-orange-500" />

              <span className="text-xs font-black uppercase tracking-[0.2em] text-orange-500">
                Explore Toy Park
              </span>
            </div>

            <h2
              ref={titleRef}
              className="
                max-w-[620px]
                text-4xl
                font-black
                leading-[0.95]
                tracking-[-0.055em]
                text-neutral-950
                sm:text-5xl
                lg:text-[64px]
              "
            >
              Find Your
              <br />

              <span className="relative inline-block text-[#FF6B35]">
                Favorite Play

                <svg
                  className="absolute -bottom-3 left-0 w-full"
                  viewBox="0 0 400 18"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 12C95 2 270 2 397 10"
                    stroke="#FFD43B"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </div>

          {/* DESCRIPTION */}

          <div className="lg:pb-2">
            <p className="max-w-[540px] text-base font-medium leading-7 text-neutral-500 sm:text-lg">
              From classic table games to outdoor adventures, discover a world
              of toys, games and activities made for unforgettable moments.
            </p>

            <div
              ref={lineRef}
              className="mt-7 h-[1px] w-full bg-neutral-200"
            />
          </div>
        </div>

        {/* ==================================================
            CARDS
        ================================================== */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>

        {/* ==================================================
            BOTTOM
        ================================================== */}

        <div className="mt-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-neutral-400">
              01
            </span>

            <div className="h-[2px] w-20 overflow-hidden rounded-full bg-neutral-200">
              <div className="h-full w-1/4 rounded-full bg-neutral-900" />
            </div>

            <span className="text-sm font-bold text-neutral-400">
              04
            </span>
          </div>

          <motion.button
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
              group
              inline-flex
              items-center
              justify-center
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
            Explore All Games

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
                group-hover:rotate-[-45deg]
              "
            >
              <ArrowRight size={15} />
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}