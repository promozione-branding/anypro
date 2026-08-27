"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote, Sparkles } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

import { Cloud, Sun, Star } from "../svg/svg";

const testimonials = [
    {
        name: "Sarah Mitchell",
        role: "Founder, Studio North",
        image: "https://i.pravatar.cc/500?img=47",
        quote:
            "Working with this team completely changed how we approached our digital presence. The final result feels premium and incredibly polished.",
    },
    {
        name: "James Anderson",
        role: "Creative Director",
        image: "https://i.pravatar.cc/500?img=12",
        quote:
            "They understood the vision from day one and turned our rough ideas into something far better than we imagined.",
    },
    {
        name: "Emily Carter",
        role: "Product Designer",
        image: "https://i.pravatar.cc/500?img=32",
        quote:
            "The process was smooth, collaborative, and genuinely enjoyable. Every interaction felt thoughtful.",
    },
    {
        name: "Daniel Brooks",
        role: "CEO, Orbit Labs",
        image: "https://i.pravatar.cc/500?img=11",
        quote:
            "A rare combination of creativity and execution. They pushed the project to a completely different level.",
    },
];

export default function Testimonials() {
    return (
        <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-15 border-b border-red-300">
            {/* Decorations */}
            <div className="pointer-events-none absolute left-4 top-8 hidden opacity-70 md:block lg:left-10">
                <Cloud size={125} />
            </div>

            <div className="pointer-events-none absolute right-4 top-5 hidden md:block lg:right-10">
                <Sun />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-10 text-center lg:mb-12"
                >
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-3 py-1.5 text-xs font-medium text-black/60">
                        <Sparkles
                            size={13}
                            className="text-[#FF1744]"
                        />
                        Client Stories
                    </div>

                    <h2 className="text-xl font-black tracking-tight text-black sm:text-5xl">
                        Loved by{" "}
                        <span className="text-[#FF1744]">
                            amazing people.
                        </span>
                    </h2>
                </motion.div>

                {/* Main */}
                <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
                    {/* LEFT IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative mx-auto w-full max-w-md"
                    >
                        <div className="absolute -bottom-3 -left-3 h-full w-full rounded-[1.5rem] bg-[#FF1744]" />

                        <div className="relative h-[360px] w-full overflow-hidden rounded-[1.5rem] bg-black sm:h-[400px]">
                            <img
                                src="https://images.unsplash.com/photo-1607376162689-10d6eb9d6c83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vc2ViYWxsJTIwdGFibGV8ZW58MHx8MHx8fDA%3D"
                                alt="Creative team working together"
                                className="h-full w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                            <div className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                                Real people. Real results.
                            </div>
                        </div>

                        <div className="absolute -right-4 -top-4 rotate-6">
                            <Star size={38} />
                        </div>
                    </motion.div>

                    {/* RIGHT SLIDER */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="relative min-w-0 w-full overflow-hidden"
                    >
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            slidesPerView={1}
                            slidesPerGroup={1}
                            spaceBetween={0}
                            loop={true}
                            speed={700}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            className="review-swiper !w-full"
                        >
                            {testimonials.map((testimonial) => (
                                <SwiperSlide
                                    key={testimonial.name}
                                    className="!w-full"
                                >
                                    <div className="relative w-full rounded-[1.5rem] border border-black/10 bg-[#f7f7f7] p-7 sm:p-9">
                                        {/* Quote */}
                                        <Quote
                                            size={65}
                                            strokeWidth={1.2}
                                            className="absolute right-6 top-5 text-[#FF1744]/15"
                                        />

                                        {/* Stars */}
                                        <div className="mb-6 flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={18}
                                                    color="#FF1744"
                                                />
                                            ))}
                                        </div>

                                        {/* Review */}
                                        <blockquote className="relative max-w-xl text-xl font-semibold leading-8 tracking-tight text-black sm:text-2xl">
                                            “{testimonial.quote}”
                                        </blockquote>

                                        {/* Divider */}
                                        <div className="my-7 h-px w-full bg-black/10" />

                                        {/* Person */}
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="h-11 w-11 rounded-full object-cover ring-2 ring-[#FF1744]/20"
                                            />

                                            <div>
                                                <p className="text-sm font-bold text-black">
                                                    {testimonial.name}
                                                </p>

                                                <p className="mt-0.5 text-xs text-black/45">
                                                    {testimonial.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                </div>
            </div>

            <style jsx global>{`
                .review-swiper {
                    width: 100% !important;
                    max-width: 100% !important;
                    overflow: hidden !important;
                }

                .review-swiper .swiper-wrapper {
                    width: 100%;
                }

                .review-swiper .swiper-slide {
                    width: 100% !important;
                    max-width: 100% !important;
                    flex-shrink: 0;
                }

                .review-swiper .swiper-pagination {
                    position: relative;
                    bottom: auto;
                    left: auto;
                    width: 100%;
                    margin-top: 20px;
                    text-align: left;
                }

                .review-swiper
                    .swiper-pagination-bullet {
                    width: 7px;
                    height: 7px;
                    margin: 0 3px !important;
                    background: rgba(0, 0, 0, 0.18);
                    opacity: 1;
                    transition: all 0.3s ease;
                }

                .review-swiper
                    .swiper-pagination-bullet-active {
                    width: 24px;
                    border-radius: 999px;
                    background: #ff1744;
                }
            `}</style>
        </section>
    );
}