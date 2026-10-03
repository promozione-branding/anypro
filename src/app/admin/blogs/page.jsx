
"use client";

import React, { useEffect, useState } from "react";
import {
  FiEdit2,
  FiTrash2,
  FiPlus,
  FiFileText,
  FiArrowUpRight,
} from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default function Page() {
  const router = useRouter();

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  // Get all blogs
  const fetchBlogs = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/blog");

      if (!res.ok) {
        throw new Error("Failed to fetch blogs");
      }

      const data = await res.json();

      // Handles either { blogs: [] } or directly []
      setBlogs(data.blogs || data || []);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [deletingId]);

  // Delete blog
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?",
    );

    if (!confirmDelete) return;

    try {
      setDeletingId(id);

      const res = await fetch(`/api/blog/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to delete blog");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert(error.message || "Failed to delete blog");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar />

      <main className="p-5 pt-24 md:p-8 md:pt-24 lg:ml-72 lg:pt-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-600" />

              <p className="text-xs font-bold uppercase tracking-[0.15em] text-red-600">
                Content Management
              </p>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Blogs
            </h1>

            <p className="mt-1.5 text-sm text-gray-500">
              Create, edit and manage your AnyPro blog posts.
            </p>
          </div>

          <Link
            href="/admin/blogs/new"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/15 transition-all duration-300 hover:bg-black hover:shadow-black/15"
          >
            <FiPlus size={18} />

            Create New Blog

            <FiArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Stats */}
        {!loading && (
          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {/* Total Blogs */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Total Blogs
                  </p>

                  <p className="mt-2 text-2xl font-bold text-gray-900">
                    {blogs.length}
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
                  <FiFileText size={20} />
                </div>
              </div>
            </div>

            {/* Published */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Content
                  </p>

                  <p className="mt-2 text-2xl font-bold text-gray-900">
                    Active
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                </div>
              </div>
            </div>

            {/* Platform */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Platform
                  </p>

                  <p className="mt-2 text-2xl font-bold text-gray-900">
                    AnyPro
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                  <span className="text-sm font-black">A</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Loading */}
        {loading ? (
          <div className="flex min-h-[350px] items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="text-center">
              <div className="mx-auto mb-4 h-9 w-9 animate-spin rounded-full border-4 border-gray-200 border-t-red-600" />

              <p className="text-sm font-medium text-gray-600">
                Loading blogs...
              </p>

              <p className="mt-1 text-xs text-gray-400">
                Please wait while we fetch your content.
              </p>
            </div>
          </div>
        ) : blogs.length === 0 ? (
          /* Empty State */
          <div className="relative flex min-h-[400px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 text-center shadow-sm">
            {/* Decorative */}
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-red-600/5 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-blue-600/5 blur-3xl" />

            <div className="relative">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                <FiFileText size={28} />
              </div>

              <h2 className="text-xl font-bold text-gray-900">
                No blogs found
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
                You haven't created any blog posts yet. Start creating
                content for your AnyPro website.
              </p>

              <Link
                href="/admin/blogs/new"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-black"
              >
                <FiPlus size={17} />
                Create Your First Blog
              </Link>
            </div>
          </div>
        ) : (
          /* Blog Table */
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            {/* Table Header */}
            <div className="flex flex-col gap-2 border-b border-gray-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-sm font-bold text-gray-900">
                  All Blog Posts
                </h2>

                <p className="mt-0.5 text-xs text-gray-400">
                  Manage your published website content
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500" />

                <span className="text-xs font-medium text-gray-500">
                  {blogs.length} {blogs.length === 1 ? "post" : "posts"}
                </span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[850px]">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50/80">
                    <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      Blog
                    </th>

                    <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      Permalink
                    </th>

                    <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      Date
                    </th>

                    <th className="px-5 py-4 text-right text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {blogs.map((blog) => (
                    <tr
                      key={blog._id}
                      className="group border-b border-gray-100 last:border-0 hover:bg-gray-50/70"
                    >
                      {/* Blog */}
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-4">
                          {blog.image ? (
                            <img
                              src={blog.image}
                              alt={blog.title}
                              className="h-14 w-20 rounded-xl border border-gray-100 object-cover"
                            />
                          ) : (
                            <div className="flex h-14 w-20 items-center justify-center rounded-xl bg-gray-100">
                              <FiFileText
                                size={20}
                                className="text-gray-400"
                              />
                            </div>
                          )}

                          <div className="max-w-[350px]">
                            <h3 className="truncate text-sm font-bold text-gray-900">
                              {blog.title}
                            </h3>

                            {blog.metaDescription && (
                              <p className="mt-1 truncate text-xs text-gray-500">
                                {blog.metaDescription}
                              </p>
                            )}
                          </div>
                        </div>
                      </td>

                      {/* Permalink */}
                      <td className="px-5 py-4">
                        <span className="inline-flex max-w-[220px] truncate rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600">
                          /{blog.permalink}
                        </span>
                      </td>

                      {/* Date */}
                      <td className="px-5 py-4">
                        <span className="text-sm font-medium text-gray-600">
                          {blog.date
                            ? new Date(blog.date).toLocaleDateString(
                                "en-IN",
                                {
                                  day: "2-digit",
                                  month: "short",
                                  year: "numeric",
                                },
                              )
                            : "—"}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="px-5 py-4">
                        <div className="flex justify-end gap-2">
                          {/* Edit */}
                          <button
                            onClick={() =>
                              router.push(
                                `/admin/blogs/edit/${blog._id}`,
                              )
                            }
                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                            title="Edit blog"
                          >
                            <FiEdit2 size={16} />
                          </button>

                          {/* Delete */}
                          <button
                            onClick={() => handleDelete(blog._id)}
                            disabled={deletingId === blog._id}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-red-100 bg-white text-red-500 transition-all duration-200 hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50"
                            title="Delete blog"
                          >
                            {deletingId === blog._id ? (
                              <span className="h-4 w-4 animate-spin rounded-full border-2 border-red-200 border-t-red-600" />
                            ) : (
                              <FiTrash2 size={16} />
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bottom Accent */}
            <div className="flex h-1">
              <div className="w-1/2 bg-red-600" />
              <div className="w-1/4 bg-orange-500" />
              <div className="w-1/4 bg-blue-600" />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
