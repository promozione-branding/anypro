import React, { useLayoutEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ArrowLeft, ArrowRight, Clock3, } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import { categories } from "@/data/data";
import { Cloud, Sun, Star, Balloon } from "../svg/svg";

function CategoryCard({ item }) {
  const Icon = item.icon;

  return (
    <motion.article
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className="group relative h-[500px] overflow-visible"
    >
      {/* IMAGE */}
      <div className="relative h-[365px] overflow-hidden bg-neutral-200">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-black/[0.04]" />

        {/* IMAGE SHINE */}
        <motion.div
          className="
            absolute
            inset-y-0
            -left-[100%]
            w-[45%]
            skew-x-[-20deg]
            bg-white/20
          "
          animate={{
            left: ["-100%", "180%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* WHITE INFORMATION CARD */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          z-10
          min-h-[225px]
          bg-white
          px-6
          pb-7
          pt-12
          shadow-[0_15px_45px_rgba(0,0,0,0.12)]
        "
        style={{
          clipPath:
            "polygon(12% 0%, 100% 18%, 100% 100%, 0% 100%, 0% 16%)",
        }}
      >
        <div className="flex flex-col items-center text-center">
          {/* ICON */}
          <motion.div
            className="
              mb-4
              flex
              h-[58px]
              w-[58px]
              items-center
              justify-center
            "
            whileHover={{
              scale: 1.1,
              rotate: -5,
            }}
          >
            <Icon
              size={48}
              strokeWidth={1.7}
              className="text-[#ff1744]"
            />
          </motion.div>

          {/* TITLE */}
          <h3
            className="
              max-w-[280px]
              text-[22px]
              font-extrabold
              leading-tight
              tracking-[-0.03em]
              text-neutral-950
            "
          >
            {item.title}
          </h3>

          {/* META */}
          <div
            className="
              mt-3
              flex
              items-center
              gap-2
              text-sm
              font-medium
              text-neutral-500
            "
          >
            <Clock3 size={16} strokeWidth={1.6} />

            <span>{item.time}</span>
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
              mt-6
              flex
              items-center
              gap-3
              bg-[#ff1744]
              px-7
              py-3.5
              text-sm
              font-bold
              uppercase
              tracking-wide
              text-white
              shadow-[0_12px_25px_rgba(255,23,68,0.25)]
              transition-colors
              hover:bg-[#e90032]
            "
          >
            Explore

            <ArrowRight size={17} />
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}

export default function CategoriesSlider() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const navigationRef = useRef(null);
  const swiperRef = useRef(null);

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
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
        }
      )
        .fromTo(
          paragraphRef.current,
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
          navigationRef.current,
          {
            y: 25,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
          },
          "-=0.3"
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
        border-y
        border-red-100
        bg-[#fafafa]
        py-10
        md:py-18
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-60
        "
        style={{
          backgroundImage: "radial-gradient(#d7d7d7 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* SUN */}
        <motion.div
          className="
            absolute
            -right-2
            -top-2
            hidden
            lg:block
          "
          animate={{
            rotate: [0, 8, 0],
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sun />
        </motion.div>

        {/* TOP LEFT CLOUD */}
        <motion.div
          className="
            absolute
            left-[2%]
            top-[30px]
            hidden
            lg:block
          "
          animate={{
            x: [0, 12, 0],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Cloud size={170} />
        </motion.div>

        {/* TOP CENTER CLOUD */}
        <motion.div
          className="
            absolute
            left-[50%]
            top-0
            opacity-70
          "
          animate={{
            x: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Cloud size={130} />
        </motion.div>

        {/* RIGHT CLOUD */}
        {/* <motion.div
          className="
            absolute
            -right-[30px]
            bottom-[50px]
            hidden
            xl:block
          "
          animate={{
            x: [0, -12, 0],
            y: [0, 7, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Cloud size={190} />
        </motion.div> */}

        {/* RED STAR */}
        <motion.div
          className="
            absolute
            left-[28%]
            top-[85px]
          "
          animate={{
            rotate: [0, 15, -5, 0],
            scale: [1, 1.12, 1],
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
            right-[28%]
            bottom-5
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

        {/* PURPLE STAR */}
        <motion.div
          className="
            absolute
            left-[47%]
            bottom-[25px]
            hidden
            md:block
          "
          animate={{
            rotate: [0, 20, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Star
            size={22}
            color="#8B5CF6"
          />
        </motion.div>

        {/* BALLOON */}
        {/* <motion.div
          className="
            absolute
            right-[6%]
            top-[130px]
            hidden
            xl:block
          "
          animate={{
            y: [0, -18, 0],
            rotate: [-3, 3, -3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Balloon color="#FF1744" />
        </motion.div> */}

        {/* ORANGE DOT */}
        <motion.div
          className="
            absolute
            bottom-[70px]
            left-[34%]
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
            ease: "easeInOut",
          }}
        />

        {/* PURPLE DOT */}
        <motion.div
          className="
            absolute
            right-[15%]
            top-[70px]
            h-4
            w-4
            rounded-full
            bg-[#8B5CF6]
          "
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* SMALL YELLOW DOT */}
        <motion.div
          className="
            absolute
            left-[52%]
            top-[75px]
            h-3
            w-3
            rounded-full
            bg-[#FFD43B]
          "
          animate={{
            y: [0, -7, 0],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div
        className="
          pointer-events-none
          absolute
          left-2
          top-40
          z-0
          hidden
          select-none
          lg:block
        "
      >
        <div
          className="
            rotate-[-12deg]
            text-[105px]
            font-black
            uppercase
            leading-[0.7]
            tracking-[-0.08em]
            text-neutral-200
          "
        >
          PLAY
        </div>

        <div
          className="
            mt-2
            rotate-[-12deg]
            text-[105px]
            font-black
            uppercase
            leading-[0.7]
            tracking-[-0.08em]
            text-neutral-200
          "
        >
          MORE
        </div>
      </div>


      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[500px_minmax(0,1fr)]
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div
            className="
              relative
              z-20
              px-6
              pb-12
              lg:px-10
              lg:pb-0
              xl:px-16
            "
          >
            {/* LABEL */}
            <div className="mb-6 inline-flex">
              <span
                className="
                  relative
                  bg-[#ff1744]
                  px-7
                  py-2
                  text-xs
                  font-black
                  uppercase
                  tracking-[0.15em]
                  text-white
                "
              >
                Explore Toy Park

                <span
                  className="
                    absolute
                    -left-2
                    top-0
                    h-full
                    w-3
                    bg-[#fafafa]
                    [clip-path:polygon(0_0,100%_50%,0_100%)]
                  "
                />

                <span
                  className="
                    absolute
                    -right-2
                    top-0
                    h-full
                    w-3
                    bg-[#fafafa]
                    [clip-path:polygon(100%_0,0_50%,100%_100%)]
                  "
                />
              </span>
            </div>

            {/* HEADING */}
            <h2
              ref={headingRef}
              className="
                max-w-[400px]
                text-[43px]
                font-black
                leading-[1.02]
                tracking-[-0.055em]
                text-black
                sm:text-[50px]
                lg:text-[48px]
                xl:text-[54px]
              "
            >
              Discover Our
              <br />

              <span className="relative inline-block text-[#ff1744]">
                Play Categories

                {/* UNDERLINE */}
                <svg
                  className="
                    absolute
                    -bottom-6
                    left-0
                    w-full
                  "
                  viewBox="0 0 300 15"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8C65 1 190 2 297 8"
                    stroke="#FFD43B"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            {/* PARAGRAPH */}
            <p
              ref={paragraphRef}
              className="
                mt-7
                max-w-[370px]
                text-[15px]
                font-medium
                leading-7
                text-neutral-500
              "
            >
              From classic table games to exciting recreational activities,
              discover everything you need to make every playtime memorable.
            </p>

            {/* NAVIGATION */}
            <div
              ref={navigationRef}
              className="
                mt-10
                flex
                items-center
                gap-3
              "
            >
              <button
                type="button"
                className="
                  toy-prev
                  flex
                  h-[52px]
                  w-[60px]
                  items-center
                  justify-center
                  bg-neutral-600
                  text-white
                  transition-all
                  hover:bg-neutral-800
                  active:scale-95
                "
                aria-label="Previous category"
              >
                <ArrowLeft size={21} />
              </button>

              <button
                type="button"
                className="
                  toy-next
                  flex
                  h-[52px]
                  w-[60px]
                  items-center
                  justify-center
                  border
                  border-black
                  bg-[#ff1744]
                  text-white
                  transition-all
                  hover:bg-[#e90032]
                  active:scale-95
                "
                aria-label="Next category"
              >
                <ArrowRight size={21} />
              </button>
            </div>
          </div>

          {/* =================================================
              SWIPER
          ================================================= */}

          <div className="relative min-w-0 overflow-hidden">
            <Swiper
              modules={[Navigation, Autoplay]}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              navigation={{
                prevEl: ".toy-prev",
                nextEl: ".toy-next",
              }}
              spaceBetween={28}
              slidesPerView={1.05}
              speed={750}
              grabCursor
              loop
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                480: {
                  slidesPerView: 1.15,
                  spaceBetween: 20,
                },

                640: {
                  slidesPerView: 1.45,
                  spaceBetween: 24,
                },

                768: {
                  slidesPerView: 1.7,
                  spaceBetween: 24,
                },

                900: {
                  slidesPerView: 2,
                  spaceBetween: 26,
                },

                1200: {
                  slidesPerView: 2,
                  spaceBetween: 28,
                },

                1400: {
                  slidesPerView: 2.15,
                  spaceBetween: 30,
                },

                1600: {
                  slidesPerView: 2.3,
                  spaceBetween: 30,
                },
              }}
              className="!overflow-visible"
            >
              {categories.map((item, index) => (
                <SwiperSlide key={`${item.title}-${index}`}>
                  <CategoryCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}