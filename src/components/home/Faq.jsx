"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

// If using a local Lottie JSON:
// import faqAnimation from "../lottie/faq.json";

const faqs = [
    {
        question: "What services do you offer?",
        answer:
            "We provide complete digital solutions including website design, development, branding, UI/UX, and custom digital experiences tailored to your business.",
    },
    {
        question: "How long does a project usually take?",
        answer:
            "Most projects take between 2–6 weeks depending on the scope, complexity, and feedback process. Before starting, we provide a clear timeline so you know exactly what to expect.",
    },
    {
        question: "Can you work with an existing website?",
        answer:
            "Absolutely. We can improve, redesign, or rebuild an existing website while keeping the parts that already work well for your business.",
    },
    {
        question: "Do you provide support after launch?",
        answer:
            "Yes. We offer ongoing support after launch to help with updates, improvements, bug fixes, performance, and future features.",
    },
    {
        question: "How do we get started?",
        answer:
            "Simply get in touch with us and tell us about your idea, goals, and requirements. We'll discuss the project with you and recommend the best way to move forward.",
    },
];

function FAQItem({ faq, index, isOpen, onClick }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.4,
                delay: index * 0.06,
            }}
            className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${isOpen
                ? "border-[#FF1744]/30 bg-[#FF1744]/[0.03]"
                : "border-black/10 bg-white"
                }`}
        >
            <button
                type="button"
                onClick={onClick}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
            >
                <div className="flex items-center gap-4">
                    {/* Number */}
                    <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${isOpen
                            ? "bg-[#FF1744] text-white"
                            : "bg-black/[0.04] text-black/40"
                            }`}
                    >
                        {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                        className={`text-sm font-semibold sm:text-base ${isOpen ? "text-black" : "text-black/80"
                            }`}
                    >
                        {faq.question}
                    </span>
                </div>

                <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen
                        ? "bg-[#FF1744] text-white"
                        : "bg-black/[0.04] text-black/50"
                        }`}
                >
                    <motion.span
                        animate={{
                            rotate: isOpen ? 180 : 0,
                        }}
                        transition={{ duration: 0.25 }}
                    >
                        <ChevronDown size={17} />
                    </motion.span>
                </span>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{
                            height: 0,
                            opacity: 0,
                        }}
                        animate={{
                            height: "auto",
                            opacity: 1,
                        }}
                        exit={{
                            height: 0,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.3,
                            ease: [0.4, 0, 0.2, 1],
                        }}
                    >
                        <div className="px-5 pb-5 pl-[4.5rem] pr-12 sm:px-6 sm:pb-6 sm:pl-[4.75rem]">
                            <p className="max-w-xl text-sm leading-6 text-black/50">
                                {faq.answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-15">
            {/* Background decoration */}
            <div className="pointer-events-none absolute -left-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#FF1744]/5 blur-3xl" />

            <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#FF1744]/5 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto mb-10 max-w-2xl text-center"
                >
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-3 py-1.5 text-xs font-medium text-black/60">
                        <HelpCircle
                            size={14}
                            className="text-[#FF1744]"
                        />
                        Frequently Asked Questions
                    </div>

                    <h2 className="text-3xl font-black tracking-tight text-black sm:text-4xl">
                        Got questions?
                        <br />
                        <span className="text-[#FF1744]">
                            We have answers.
                        </span>
                    </h2>

                    <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-black/50">
                        Everything you need to know before getting started.
                    </p>
                </motion.div>

                {/* Content */}
                <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
                    {/* FAQ LIST */}
                    <div className="space-y-3">
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={faq.question}
                                faq={faq}
                                index={index}
                                isOpen={openIndex === index}
                                onClick={() =>
                                    setOpenIndex(
                                        openIndex === index
                                            ? -1
                                            : index
                                    )
                                }
                            />
                        ))}
                    </div>

                    {/* LOTTIE SIDE */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.95,
                            x: 25,
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                            x: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.7,
                        }}
                        className="relative block"
                    >
                        {/* Red offset */}
                        <div className="absolute -bottom-3 -right-3 h-full w-full rounded-[2rem] bg-[#FF1744]" />

                        {/* Animation card */}
                        <div className="relative flex min-h-[430px] flex-col items-center justify-center overflow-hidden rounded-[2rem] bg-black p-8">
                            {/* Glow */}
                            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF1744]/20 blur-[80px]" />

                            {/* Lottie animation */}
                            <div className="relative z-10 flex h-64 w-64 items-center justify-center">
                                <img
                                    src={"/animations/orangeCat.svg"}
                                    loop
                                    className="h-full w-full"
                                />


                                {/* <div className="flex h-40 w-40 items-center justify-center rounded-full border border-white/10 bg-white/[0.05]">
                                    <Sparkles
                                        size={55}
                                        strokeWidth={1.2}
                                        className="text-[#FF1744]"
                                    />
                                </div> */}
                            </div>

                            <div className="relative z-10 mt-5 text-center">
                                <h3 className="text-xl font-bold text-white">
                                    Still have questions?
                                </h3>

                                <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-white/45">
                                    Can't find what you're looking for?
                                    Let's talk about your project.
                                </p>

                                <button
                                    type="button"
                                    className="mt-5 rounded-full bg-[#FF1744] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
                                >
                                    Let's Talk
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}