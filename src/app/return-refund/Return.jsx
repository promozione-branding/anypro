
"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
    const refundSteps = [
        {
            number: "01",
            title: "Submit Your Request",
            text: "Contact our customer support team with your order number and the reason for your refund request.",
        },
        {
            number: "02",
            title: "Return the Product",
            text: "If a product return is required, carefully pack the item and follow the return instructions provided by our team.",
        },
        {
            number: "03",
            title: "Quality Check",
            text: "Once we receive your item, our team will inspect it to make sure it meets the applicable return conditions.",
        },
        {
            number: "04",
            title: "Refund Processed",
            text: "After your return is approved, the refund will be initiated to your original payment method.",
        },
    ];

    const refundConditions = [
        {
            title: "Original Condition",
            text: "Products should be returned unused, unworn, and in their original condition.",
        },
        {
            title: "Original Packaging",
            text: "Please include the original packaging, tags, labels, and accessories where applicable.",
        },
        {
            title: "Order Details",
            text: "Keep your order number or proof of purchase available when requesting a refund.",
        },
        {
            title: "Eligible Items",
            text: "Certain products may not be eligible for refunds due to their nature or specific product conditions.",
        },
    ];

    const faqs = [
        {
            q: "How long does it take to receive my refund?",
            a: "Once your returned item has been received and approved, your refund will be initiated to the original payment method. The time it takes for the amount to appear in your account may vary depending on your payment provider.",
        },
        {
            q: "Where will my refund be credited?",
            a: "Refunds are generally credited to the original payment method used when placing the order.",
        },
        {
            q: "Can I request a refund without returning the product?",
            a: "This depends on the circumstances of your order. Please contact our customer support team and they will guide you through the available options.",
        },
        {
            q: "What if I received a damaged product?",
            a: "Please contact our support team as soon as possible with your order details and information about the issue so we can help resolve it.",
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
                <section className="relative overflow-hidden bg-[#071A35] px-6 py-20 sm:px-8 md:px-12 md:pt-35 md:pb-14">
                    
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
                                Refund
                                <br />
                                <span className="text-[#E31E24]">
                                    & Returns
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-7 text-[#C7D5E7] sm:text-lg md:text-xl md:leading-8">
                                Your satisfaction matters to us. Learn about our
                                refund and return process, eligibility requirements,
                                and what to expect after submitting a request.
                            </p>

                        </div>
                    </div>
                </section>

                {/* =========================================================
                    INTRO
                ========================================================== */}
                <section className="bg-white px-6 py-6 sm:px-8 md:px-12 md:py-13">

                    <div className="mx-auto max-w-7xl">

                        <div className="grid gap-8 md:grid-cols-3">

                            <div className="rounded-[28px] bg-[#FFF5F5] p-7 md:p-8">

                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF1F1]">
                                    <span className="font-bold text-[#E31E24]">
                                        01
                                    </span>
                                </div>

                                <h3 className="m-0 text-xl font-semibold text-[#071A35]">
                                    Easy Requests
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-[#4B5563]">
                                    Start your refund request by getting in touch
                                    with our customer care team.
                                </p>

                            </div>

                            <div className="rounded-[28px] bg-[#071A35] p-7 md:p-8">

                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#E31E24]">
                                    <span className="font-bold text-white">
                                        02
                                    </span>
                                </div>

                                <h3 className="m-0 text-xl font-semibold text-white">
                                    Simple Returns
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-[#C7D5E7]">
                                    Follow our return instructions and send your
                                    eligible item back safely.
                                </p>

                            </div>

                            <div className="rounded-[28px] bg-[#FFF5F5] p-7 md:p-8">

                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF1F1]">
                                    <span className="font-bold text-[#E31E24]">
                                        03
                                    </span>
                                </div>

                                <h3 className="m-0 text-xl font-semibold text-[#071A35]">
                                    Secure Refunds
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-[#4B5563]">
                                    Once approved, your refund will be initiated
                                    to the original payment method.
                                </p>

                            </div>

                        </div>
                    </div>
                </section>

                {/* =========================================================
                    REFUND CONTENT
                ========================================================== */}
                <section className="bg-[#F6F8FB] px-6 py-6 sm:px-8 md:px-12 md:py-13">

                    <div className="relative mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-20">

                        {/* =================================================
                            SIDEBAR
                        ================================================== */}
                        <aside className="hidden self-stretch lg:block">

                            <div className="sticky top-8 h-fit">

                                {/* On This Page */}
                              

                                {/* Need Help */}
                                <div className="mt-5 overflow-hidden rounded-[28px] bg-[#071A35] p-7">

                                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#E31E24] text-lg text-white">
                                        ?
                                    </div>

                                    <p className="m-0 text-xs font-bold uppercase tracking-[0.2em] text-[#8FA6C2]">
                                        Need Help?
                                    </p>

                                    <p className="mt-3 mb-5 text-sm leading-6 text-[#C7D5E7]">
                                        Our customer care team is here to help
                                        with your refund or return.
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
                            MAIN CONTENT
                        ================================================== */}
                        <div className="space-y-20">

                            {/* =================================================
                                REFUND POLICY
                            ================================================== */}
                            <section
                                id="refund-policy"
                                className="scroll-mt-10"
                            >

                                <SectionHeading
                                    number="01"
                                    title="Refund Policy"
                                    description="We aim to make the refund process as straightforward as possible. Eligible customers may request a refund for qualifying purchases within the applicable return period."
                                />

                                <div className="relative mt-8 overflow-hidden rounded-[28px] bg-[#071A35] p-7 md:p-9">

                                    <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#E31E24]/15 blur-3xl" />

                                    <div className="relative">

                                        <h3 className="m-0 text-xl font-semibold text-white">
                                            Important Information
                                        </h3>

                                        <div className="mt-6 space-y-4">

                                            <div className="flex gap-3">
                                                <span className="font-bold text-[#E31E24]">
                                                    ✓
                                                </span>

                                                <p className="m-0 text-sm leading-6 text-[#C7D5E7]">
                                                    Refund requests must be made
                                                    within the applicable return
                                                    period.
                                                </p>
                                            </div>

                                            <div className="flex gap-3">
                                                <span className="font-bold text-[#E31E24]">
                                                    ✓
                                                </span>

                                                <p className="m-0 text-sm leading-6 text-[#C7D5E7]">
                                                    Returned products may need to
                                                    pass an inspection before a
                                                    refund is approved.
                                                </p>
                                            </div>

                                            <div className="flex gap-3">
                                                <span className="font-bold text-[#E31E24]">
                                                    ✓
                                                </span>

                                                <p className="m-0 text-sm leading-6 text-[#C7D5E7]">
                                                    Approved refunds are generally
                                                    sent to the original payment
                                                    method.
                                                </p>
                                            </div>

                                            <div className="flex gap-3">
                                                <span className="font-bold text-[#E31E24]">
                                                    ✓
                                                </span>

                                                <p className="m-0 text-sm leading-6 text-[#C7D5E7]">
                                                    Processing times may vary
                                                    depending on your payment
                                                    provider.
                                                </p>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </section>

                            {/* =================================================
                                REFUND PROCESS
                            ================================================== */}
                            <section
                                id="refund-process"
                                className="scroll-mt-10 border-t border-[#E5E7EB] pt-20"
                            >

                                <SectionHeading
                                    number="02"
                                    title="Refund Process"
                                    description="From submitting your request to receiving your refund, here's what you can expect."
                                />

                                <div className="mt-8 space-y-3">

                                    {refundSteps.map((step) => (
                                        <div
                                            key={step.number}
                                            className="flex gap-5 rounded-[22px] border border-[#E4E9F0] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F0B8BB] hover:shadow-[0_15px_35px_rgba(7,26,53,0.05)]"
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
                                className="scroll-mt-10 border-t border-[#E5E7EB] pt-20"
                            >

                                <SectionHeading
                                    number="03"
                                    title="Refund Conditions"
                                    description="Please make sure your product meets the applicable requirements before sending it back."
                                />

                                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                                    {refundConditions.map((item) => (
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
                            <section
                                id="faq"
                                className="scroll-mt-10 border-t border-[#E5E7EB] pt-20"
                            >

                                <SectionHeading
                                    number="04"
                                    title="Frequently Asked Questions"
                                    description="Find answers to some common questions about refunds and returns."
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
                <section className="bg-[#FFF1F1] px-6 py-6 sm:px-8 md:px-12 md:py-13">

                    <div className="mx-auto max-w-7xl">

                        <div className="relative overflow-hidden rounded-[32px] bg-[#071A35] px-7 py-14 text-center sm:px-12 md:py-20">

                            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#E31E24]/20 blur-3xl" />

                            <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#1677FF]/15 blur-3xl" />

                            <div className="relative">

                                <p className="m-0 text-xs font-semibold uppercase tracking-[0.25em] text-[#FF8A8D]">
                                    We're here to help
                                </p>

                                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                                    Need help with a refund?
                                </h2>

                                <p className="mx-auto mt-5 mb-8 max-w-xl text-sm leading-6 text-gray-300 md:text-base">
                                    Our customer care team is ready to help you
                                    with your return, refund, or any questions
                                    about your order.
                                </p>

                                <Link
                                    href="tel:+919811117654"
                                    className="inline-flex items-center rounded-full bg-[#E31E24] px-8 py-3.5 text-sm font-semibold text-white no-underline transition hover:bg-[#C8171D]"
                                >
                                    Contact Support
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
