
"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  FiArrowLeft,
  FiSave,
  FiImage,
  FiX,
  FiEdit3,
  FiSearch,
  FiFileText,
  FiCalendar,
  FiLink,
  FiCheckCircle,
} from "react-icons/fi";
import AdminSidebar from "@/components/Admin/AdminSidebar";

const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

export default function EditBlogPage() {
  const { id } = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [title, setTitle] = useState("");
  const [permalink, setPermalink] = useState("");
  const [date, setDate] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [content, setContent] = useState("");

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  // =========================
  // Get Blog
  // =========================
  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      try {
        setLoading(true);

        const res = await fetch(`/api/blog/${id}`);

        if (!res.ok) {
          throw new Error("Failed to fetch blog");
        }

        const data = await res.json();

        // Supports:
        // { blog: {...} }
        // OR directly {...}
        const blog = data.blog || data;

        setTitle(blog.title || "");
        setPermalink(blog.permalink || "");

        // Format date for input[type="date"]
        if (blog.date) {
          setDate(new Date(blog.date).toISOString().split("T")[0]);
        }

        setMetaTitle(blog.metaTitle || "");
        setMetaDescription(blog.metaDescription || "");
        setContent(blog.content || "");

        if (blog.image) {
          setPreview(blog.image);
        }
      } catch (error) {
        console.error("Fetch blog error:", error);
        alert("Failed to load blog");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  // =========================
  // Image Change
  // =========================
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setImage(file);

    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
  };

  // =========================
  // Remove New Image
  // =========================
  const removeImage = () => {
    setImage(null);
  };

  // =========================
  // Submit
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Please enter blog title");
      return;
    }

    if (!content.trim()) {
      alert("Please enter blog content");
      return;
    }

    try {
      setSaving(true);

      const formData = new FormData();

      formData.append("id", id);
      formData.append("title", title);
      formData.append("permalink", permalink);
      formData.append("date", date);
      formData.append("metaTitle", metaTitle);
      formData.append("metaDescription", metaDescription);
      formData.append("content", content);

      // Only send image if user selected a new one
      if (image) {
        formData.append("image", image);
      }

      const res = await fetch(`/api/blog/${id}`, {
        method: "PUT",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to update blog");
      }

      alert("Blog updated successfully");

      router.push("/admin/blogs");
    } catch (error) {
      console.error("Update blog error:", error);

      alert(error.message || "Failed to update blog");
    } finally {
      setSaving(false);
    }
  };

  // =========================
  // Loading
  // =========================
  if (loading) {
    return (
      <div className="min-h-screen bg-[#f5f5f5]">
        <AdminSidebar />

        <main className="flex min-h-screen items-center justify-center p-6 lg:ml-72">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
              <div className="h-6 w-6 animate-spin rounded-full border-[3px] border-gray-200 border-t-[#e31b23]" />
            </div>

            <p className="text-sm font-medium text-gray-600">
              Loading blog...
            </p>

            <p className="mt-1 text-xs text-gray-400">
              Please wait a moment
            </p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <AdminSidebar />

      <main className="p-4 sm:p-5 md:p-7 lg:ml-72 lg:p-8">
        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-7 max-w-6xl">
          <Link
            href="/admin/blogs"
            className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-[#e31b23]"
          >
            <FiArrowLeft size={16} />
            Back to Blogs
          </Link>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#e31b23]">
                <FiEdit3 size={12} />
                AnyPro Blog Management
              </div>

              <h1 className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
                Edit Blog
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                Update your blog post, SEO information and thumbnail.
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 shadow-sm">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-green-50 text-green-600">
                <FiCheckCircle size={15} />
              </span>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Status
                </p>
                <p className="text-xs font-semibold text-gray-700">
                  Ready to Update
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= FORM ================= */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-6xl"
        >
          {/* ================= BASIC INFORMATION ================= */}
          <div className="mb-5 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-100 bg-black px-5 py-4 sm:px-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#e31b23] text-white">
                  <FiFileText size={17} />
                </div>

                <div>
                  <h2 className="text-sm font-bold text-white sm:text-base">
                    Basic Information
                  </h2>
                  <p className="mt-0.5 text-[11px] text-gray-400">
                    Manage the main details of your blog post.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-5 p-5 md:p-6">
              {/* Title */}
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-600">
                  Blog Title
                </label>

                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter blog title"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#e31b23] focus:bg-white focus:ring-4 focus:ring-red-500/10"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-[1fr_220px]">
                {/* Permalink */}
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-600">
                    Permalink
                  </label>

                  <div className="flex overflow-hidden rounded-xl border border-gray-200 bg-gray-50 focus-within:border-[#e31b23] focus-within:bg-white focus-within:ring-4 focus-within:ring-red-500/10">
                    <span className="flex items-center border-r border-gray-200 bg-gray-100 px-3 text-xs font-semibold text-gray-500">
                      /blog/
                    </span>

                    <input
                      type="text"
                      value={permalink}
                      onChange={(e) =>
                        setPermalink(
                          e.target.value
                            .toLowerCase()
                            .replace(/\s+/g, "-")
                        )
                      }
                      className="w-full bg-transparent px-3 py-3 text-sm text-gray-900 outline-none"
                      placeholder="my-blog-post"
                    />
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-600">
                    Publish Date
                  </label>

                  <div className="relative">
                    <FiCalendar
                      size={15}
                      className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-9 pr-3 text-sm text-gray-700 outline-none transition focus:border-[#e31b23] focus:bg-white focus:ring-4 focus:ring-red-500/10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= SEO ================= */}
          <div className="mb-5 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-blue-100 bg-blue-600 px-5 py-4 sm:px-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 text-white">
                  <FiSearch size={17} />
                </div>

                <div>
                  <h2 className="text-sm font-bold text-white sm:text-base">
                    SEO Settings
                  </h2>
                  <p className="mt-0.5 text-[11px] text-blue-100">
                    Optimize how this blog appears in search engines.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-5 p-5 md:p-6">
              {/* Meta title */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="block text-xs font-bold uppercase tracking-wide text-gray-600">
                    Meta Title
                  </label>

                  <span className="text-[10px] font-medium text-gray-400">
                    SEO Title
                  </span>
                </div>

                <input
                  type="text"
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  placeholder="Enter SEO title"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              {/* Meta description */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="block text-xs font-bold uppercase tracking-wide text-gray-600">
                    Meta Description
                  </label>

                  <span className="text-[10px] font-medium text-gray-400">
                    SEO Description
                  </span>
                </div>

                <textarea
                  rows={4}
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  placeholder="Enter SEO description"
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />
              </div>
            </div>
          </div>

          {/* ================= CONTENT ================= */}
          <div className="mb-5 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-orange-100 bg-orange-500 px-5 py-4 sm:px-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 text-white">
                  <FiEdit3 size={17} />
                </div>

                <div>
                  <h2 className="text-sm font-bold text-white sm:text-base">
                    Blog Content
                  </h2>
                  <p className="mt-0.5 text-[11px] text-orange-50">
                    Edit and format the main content of your article.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-5 md:p-6">
              <div className="overflow-hidden rounded-xl border border-gray-200">
                <JoditEditor
                  value={content}
                  onBlur={(newContent) => setContent(newContent)}
                  config={{
                    readonly: false,
                    height: 500,
                    placeholder: "Write your blog content...",
                  }}
                />
              </div>
            </div>
          </div>

          {/* ================= IMAGE ================= */}
          <div className="mb-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-red-100 bg-[#e31b23] px-5 py-4 sm:px-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 text-white">
                  <FiImage size={17} />
                </div>

                <div>
                  <h2 className="text-sm font-bold text-white sm:text-base">
                    Blog Thumbnail
                  </h2>
                  <p className="mt-0.5 text-[11px] text-red-100">
                    Update the featured image for this blog.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 md:p-6">
              {preview ? (
                <div className="relative max-w-lg overflow-hidden rounded-2xl border border-gray-200 bg-gray-100">
                  <img
                    src={preview}
                    alt="Blog thumbnail"
                    className="h-56 w-full object-cover sm:h-64"
                  />

                  {image && (
                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/80 text-white shadow-lg transition hover:bg-[#e31b23]"
                      title="Remove new image"
                    >
                      <FiX size={17} />
                    </button>
                  )}

                  {image && (
                    <div className="absolute bottom-3 left-3 rounded-lg bg-black/75 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-sm">
                      New image selected
                    </div>
                  )}
                </div>
              ) : (
                <label className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 px-5 py-14 transition hover:border-[#e31b23] hover:bg-red-50/50">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-[#e31b23] transition group-hover:bg-[#e31b23] group-hover:text-white">
                    <FiImage size={22} />
                  </div>

                  <span className="text-sm font-bold text-gray-700">
                    Click to upload thumbnail
                  </span>

                  <span className="mt-1 text-xs text-gray-400">
                    PNG, JPG or WEBP
                  </span>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              )}

              {/* Change image */}
              {preview && (
                <label className="mt-4 inline-flex cursor-pointer items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-[#e31b23] hover:text-[#e31b23]">
                  <FiImage size={16} />
                  Change Image

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          </div>

          {/* ================= BUTTONS ================= */}
          <div className="sticky bottom-3 z-20 flex flex-col-reverse gap-3 rounded-2xl border border-gray-200 bg-white/95 p-3 shadow-xl backdrop-blur sm:flex-row sm:justify-end">
            <Link
              href="/admin/blogs"
              className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
            >
              Cancel
            </Link>

            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#e31b23] px-7 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-60"
            >
              {saving ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  Updating...
                </>
              ) : (
                <>
                  <FiSave size={17} />
                  Update Blog
                </>
              )}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

