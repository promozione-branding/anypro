import { NextResponse } from "next/server";
import { products } from "@/data/data";

const BASE_URL = "https://www.anypro.in";

// Static pages
const staticPages = [
    {
        url: "/",
        priority: "1.0",
        changefreq: "weekly",
    },
    {
        url: "/about-us",
        priority: "0.8",
        changefreq: "monthly",
    },
    {
        url: "/contact-us",
        priority: "0.8",
        changefreq: "monthly",
    },
    {
        url: "/products",
        priority: "0.9",
        changefreq: "weekly",
    },
    {
        url: "/blogs",
        priority: "0.8",
        changefreq: "weekly",
    },
    {
        url: "/privacy-policy",
        priority: "0.8",
        changefreq: "weekly",
    },
    {
        url: "/return-refund",
        priority: "0.8",
        changefreq: "weekly",
    },
    {
        url: "/return-exchange",
        priority: "0.8",
        changefreq: "weekly",
    },
];

function escapeXml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}

function createUrl({
    url,
    lastmod,
    changefreq,
    priority,
}) {
    return `
        <url>
            <loc>${escapeXml(`${BASE_URL}${url}`)}</loc>
            <lastmod>${lastmod}</lastmod>
            <changefreq>${changefreq}</changefreq>
            <priority>${priority}</priority>
        </url>
    `;
}

export async function GET() {
    const today = new Date().toISOString();

    // -----------------------------
    // STATIC PAGES
    // -----------------------------

    const staticUrls = staticPages.map((page) =>
        createUrl({
            url: page.url,
            lastmod: today,
            changefreq: page.changefreq,
            priority: page.priority,
        })
    );

    // -----------------------------
    // DYNAMIC PRODUCT PAGES
    // -----------------------------

    const productUrls = products
        .filter((product) => product?.slug)
        .map((product) =>
            createUrl({
                url: `/products/${product.slug}`,
                lastmod: today,
                changefreq: "weekly",
                priority: "0.8",
            })
        );

    // -----------------------------
    // FINAL XML
    // -----------------------------

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticUrls.join("")}
    ${productUrls.join("")}
</urlset>`;

    return new NextResponse(xml, {
        status: 200,
        headers: {
            "Content-Type": "application/xml",
            "Cache-Control":
                "public, s-maxage=3600, stale-while-revalidate=86400",
        },
    });
}