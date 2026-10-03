
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    FiGrid,
    FiFileText,
    FiLogOut,
    FiMenu,
    FiX,
    FiChevronRight,
    FiExternalLink,
} from "react-icons/fi";

const menuItems = [
    {
        name: "Dashboard",
        href: "/admin",
        icon: FiGrid,
    },
    {
        name: "Blogs",
        href: "/admin/blogs",
        icon: FiFileText,
    },
];

export default function AdminSidebar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleLogout = () => {
        document.cookie =
            "admin-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";

        window.location.href = "/admin/login";
    };

    return (
        <>
            {/* Mobile Header */}
            <div className="fixed left-0 right-0 top-0 z-40 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 lg:hidden">
                <Link
                    href="/admin"
                    className="flex items-center gap-2"
                >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600 text-sm font-bold text-white">
                        A
                    </div>

                    <span className="text-lg font-bold text-gray-900">
                        Any<span className="text-red-600">Pro</span>
                    </span>
                </Link>

                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100"
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? (
                        <FiX size={24} />
                    ) : (
                        <FiMenu size={24} />
                    )}
                </button>
            </div>

            {/* Mobile Overlay */}
            {mobileOpen && (
                <div
                    onClick={() => setMobileOpen(false)}
                    className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px] lg:hidden"
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
                    fixed left-0 top-0 z-50 flex h-screen w-72 flex-col
                    border-r border-gray-800 bg-black text-white
                    transition-transform duration-300
                    lg:translate-x-0
                    ${
                        mobileOpen
                            ? "translate-x-0"
                            : "-translate-x-full"
                    }
                `}
            >
                {/* Logo */}
                <div className="flex h-20 items-center border-b border-white/10 px-6">
                    <Link
                        href="/admin"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3"
                    >
                        {/* Logo Box */}
                        <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-red-600 text-lg font-extrabold text-white shadow-lg shadow-red-600/20">
                            A

                            <span className="absolute -bottom-2 -right-2 h-5 w-5 rounded-full bg-orange-500" />
                        </div>

                        <div>
                            <h1 className="text-lg font-bold tracking-tight text-white">
                                Any<span className="text-red-500">Pro</span>
                            </h1>

                            <p className="text-[11px] text-gray-400">
                                Admin Management
                            </p>
                        </div>
                    </Link>
                </div>

                {/* Navigation */}
                <div className="flex-1 overflow-y-auto px-4 py-6">
                    <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500">
                        Main Menu
                    </p>

                    <nav className="space-y-1.5">
                        {menuItems.map((item) => {
                            const Icon = item.icon;

                            const isActive =
                                item.href === "/admin"
                                    ? pathname === "/admin"
                                    : pathname.startsWith(item.href);

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`
                                        group relative flex items-center
                                        justify-between rounded-xl px-3 py-3
                                        text-sm font-medium
                                        transition-all duration-200
                                        ${
                                            isActive
                                                ? "bg-red-600 text-white shadow-lg shadow-red-600/10"
                                                : "text-gray-400 hover:bg-white/5 hover:text-white"
                                        }
                                    `}
                                >
                                    <div className="flex items-center gap-3">
                                        <div
                                            className={`
                                                flex h-9 w-9 items-center
                                                justify-center rounded-lg
                                                transition-all duration-200
                                                ${
                                                    isActive
                                                        ? "bg-white/15 text-white"
                                                        : "bg-white/5 text-gray-500 group-hover:bg-white/10 group-hover:text-white"
                                                }
                                            `}
                                        >
                                            <Icon size={18} />
                                        </div>

                                        <span>{item.name}</span>
                                    </div>

                                    {isActive && (
                                        <FiChevronRight
                                            size={16}
                                            className="text-white/80"
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Accent */}
                    <div className="my-7 h-px bg-white/10" />

               

                    {/* Brand Accent */}
                    {/* <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                        <div className="mb-3 flex gap-1.5">
                            <span className="h-1.5 w-8 rounded-full bg-red-600" />
                            <span className="h-1.5 w-5 rounded-full bg-orange-500" />
                            <span className="h-1.5 w-5 rounded-full bg-blue-600" />
                        </div>

                        <p className="text-xs font-semibold text-white">
                            AnyPro
                        </p>

                        <p className="mt-1 text-[11px] leading-5 text-gray-500">
                            Manage your website content from one place.
                        </p>
                    </div> */}
                </div>

                {/* Admin Profile */}
                <div className="border-t border-white/10 p-4">
                    <div className="mb-3 flex items-center gap-3 rounded-xl bg-white/[0.05] p-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-orange-500 font-bold text-white">
                            A
                        </div>

                        <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-semibold text-white">
                                Administrator
                            </p>

                            <p className="truncate text-xs text-gray-500">
                                Super Admin
                            </p>
                        </div>

                        {/* Online Indicator */}
                        <span className="h-2 w-2 rounded-full bg-green-500" />
                    </div>

                    <button
                        onClick={handleLogout}
                        className="group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-gray-400 transition-all duration-200 hover:bg-red-600/10 hover:text-red-400"
                    >
                        <FiLogOut
                            size={18}
                            className="transition-transform group-hover:-translate-x-0.5"
                        />

                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Desktop Sidebar Space */}
            <div className="hidden w-72 shrink-0 lg:block" />
        </>
    );
}

