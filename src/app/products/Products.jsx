"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dice5,
  Puzzle,
  Trophy,
  Gamepad2,
  ShoppingCart,
  ArrowUpRight,
  ChevronRight,
  Star,
} from "lucide-react";
import Link from "next/link";

const categories = [
  {
    title: "Table Games",
    time: "Fun for everyone",
    icon: Dice5,
    image:
      "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=1000&q=85",
    subcategories: [
      "All",
      "Air Hockey",
      "Foosball",
      "Pool Tables",
      "Table Tennis",
    ],
  },
  {
    title: "Board Game",
    time: "Think. Play. Win.",
    icon: Puzzle,
    image:
      "https://images.unsplash.com/photo-1629760946220-5693ee4c46ac?w=600&auto=format&fit=crop&q=80",
    subcategories: [
      "All",
      "Strategy",
      "Family",
      "Kids",
      "Card Games",
    ],
  },
  {
    title: "Sports Goods",
    time: "Get active",
    icon: Trophy,
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=85",
    subcategories: [
      "All",
      "Football",
      "Cricket",
      "Basketball",
      "Fitness",
    ],
  },
  {
    title: "Activity & Recreational Games",
    time: "Play all day",
    icon: Gamepad2,
    image:
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1000&q=85",
    subcategories: [
      "All",
      "Outdoor",
      "Indoor",
      "Kids Activities",
      "Party Games",
    ],
  },
];

const products = [
  {
    id: 1,
    name: "Premium Air Hockey Table",
    category: "Table Games",
    subcategory: "Air Hockey",
    price: "₹24,999",
    oldPrice: "₹29,999",
    rating: 4.8,
    reviews: 124,
    image:
      "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 2,
    name: "Professional Foosball Table",
    category: "Table Games",
    subcategory: "Foosball",
    price: "₹18,499",
    oldPrice: "₹22,999",
    rating: 4.7,
    reviews: 89,
    image:
      "https://images.unsplash.com/photo-1554156630-0bf6e7f0b5e5?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 3,
    name: "Competition Pool Table",
    category: "Table Games",
    subcategory: "Pool Tables",
    price: "₹45,999",
    oldPrice: "₹52,999",
    rating: 4.9,
    reviews: 76,
    image:
      "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 4,
    name: "Classic Strategy Board Game",
    category: "Board Game",
    subcategory: "Strategy",
    price: "₹1,299",
    oldPrice: "₹1,699",
    rating: 4.8,
    reviews: 214,
    image:
      "https://images.unsplash.com/photo-1629760946220-5693ee4c46ac?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 5,
    name: "Family Fun Board Game",
    category: "Board Game",
    subcategory: "Family",
    price: "₹899",
    oldPrice: "₹1,199",
    rating: 4.6,
    reviews: 156,
    image:
      "https://images.unsplash.com/photo-1632501641765-e568d28b0015?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 6,
    name: "Kids Puzzle Adventure",
    category: "Board Game",
    subcategory: "Kids",
    price: "₹699",
    oldPrice: "₹999",
    rating: 4.7,
    reviews: 98,
    image:
      "https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 7,
    name: "Professional Football",
    category: "Sports Goods",
    subcategory: "Football",
    price: "₹1,499",
    oldPrice: "₹1,899",
    rating: 4.8,
    reviews: 187,
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 8,
    name: "Cricket Bat Pro Edition",
    category: "Sports Goods",
    subcategory: "Cricket",
    price: "₹3,499",
    oldPrice: "₹4,299",
    rating: 4.9,
    reviews: 143,
    image:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 9,
    name: "Basketball Elite",
    category: "Sports Goods",
    subcategory: "Basketball",
    price: "₹1,799",
    oldPrice: "₹2,199",
    rating: 4.7,
    reviews: 112,
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 10,
    name: "Outdoor Activity Set",
    category: "Activity & Recreational Games",
    subcategory: "Outdoor",
    price: "₹2,499",
    oldPrice: "₹3,199",
    rating: 4.8,
    reviews: 87,
    image:
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 11,
    name: "Indoor Fun Game Set",
    category: "Activity & Recreational Games",
    subcategory: "Indoor",
    price: "₹1,999",
    oldPrice: "₹2,499",
    rating: 4.6,
    reviews: 65,
    image:
      "https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 12,
    name: "Kids Activity Box",
    category: "Activity & Recreational Games",
    subcategory: "Kids Activities",
    price: "₹1,299",
    oldPrice: "₹1,599",
    rating: 4.9,
    reviews: 201,
    image:
      "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?auto=format&fit=crop&w=800&q=85",
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [activeSubcategory, setActiveSubcategory] = useState("All");

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setActiveSubcategory("All");
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        product.category === activeCategory.title;

      const subcategoryMatch =
        activeSubcategory === "All" ||
        product.subcategory === activeSubcategory;

      return categoryMatch && subcategoryMatch;
    });
  }, [activeCategory, activeSubcategory]);

  return (
    <main className="min-h-screen bg-white pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
                  {" "}perfect game.
                </span>
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-black/50">
                Explore our collection of games, sports goods,
                and recreational products.
              </p>
            </div>

            <div className="text-sm text-black/40">
              {products.length} products
            </div>
          </div>
        </motion.div>

        {/* Mobile Category Navigation */}
        <div className="mb-6 overflow-x-auto lg:hidden">
          <div className="flex min-w-max gap-2 pb-2">
            {categories.map((category) => {
              const Icon = category.icon;
              const active =
                activeCategory.title === category.title;

              return (
                <button
                  key={category.title}
                  onClick={() =>
                    handleCategoryChange(category)
                  }
                  className={`flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition ${active
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
          {/* LEFT SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-black/40">
                Categories
              </p>

              <div className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  const active =
                    activeCategory.title ===
                    category.title;

                  return (
                    <button
                      key={category.title}
                      onClick={() =>
                        handleCategoryChange(category)
                      }
                      className={`group flex w-full items-center gap-3 rounded-xl p-3 text-left transition-all ${active
                        ? "bg-black text-white shadow-lg"
                        : "text-black/60 hover:bg-black/[0.04] hover:text-black"
                        }`}
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${active
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
                          className={`mt-0.5 block text-[11px] ${active
                            ? "text-white/45"
                            : "text-black/35"
                            }`}
                        >
                          {category.time}
                        </span>
                      </span>

                      <ChevronRight
                        size={15}
                        className={`transition-transform ${active
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

          {/* RIGHT CONTENT */}
          <div className="min-w-0">
            {/* Category Hero */}
            <div className="relative mb-7 h-36 overflow-hidden rounded-2xl bg-black sm:h-44">
              <img
                src={activeCategory.image}
                alt={activeCategory.title}
                className="absolute inset-0 h-full w-full object-cover opacity-50"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

              <div className="relative flex h-full flex-col justify-center p-6 sm:p-8">
                <p className="text-xs font-medium text-white/50">
                  Explore
                </p>

                <h2 className="mt-1 text-2xl font-black text-white sm:text-3xl">
                  {activeCategory.title}
                </h2>

                <p className="mt-1 text-xs text-white/50">
                  {activeCategory.time}
                </p>
              </div>
            </div>

            {/* Subcategory Tabs */}
            <div className="mb-7 overflow-x-auto">
              <div className="flex min-w-max gap-2 border-b border-black/10 pb-3">
                {activeCategory.subcategories.map(
                  (subcategory) => {
                    const active =
                      activeSubcategory ===
                      subcategory;

                    return (
                      <button
                        key={subcategory}
                        onClick={() =>
                          setActiveSubcategory(
                            subcategory
                          )
                        }
                        className={`rounded-full px-4 py-2 text-sm font-medium transition ${active
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

            {/* Results Header */}
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-black">
                  {activeSubcategory === "All"
                    ? activeCategory.title
                    : activeSubcategory}
                </h3>

                <p className="mt-0.5 text-xs text-black/40">
                  {filteredProducts.length} products found
                </p>
              </div>
            </div>

            {/* Products */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeCategory.title}-${activeSubcategory}`}
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
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
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

function ProductCard({ product }) {
  return (
    <Link href={"/products/air-hockey-table"}>
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="group overflow-hidden rounded-2xl border border-black/10 bg-white"
      >
        {/* Image */}
        <div className="relative aspect-[1/1] overflow-hidden bg-[#f5f5f5]">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

          {/* Sale */}
          <div className="absolute left-3 top-3 rounded-full bg-[#FF1744] px-2.5 py-1 text-[10px] font-bold text-white">
            SALE
          </div>

          {/* Cart */}
          <button
            type="button"
            aria-label={`Add ${product.name} to cart`}
            className="absolute bottom-3 right-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white text-black opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-[#FF1744] hover:text-white"
          >
            <ShoppingCart size={15} />
          </button>
        </div>

        {/* Details */}
        <div className="p-4">
          {/* Rating */}
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

          <div className="mt-3 flex items-center justify-between">
            <div>
              <span className="text-sm font-black text-black">
                {product.price}
              </span>

              <span className="ml-1.5 text-[11px] text-black/30 line-through">
                {product.oldPrice}
              </span>
            </div>

            <ArrowUpRight
              size={16}
              className="text-black/30 transition-colors group-hover:text-[#FF1744]"
            />
          </div>
        </div>
      </motion.article>
    </Link>
  );
}