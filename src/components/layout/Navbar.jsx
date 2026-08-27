"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaLinkedinIn,
} from "react-icons/fa";

import {
    FiSearch,
    FiMenu,
    FiX,
    FiMapPin,
    FiPhone,
    FiMail,
    FiChevronRight,
} from "react-icons/fi";

const navItems = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "About Us",
        href: "/about-us",
    },
    {
        name: "Products",
        href: "/products",
    },
    {
        name: "Contact",
        href: "/contact-us",
    },
    {
        name: "Blog",
        href: "/blog",
    },
];

const socialItems = [
    {
        name: "Facebook",
        href: "#",
        icon: <FaFacebookF />,
    },
    {
        name: "Instagram",
        href: "#",
        icon: <FaInstagram />,
    },
    {
        name: "Twitter",
        href: "#",
        icon: <FaTwitter />,
    },
    {
        name: "YouTube",
        href: "#",
        icon: <FaYoutube />,
    },
    {
        name: "LinkedIn",
        href: "#",
        icon: <FaLinkedinIn />,
    },
];

const topBarVariants = {
    visible: {
        height: 38,
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
        },
    },

    hidden: {
        height: 0,
        opacity: 0,
        y: -10,
        transition: {
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const mobileMenuVariants = {
    hidden: {
        opacity: 0,
        height: 0,
    },

    visible: {
        opacity: 1,
        height: "auto",
        transition: {
            height: {
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
            },
            opacity: {
                duration: 0.25,
            },
        },
    },

    exit: {
        opacity: 0,
        height: 0,
        transition: {
            height: {
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
            },
            opacity: {
                duration: 0.2,
            },
        },
    },
};

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();

    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showTopBar, setShowTopBar] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;
        let ticking = false;

        const handleScroll = () => {
            if (ticking) return;

            window.requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;

                setScrolled(currentScrollY > 20);

                if (currentScrollY <= 5) {
                    setShowTopBar(true);
                } else if (currentScrollY > lastScrollY + 4) {
                    setShowTopBar(false);
                } else if (currentScrollY < lastScrollY - 4) {
                    setShowTopBar(true);
                }

                lastScrollY = currentScrollY;
                ticking = false;
            });

            ticking = true;
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Close mobile menu after route changes
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    // -----------------------------------------------
    // ROUTE NAVIGATION
    // -----------------------------------------------

    const navigateTo = (href) => {
        setMenuOpen(false);

        if (href === pathname) return;

        router.push(href);
    };

    // -----------------------------------------------
    // ACTIVE ROUTE
    // -----------------------------------------------

    const isActiveRoute = (href) => {
        if (href === "/") {
            return pathname === "/";
        }

        return pathname === href || pathname.startsWith(`${href}/`);
    };

    return (
        <header className="fixed left-0 top-0 z-[100] w-full">

            <motion.div
                variants={topBarVariants}
                animate={showTopBar ? "visible" : "hidden"}
                initial="visible"
                className="overflow-hidden bg-[#e31e24] text-white"
            >
                <div className="mx-auto flex h-[38px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                    <div className="flex items-center gap-5 text-[11px] font-medium sm:text-xs">

                        <motion.div
                            initial={{ opacity: 0, x: -15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                delay: 0.1,
                                duration: 0.5,
                            }}
                            className="hidden items-center gap-1.5 sm:flex"
                        >
                            <FiMapPin size={13} />

                            <span>
                                123 Toy Street, New Delhi
                            </span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                delay: 0.15,
                                duration: 0.5,
                            }}
                            className="hidden items-center gap-1.5 md:flex"
                        >
                            <FiPhone size={13} />

                            <span>
                                +91 98765 43210
                            </span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                delay: 0.2,
                                duration: 0.5,
                            }}
                            className="hidden items-center gap-1.5 lg:flex"
                        >
                            <FiMail size={13} />

                            <span>
                                hello@toypark.com
                            </span>
                        </motion.div>

                        <span className="sm:hidden">
                            Welcome to Toy Park
                        </span>
                    </div>

                    {/* Social icons */}

                    <div className="flex items-center gap-3">
                        {socialItems.map((social, index) => (
                            <motion.a
                                key={social.name}
                                href={social.href}
                                aria-label={social.name}
                                initial={{
                                    opacity: 0,
                                    scale: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                transition={{
                                    delay:
                                        0.15 + index * 0.05,
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 18,
                                }}
                                whileHover={{
                                    y: -2,
                                    scale: 1.15,
                                }}
                                whileTap={{
                                    scale: 0.8,
                                }}
                                className="flex h-6 w-6 items-center justify-center text-[18px]"
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </motion.div>


            <motion.div
                animate={{
                    height: scrolled ? 68 : 78,

                    boxShadow: scrolled
                        ? "0 8px 35px rgba(0,0,0,0.08)"
                        : "0 0 0 rgba(0,0,0,0)",
                }}
                transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="border-b border-gray-100/80 bg-white/95 backdrop-blur-xl"
            >
                <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                    {/* =================================================
                        LOGO
                    ================================================== */}

                    <motion.button
                        onClick={() => navigateTo("/")}
                        whileHover={{
                            scale: 1.04,
                        }}
                        whileTap={{
                            scale: 0.95,
                        }}
                        className="relative flex items-center"
                        aria-label="Toy Park Home"
                    >
                        <motion.img
                            src="/logo/logo.jpg"
                            alt="Toy Park"
                            animate={{
                                scale: scrolled ? 0.9 : 1,
                            }}
                            transition={{
                                duration: 0.4,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="h-11 w-auto object-contain sm:h-15"
                        />
                    </motion.button>

                    {/* =================================================
                        DESKTOP NAVIGATION
                    ================================================== */}

                    <nav className="hidden items-center gap-1 lg:flex">

                        {navItems.map((item, index) => {
                            const active = isActiveRoute(
                                item.href
                            );

                            return (
                                <motion.button
                                    key={item.name}
                                    initial={{
                                        opacity: 0,
                                        y: -12,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.45,
                                        delay:
                                            0.15 +
                                            index * 0.06,
                                        ease: [
                                            0.22,
                                            1,
                                            0.36,
                                            1,
                                        ],
                                    }}
                                    whileHover={{
                                        y: -2,
                                    }}
                                    onClick={() =>
                                        navigateTo(
                                            item.href
                                        )
                                    }
                                    className="group relative mx-1 px-4 py-3 text-[13px] font-semibold"
                                >
                                    <span
                                        className={
                                            active
                                                ? "text-[#e31e24]"
                                                : "text-gray-700 transition-colors duration-300 group-hover:text-[#e31e24]"
                                        }
                                    >
                                        {item.name}
                                    </span>

                                    {/* Active line */}

                                    <motion.span
                                        className="absolute bottom-0 left-4 right-4 h-[2px] origin-left rounded-full bg-[#e31e24]"
                                        initial={false}
                                        animate={{
                                            scaleX: active
                                                ? 1
                                                : 0,
                                        }}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeOut",
                                        }}
                                    />

                                    {/* Small active dot */}

                                    {active && (
                                        <motion.span
                                            layoutId="nav-dot"
                                            className="absolute -right-0.5 top-2 h-1 w-1 rounded-full bg-[#e31e24]"
                                            transition={{
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                </motion.button>
                            );
                        })}

                        {/* Search */}

                        <motion.button
                            whileHover={{
                                scale: 1.08,
                                rotate: 3,
                            }}
                            whileTap={{
                                scale: 0.88,
                            }}
                            className="ml-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#e31e24] text-white shadow-lg shadow-red-200/50"
                            aria-label="Search"
                        >
                            <FiSearch size={17} />
                        </motion.button>
                    </nav>

                    {/* =================================================
                        MOBILE MENU BUTTON
                    ================================================== */}

                    <motion.button
                        whileTap={{
                            scale: 0.88,
                        }}
                        onClick={() =>
                            setMenuOpen(
                                (value) => !value
                            )
                        }
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e31e24] text-white shadow-md shadow-red-200/50 lg:hidden"
                        aria-label={
                            menuOpen
                                ? "Close menu"
                                : "Open menu"
                        }
                        aria-expanded={menuOpen}
                    >
                        <AnimatePresence
                            mode="wait"
                            initial={false}
                        >
                            {menuOpen ? (
                                <motion.span
                                    key="close"
                                    initial={{
                                        opacity: 0,
                                        rotate: -90,
                                        scale: 0.5,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        rotate: 0,
                                        scale: 1,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        rotate: 90,
                                        scale: 0.5,
                                    }}
                                >
                                    <FiX size={20} />
                                </motion.span>
                            ) : (
                                <motion.span
                                    key="menu"
                                    initial={{
                                        opacity: 0,
                                        rotate: 90,
                                        scale: 0.5,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        rotate: 0,
                                        scale: 1,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        rotate: -90,
                                        scale: 0.5,
                                    }}
                                >
                                    <FiMenu size={20} />
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>

                {/* =====================================================
                    MOBILE MENU
                ====================================================== */}

                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            variants={mobileMenuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="overflow-hidden border-t border-gray-100 bg-white/98 backdrop-blur-xl lg:hidden"
                        >
                            <nav className="mx-auto max-w-7xl px-5 py-4">

                                {navItems.map(
                                    (item, index) => {
                                        const active =
                                            isActiveRoute(
                                                item.href
                                            );

                                        return (
                                            <motion.button
                                                key={
                                                    item.name
                                                }
                                                initial={{
                                                    opacity: 0,
                                                    x: -20,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    x: 0,
                                                }}
                                                transition={{
                                                    delay:
                                                        index *
                                                        0.06,
                                                    duration: 0.4,
                                                    ease: [
                                                        0.22,
                                                        1,
                                                        0.36,
                                                        1,
                                                    ],
                                                }}
                                                whileHover={{
                                                    x: 4,
                                                }}
                                                whileTap={{
                                                    scale: 0.98,
                                                }}
                                                onClick={() =>
                                                    navigateTo(
                                                        item.href
                                                    )
                                                }
                                                className="flex w-full items-center justify-between border-b border-gray-100 py-4 text-left"
                                            >
                                                <span
                                                    className={`text-sm font-semibold ${active
                                                            ? "text-[#e31e24]"
                                                            : "text-gray-800"
                                                        }`}
                                                >
                                                    {
                                                        item.name
                                                    }
                                                </span>

                                                <motion.span
                                                    animate={{
                                                        x: active
                                                            ? 4
                                                            : 0,
                                                    }}
                                                    className={
                                                        active
                                                            ? "text-[#e31e24]"
                                                            : "text-gray-300"
                                                    }
                                                >
                                                    <FiChevronRight
                                                        size={
                                                            17
                                                        }
                                                    />
                                                </motion.span>
                                            </motion.button>
                                        );
                                    }
                                )}

                                {/* Search */}

                                <motion.button
                                    initial={{
                                        opacity: 0,
                                        y: 15,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        delay: 0.35,
                                    }}
                                    whileTap={{
                                        scale: 0.97,
                                    }}
                                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#e31e24] py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-200/50"
                                >
                                    <FiSearch size={17} />
                                    Search Products
                                </motion.button>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </header>
    );
}