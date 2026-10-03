"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
    const steps = [
        {
            number: "01",
            title: "Request a Return",
            text: "Contact our support team or use the return option available with your order.",
        },
        {
            number: "02",
            title: "Pack Your Item",
            text: "Securely pack the product with its original packaging, tags, and accessories.",
        },
        {
            number: "03",
            title: "Send It Back",
            text: "Follow the return instructions provided by our team and ship the package.",
        },
        {
            number: "04",
            title: "Receive Your Refund or Exchange",
            text: "Once the item passes inspection, we'll process your refund or arrange your exchange.",
        },
    ];

    const faqs = [
        {
            q: "How do I start a return?",
            a: "Contact our support team with your order details and we'll guide you through the return process.",
        },
        {
            q: "Can I exchange an item for another size?",
            a: "Yes, eligible items can be exchanged for another available size or variant.",
        },
        {
            q: "When will I receive my refund?",
            a: "Refunds are processed after your returned item has been received and inspected.",
        },
        {
            q: "What if I received a damaged or incorrect item?",
            a: "Please contact our support team as soon as possible with your order details so we can help resolve the issue.",
        },
    ];

    const conditions = [
        {
            title: "Items must be unused",
            text: "Products should be in their original, unused condition.",
        },
        {
            title: "Original packaging",
            text: "Please include original packaging and product accessories where applicable.",
        },
        {
            title: "Tags attached",
            text: "Products should retain their original tags and labels.",
        },
        {
            title: "Proof of purchase",
            text: "Please keep your order details or proof of purchase available.",
        },
    ];

    const SectionHeading = ({ number, title, description }) => (
        <div className="flex gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF1F1]">
                <span className="text-sm font-bold text-[#E31E24]">
                    {number}
                </span>
            </div>

            <div>
                <h2 className="m-0 text-3xl font-semibold tracking-tight text-[#071A35] md:text-4xl">
                    {title}
                </h2>

                <p className="mt-4 text-base leading-7 text-[#4B5563]">
                    {description}
                </p>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-white">
            <main>

                {/* =========================================================
                    HERO
                ========================================================== */}
                <section className="relative overflow-hidden bg-[#071A35] px-6 py-6 sm:px-8 md:px-12 md:pt-35 md:pb-14">

                    <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#1677FF]/20 blur-3xl" />

                    <div className="pointer-events-none absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-[#E31E24]/15 blur-3xl" />

                    <div className="pointer-events-none absolute right-[15%] top-1/2 h-24 w-24 rounded-full border border-white/10" />

                    <div className="relative mx-auto max-w-7xl">

                        <div className="max-w-4xl">

                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-2.5 w-2.5 rounded-full bg-[#E31E24]" />

                                <p className="m-0 text-sm font-semibold uppercase tracking-[0.3em] text-[#9DB8D8]">
                                    Customer Care
                                </p>
                            </div>

                            <h1 className="m-0 text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
                                Returns
                                <br />
                                <span className="text-[#E31E24]">
                                    & Exchanges
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-7 text-[#C7D5E7] sm:text-lg md:text-xl md:leading-8">
                                We want you to love every purchase. If something
                                isn't quite right, we're here to make the return
                                or exchange process simple and hassle-free.
                            </p>

                        </div>
                    </div>
                </section>

                {/* =========================================================
                    MAIN CONTENT
                ========================================================== */}
                <section className="bg-[#F6F8FB] px-6 py-6 sm:px-8 md:px-12 md:py-13">

                    <div className="relative mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-20">

                        {/* =================================================
                            SIDEBAR
                        ================================================== */}
                        <aside className="hidden self-stretch lg:block">

                            <div className="sticky top-18 h-fit">


                                {/* Need Help */}
                                <div className="mt-5 overflow-hidden rounded-[28px] bg-[#071A35] p-7">

                                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#E31E24] text-lg text-white">
                                        ?
                                    </div>

                                    <p className="m-0 text-xs font-bold uppercase tracking-[0.2em] text-[#8FA6C2]">
                                        Need Help?
                                    </p>

                                    <p className="mt-3 mb-5 text-sm leading-6 text-[#C7D5E7]">
                                        Have a question about your return or
                                        exchange? Our support team is happy to
                                        help.
                                    </p>

                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center rounded-full bg-[#E31E24] px-6 py-3 text-sm font-semibold text-white no-underline transition hover:bg-[#C8171D]"
                                    >
                                        Contact Us
                                        <span className="ml-2">
                                            →
                                        </span>
                                    </Link>

                                </div>

                            </div>
                        </aside>

                        {/* =================================================
                            MAIN
                        ================================================== */}
                        <div className="space-y-20">

                            {/* =================================================
                                RETURN POLICY
                            ================================================== */}
                            <section
                                id="return-policy"
                                className="scroll-mt-10"
                            >

                                <SectionHeading
                                    number="01"
                                    title="Return Policy"
                                    description="If you're not completely satisfied with your purchase, you can request a return within the eligible return period from the date your order was delivered."
                                />

                                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                                    <div className="rounded-[24px] border border-[#E4E9F0] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#F0B8BB] hover:shadow-[0_18px_40px_rgba(7,26,53,0.06)]">

                                        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF1F1] text-[#E31E24]">
                                            01
                                        </div>

                                        <h3 className="m-0 text-lg font-semibold text-[#071A35]">
                                            Return Window
                                        </h3>

                                        <p className="mt-3 text-sm leading-6 text-[#4B5563]">
                                            Items should be returned within the
                                            return period stated in your order
                                            or product information.
                                        </p>

                                    </div>

                                    <div className="rounded-[24px] border border-[#E4E9F0] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#F0B8BB] hover:shadow-[0_18px_40px_rgba(7,26,53,0.06)]">

                                        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF1F1] text-[#E31E24]">
                                            02
                                        </div>

                                        <h3 className="m-0 text-lg font-semibold text-[#071A35]">
                                            Refund
                                        </h3>

                                        <p className="mt-3 text-sm leading-6 text-[#4B5563]">
                                            Once your return is received and
                                            approved, your refund will be
                                            processed to the original payment
                                            method.
                                        </p>

                                    </div>

                                </div>
                            </section>

                            {/* =================================================
                                EXCHANGE
                            ================================================== */}
                            <section
                                id="exchange"
                                className="scroll-mt-10 border-t border-[#E5E7EB] pt-10"
                            >

                                <SectionHeading
                                    number="02"
                                    title="Exchanges"
                                    description="Need a different size, color, or variant? If the item is eligible, you can request an exchange instead of a refund."
                                />

                                <div className="relative mt-8 overflow-hidden rounded-[28px] bg-[#071A35] p-7 md:p-9">

                                    <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#E31E24]/15 blur-3xl" />

                                    <div className="relative">

                                        <h3 className="m-0 text-xl font-semibold text-white">
                                            A few things to keep in mind
                                        </h3>

                                        <ul className="mt-6 space-y-4">

                                            <li className="flex gap-3 text-sm leading-6 text-[#C7D5E7]">
                                                <span className="font-bold text-[#E31E24]">
                                                    ✓
                                                </span>

                                                <span>
                                                    The replacement item must be
                                                    available in stock.
                                                </span>
                                            </li>

                                            <li className="flex gap-3 text-sm leading-6 text-[#C7D5E7]">
                                                <span className="font-bold text-[#E31E24]">
                                                    ✓
                                                </span>

                                                <span>
                                                    Items should be unused and
                                                    returned in their original
                                                    condition.
                                                </span>
                                            </li>

                                            <li className="flex gap-3 text-sm leading-6 text-[#C7D5E7]">
                                                <span className="font-bold text-[#E31E24]">
                                                    ✓
                                                </span>

                                                <span>
                                                    Original tags, packaging,
                                                    and accessories should be
                                                    included where applicable.
                                                </span>
                                            </li>

                                            <li className="flex gap-3 text-sm leading-6 text-[#C7D5E7]">
                                                <span className="font-bold text-[#E31E24]">
                                                    ✓
                                                </span>

                                                <span>
                                                    Some products may not be
                                                    eligible for exchange due
                                                    to their nature.
                                                </span>
                                            </li>

                                        </ul>

                                    </div>
                                </div>
                            </section>

                            {/* =================================================
                                HOW IT WORKS
                            ================================================== */}
                            <section
                                id="process"
                                className="scroll-mt-10 border-t border-[#E5E7EB] pt-10"
                            >

                                <SectionHeading
                                    number="03"
                                    title="How It Works"
                                    description="We've kept the process straightforward. Follow these simple steps to initiate your return or exchange."
                                />

                                <div className="mt-8 space-y-3">

                                    {steps.map((step) => (
                                        <div
                                            key={step.number}
                                            className="group flex gap-5 rounded-[22px] border border-[#E4E9F0] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F0B8BB] hover:shadow-[0_15px_35px_rgba(7,26,53,0.05)]"
                                        >

                                            <span className="text-sm font-bold text-[#E31E24]">
                                                {step.number}
                                            </span>

                                            <div>

                                                <h3 className="m-0 text-base font-semibold text-[#071A35]">
                                                    {step.title}
                                                </h3>

                                                <p className="mt-2 text-sm leading-6 text-[#4B5563]">
                                                    {step.text}
                                                </p>

                                            </div>

                                        </div>
                                    ))}

                                </div>
                            </section>

                            {/* =================================================
                                CONDITIONS
                            ================================================== */}
                            <section
                                id="conditions"
                                className="scroll-mt-10 border-t border-[#E5E7EB] pt-10"
                            >

                                <SectionHeading
                                    number="04"
                                    title="Return Conditions"
                                    description="To make sure your return can be accepted, please ensure the following conditions are met."
                                />

                                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                                    {conditions.map((item) => (
                                        <div
                                            key={item.title}
                                            className="group rounded-[24px] border border-[#E4E9F0] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#F0B8BB] hover:shadow-[0_18px_40px_rgba(7,26,53,0.06)]"
                                        >

                                            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF1F1] text-[#E31E24]">
                                                ✓
                                            </div>

                                            <h3 className="m-0 text-base font-semibold text-[#071A35]">
                                                {item.title}
                                            </h3>

                                            <p className="mt-3 text-sm leading-6 text-[#4B5563]">
                                                {item.text}
                                            </p>

                                        </div>
                                    ))}

                                </div>
                            </section>

                            {/* =================================================
                                FAQ
                            ================================================== */}
                            <section className="border-t border-[#E5E7EB] pt-10">

                                <SectionHeading
                                    number="05"
                                    title="Frequently Asked Questions"
                                    description="Find answers to some common questions about returns and exchanges."
                                />

                                <div className="mt-8 overflow-hidden rounded-[28px] border border-[#E4E9F0] bg-white px-7">

                                    {faqs.map((faq) => (
                                        <details
                                            key={faq.q}
                                            className="group border-b border-[#E5E7EB] py-6 last:border-b-0"
                                        >

                                            <summary className="flex cursor-pointer list-none items-center justify-between text-base font-semibold text-[#071A35]">

                                                <span>
                                                    {faq.q}
                                                </span>

                                                <span className="ml-5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFF1F1] text-xl font-light text-[#E31E24] transition-transform duration-300 group-open:rotate-45">
                                                    +
                                                </span>

                                            </summary>

                                            <p className="mt-4 max-w-2xl text-sm leading-6 text-[#4B5563]">
                                                {faq.a}
                                            </p>

                                        </details>
                                    ))}

                                </div>
                            </section>

                        </div>
                    </div>
                </section>

                {/* =========================================================
                    BOTTOM CTA
                ========================================================== */}
                <section className="bg-[#FFF1F1] px-6 py-6 sm:px-8 md:px-12 md:py-12">

                    <div className="mx-auto max-w-7xl">

                        <div className="relative overflow-hidden rounded-[32px] bg-[#071A35] px-7 py-6 text-center sm:px-12 md:py-13">

                            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#E31E24]/20 blur-3xl" />

                            <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#1677FF]/15 blur-3xl" />

                            <div className="relative">

                                <p className="m-0 text-xs font-semibold uppercase tracking-[0.25em] text-[#FF8A8D]">
                                    We're here to help
                                </p>

                                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                                    Something not quite right?
                                </h2>

                                <p className="mx-auto mt-5 mb-8 max-w-xl text-sm leading-6 text-gray-300 md:text-base">
                                    Reach out to our customer care team and
                                    we'll do our best to make things right.
                                </p>

                                <Link
                                    href="tel:+919811117654"
                                    className="inline-flex items-center rounded-full bg-[#E31E24] px-8 py-3.5 text-sm font-semibold text-white no-underline transition hover:bg-[#C8171D]"
                                >
                                    Talk To Our Team
                                    <span className="ml-2">
                                        →
                                    </span>
                                </Link>

                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}