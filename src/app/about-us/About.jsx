"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Sparkles,
  Target,
  Users,
  Trophy,
  ShieldCheck,
} from "lucide-react";

import { Cloud, Sun, Star } from "@/components/svg/svg";

const stats = [
  {
    number: "10+",
    label: "Years of Experience",
  },
  {
    number: "500+",
    label: "Products Delivered",
  },
  {
    number: "1000+",
    label: "Happy Customers",
  },
  {
    number: "25+",
    label: "Cities Served",
  },
];

const values = [
  {
    icon: Target,
    title: "Quality First",
    description:
      "We focus on reliable materials, thoughtful design, and products made to deliver a great experience.",
  },
  {
    icon: Users,
    title: "Customer Focused",
    description:
      "Our customers are at the heart of everything we do, from product selection to after-sales support.",
  },
  {
    icon: Trophy,
    title: "Built to Perform",
    description:
      "We bring together fun, functionality, and durability to create products people love to use.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Service",
    description:
      "From inquiry to delivery, our team is committed to making every step simple and dependable.",
  },
];

function CountUp({ value, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value, 10);
    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // Smooth ease-out
      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      const currentValue = Math.floor(
        start + (end - start) * easedProgress
      );

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function About() {
  return (<>
    <div className="relative z-10 pt-32">
      <div className="relative min-h-[420px] overflow-hidden bg-black sm:min-h-[470px] lg:min-h-[500px]">

        {/* Red glow */}

        <div className="pointer-events-none absolute -left-32 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#FF1744]/20 blur-[100px]" />

        <div className="pointer-events-none absolute right-[-100px] bottom-[-150px] h-[350px] w-[350px] rounded-full bg-[#FF1744]/15 blur-[100px]" />

        {/* Subtle grid */}

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* ================= CONTENT ================= */}

        <div className="relative z-20 flex min-h-[420px] items-center sm:min-h-[470px] lg:min-h-[500px]">

          <div className="grid w-full items-center lg:grid-cols-[0.9fr_1.1fr]">

            {/* LEFT */}

            <motion.div
              initial={{
                opacity: 0,
                x: -35,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="relative z-30 px-7 py-12 sm:px-10 lg:px-14"
            >
              <motion.div
                animate={{
                  rotate: [0, 8, -8, 0],
                  y: [-5, 5, -5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-[30%] top-[10%]"
              >
                <Star
                  size={48}
                  color="#FFE175"
                />
              </motion.div>

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-white/70 backdrop-blur">
                <Sparkles
                  size={14}
                  className="text-[#FF1744]"
                />

                About Us
              </div>

              {/* Heading */}

              <h1 className="max-w-xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                We make
                <br />

                <span className="text-[#FF1744]">
                  play unforgettable.
                </span>
              </h1>

              {/* Description */}

              <p className="mt-5 max-w-lg text-sm leading-7 text-white/50 sm:text-base">
                We bring together quality games, sports products
                and recreational experiences designed to make
                every moment more exciting.
              </p>
            </motion.div>

            {/* ================= SVG AREA ================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 40,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="relative hidden h-full min-h-[420px] lg:block"
            >

              {/* White organic background */}

              <div className="absolute right-[-5%] top-1/2 h-[470px] w-[470px] -translate-y-1/2 rounded-full bg-white/[0.06]" />
              {/* Uploaded SVG */}
              <div className="absolute bottom-0 right-[2%] h-[470px] w-[560px]">
                <img
                  src="/animations/Bouncy ball.svg"
                  alt="Happy child enjoying recreation"
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Floating star */}
              <motion.div
                animate={{
                  rotate: [0, 8, -8, 0],
                  y: [-5, 5, -5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-[12%] top-[10%]"
              >
                <Star
                  size={48}
                  color="#FF1744"
                />
              </motion.div>

            </motion.div>
          </div>
        </div>

        {/* ================= MOBILE SVG ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="relative block h-[260px] lg:hidden"
        >
          <div className="absolute bottom-[-15px] left-1/2 h-[300px] w-[350px] -translate-x-1/2">
            <img
              src="/animations/Bouncy ball.svg"
              alt="Happy child enjoying recreation"
              className="h-full w-full object-contain"
            />
          </div>
        </motion.div>
      </div>
    </div>

    <main className="relative min-h-screen overflow-hidden bg-white text-black">
      <div className="pointer-events-none absolute left-[-35px] top-32 hidden opacity-60 md:block">
        <Cloud size={130} />
      </div>

      <div className="pointer-events-none absolute right-[-20px] top-28 hidden opacity-70 md:block">
        <Sun />
      </div>

      <div className="pointer-events-none absolute right-[8%] top-[38%] hidden rotate-12 opacity-70 lg:block">
        <Star size={42} />
      </div>

      <div className="pointer-events-none absolute bottom-[18%] left-[3%] hidden opacity-60 lg:block">
        <Cloud size={100} />
      </div>

      <section className="relative z-10 px-5 py-10 sm:px-8 lg:py-15">
        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

            {/* LEFT CONTENT */}

            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-4 py-2 text-xs font-semibold text-black/60">
                <Sparkles
                  size={14}
                  className="text-[#FF1744]"
                />

                About Our Company
              </div>

              <h1 className="max-w-2xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                We believe{" "}
                <span className="text-[#FF1744]">
                  play
                </span>{" "}
                brings people together.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-black/50 sm:text-lg">
                We are passionate about creating and supplying
                quality games, sports products, and recreational
                experiences that bring more fun into everyday life.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/products"
                  className="group flex items-center gap-2 rounded-xl bg-[#FF1744] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-black"
                >
                  Explore Products

                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="/contact-us"
                  className="flex items-center gap-2 rounded-xl border border-black/10 bg-white px-6 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}

            <motion.div
              initial={{
                opacity: 0,
                x: 35,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="relative mx-auto w-full max-w-xl"
            >

              {/* Red shadow shape */}

              <div className="absolute -bottom-4 -left-4 h-full w-full rounded-[2rem] bg-[#FF1744]" />

              <div className="relative h-[400px] overflow-hidden rounded-[2rem] bg-black sm:h-[470px]">

                <img
                  src="https://cdn-icons-png.flaticon.com/512/2656/2656502.png"
                  alt="Our team working together"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                    Our Mission
                  </p>

                  <p className="mt-2 max-w-md text-xl font-bold leading-7 text-white">
                    Creating memorable experiences through
                    play, movement and connection.
                  </p>
                </div>
              </div>

              {/* Floating badge */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.7,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 0.8,
                  duration: 0.5,
                }}
                className="absolute -right-4 top-8 flex h-20 w-20 rotate-6 items-center justify-center rounded-2xl bg-white shadow-xl ring-1 ring-black/5 sm:-right-7"
              >
                <div className="text-center">
                  <p className="text-2xl font-black text-[#FF1744]">
                    10+
                  </p>

                  <p className="text-[9px] font-bold uppercase tracking-wider text-black/45">
                    Years
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-black/[0.07] bg-[#f8f8f8]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 sm:px-8 lg:grid-cols-4">

          {stats.map((stat, index) => {
            // Extract number and suffix from values like "500+"
            const number = stat.number.match(/\d+/)?.[0] || "0";
            const suffix = stat.number.replace(/\d+/g, "");

            return (
              <motion.div
                key={stat.label}
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
                  amount: 0.4,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className={`px-4 py-8 text-center sm:py-10 ${index !== 0
                  ? "border-l border-black/[0.07]"
                  : ""
                  }`}
              >
                <p className="text-3xl font-black text-black sm:text-4xl">
                  <CountUp
                    value={number}
                    suffix={suffix}
                  />
                </p>

                <p className="mt-1 text-xs font-medium text-black/40 sm:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}

        </div>
      </section>

      <section className="relative z-10 px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -right-3 -top-3 h-full w-full rounded-[2rem] border-2 border-[#FF1744]" />

            <div className="relative h-[360px] overflow-hidden rounded-[2rem] bg-[#f5f5f5] sm:h-[430px]">
              <img
                src="https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=1200&q=85"
                alt="People enjoying recreational games"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-5 -left-4 rounded-2xl bg-black px-5 py-4 shadow-xl sm:-left-6">
              <p className="text-xs text-white/50">
                Since
              </p>

              <p className="text-xl font-black text-white">
                2016
              </p>
            </div>
          </motion.div>

          {/* CONTENT */}

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
              amount: 0.25,
            }}
            transition={{
              duration: 0.7,
            }}
            className="order-1 lg:order-2"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF1744]">
              Our Story
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              More than products.
              <br />
              <span className="text-[#FF1744]">
                We create experiences.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-7 text-black/50 sm:text-base">
              What started with a simple love for games and
              recreation has grown into a business focused on
              helping homes, schools, offices, clubs and
              entertainment spaces create better experiences.
            </p>

            <p className="mt-4 text-sm leading-7 text-black/50 sm:text-base">
              We carefully select products that combine quality,
              durability and fun. Whether it is a table game,
              board game, sports product or recreational activity,
              our goal is always the same — make play more
              accessible and enjoyable.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Quality products at competitive prices",
                "Products for homes and commercial spaces",
                "Reliable customer support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF1744] text-white">
                    <Check size={14} />
                  </span>

                  <span className="text-sm font-semibold text-black/65">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-black px-5 py-20 text-white sm:px-8 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <motion.div
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
            className="max-w-2xl"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF1744]">
              What We Stand For
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Built around the things
              <span className="text-[#FF1744]">
                {" "}that matter.
              </span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/45 sm:text-base">
              Our approach is simple: provide great products,
              create great experiences and take care of the
              people we work with.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
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
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF1744]/50"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF1744] text-white">
                    <Icon size={20} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/40">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-16 sm:px-8 lg:py-20">

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
          }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#FF1744] px-6 py-12 sm:px-10 lg:px-14"
        >

          {/* Decorations */}

          <div className="pointer-events-none absolute right-8 top-[-15px] rotate-12 opacity-25">
            <Star
              size={90}
              color="#ffffff"
            />
          </div>

          <div className="pointer-events-none absolute bottom-[-20px] left-[35%] opacity-20">
            <Cloud size={120} />
          </div>

          <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                Let's Work Together
              </p>

              <h2 className="mt-2 max-w-xl text-3xl font-black tracking-tight text-white sm:text-4xl">
                Ready to bring more fun into your space?
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-6 text-white/65">
                Explore our products or talk to our team about
                your requirements.
              </p>
            </div>

            <a
              href="/contact"
              className="group flex shrink-0 items-center gap-2 rounded-xl bg-black px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              Get In Touch

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

          </div>
        </motion.div>

      </section>
    </main>
  </>);
}