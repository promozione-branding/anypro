
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { connect } from "@/Database/db";
import Blog from "@/models/blog";

// =====================================================
// SEO METADATA
// =====================================================

export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    await connect();

    const blog = await Blog.findOne({
      permalink: slug,
    }).lean();

    if (!blog) {
      return {
        title: "Blog Not Found | AnyPro",
        description: "This blog does not exist.",
      };
    }

    const title = blog.metaTitle || blog.title;
    const description = blog.metaDescription || "";

    return {
      title,
      description,

      openGraph: {
        title,
        description,
        type: "article",
        images: blog.image
          ? [
              {
                url: blog.image,
                width: 1200,
                height: 630,
                alt: blog.title,
              },
            ]
          : [],
      },

      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: blog.image ? [blog.image] : [],
      },
    };
  } catch (error) {
    console.error("Blog metadata error:", error);

    return {
      title: "Blog Not Found | AnyPro",
      description: "This blog does not exist.",
    };
  }
}

// =====================================================
// BLOG PAGE
// =====================================================

export default async function BlogPage({ params }) {
  const { slug } = await params;

  try {
    await connect();

    const blog = await Blog.findOne({
      permalink: slug,
    }).lean();

    if (!blog) {
      notFound();
    }

    return (
      <main className="min-h-screen overflow-hidden bg-[#fffdf8] text-gray-900 pt-24">

        {/* =====================================================
            HERO / BREADCRUMB
        ====================================================== */}

        <section className="relative overflow-hidden bg-black">
          
          {/* Decorative shapes */}
          <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[#ef3340] opacity-90" />

          <div className="absolute right-[-50px] top-10 h-32 w-32 rotate-12 rounded-3xl bg-[#ff9f1c]" />

          <div className="absolute bottom-[-40px] left-[35%] h-24 w-24 rounded-full bg-[#1976d2]" />

          <div className="absolute right-[28%] bottom-[-35px] h-20 w-20 rotate-45 bg-[#ffd43b]" />

          <div className="relative mx-auto max-w-[1250px] px-5 py-10 sm:px-8 md:py-14">

            {/* Breadcrumb */}
            <div className="mb-8 flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/60">
              <Link
                href="/"
                className="transition-colors hover:text-[#ff9f1c]"
              >
                AnyPro
              </Link>

              <span>/</span>

              <Link
                href="/blogs"
                className="transition-colors hover:text-[#ef3340]"
              >
                Blogs
              </Link>

              <span>/</span>

              <span className="max-w-[250px] truncate text-white/40">
                {blog.title}
              </span>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1fr_240px] lg:items-end">

              {/* LEFT */}
              <div>

                {/* Badge */}
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.12em] text-black">
                  <span className="h-2 w-2 rounded-full bg-[#ef3340]" />
                  Play & Learn
                </div>

                {/* Title */}
                <h1 className="max-w-[900px] text-4xl font-black leading-[0.98] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  {blog.title}
                </h1>

                {/* Date */}
                <div className="mt-6 flex items-center gap-3 text-xs font-semibold text-white/60">
                  <span className="rounded-full bg-white/10 px-3 py-1.5">
                    {formatDate(blog.date)}
                  </span>

                  <span className="h-1 w-1 rounded-full bg-[#ff9f1c]" />

                  <span>AnyPro Games</span>
                </div>
              </div>

              {/* AUTHOR */}
              <div className="lg:pb-1">

                <div className="flex items-center gap-3">

                  <div className="flex h-12 w-12 shrink-0 rotate-[-4deg] items-center justify-center rounded-2xl bg-[#ef3340] text-sm font-black text-white shadow-lg">
                    AP
                  </div>

                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.08em] text-white">
                      AnyPro
                    </p>

                    <p className="mt-1 text-xs font-medium text-white/50">
                      Play • Learn • Smile
                    </p>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            IMAGE + BLOG CONTENT
        ====================================================== */}

        <section className="mx-auto max-w-[1250px] px-5 py-12 sm:px-8 md:py-16">

          <div className="grid gap-10 lg:grid-cols-[400px_1fr] lg:gap-16">

            {/* =================================================
                LEFT — BLOG IMAGE
            ================================================= */}

            <aside className="lg:sticky lg:top-28 lg:self-start">

              {blog.image ? (
                <div>

                  {/* Image Card */}
                  <div className="relative overflow-hidden rounded-[28px] border-4 border-black bg-white shadow-[8px_8px_0px_#ef3340]">

                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="h-auto max-h-[620px] w-full object-cover"
                    />

                    {/* Image badge */}
                    <div className="absolute left-4 top-4 rounded-full bg-[#ff9f1c] px-4 py-2 text-[10px] font-black uppercase tracking-wider text-black shadow-md">
                      AnyPro Fun
                    </div>

                  </div>

                  {/* Caption */}
                  <div className="mt-5 flex items-center justify-between">

                    <div>
                      <p className="text-sm font-black text-black">
                        AnyPro Games
                      </p>

                      <p className="mt-1 text-xs font-medium text-gray-500">
                        Fun starts here!
                      </p>
                    </div>

                    <div className="flex gap-1.5">
                      <span className="h-3 w-3 rounded-full bg-[#ef3340]" />
                      <span className="h-3 w-3 rounded-full bg-[#ff9f1c]" />
                      <span className="h-3 w-3 rounded-full bg-[#1976d2]" />
                    </div>

                  </div>

                </div>
              ) : (
                <div className="flex aspect-[4/5] items-center justify-center rounded-[28px] border-4 border-black bg-[#f3f3f3] text-sm font-bold text-gray-400">
                  No image available
                </div>
              )}

            </aside>

            {/* =================================================
                RIGHT — BLOG CONTENT
            ================================================= */}

            <article
              className="
                jodit-content
                max-w-none

                prose
                prose-lg

                prose-headings:font-black
                prose-headings:tracking-tight
                prose-headings:text-black

                prose-p:text-gray-700
                prose-p:leading-8

                prose-a:font-bold
                prose-a:text-[#ef3340]
                prose-a:no-underline
                hover:prose-a:underline

                prose-strong:text-black

                prose-img:rounded-3xl
                prose-img:border-2
                prose-img:border-black

                prose-blockquote:border-l-[#ef3340]
                prose-blockquote:bg-[#fff3e5]
                prose-blockquote:rounded-r-2xl
                prose-blockquote:px-6
                prose-blockquote:py-3

                prose-li:text-gray-700

                sm:prose-xl
              "
              dangerouslySetInnerHTML={{
                __html: blog.content || "",
              }}
            />

          </div>
        </section>

        {/* =====================================================
            FUN FACT / CTA STRIP
        ====================================================== */}

        <section className="px-5 pb-14 sm:px-8">

          <div className="mx-auto max-w-[1250px] overflow-hidden rounded-[30px] bg-black">

            <div className="relative px-6 py-10 sm:px-10 md:px-14 md:py-12">

              {/* Decorative shapes */}
              <div className="absolute right-10 top-[-30px] h-24 w-24 rotate-12 rounded-3xl bg-[#ef3340]" />

              <div className="absolute bottom-[-30px] right-[30%] h-20 w-20 rounded-full bg-[#1976d2]" />

              <div className="relative max-w-2xl">

                <span className="inline-flex rounded-full bg-[#ffd43b] px-4 py-2 text-[10px] font-black uppercase tracking-wider text-black">
                  Keep Playing!
                </span>

                <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  More games. More smiles. More memories.
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                  Discover fun activities, exciting games and playful ideas
                  for kids and families with AnyPro.
                </p>

                <Link
                  href="/blogs"
                  className="
                    mt-7
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-[#ef3340]
                    px-6
                    py-3
                    text-xs
                    font-black
                    uppercase
                    tracking-wider
                    text-white
                    transition-all
                    hover:bg-[#ff9f1c]
                    hover:text-black
                    hover:-translate-y-0.5
                  "
                >
                  Explore More Blogs
                  <span className="text-base">→</span>
                </Link>

              </div>

            </div>
          </div>

        </section>

        {/* =====================================================
            BACK TO BLOGS
        ====================================================== */}

        <section className="border-t border-black/10 bg-white">

          <div className="mx-auto flex max-w-[1250px] px-5 py-8 sm:px-8">

            <Link
              href="/blogs"
              className="
                group
                inline-flex
                items-center
                gap-3
                text-xs
                font-black
                uppercase
                tracking-[0.15em]
                text-black
              "
            >
              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-black
                  text-white
                  transition-all
                  group-hover:bg-[#ef3340]
                "
              >
                ←
              </span>

              Back to Blogs
            </Link>

          </div>

        </section>

      </main>
    );
  } catch (error) {
    console.error("Blog page error:", error);

    notFound();
  }
}

// =====================================================
// DATE FORMATTER
// =====================================================

function formatDate(date) {
  if (!date) return "";

  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });
}
