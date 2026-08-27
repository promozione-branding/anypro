"use client";
import { motion } from "framer-motion";
import {
    MapPin,
    Mail,
    Phone,
    ArrowUpRight,
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
} from "react-icons/fa";

export const Cloud = ({ className = "", size = 180 }) => (
    <svg
        width={size}
        height={size * 0.55}
        viewBox="0 0 180 100"
        fill="none"
        className={`pointer-events-none ${className}`}
        aria-hidden="true"
    >
        <path
            d="
                M35 78
                C15 78 7 65 12 51
                C16 39 28 33 40 36
                C43 18 58 7 76 10
                C91 12 101 22 104 36
                C108 30 116 27 125 29
                C138 31 146 42 145 54
                C163 53 173 63 170 75
                C168 86 157 91 144 91
                H35
                Z
            "
            fill="white"
            stroke="#E6E6E6"
            strokeWidth="3"
        />
    </svg>
);

export const Star = ({
    className = "",
    size = 40,
    color = "#FF1744",
}) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 50 50"
        fill="none"
        className={`pointer-events-none ${className}`}
        aria-hidden="true"
    >
        <path
            d="
                M25 3
                L29.8 19.2
                L47 19.5
                L33.2 29.6
                L37.5 46
                L25 36.4
                L12.5 46
                L16.8 29.6
                L3 19.5
                L20.2 19.2
                Z
            "
            fill={color}
        />
    </svg>
);

export const Sun = ({ className = "" }) => (
    <svg
        width="110"
        height="110"
        viewBox="0 0 110 110"
        fill="none"
        className={`pointer-events-none ${className}`}
        aria-hidden="true"
    >
        <circle cx="55" cy="55" r="25" fill="#FFD43B" />

        <path
            d="
                M55 4V20
                M55 90V106
                M4 55H20
                M90 55H106
                M19 19L31 31
                M79 79L91 91
                M91 19L79 31
                M31 79L19 91
            "
            stroke="#FFD43B"
            strokeWidth="7"
            strokeLinecap="round"
        />
    </svg>
);

export const Balloon = ({
    className = "",
    color = "#FF1744",
}) => (
    <svg
        width="65"
        height="100"
        viewBox="0 0 65 100"
        fill="none"
        className={`pointer-events-none ${className}`}
        aria-hidden="true"
    >
        <path
            d="
                M32.5 66
                C49 66 58 51 58 34
                C58 17 47 5 32.5 5
                C18 5 7 17 7 34
                C7 51 16 66 32.5 66Z
            "
            fill={color}
        />

        <path
            d="M27 66L32.5 75L38 66"
            fill={color}
        />

        <path
            d="M32.5 75C32.5 82 31 88 34 96"
            stroke="#999"
            strokeWidth="2"
            strokeLinecap="round"
        />

        <path
            d="M21 17C15 24 15 35 19 41"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            opacity=".7"
        />
    </svg>
);

export default function Footer() {
    const usefulLinks = [
        "Home",
        "About Us",
        "Contact",
        "Blogs",
    ];

    const products = [
        "Football",
        "Training Gear",
        "Sports Equipment",
        "Performance Wear",
    ];

    return (
        <footer className="relative overflow-hidden bg-neutral-950 text-white">

            {/* Background Decorations */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                {/* Soft background glow */}
                <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-3xl" />

                {/* Cloud 1 */}
                <motion.div
                    animate={{
                        y: [0, -12, 0, 8, 0],
                        rotate: [0, 2, -2, 1, 0],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -left-8 top-10 opacity-[0.06] sm:left-[4%]"
                >
                    <Cloud size={220} />
                </motion.div>

                {/* Cloud 2 */}
                <motion.div
                    animate={{
                        y: [0, 14, 0],
                        x: [0, 8, 0],
                    }}
                    transition={{
                        duration: 11,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute right-[-60px] top-28 opacity-[0.05]"
                >
                    <Cloud size={260} />
                </motion.div>

                {/* Red Star */}
                <motion.div
                    animate={{
                        y: [0, -14, 0],
                        rotate: [0, 12, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute right-[9%] top-12 opacity-60"
                >
                    <Star size={32} />
                </motion.div>

                {/* Yellow Star */}
                <motion.div
                    animate={{
                        y: [0, 10, 0],
                        rotate: [0, -15, 0],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                    className="absolute left-[44%] top-[18%] opacity-30"
                >
                    <Star
                        size={18}
                        color="#FFD43B"
                    />
                </motion.div>

                {/* Sun */}
                <motion.div
                    animate={{
                        y: [0, -18, 0],
                        rotate: [0, -4, 0],
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -right-8 bottom-20 opacity-[0.18]"
                >
                    <Sun />
                </motion.div>

                {/* Balloon */}
                <motion.div
                    animate={{
                        y: [0, -25, 0],
                        rotate: [-4, 4, -4],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-16 left-[3%] opacity-30"
                >
                    <Balloon />
                </motion.div>

                {/* Small red floating dot */}
                <motion.div
                    animate={{
                        scale: [1, 1.25, 1],
                        opacity: [0.25, 0.5, 0.25],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute left-[28%] top-[30%] h-3 w-3 rounded-full bg-[#FF1744]"
                />
            </div>

            {/* Main Footer */}
            <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-15">

                {/* Footer Heading */}
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
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="mb-10 max-w-2xl"
                >
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500">
                        Game On
                    </p>

                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                        Built for the ones
                        <br />
                        <span className="text-neutral-500">
                            who play harder.
                        </span>
                    </h2>
                </motion.div>

                {/* Footer Cards */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <FooterCard delay={0}>

                        <a
                            href="/"
                            className="inline-flex items-center gap-3"
                        >
                            <img
                                src="/logo/logo.jpg"
                                alt="GAME"
                                className="h-20 w-auto rounded-lg object-contain"
                            />
                        </a>

                        <p className="mt-5 max-w-xs text-sm leading-6 text-neutral-400">
                            Performance-driven products made for people who
                            live, breathe, and play the game.
                        </p>

                        {/* Socials */}
                        <div className="mt-8 flex gap-4">

                            <SocialIcon
                                href="#"
                                label="Instagram"
                            >
                                <FaInstagram size={15} />
                            </SocialIcon>

                            <SocialIcon
                                href="#"
                                label="Facebook"
                            >
                                <FaFacebookF size={14} />
                            </SocialIcon>

                            <SocialIcon
                                href="#"
                                label="YouTube"
                            >
                                <FaYoutube size={15} />
                            </SocialIcon>

                            <SocialIcon
                                href="#"
                                label="LinkedIn"
                            >
                                <FaLinkedinIn size={14} />
                            </SocialIcon>

                        </div>
                    </FooterCard>

                    {/* Explore */}
                    <FooterCard delay={0.08}>

                        <FooterTitle>
                            Explore
                        </FooterTitle>

                        <div className="mt-7 space-y-5">
                            {usefulLinks.map((item) => (
                                <FooterLink
                                    key={item}
                                    label={item}
                                />
                            ))}
                        </div>

                    </FooterCard>

                    {/* Products */}
                    <FooterCard delay={0.16}>

                        <FooterTitle>
                            Products
                        </FooterTitle>

                        <div className="mt-7 space-y-5">
                            {products.map((item) => (
                                <FooterLink
                                    key={item}
                                    label={item}
                                />
                            ))}
                        </div>

                    </FooterCard>

                    {/* Contact */}
                    <FooterCard delay={0.24}>

                        <FooterTitle>
                            Contact
                        </FooterTitle>

                        <div className="mt-7 space-y-6">

                            <ContactItem
                                icon={<MapPin size={15} />}
                                label="Visit us"
                            >
                                New Delhi, India
                            </ContactItem>

                            <ContactItem
                                href="mailto:hello@example.com"
                                icon={<Mail size={15} />}
                                label="Email"
                            >
                                hello@example.com
                            </ContactItem>

                            <ContactItem
                                href="tel:+919999999999"
                                icon={<Phone size={15} />}
                                label="Call us"
                            >
                                +91 99999 99999
                            </ContactItem>

                        </div>

                    </FooterCard>

                </div>

                {/* Bottom */}
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.6,
                        delay: 0.3,
                    }}
                    className="mt-5 flex flex-col gap-5 border-t border-neutral-800 pt-6 sm:flex-row sm:items-center sm:justify-between"
                >

                    <p className="text-xs text-neutral-400">
                        © 2026 GAME. All rights reserved.
                    </p>

                    <div className="flex gap-6">

                        <a
                            href="#"
                            className="text-xs text-neutral-400 transition hover:text-white"
                        >
                            Privacy
                        </a>

                        <a
                            href="#"
                            className="text-xs text-neutral-400 transition hover:text-white"
                        >
                            Terms
                        </a>

                    </div>

                </motion.div>

            </div>
        </footer>
    );
}

function FooterCard({ children, delay = 0 }) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 30,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.15,
            }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
                y: -4,
            }}
            className="rounded-2xl border border-white/[0.03] bg-neutral-900 p-6 sm:p-7 lg:min-h-[320px]"
        >
            {children}
        </motion.div>
    );
}

function FooterTitle({ children }) {
    return (
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-500">
            {children}
        </p>
    );
}

function FooterLink({ label }) {
    return (
        <a
            href="#"
            className="group flex items-center justify-between border-b border-neutral-800 pb-4 text-sm font-medium text-neutral-300 transition hover:text-white"
        >
            <span>{label}</span>

            <ArrowUpRight
                size={15}
                className="text-neutral-600 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
            />
        </a>
    );
}

function SocialIcon({
    href,
    label,
    children,
}) {
    return (
        <motion.a
            href={href}
            aria-label={label}
            whileHover={{
                y: -3,
                scale: 1.05,
            }}
            whileTap={{
                scale: 0.95,
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 text-neutral-400 transition hover:border-white hover:bg-white hover:text-black"
        >
            {children}
        </motion.a>
    );
}

function ContactItem({
    href,
    icon,
    label,
    children,
}) {
    const content = (
        <>
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-neutral-400 transition group-hover:bg-white group-hover:text-black">
                {icon}
            </div>

            <div>
                <p className="text-[10px] uppercase tracking-wider text-neutral-600">
                    {label}
                </p>

                <p className="mt-1 break-all text-sm leading-5 text-neutral-300">
                    {children}
                </p>
            </div>
        </>
    );

    if (href) {
        return (
            <a
                href={href}
                className="group flex gap-4"
            >
                {content}
            </a>
        );
    }

    return (
        <div className="group flex gap-4">
            {content}
        </div>
    );
}