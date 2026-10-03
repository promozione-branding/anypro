
"use client";

import React from "react";
import {
    FiArrowRight,
} from "react-icons/fi";
import Link from "next/link";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default function Page() {
    return (
        <div className="min-h-screen bg-gray-50 lg:flex">
            {/* Sidebar */}
            <AdminSidebar />

            {/* Main Content */}
            <main className="min-w-0 flex-1 pt-16 lg:pt-0">
                <div className="p-5 md:p-8">

                    {/* Welcome Header */}
                    <div className="relative mb-8 overflow-hidden rounded-2xl bg-black p-6 text-white shadow-sm md:p-8">

                        {/* Decorative accents */}
                        <div className="absolute -right-16 -top-20 h-52 w-52 rounded-full bg-red-600/20 blur-2xl" />
                        <div className="absolute -bottom-20 right-20 h-48 w-48 rounded-full bg-orange-500/15 blur-2xl" />

                        <div className="relative max-w-3xl">
                            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-red-500">
                                Admin Dashboard
                            </p>

                            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                                Welcome to AnyPro
                            </h1>

                            <p className="mt-2 text-lg font-semibold text-orange-400">
                                Professional Solutions & Services
                            </p>

                            <p className="mt-4 max-w-xl text-sm leading-6 text-gray-300 md:text-base">
                                Manage your AnyPro website content, products,
                                enquiries and other website information from
                                the admin panel.
                            </p>
                        </div>
                    </div>

                    {/* Brand Section */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
                        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                            <div>
                                <p className="text-sm font-bold uppercase tracking-wider text-red-600">
                                    ANYPRO
                                </p>

                                <h2 className="mt-1 text-2xl font-bold text-gray-900">
                                    Website Management System
                                </h2>

                                <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
                                    Manage and update your AnyPro website
                                    content easily through the admin panel.
                                    Keep your products, pages and enquiries
                                    organized in one place.
                                </p>
                            </div>

                            <Link
                                href="/"
                                target="_blank"
                                className="group inline-flex w-fit items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-black"
                            >
                                View Website
                                <FiArrowRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Color Accent Line */}
                    <div className="mt-6 grid grid-cols-4 overflow-hidden rounded-full">
                        <div className="h-1.5 bg-red-600" />
                        <div className="h-1.5 bg-orange-500" />
                        <div className="h-1.5 bg-blue-600" />
                        <div className="h-1.5 bg-black" />
                    </div>

                </div>
            </main>
        </div>
    );
}
