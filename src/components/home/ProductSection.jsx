import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingBag, ArrowRight, ChevronLeft, ChevronRight, ShoppingCart, ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Cloud, Sun, Star, Balloon } from "../svg/svg";
import { products } from "@/data/data";

const ProductCard = ({ product, wishlist, setWishlist, onCart }) => {
    const [added, setAdded] = useState(false);

    const isWishlisted = wishlist.includes(product.id);

    const toggleWishlist = () => {
        setWishlist((current) =>
            current.includes(product.id)
                ? current.filter((id) => id !== product.id)
                : [...current, product.id]
        );
    };

    const addToCart = () => {
        setAdded(true);
        onCart(product);

        setTimeout(() => {
            setAdded(false);
        }, 1600);
    };

    return (
        <motion.article
            className="group relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {/* Card */}
            <div className="relative overflow-hidden rounded-[24px] bg-white border border-neutral-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_15px_45px_rgba(0,0,0,0.08)]">

                {/* --------------------------------
                    IMAGE
                -------------------------------- */}
                <div
                    className="relative overflow-hidden p-2"
                    style={{
                        backgroundColor: product.color,
                    }}
                >
                    <div className="relative aspect-[1/1.08] overflow-hidden rounded-[18px] bg-white">

                        <motion.img
                            src={product.images[0]}
                            alt={product.name}
                            loading="lazy"
                            className="h-full w-full object-cover"
                            whileHover={{
                                scale: 1.06,
                            }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                            }}
                        />

                        {/* Image overlay */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

                        {/* Badge */}
                        <div className="absolute left-3 top-3">
                            <span className="rounded-full bg-white/95 px-2.5 py-1 text-[9px] font-bold tracking-[0.12em] text-neutral-700 shadow-sm backdrop-blur">
                                {product.badge}
                            </span>
                        </div>

                        {/* Wishlist */}
                        <motion.button
                            whileTap={{ scale: 0.82 }}
                            whileHover={{ scale: 1.08 }}
                            onClick={toggleWishlist}
                            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 shadow-sm backdrop-blur"
                            aria-label={
                                isWishlisted
                                    ? "Remove from wishlist"
                                    : "Add to wishlist"
                            }
                        >
                            <motion.div
                                animate={{
                                    scale: isWishlisted
                                        ? [1, 1.3, 1]
                                        : 1,
                                }}
                                transition={{
                                    duration: 0.3,
                                }}
                            >
                                <Heart
                                    size={17}
                                    strokeWidth={2.2}
                                    className={
                                        isWishlisted
                                            ? "fill-[#FF1744] text-[#FF1744]"
                                            : "text-neutral-700"
                                    }
                                />
                            </motion.div>
                        </motion.button>

                        {/* Quick Cart Icon */}
                        <motion.button
                            onClick={addToCart}
                            whileTap={{ scale: 0.82 }}
                            whileHover={{
                                scale: 1.08,
                            }}
                            className={`absolute right-3 top-14 flex h-9 w-9 items-center justify-center rounded-full shadow-sm backdrop-blur transition-colors ${added
                                ? "bg-[#FF1744] text-white"
                                : "bg-white/95 text-neutral-700"
                                }`}
                            aria-label="Add to cart"
                        >
                            <AnimatePresence mode="wait">
                                {added ? (
                                    <motion.span
                                        key="check"
                                        initial={{
                                            opacity: 0,
                                            scale: 0.5,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            scale: 0.5,
                                        }}
                                    >
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="cart"
                                        initial={{
                                            opacity: 0,
                                            scale: 0.5,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            scale: 0.5,
                                        }}
                                    >
                                        <ShoppingCart
                                            size={17}
                                            strokeWidth={2.2}
                                        />
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>

                {/* --------------------------------
                    PRODUCT INFO
                -------------------------------- */}
                <div className="px-4 pb-4 pt-3.5">

                    {/* Category */}
                    <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-neutral-400">
                        {product.category}
                    </p>

                    {/* Name */}
                    <h3 className="truncate w-full text-[14px] flex justify-between font-bold tracking-tight text-neutral-900">
                        {product.name}  <div className="absolute bottom-3 right-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white text-black opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-hover:bg-[#FF1744] group-hover:text-white">
            <ArrowUpRight size={15} />
          </div>
                    </h3>

                    {/* Price row */}
                    
                </div>
            </div>
        </motion.article>
    );
};

export default function ProductSection() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);

    const [wishlist, setWishlist] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                titleRef.current,
                {
                    opacity: 0,
                    y: 70,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.1,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    },
                }
            );

            gsap.to(".floating-star", {
                y: -18,
                rotation: 10,
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            gsap.to(".floating-cloud", {
                x: 25,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            gsap.to(".floating-balloon", {
                y: -30,
                rotation: 4,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleCart = () => {
        setCartCount((count) => count + 1);
    };

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-[#FFFDF9] py-20 md:15 border-y border-red-200"
        >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <Cloud
                    size={210}
                    className="floating-cloud absolute -left-2 top-2 opacity-80"
                />

                <Sun className="absolute right-[4%] top-[7%] opacity-90" />

                <Balloon
                    color="#FF1744"
                    className="floating-balloon absolute bottom-20 left-[4%]"
                />

                <Balloon
                    color="#FFD43B"
                    className="floating-balloon absolute right-[5%] bottom-10"
                />
            </div>

            <div ref={titleRef}
                className="relative z-10 mx-auto mb-14 max-w-7xl px-5 md:px-8"
            >
                <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <Star size={22} color="#FF1744" />

                            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#FF1744]">
                                Our Collection
                            </span>
                        </div>

                        <h2 className="max-w-2xl text-5xl font-black leading-[0.95] tracking-[-0.055em] text-neutral-950 md:text-7xl">
                            Little things,
                            <br />
                            <span className="text-[#FF1744]">
                                big smiles.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-lg text-base leading-7 text-neutral-500 md:text-lg">
                            Discover playful essentials made for little
                            adventures, big imaginations and everyday fun.
                        </p>
                    </div>

                    {/* Cart */}
                    <motion.button
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.97 }}
                        className="relative flex w-fit items-center gap-3 rounded-full bg-black px-6 py-4 text-sm font-bold text-white"
                    >
                        <ShoppingBag size={18} />

                        Cart

                        <AnimatePresence mode="popLayout">
                            {cartCount > 0 && (
                                <motion.span
                                    initial={{
                                        scale: 0,
                                        opacity: 0,
                                    }}
                                    animate={{
                                        scale: 1,
                                        opacity: 1,
                                    }}
                                    className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#FF1744] px-1 text-xs"
                                >
                                    {cartCount}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </div>

            <div className="relative z-10 mx-auto max-w-[1450px] px-5 md:px-8">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={22}
                    slidesPerView={1.15}
                    loop={true}
                    speed={800}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        prevEl: ".products-prev",
                        nextEl: ".products-next",
                    }}
                    pagination={{
                        clickable: true,
                        el: ".products-pagination",
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 24,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 25,
                        },
                    }}
                    className="!overflow-visible"
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <ProductCard
                                product={product}
                                wishlist={wishlist}
                                setWishlist={setWishlist}
                                onCart={handleCart}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* --------------------------------
                    Slider controls
                -------------------------------- */}
                <div className="mt-10 flex items-center justify-between">
                    <div className="products-pagination !static !w-auto" />

                    <div className="flex items-center gap-3">
                        <button
                            className="products-prev flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 bg-white transition hover:bg-black hover:text-white"
                            aria-label="Previous products"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <button
                            className="products-next flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 bg-white transition hover:bg-black hover:text-white"
                            aria-label="Next products"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{ once: true }}
                className="relative z-10 mx-auto mt-10 max-w-7xl px-5 md:px-8"
            >
                <div className="relative overflow-hidden rounded-[32px] bg-[#FF1744] px-7 py-10 md:px-12 md:py-12">
                    <div className="relative z-10 flex flex-col justify-between gap-7 md:flex-row md:items-center">
                        <div>
                            <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-white/70">
                                Made for happy days
                            </p>

                            <h3 className="text-3xl font-black tracking-tight text-white md:text-4xl">
                                Find something they’ll love.
                            </h3>
                        </div>

                        <motion.button
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex w-fit items-center gap-3 rounded-full bg-white px-7 py-4 font-bold text-black"
                        >
                            Shop All Products
                            <ArrowRight size={18} />
                        </motion.button>
                    </div>

                    <Star
                        size={100}
                        color="#FFD43B"
                        className="absolute -right-2 -top-8 rotate-12"
                    />

                    <Cloud
                        size={180}
                        className="absolute -bottom-1 left-[45%] opacity-20"
                    />
                </div>
            </motion.div>
        </section>
    );
}