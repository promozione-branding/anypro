
"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import {
    ImagePlus,
    ArrowLeft,
    Save,
    FileText,
    Search,
    PenLine,
    Upload,
    CalendarDays,
} from "lucide-react";

import AdminSidebar from "@/components/Admin/AdminSidebar";

const JoditEditor = dynamic(
    () => import("jodit-react"),
    { ssr: false }
);

export default function Page() {
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [content, setContent] = useState("");
    const [preview, setPreview] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!content.trim()) {
            alert("Please enter blog content.");
            return;
        }

        setLoading(true);

        try {
            const fd = new FormData(e.currentTarget);

            fd.append("content", content);

            const res = await fetch("/api/blog", {
                method: "POST",
                body: fd,
            });

            const data = await res.json();

            if (res.ok) {
                router.push("/admin/blogs");
            } else {
                alert(data?.message || "Failed to save blog.");
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];

        if (file) {
            setPreview(URL.createObjectURL(file));
        } else {
            setPreview(null);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Sidebar */}
            <AdminSidebar />

            {/* Main Area */}
            <main className="p-5 pt-24 md:p-8 md:pt-24 lg:ml-72 lg:pt-8">
                <div className="mx-auto max-w-5xl">

                    {/* Page Header */}
                    <div className="mb-8">
                        <button
                            type="button"
                            onClick={() => router.push("/admin/blogs")}
                            className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-red-600"
                        >
                            <ArrowLeft size={17} />
                            Back to Blogs
                        </button>

                        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <div className="mb-2 flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-red-600" />

                                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-red-600">
                                        Content Management
                                    </p>
                                </div>

                                <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                                    Create New Blog
                                </h1>

                                <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
                                    Create and publish a new blog post for
                                    AnyPro.
                                </p>
                            </div>

                            {/* Brand Badge */}
                            <div className="hidden items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 shadow-sm sm:flex">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600 text-sm font-black text-white">
                                    A
                                </div>

                                <div>
                                    <p className="text-xs font-bold text-gray-900">
                                        Any<span className="text-red-600">Pro</span>
                                    </p>

                                    <p className="text-[10px] text-gray-400">
                                        Blog Management
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit}>

                        {/* Basic Information */}
                        <div className="mb-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                            {/* Section Header */}
                            <div className="border-b border-gray-100 px-5 py-5 sm:px-6">
                                <div className="flex items-start gap-3">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                                        <FileText size={19} />
                                    </div>

                                    <div>
                                        <h2 className="text-base font-bold text-gray-900">
                                            Basic Information
                                        </h2>

                                        <p className="mt-1 text-xs leading-5 text-gray-500">
                                            Add the main information about your
                                            blog post.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-5 sm:p-6">
                                {/* Title */}
                                <div className="mb-5">
                                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                                        Blog Title
                                    </label>

                                    <input
                                        type="text"
                                        name="title"
                                        placeholder="Enter blog title"
                                        required
                                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                                    />
                                </div>

                                {/* Permalink + Date */}
                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                                            Permalink
                                        </label>

                                        <div className="flex overflow-hidden rounded-xl border border-gray-200 bg-gray-50 transition focus-within:border-red-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-red-500/10">
                                            <span className="hidden items-center border-r border-gray-200 bg-gray-100 px-3 text-sm text-gray-400 sm:flex">
                                                /blog/
                                            </span>

                                            <input
                                                type="text"
                                                name="permalink"
                                                placeholder="your-blog-url"
                                                required
                                                className="w-full bg-transparent px-4 py-3 text-sm text-gray-900 outline-none"
                                            />
                                        </div>

                                        <p className="mt-1.5 text-xs text-gray-400">
                                            Use lowercase words separated by
                                            hyphens.
                                        </p>
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                                            Publish Date
                                        </label>

                                        <div className="relative">
                                            <CalendarDays
                                                size={18}
                                                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                                            />

                                            <input
                                                type="date"
                                                name="date"
                                                required
                                                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 pl-11 text-sm text-gray-900 outline-none transition focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SEO Settings */}
                        <div className="mb-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                            {/* Section Header */}
                            <div className="border-b border-gray-100 px-5 py-5 sm:px-6">
                                <div className="flex items-start gap-3">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                        <Search size={19} />
                                    </div>

                                    <div>
                                        <h2 className="text-base font-bold text-gray-900">
                                            SEO Settings
                                        </h2>

                                        <p className="mt-1 text-xs leading-5 text-gray-500">
                                            Optimize your blog for search
                                            engines.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-5 sm:p-6">
                                {/* Meta Title */}
                                <div className="mb-5">
                                    <div className="mb-2 flex items-center justify-between">
                                        <label className="text-sm font-semibold text-gray-700">
                                            Meta Title
                                        </label>

                                        <span className="text-[11px] font-medium text-gray-400">
                                            Max 60 characters
                                        </span>
                                    </div>

                                    <input
                                        type="text"
                                        name="metaTitle"
                                        placeholder="Enter SEO meta title"
                                        maxLength={60}
                                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                                    />

                                    <p className="mt-1.5 text-xs text-gray-400">
                                        Recommended: 50–60 characters.
                                    </p>
                                </div>

                                {/* Meta Description */}
                                <div>
                                    <div className="mb-2 flex items-center justify-between">
                                        <label className="text-sm font-semibold text-gray-700">
                                            Meta Description
                                        </label>

                                        <span className="text-[11px] font-medium text-gray-400">
                                            Max 160 characters
                                        </span>
                                    </div>

                                    <textarea
                                        name="metaDescription"
                                        placeholder="Write a short SEO-friendly description..."
                                        rows={4}
                                        maxLength={160}
                                        className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                                    />

                                    <p className="mt-1.5 text-xs text-gray-400">
                                        Recommended: 150–160 characters.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Blog Content */}
                        <div className="mb-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                            {/* Section Header */}
                            <div className="border-b border-gray-100 px-5 py-5 sm:px-6">
                                <div className="flex items-start gap-3">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                                        <PenLine size={19} />
                                    </div>

                                    <div>
                                        <h2 className="text-base font-bold text-gray-900">
                                            Blog Content
                                        </h2>

                                        <p className="mt-1 text-xs leading-5 text-gray-500">
                                            Write and format your blog content.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-5 sm:p-6">
                                <div className="overflow-hidden rounded-xl border border-gray-200">
                                    <JoditEditor
                                        value={content}
                                        tabIndex={1}
                                        onChange={(newContent) =>
                                            setContent(newContent)
                                        }
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Thumbnail */}
                        <div className="mb-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                            {/* Section Header */}
                            <div className="border-b border-gray-100 px-5 py-5 sm:px-6">
                                <div className="flex items-start gap-3">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                                        <ImagePlus size={19} />
                                    </div>

                                    <div>
                                        <h2 className="text-base font-bold text-gray-900">
                                            Blog Thumbnail
                                        </h2>

                                        <p className="mt-1 text-xs leading-5 text-gray-500">
                                            Upload an attractive image for your
                                            blog.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-5 sm:p-6">
                                <label className="group flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 p-8 transition hover:border-red-400 hover:bg-red-50/40">
                                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-gray-400 shadow-sm transition group-hover:text-red-600">
                                        <Upload size={25} />
                                    </div>

                                    <span className="text-sm font-bold text-gray-700">
                                        Click to upload thumbnail
                                    </span>

                                    <span className="mt-1.5 text-xs text-gray-400">
                                        PNG, JPG, WEBP up to 5MB
                                    </span>

                                    <input
                                        type="file"
                                        name="image"
                                        accept="image/png,image/jpeg,image/webp"
                                        onChange={handleImageChange}
                                        className="hidden"
                                    />
                                </label>

                                {/* Preview */}
                                {preview && (
                                    <div className="mt-5">
                                        <div className="mb-2 flex items-center justify-between">
                                            <p className="text-sm font-semibold text-gray-700">
                                                Image Preview
                                            </p>

                                            <span className="rounded-full bg-green-50 px-2.5 py-1 text-[10px] font-bold text-green-600">
                                                Ready
                                            </span>
                                        </div>

                                        <div className="relative w-full max-w-md overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
                                            <img
                                                src={preview}
                                                alt="Blog thumbnail preview"
                                                className="h-52 w-full object-cover"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Bottom Accent */}
                        <div className="mb-6 flex h-1.5 overflow-hidden rounded-full">
                            <div className="w-1/2 bg-red-600" />
                            <div className="w-1/4 bg-orange-500" />
                            <div className="w-1/4 bg-blue-600" />
                        </div>

                        {/* Submit */}
                        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                            <button
                                type="button"
                                onClick={() =>
                                    router.push("/admin/blogs")
                                }
                                disabled={loading}
                                className="rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                disabled={loading}
                                className="group flex items-center justify-center gap-2 rounded-xl bg-red-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-red-600/15 transition-all duration-300 hover:bg-black hover:shadow-black/15 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {loading ? (
                                    <>
                                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                        Saving...
                                    </>
                                ) : (
                                    <>
                                        <Save
                                            size={17}
                                            className="transition-transform group-hover:scale-105"
                                        />
                                        Publish Blog
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}

