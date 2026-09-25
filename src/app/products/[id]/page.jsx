
import React from "react";
import { notFound } from "next/navigation";
import Product from "./Product";
import { products } from "@/data/data";

export default async function Page({ params }) {
  const { id } = await params;
  console.log(id)

  const product = products.find((item) => {
    const productSlug = item.name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    return productSlug === id;
  });
  console.log(product)

  if (!product) {
    notFound();
  }

  return <Product product={product} />;
}

