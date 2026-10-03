import React from "react";
import { notFound } from "next/navigation";
import Product from "./Product";
import { products } from "@/data/data";

function getProductBySlug(id) {
  return products.find((item) => {
    const productSlug = item.name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    return productSlug === id;
  });
}

export async function generateMetadata({ params }) {
  const { id } = await params;

  const product = getProductBySlug(id);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: product.metaTitle || `${product.name} | RG Plastic`,
    description:
      product.metaDescription ||
      `Learn more about ${product.name} from RG Plastic.`,
  };
}

export default async function Page({ params }) {
  const { id } = await params;

  const product = getProductBySlug(id);

  if (!product) {
    notFound();
  }

  return <Product product={product} />;
}