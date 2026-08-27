"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Clock,
} from "lucide-react";
import ContactCTA from "@/components/home/Contact";

const contactDetails = [
  {
    icon: MapPin,
    title: "Our Address",
    value: "123 Main Street, New Delhi, India",
    href: "https://www.google.com/maps",
  },
  {
    icon: MapPin,
    title: "Branch Office",
    value: "45 Business Park, Gurugram, Haryana",
    href: "https://www.google.com/maps",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: Phone,
    title: "Sales",
    value: "+91 98765 12345",
    href: "tel:+919876512345",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
  },
  {
    icon: Mail,
    title: "Sales Email",
    value: "sales@example.com",
    href: "mailto:sales@example.com",
  },
];

export default function Contact() {
  return (
    <main className="min-h-screen bg-white pt-30">
      {/* HERO */}
      <section className="relative overflow-hidden pb-14 sm:pb-16">
        {/* Background decoration */}
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#FF1744]/10 blur-3xl" />

        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-black/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="max-w-3xl"
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#FF1744]">
              Get In Touch
            </p>

            <h1 className="text-4xl font-black tracking-tight text-black sm:text-5xl md:text-6xl">
              Let's talk about
              <br />
              <span className="text-[#FF1744]">
                your next project.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-black/50 sm:text-base">
              Have a question, need help choosing a product, or
              want to discuss something with our team? We'd love
              to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT INFO + MAP */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            {/* CONTACT DETAILS */}
            <motion.div
              initial={{
                opacity: 0,
                x: -25,
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
              }}
              className="rounded-[2rem] bg-black p-6 sm:p-8"
            >
              <div className="mb-7">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#FF1744]">
                  Contact Information
                </span>

                <h2 className="mt-2 text-2xl font-black text-white">
                  We're here to help.
                </h2>

                <p className="mt-2 text-sm leading-6 text-white/40">
                  Reach us through any of the options below.
                </p>
              </div>

              <div className="space-y-3">
                {contactDetails.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.a
                      key={`${item.title}-${index}`}
                      href={item.href}
                      target={
                        item.href.includes(
                          "google.com"
                        )
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        item.href.includes(
                          "google.com"
                        )
                          ? "noreferrer"
                          : undefined
                      }
                      whileHover={{
                        x: 4,
                      }}
                      className="group flex items-center gap-4 rounded-xl border border-white/[0.07] bg-white/[0.04] p-4 transition-colors hover:border-[#FF1744]/30 hover:bg-white/[0.07]"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FF1744] text-white">
                        <Icon size={18} />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-[11px] font-medium uppercase tracking-wider text-white/30">
                          {item.title}
                        </span>

                        <span className="mt-1 block truncate text-sm font-medium text-white/80">
                          {item.value}
                        </span>
                      </span>

                      <ArrowUpRight
                        size={16}
                        className="text-white/20 transition-colors group-hover:text-[#FF1744]"
                      />
                    </motion.a>
                  );
                })}
              </div>

              {/* Working Hours */}
              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-6">
                <Clock
                  size={17}
                  className="text-[#FF1744]"
                />

                <div>
                  <p className="text-xs font-semibold text-white/70">
                    Working Hours
                  </p>

                  <p className="mt-1 text-xs text-white/35">
                    Monday – Saturday · 9:00 AM – 7:00 PM
                  </p>
                </div>
              </div>
            </motion.div>

            {/* GOOGLE MAP */}
            <motion.div
              initial={{
                opacity: 0,
                x: 25,
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
                delay: 0.1,
              }}
              className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-black/10 bg-[#f5f5f5]"
            >
              {/* Google Maps */}
              <iframe
                title="Our location on Google Maps"
                src="https://www.google.com/maps?q=New+Delhi,+India&output=embed"
                className="absolute inset-0 h-full w-full border-0 grayscale-[0.15]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map label */}
              <div className="absolute bottom-5 left-5 rounded-xl border border-white/20 bg-black/85 px-4 py-3 shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FF1744] text-white">
                    <MapPin size={14} />
                  </span>

                  <div>
                    <p className="text-xs font-bold text-white">
                      Visit Us
                    </p>

                    <p className="text-[10px] text-white/45">
                      New Delhi, India
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA / CONTACT FORM */}
      <ContactCTA />
    </main>
  );
}