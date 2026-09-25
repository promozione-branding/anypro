"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Send,
} from "lucide-react";

import { Cloud, Sun, Star } from "@/components/svg/svg";

// const product = {
//   name: "Air Hockey Table",
//   category: "Table Games",

//   shortDescription:
//     "Bring fast-paced competition and interactive fun to any recreational space with the Air Hockey Table from AnyPro. Designed for exciting head-to-head play, it encourages quick reactions, hand-eye coordination, concentration, and strategic thinking while keeping players engaged.",

//   images: [],

//   features: [
//     "Fast-Paced Table Game",
//     "Skill-Building Play",
//     "Ideal for Recreational Spaces",
//     "Multiple Models Available",
//     "Air Blower",
//     "Electronic / Digital Scoring",
//     "Sound Effects",
//     "Sturdy Frame",
//   ],

//   specifications: [
//     ["Material", "MDF / Wood / PVC"],
//     ["Players", "2 Players"],
//     ["Table Size", "4.5–7 Feet"],
//     ["Scoring", "Electronic / Digital"],
//     ["Features", "Air Blower / Sound Effects / Sturdy Frame"],
//     ["Usage", "Homes, Schools, Clubs & Game Zones"],
//   ],

//   productOverview:
//     "Bring fast-paced competition and interactive fun to any recreational space with the Air Hockey Table from AnyPro. Designed for exciting head-to-head play, air hockey encourages quick reactions, hand-eye coordination, concentration, and strategic thinking while keeping players engaged. AnyPro is a Table Games and Board Games manufacturer and wholesaler, supplying quality recreational products for schools, play schools, activity centres, indoor play areas, clubs, resorts, and institutional buyers. The Air Hockey Table range can add an energetic gaming experience to spaces designed for entertainment, learning, and social play.",

//   whyChoose: [
//     {
//       title: "Manufacturer & Wholesaler",
//       description:
//         "Buy directly from AnyPro for wholesale and institutional requirements.",
//     },
//     {
//       title: "Experienced Product Range",
//       description:
//         "Expertise across Table Games, Board Games, recreational products, and kids’ activity solutions.",
//     },
//     {
//       title: "Bulk Order Support",
//       description:
//         "Suitable for projects, institutions, activity centres, and commercial requirements.",
//     },
//     {
//       title: "Product Guidance",
//       description:
//         "Get assistance with specifications, quantities, and overall product requirements.",
//     },
//     {
//       title: "Complete Gaming Range",
//       description:
//         "Explore Table Games and Board Games designed for interactive, social, and skill-based play.",
//     },
//   ],
// };

export default function Product({product}) {
  const [activeImage, setActiveImage] = useState(0);

  const hasImages = product.images.length > 0;

  const nextImage = () => {
    if (!hasImages) return;

    setActiveImage((current) =>
      current === product.images.length - 1 ? 0 : current + 1
    );
  };

  const previousImage = () => {
    if (!hasImages) return;

    setActiveImage((current) =>
      current === 0 ? product.images.length - 1 : current - 1
    );
  };

  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in the ${product.name}. Please share more details.`
  );

  const whatsappUrl = `https://wa.me/917949342217?text=${whatsappMessage}`;

  return (
    <main className="relative min-h-screen bg-white pt-32 pb-10">
      {/* ================= DECORATIONS ================= */}

      <div className="pointer-events-none absolute left-[-30px] top-28 hidden opacity-60 md:block lg:left-5">
        <Cloud size={120} />
      </div>

      <div className="pointer-events-none absolute left-[-30px] top-30 hidden opacity-60 md:block lg:left-[48%]">
        <Cloud size={150} />
      </div>

      <div className="pointer-events-none absolute right-[-15px] top-30 hidden opacity-70 md:block lg:right-8">
        <Sun />
      </div>

      <div className="pointer-events-none absolute bottom-[32%] left-[3%] hidden rotate-12 opacity-80 lg:block">
        <Star size={38} />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* ================= BREADCRUMB ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative z-10 mb-7 flex items-center gap-2 text-xs text-black/40"
        >
          <span>Home</span>
          <ChevronRight size={13} />
          <span>{product.category}</span>
          <ChevronRight size={13} />
          <span className="text-black/70">{product.name}</span>
        </motion.div>

        {/* ================= PRODUCT TOP ================= */}

        <div className="relative z-10 grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* ================= IMAGE GALLERY ================= */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="min-w-0"
          >
            <div className="group relative aspect-square overflow-hidden rounded-[2rem] bg-[#f5f5f5]">
              {hasImages ? (
                <>
                  <motion.img
                    key={activeImage}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35 }}
                    src={product.images[activeImage]}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute left-5 top-5 rounded-full bg-black/75 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
                    {activeImage + 1} / {product.images.length}
                  </div>

                  <button
                    type="button"
                    onClick={previousImage}
                    aria-label="Previous image"
                    className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black opacity-0 shadow-lg transition group-hover:opacity-100 hover:bg-[#FF1744] hover:text-white"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <button
                    type="button"
                    onClick={nextImage}
                    aria-label="Next image"
                    className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black opacity-0 shadow-lg transition group-hover:opacity-100 hover:bg-[#FF1744] hover:text-white"
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              ) : null}
            </div>

            {hasImages && (
              <div className="mt-4 grid grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    className={`relative aspect-square overflow-hidden rounded-xl border-2 transition ${
                      activeImage === index
                        ? "border-[#FF1744]"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="h-full w-full object-cover"
                    />

                    {activeImage === index && (
                      <div className="absolute inset-0 bg-[#FF1744]/10" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* ================= RIGHT PRODUCT INFO ================= */}

          <div className="min-w-0 self-start">
            <div className="lg:sticky lg:top-24">
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF1744]">
                  {product.category}
                </p>

                <h1 className="mt-2 text-3xl font-black tracking-tight text-black sm:text-4xl">
                  {product.name}
                </h1>

                <p className="mt-6 text-sm leading-7 text-black/50 sm:text-base">
                  {product.shortDescription}
                </p>

                {/* ================= SPEC HIGHLIGHTS ================= */}

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {product.specifications.slice(0, 4).map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-xl bg-[#f7f7f7] p-4"
                    >
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#FF1744]">
                        {label}
                      </p>
                      <p className="mt-1 text-sm font-semibold leading-5 text-black/70">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* ================= BUTTONS ================= */}

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    className="group flex h-13 items-center justify-center gap-2 rounded-xl bg-[#FF1744] px-5 text-sm font-bold text-white transition-all duration-300 hover:bg-black"
                  >
                    <Send size={17} />
                    Send Inquiry
                    <ChevronRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-13 items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-5 text-sm font-bold text-black transition-all duration-300 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
                  >
                    <MessageCircle size={18} />
                    WhatsApp Us
                  </a>
                </div>

                <p className="mt-4 text-center text-[11px] text-black/35">
                  Need bulk quantity or custom requirements? Contact our team
                  for your requirements.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ================= PRODUCT OVERVIEW ================= */}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 mt-20 rounded-[2rem] border border-black/10 bg-[#f7f7f7] p-6 sm:p-8"
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF1744]">
            Product Overview
          </p>

          <h2 className="mt-2 text-2xl font-black text-black sm:text-3xl">
            Built for Interactive Play
          </h2>

          <p className="mt-5 max-w-5xl text-sm leading-7 text-black/55 sm:text-base">
            {product.productOverview}
          </p>
        </motion.section>

        {/* ================= FEATURES + SPECS ================= */}

        <div className="relative z-10 mt-10 grid gap-8 lg:grid-cols-2">
          {/* FEATURES */}

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[2rem] bg-black p-6 sm:p-8"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF1744]">
              Product Benefits
            </p>

            <h2 className="mt-2 text-2xl font-black text-white">
              Key Features
            </h2>

            <p className="mt-2 text-sm text-white/40">
              Designed for exciting, interactive and skill-building play.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {product.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF1744] text-white">
                    <Check size={14} />
                  </span>

                  <span className="text-sm leading-5 text-white/70">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* SPECIFICATIONS */}

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-[2rem] border border-black/10 bg-[#f7f7f7] p-6 sm:p-8"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF1744]">
              Product Details
            </p>

            <h2 className="mt-2 text-2xl font-black text-black">
              Specifications
            </h2>

            <div className="mt-6 overflow-hidden rounded-xl border border-black/10 bg-white">
              {product.specifications.map(([label, value], index) => (
                <div
                  key={label}
                  className={`grid grid-cols-[0.8fr_1.2fr] px-4 py-3.5 text-sm ${
                    index !== product.specifications.length - 1
                      ? "border-b border-black/[0.07]"
                      : ""
                  }`}
                >
                  <span className="font-medium text-black/40">{label}</span>
                  <span className="font-semibold text-black/75">{value}</span>
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* ================= WHY CHOOSE ANYPRO ================= */}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 mt-10 rounded-[2rem] bg-[#f7f7f7] p-6 sm:p-8"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF1744]">
              Why Choose AnyPro?
            </p>

            <h2 className="mt-2 text-2xl font-black text-black sm:text-3xl">
              A Complete Recreational Product Partner
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {product.whyChoose.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="rounded-2xl border border-black/10 bg-white p-5"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF1744] text-white">
                  <Check size={17} />
                </span>

                <h3 className="mt-4 text-base font-bold text-black">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-black/50">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ================= BOTTOM CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 mt-10 overflow-hidden rounded-[2rem] bg-[#FF1744] p-6 sm:p-8"
        >
          <div className="pointer-events-none absolute right-8 top-[-10px] opacity-30">
            <Star size={75} color="#ffffff" />
          </div>

          <div className="relative flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/60">
                Interested in this product?
              </p>

              <h2 className="mt-1 text-2xl font-black text-white">
                Let&apos;s get your requirement started.
              </h2>

              <p className="mt-1 text-sm text-white/65">
                Contact us for availability, specifications and bulk orders.
              </p>
            </div>

            <div className="flex w-full gap-2 sm:w-auto">
              <button
                type="button"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-black sm:flex-none"
              >
                <Send size={16} />
                Inquiry
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-black hover:text-white sm:flex-none"
              >
                <MessageCircle size={17} />
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
