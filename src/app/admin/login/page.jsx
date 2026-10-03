
"use client";

import React, { useState } from "react";
import {
    Eye,
    EyeOff,
    Mail,
    Lock,
    Loader2,
    ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Page() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (loading) return;

        setLoading(true);

        // Simulate checking
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (
            password === "anypro@123" &&
            email === "admin@anypro.in"
        ) {
            document.cookie = "admin-token=secret123; path=/";
            router.push("/admin");
        } else {
            alert("Wrong password!");
            setLoading(false);
        }
    };

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-100 px-4 py-8 text-black">

            {/* Background Decorations */}
            <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-red-600/10 blur-3xl" />
            <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
            <div className="absolute left-1/2 top-0 h-1 w-40 -translate-x-1/2 bg-gradient-to-r from-red-600 via-orange-500 to-blue-600" />

            {/* Login Card */}
            <div className="relative w-full max-w-md">

                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">

                    {/* Top Brand Section */}
                    <div className="bg-black px-6 py-7 text-center">

                        {/* Logo */}
                        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-2xl font-extrabold text-white shadow-lg shadow-red-600/20">
                            A
                        </div>

                        <h1 className="text-2xl font-bold tracking-tight text-white">
                            Any<span className="text-red-500">Pro</span>
                        </h1>

                        <p className="mt-1 text-sm text-gray-400">
                            Admin Management System
                        </p>

                        {/* Accent */}
                        <div className="mx-auto mt-5 flex w-fit gap-1.5">
                            <span className="h-1.5 w-8 rounded-full bg-red-600" />
                            <span className="h-1.5 w-5 rounded-full bg-orange-500" />
                            <span className="h-1.5 w-5 rounded-full bg-blue-600" />
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="p-6 sm:p-8">

                        <div className="mb-6">
                            <h2 className="text-xl font-bold text-gray-900">
                                Welcome back
                            </h2>

                            <p className="mt-1 text-sm text-gray-500">
                                Sign in to access the admin panel.
                            </p>
                        </div>

                        <form
                            onSubmit={handleLogin}
                            className="space-y-4"
                        >
                            {/* Email */}
                            <div>
                                <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                                    Email Address
                                </label>

                                <div className="relative">
                                    <Mail
                                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                                        size={19}
                                    />

                                    <input
                                        type="email"
                                        placeholder="Enter admin email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        disabled={loading}
                                        className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10 disabled:cursor-not-allowed disabled:opacity-60"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                                    Password
                                </label>

                                <div className="relative">
                                    <Lock
                                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                                        size={19}
                                    />

                                    <input
                                        type={
                                            showPass
                                                ? "text"
                                                : "password"
                                        }
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        disabled={loading}
                                        className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-12 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10 disabled:cursor-not-allowed disabled:opacity-60"
                                        required
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPass(!showPass)
                                        }
                                        disabled={loading}
                                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-700 disabled:opacity-50"
                                        aria-label={
                                            showPass
                                                ? "Hide password"
                                                : "Show password"
                                        }
                                    >
                                        {showPass ? (
                                            <EyeOff size={19} />
                                        ) : (
                                            <Eye size={19} />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Login Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/20 transition-all duration-300 hover:bg-black hover:shadow-black/20 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:shadow-none"
                            >
                                {loading ? (
                                    <>
                                        <Loader2
                                            size={19}
                                            className="animate-spin"
                                        />
                                        Checking...
                                    </>
                                ) : (
                                    <>
                                        Login to Dashboard
                                        <ArrowRight
                                            size={18}
                                            className="transition-transform duration-300 group-hover:translate-x-1"
                                        />
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Footer */}
                        <div className="mt-7 border-t border-gray-100 pt-5 text-center">
                            <p className="text-xs text-gray-400">
                                © {new Date().getFullYear()} Inquiry Bazaar
                                Pvt Ltd.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

