"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Mail,
    Phone,
    User,
    Package,
    MessageSquare,
    Sparkles,
} from "lucide-react";

export default function ContactCTA() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);
        setStatus("");

        const form = e.currentTarget;
        const formData = new FormData(form);

        const trimmedFullName = String(formData.get("name") || "").trim();
        const trimmedPhone = String(formData.get("phone") || "").trim();
        const trimmedEmail = String(formData.get("email") || "").trim();
        const trimmedProduct = String(formData.get("product") || "").trim();
        const trimmedMessage = String(formData.get("message") || "").trim();

        try {
            const res = await fetch("https://brandbnalo.com/api/form/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    platform: "Anypro Contact Page",
                    platformEmail: "info@toyparkindia.com",
                    name: trimmedFullName,
                    email: trimmedEmail || "N/A" ,
                    company: "NA",
                    phone: trimmedPhone,
                    product: trimmedProduct,
                    place: "N/A",
                    message: trimmedMessage,
                }),
            });

            if (!res.ok) {
                throw new Error("Failed to submit form");
            }

            setStatus("success");
            form.reset();
        } catch (error) {
            console.error("Contact form submission error:", error);
            setStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="relative overflow-hidden border-t border-red-300 bg-white py-10 sm:py-12 lg:py-15">
            {/* Background decoration */}
            <div className="pointer-events-none absolute left-0 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF1744]/10 blur-3xl" />

            <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 translate-x-1/3 rounded-full bg-black/5 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
                {/* CTA container */}
                <div className="relative overflow-hidden rounded-[2rem] bg-black p-5 sm:p-7 lg:p-10">
                    {/* Red glow */}
                    <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#FF1744]/20 blur-[90px]" />

                    <div className="pointer-events-none absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-[#FF1744]/10 blur-[100px]" />

                    <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
                        {/* LEFT CONTENT */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            {/* Badge */}
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-white/60">
                                <Sparkles
                                    size={13}
                                    className="text-[#FF1744]"
                                />
                                Let's work together
                            </div>

                            <h2 className="max-w-md text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                                Have an idea?
                                <br />
                                <span className="text-[#FF1744]">
                                    Let's make it real.
                                </span>
                            </h2>

                            <p className="mt-4 max-w-md text-sm leading-6 text-white/45 sm:text-base">
                                Tell us about your project and we'll get back
                                to you with the right solution.
                            </p>

                            {/* Illustration */}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    scale: 0.8,
                                    y: 20,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.15,
                                }}
                                className="relative mt-6 hidden h-[270px] sm:block"
                            >
                                <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF1744]/10 blur-2xl" />

                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/2656/2656502.png"
                                    alt="Project illustration"
                                    className="relative mx-auto h-full w-auto object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.4)]"
                                />
                            </motion.div>

                            {/* Contact details */}
                            <div className="mt-4 hidden gap-5 sm:flex">
                                <div className="flex items-center gap-2 text-xs text-white/40">
                                    <Mail
                                        size={14}
                                        className="text-[#FF1744]"
                                    />
                                    info@toyparkindia.com
                                </div>

                                <div className="flex items-center gap-2 text-xs text-white/40">
                                    <Phone
                                        size={14}
                                        className="text-[#FF1744]"
                                    />
                                    +919811117654
                                </div>
                            </div>
                        </motion.div>

                        {/* RIGHT FORM */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: 0.1,
                            }}
                            className="rounded-[1.5rem] bg-white p-5 shadow-2xl sm:p-7"
                        >
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-black">
                                    Start a conversation
                                </h3>

                                <p className="mt-1 text-sm text-black/45">
                                    Fill in the details and we'll contact you.
                                </p>
                            </div>

                            <form
                                onSubmit={handleSubmit}
                                className="space-y-4"
                            >
                                {/* Name + Phone */}
                                <div className="grid gap-4 sm:grid-cols-2">
                                    {/* Name */}
                                    <div className="relative">
                                        <User
                                            size={17}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30"
                                        />

                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your name"
                                            required
                                            className="h-12 w-full rounded-xl border border-black/10 bg-[#f8f8f8] pl-11 pr-4 text-sm text-black outline-none transition placeholder:text-black/35 focus:border-[#FF1744] focus:bg-white focus:ring-2 focus:ring-[#FF1744]/10"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className="relative">
                                        <Phone
                                            size={17}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30"
                                        />

                                        <input
                                            type="tel"
                                            name="phone"
                                            maxLength={10}
                                            placeholder="Phone number"
                                            required
                                            className="h-12 w-full rounded-xl border border-black/10 bg-[#f8f8f8] pl-11 pr-4 text-sm text-black outline-none transition placeholder:text-black/35 focus:border-[#FF1744] focus:bg-white focus:ring-2 focus:ring-[#FF1744]/10"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="relative">
                                    <Mail
                                        size={17}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30"
                                    />

                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email address"
                                        
                                        className="h-12 w-full rounded-xl border border-black/10 bg-[#f8f8f8] pl-11 pr-4 text-sm text-black outline-none transition placeholder:text-black/35 focus:border-[#FF1744] focus:bg-white focus:ring-2 focus:ring-[#FF1744]/10"
                                    />
                                </div>

                                {/* Product */}
                                <div className="relative">
                                    <Package
                                        size={17}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30"
                                    />

                                    <select
                                        name="product"
                                        required
                                        defaultValue=""
                                        className="h-12 w-full appearance-none rounded-xl border border-black/10 bg-[#f8f8f8] pl-11 pr-4 text-sm text-black outline-none transition focus:border-[#FF1744] focus:bg-white focus:ring-2 focus:ring-[#FF1744]/10"
                                    >
                                        <option value="" disabled>
                                            Select a product
                                        </option>

                                        <option value="Table Games">
                                            Table Games
                                        </option>

                                        <option value="Board Game">
                                            Board Game
                                        </option>

                                        <option value="Sports Goods">
                                            Sports Goods
                                        </option>

                                        <option value="Activity & Recreational Games">
                                            Activity & Recreational Games
                                        </option>

                                    </select>
                                </div>

                                {/* Message */}
                                <div className="relative">
                                    <MessageSquare
                                        size={17}
                                        className="absolute left-4 top-4 text-black/30"
                                    />

                                    <textarea
                                        name="message"
                                        placeholder="Tell us about your project..."
                                        rows={4}
                                        required
                                        className="w-full resize-none rounded-xl border border-black/10 bg-[#f8f8f8] py-3 pl-11 pr-4 text-sm text-black outline-none transition placeholder:text-black/35 focus:border-[#FF1744] focus:bg-white focus:ring-2 focus:ring-[#FF1744]/10"
                                    />
                                </div>

                                {/* Success / Error message */}
                                {status === "success" && (
                                    <div className="rounded-xl bg-green-50 px-4 py-3 text-center text-sm font-medium text-green-600">
                                        Thank you! Your inquiry has been
                                        submitted successfully.
                                    </div>
                                )}

                                {status === "error" && (
                                    <div className="rounded-xl bg-red-50 px-4 py-3 text-center text-sm font-medium text-red-600">
                                        Something went wrong. Please try
                                        again.
                                    </div>
                                )}

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#FF1744] text-sm font-bold text-white transition-all duration-300 hover:bg-black hover:shadow-lg hover:shadow-[#FF1744]/20 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {isSubmitting
                                        ? "Sending..."
                                        : "Send Inquiry"}

                                    {!isSubmitting && (
                                        <ArrowUpRight
                                            size={17}
                                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        />
                                    )}
                                </button>

                                <p className="text-center text-[11px] text-black/35">
                                    We'll never share your information.
                                </p>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}