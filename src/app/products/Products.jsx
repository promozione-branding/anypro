"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dice5,
  Puzzle,
  Trophy,
  Gamepad2,
  ArrowUpRight,
  ChevronRight,
  Star,
} from "lucide-react";
import Link from "next/link";
import { products } from "@/data/data";
import { categories } from "@/data/data";

// Only UI metadata stays here.
// Category names and subcategories come from data.js.


export default function Products() {
  // ==========================================
  // GET UNIQUE CATEGORIES FROM data.js
  // ==========================================
  // const categories = useMemo(() => {
  //   const uniqueCategories = [
  //     ...new Set(
  //       products
  //         .map((product) => product.category)
  //         .filter(Boolean)
  //     ),
  //   ];

  //   return uniqueCategories.map((title) => ({
  //     title,
  //     time:
  //       categoryMeta[title]?.time ||
  //       "Explore our collection",

  //     icon:
  //       categoryMeta[title]?.icon ||
  //       Gamepad2,
  //   }));
  // }, []);

  const [activeCategoryTitle, setActiveCategoryTitle] =
    useState("");

  const [activeSubcategory, setActiveSubcategory] =
    useState("All");

  // ==========================================
  // ACTIVE CATEGORY
  // ==========================================
  const activeCategory =
    categories.find(
      (category) =>
        category.title === activeCategoryTitle
    ) || categories[0];

  // ==========================================
  // GET SUBCATEGORIES FROM PRODUCTS
  // ==========================================
  const subcategories = useMemo(() => {
    if (!activeCategory?.title) {
      return ["All"];
    }

    const uniqueSubcategories = [
      ...new Set(
        products
          .filter(
            (product) =>
              product.category ===
              activeCategory.title
          )
          .map((product) => product.subcategory)
          .filter(Boolean)
      ),
    ];

    return ["All", ...uniqueSubcategories];
  }, [activeCategory?.title]);

  // ==========================================
  // CATEGORY CHANGE
  // ==========================================
  const handleCategoryChange = (category) => {
    setActiveCategoryTitle(category.title);
    setActiveSubcategory("All");
  };

  // ==========================================
  // FILTER PRODUCTS
  // ==========================================
  const filteredProducts = useMemo(() => {
    if (!activeCategory?.title) {
      return [];
    }

    return products.filter((product) => {
      const categoryMatch =
        product.category === activeCategory.title;

      const subcategoryMatch =
        activeSubcategory === "All" ||
        product.subcategory === activeSubcategory;

      return categoryMatch && subcategoryMatch;
    });
  }, [
    activeCategory?.title,
    activeSubcategory,
  ]);

  // ==========================================
  // CATEGORY HERO IMAGE
  // GET FIRST AVAILABLE IMAGE FROM PRODUCTS
  // ==========================================
  const categoryHeroImage = useMemo(() => {
    if (!activeCategory?.title) {
      return null;
    }

    const categoryProduct = products.find(
      (product) =>
        product.category ===
          activeCategory.title &&
        product.images?.[0]
    );

    return categoryProduct?.images?.[0] || null;
  }, [activeCategory?.title]);

  return (
    <main className="min-h-screen bg-white pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* ================= PAGE HEADER ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="mb-10"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#FF1744]">
            Our Collection
          </p>

          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-black sm:text-5xl">
                Find your
                <span className="text-[#FF1744]">
                  {" "}
                  perfect game.
                </span>
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-black/50">
                Explore our collection of games,
                sports goods, and recreational products.
              </p>
            </div>

            <div className="text-sm text-black/40">
              {products.length} products
            </div>
          </div>
        </motion.div>

        {/* ================= MOBILE CATEGORIES ================= */}

        <div className="mb-6 overflow-x-auto lg:hidden">
          <div className="flex min-w-max gap-2 pb-2">
            {categories.map((category) => {
              const Icon = category.icon;

              const active =
                activeCategory?.title ===
                category.title;

              return (
                <button
                  key={category.title}
                  type="button"
                  onClick={() =>
                    handleCategoryChange(category)
                  }
                  className={`flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    active
                      ? "bg-[#FF1744] text-white"
                      : "border border-black/10 bg-white text-black/60"
                  }`}
                >
                  <Icon size={17} />
                  {category.title}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[220px_1fr]">

          {/* ================= LEFT SIDEBAR ================= */}

          <aside className="hidden lg:block">
            <div className="sticky top-28">

              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-black/40">
                Categories
              </p>

              <div className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon;

                  const active =
                    activeCategory?.title ===
                    category.title;

                  return (
                    <button
                      key={category.title}
                      type="button"
                      onClick={() =>
                        handleCategoryChange(category)
                      }
                      className={`group flex w-full items-center gap-3 rounded-xl p-3 text-left transition-all ${
                        active
                          ? "bg-black text-white shadow-lg"
                          : "text-black/60 hover:bg-black/[0.04] hover:text-black"
                      }`}
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                          active
                            ? "bg-[#FF1744]"
                            : "bg-black/[0.05]"
                        }`}
                      >
                        <Icon size={18} />
                      </span>

                      <span className="flex-1">
                        <span className="block text-sm font-semibold">
                          {category.title}
                        </span>

                        <span
                          className={`mt-0.5 block text-[11px] ${
                            active
                              ? "text-white/45"
                              : "text-black/35"
                          }`}
                        >
                          {category.time}
                        </span>
                      </span>

                      <ChevronRight
                        size={15}
                        className={`transition-transform ${
                          active
                            ? "translate-x-0.5 text-[#FF1744]"
                            : "text-black/20"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* ================= RIGHT CONTENT ================= */}

          <div className="min-w-0">

            {/* ================= CATEGORY HERO ================= */}

            <div className="relative mb-7 h-36 overflow-hidden rounded-2xl bg-black sm:h-44">

              {categoryHeroImage && (
                <img
                  src={categoryHeroImage}
                  alt={
                    activeCategory?.title ||
                    "Category"
                  }
                  className="absolute inset-0 h-full w-full object-cover opacity-50"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

              <div className="relative flex h-full flex-col justify-center p-6 sm:p-8">

                <p className="text-xs font-medium text-white/50">
                  Explore
                </p>

                <h2 className="mt-1 text-2xl font-black text-white sm:text-3xl">
                  {activeCategory?.title}
                </h2>

                <p className="mt-1 text-xs text-white/50">
                  {activeCategory?.time}
                </p>

              </div>
            </div>

            {/* ================= DYNAMIC SUBCATEGORIES ================= */}

            <div className="mb-7 overflow-x-auto">
              <div className="flex min-w-max gap-2 border-b border-black/10 pb-3">

                {subcategories.map(
                  (subcategory) => {
                    const active =
                      activeSubcategory ===
                      subcategory;

                    return (
                      <button
                        key={subcategory}
                        type="button"
                        onClick={() =>
                          setActiveSubcategory(
                            subcategory
                          )
                        }
                        className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                          active
                            ? "bg-[#FF1744] text-white"
                            : "bg-black/[0.04] text-black/55 hover:bg-black/[0.08] hover:text-black"
                        }`}
                      >
                        {subcategory}
                      </button>
                    );
                  }
                )}

              </div>
            </div>

            {/* ================= RESULTS HEADER ================= */}

            <div className="mb-5 flex items-center justify-between">
              <div>

                <h3 className="font-bold text-black">
                  {activeSubcategory === "All"
                    ? activeCategory?.title
                    : activeSubcategory}
                </h3>

                <p className="mt-0.5 text-xs text-black/40">
                  {filteredProducts.length} products
                  found
                </p>

              </div>
            </div>

            {/* ================= PRODUCTS ================= */}

            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeCategory?.title}-${activeSubcategory}`}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="grid grid-cols-2 gap-4 sm:grid-cols-2 xl:grid-cols-3"
              >
                {filteredProducts.map(
                  (product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                    />
                  )
                )}
              </motion.div>
            </AnimatePresence>

            {filteredProducts.length === 0 && (
              <div className="rounded-2xl border border-dashed border-black/10 py-16 text-center">
                <p className="text-sm font-semibold text-black/60">
                  No products found
                </p>

                <p className="mt-1 text-xs text-black/35">
                  Try another category.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

// ======================================================
// PRODUCT CARD
// ======================================================

function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.slug}`}>
      <motion.article
        whileHover={{
          y: -4,
        }}
        transition={{
          duration: 0.2,
        }}
        className="group overflow-hidden rounded-2xl border border-black/10 bg-white"
      >

        {/* IMAGE */}

        <div className="relative aspect-[1/1] overflow-hidden bg-[#f5f5f5]">

          {product.images?.[0] ? (
            <img
              src={product.images[0]}
              alt={product.name}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center px-5 text-center text-xs font-semibold uppercase tracking-wider text-black/20">
              {product.name}
            </div>
          )}

          <div className="absolute bottom-3 right-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white text-black opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-hover:bg-[#FF1744] group-hover:text-white">
            <ArrowUpRight size={15} />
          </div>

        </div>

        {/* DETAILS */}

        <div className="p-4">

          <div className="mb-2 flex items-center gap-1">

            <Star
              size={12}
              fill="#FF1744"
              className="text-[#FF1744]"
            />

            <span className="text-[11px] font-semibold text-black/60">
              {product.rating}
            </span>

            <span className="text-[10px] text-black/30">
              ({product.reviews})
            </span>

          </div>

          <h4 className="line-clamp-2 text-sm font-bold leading-5 text-black">
            {product.name}
          </h4>

        </div>
      </motion.article>
    </Link>
  );
}