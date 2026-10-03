
"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FiArrowRight, FiCalendar, FiGrid, FiStar } from "react-icons/fi";

export default function AllBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // ==========================================
  // FETCH ALL BLOGS
  // ==========================================
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blog");

        if (!res.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const data = await res.json();

        setBlogs(data.blogs || data || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // ==========================================
  // CREATE EXCERPT FROM CONTENT
  // ==========================================
  const getExcerpt = (content, maxLength = 150) => {
    if (!content) return "";

    const plainText = content
      .replace(/<[^>]*>/g, "")
      .replace(/&nbsp;/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    if (plainText.length <= maxLength) {
      return plainText;
    }

    return plainText.substring(0, maxLength) + "...";
  };

  // ==========================================
  // FORMAT DATE
  // ==========================================
  const formatDate = (date) => {
    if (!date) return "";

    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };

  return (
    <main className="w-full overflow-hidden bg-[#fffaf2]">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#101010]">
        {/* Decorative shapes */}
        <div className="absolute -left-20 top-10 h-44 w-44 rounded-full bg-[#e31b23] opacity-80 blur-[1px]" />

        <div className="absolute right-[-60px] top-[-70px] h-60 w-60 rotate-12 rounded-[40px] bg-[#ff9f1c]" />

        <div className="absolute bottom-[-80px] left-[42%] h-48 w-48 rounded-full border-[35px] border-[#1687d9] opacity-80" />

        <div className="absolute right-[25%] top-20 h-5 w-5 rotate-45 bg-[#ffd23f]" />

        <div className="absolute left-[18%] bottom-16 h-4 w-4 rounded-full bg-[#1687d9]" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex min-h-[390px] max-w-7xl items-center justify-center px-5 py-20 text-center sm:min-h-[430px]">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm sm:text-xs">
              <FiStar className="text-[#ffd23f]" size={13} />
              AnyPro Play & Fun
            </div>

            <h1 className="text-5xl font-black leading-none tracking-tight text-white sm:text-6xl md:text-7xl">
              Play.
              <span className="text-[#ff9f1c]"> Learn.</span>
              <br />
              <span className="text-[#e31b23]">Explore.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-gray-300 sm:text-base">
              Discover fun ideas, game guides, kids activities and helpful
              tips for making every playtime more exciting.
            </p>

            {/* Breadcrumb */}
            <div className="mt-7 flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em]">
              <a
                href="/"
                className="text-white transition-colors hover:text-[#ff9f1c]"
              >
                Home
              </a>

              <span className="text-gray-500">/</span>

              <span className="text-[#ff9f1c]">Blogs</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BLOG INTRO
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-5 pb-4 pt-12 sm:pt-16 md:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[#e31b23]">
              <span className="h-2 w-2 rounded-full bg-[#e31b23]" />
              From the Playroom
            </div>

            <h2 className="text-3xl font-black tracking-tight text-[#111] sm:text-4xl">
              Fun & Games Journal
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
              Tips, inspiration and ideas around chess, carrom, trampoline,
              indoor games and everything that makes kids love to play.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
            <FiGrid size={15} />
            {loading ? "Loading..." : `${blogs.length} Articles`}
          </div>
        </div>
      </section>

      {/* =====================================================
          BLOG GRID
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-8 sm:py-10 md:px-8 md:py-14">
        {/* =========================
            LOADING
        ========================== */}
        {loading && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm"
              >
                <div className="aspect-[16/10] animate-pulse bg-gray-200" />

                <div className="p-5">
                  <div className="mb-4 h-3 w-24 animate-pulse rounded-full bg-gray-200" />

                  <div className="mb-2 h-6 w-4/5 animate-pulse rounded-lg bg-gray-200" />

                  <div className="mb-2 h-4 w-full animate-pulse rounded bg-gray-200" />

                  <div className="mb-5 h-4 w-3/4 animate-pulse rounded bg-gray-200" />

                  <div className="h-3 w-20 animate-pulse rounded bg-gray-200" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* =========================
            NO BLOGS
        ========================== */}
        {!loading && blogs.length === 0 && (
          <div className="flex min-h-[350px] flex-col items-center justify-center rounded-3xl border-2 border-dashed border-gray-200 bg-white px-5 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fff1d6] text-[#ff9f1c]">
              <FiGrid size={25} />
            </div>

            <h3 className="text-lg font-black text-gray-900">
              No blogs yet
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Fun articles and game ideas are coming soon!
            </p>
          </div>
        )}

        {/* =========================
            BLOG GRID
        ========================== */}
        {!loading && blogs.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => {
              const accentClasses = [
                {
                  bg: "bg-[#e31b23]",
                  light: "bg-red-50",
                  text: "text-[#e31b23]",
                },
                {
                  bg: "bg-[#ff9f1c]",
                  light: "bg-orange-50",
                  text: "text-[#e68900]",
                },
                {
                  bg: "bg-[#1687d9]",
                  light: "bg-blue-50",
                  text: "text-[#1687d9]",
                },
              ];

              const accent = accentClasses[index % accentClasses.length];

              return (
                <article
                  key={blog._id}
                  className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Top color strip */}
                  <div className={`h-1.5 w-full ${accent.bg}`} />

                  {/* Image */}
                  <a href={`/blogs/${blog.permalink}`}>
                    <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                      {blog.image ? (
                        <Image
                          width={800}
                          height={500}
                          src={blog.image}
                          alt={blog.title || "Blog image"}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gray-100 text-sm text-gray-400">
                          No Image
                        </div>
                      )}

                      {/* Image overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70" />

                      {/* Category badge */}
                      <div
                        className={`absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full ${accent.light} px-3 py-1.5 text-[9px] font-black uppercase tracking-wider ${accent.text} shadow-sm`}
                      >
                        <FiStar size={10} />
                        Play & Learn
                      </div>
                    </div>
                  </a>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    {/* Date */}
                    <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400">
                      <FiCalendar size={12} />
                      {formatDate(blog.date)}
                    </div>

                    {/* Title */}
                    <h2 className="mb-3 line-clamp-2 text-xl font-black leading-snug text-gray-900 transition-colors duration-300 group-hover:text-[#e31b23] sm:text-[22px]">
                      <a href={`/blogs/${blog.permalink}`}>
                        {blog.title}
                      </a>
                    </h2>

                    {/* Excerpt */}
                    <p className="mb-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {blog.metaDescription ||
                        getExcerpt(blog.content)}
                    </p>

                    {/* Read More */}
                    <a
                      href={`/blogs/${blog.permalink}`}
                      className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.16em] text-gray-900 transition-all duration-300 group-hover:text-[#e31b23]"
                    >
                      Read Article
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 group-hover:bg-[#e31b23] group-hover:text-white">
                        <FiArrowRight size={13} />
                      </span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* =====================================================
          BOTTOM FUN BANNER
      ====================================================== */}
      {!loading && blogs.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 pb-14 sm:pb-20 md:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#111] px-6 py-10 sm:px-10 sm:py-12">
            {/* Decorative shapes */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#ff9f1c]" />
            <div className="absolute -bottom-12 left-1/3 h-32 w-32 rounded-full bg-[#1687d9]" />
            <div className="absolute right-1/4 top-8 h-4 w-4 rotate-45 bg-[#e31b23]" />

            <div className="relative z-10 max-w-2xl">
              <div className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#ff9f1c]">
                Keep Playing
              </div>

              <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
                More games.
                <br />
                More smiles.
                <span className="text-[#e31b23]"> More memories.</span>
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-6 text-gray-400">
                Explore AnyPro for more exciting ideas, games and activities
                designed to bring people together.
              </p>

              <a
                href="/"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#e31b23] px-5 py-3 text-xs font-black uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#ff9f1c] hover:text-black"
              >
                Explore AnyPro
                <FiArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
