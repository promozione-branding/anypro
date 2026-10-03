"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const sections = [
    {
      id: "information",
      number: "01",
      title: "Information We Collect",
    },
    {
      id: "usage",
      number: "02",
      title: "How We Use Your Information",
    },
    {
      id: "sharing",
      number: "03",
      title: "Information Sharing",
    },
    {
      id: "security",
      number: "04",
      title: "Data Security",
    },
    {
      id: "cookies",
      number: "05",
      title: "Cookies",
    },
    {
      id: "rights",
      number: "06",
      title: "Your Rights",
    },
    {
      id: "contact",
      number: "07",
      title: "Contact Us",
    },
  ];

  const informationCards = [
    {
      title: "Personal Details",
      text: "Such as your name, email address, phone number, and other contact details.",
    },
    {
      title: "Order Information",
      text: "Details about products you purchase, order history, delivery information, and related transactions.",
    },
    {
      title: "Account Information",
      text: "Information associated with your customer account, preferences, and settings.",
    },
    {
      title: "Communication",
      text: "Information you provide when contacting our support team or communicating with us.",
    },
  ];

  const usageItems = [
    "Process and fulfill your orders.",
    "Provide customer support and respond to inquiries.",
    "Send important information about your orders or account.",
    "Improve our website, products, and services.",
    "Prevent fraud, abuse, and unauthorized activity.",
    "Comply with applicable legal and regulatory requirements.",
  ];

  const sharingItems = [
    ["Payment Providers", "To securely process payments and transactions."],
    ["Delivery Partners", "To fulfill and deliver your orders."],
    [
      "Service Providers",
      "To help us operate our website, customer service, analytics, and other business functions.",
    ],
    [
      "Legal Requirements",
      "When disclosure is required by applicable law or necessary to protect our rights.",
    ],
  ];

  const rightsItems = [
    "Request access to personal information we hold about you.",
    "Ask us to correct inaccurate or incomplete information.",
    "Request deletion of certain personal information.",
    "Withdraw consent where processing is based on consent.",
    "Object to or restrict certain types of processing where applicable.",
  ];

  const SectionHeading = ({ number, title, description }) => (
    <div className="flex gap-5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF1F1]">
        <span className="text-sm font-bold text-[#E31E24]">{number}</span>
      </div>

      <div>
        <h2 className="m-0 text-3xl font-semibold tracking-tight text-[#071A35] md:text-4xl">
          {title}
        </h2>

        <p className="mt-4 text-base leading-7 text-[#4B5563]">{description}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* =========================================================
                    HERO
                ========================================================== */}
        <section className="relative overflow-hidden bg-[#071A35] px-6 py-7 sm:px-8 md:px-12 md:pt-35 md:pb-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#1677FF]/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-[#E31E24]/15 blur-3xl" />

          <div className="pointer-events-none absolute right-[15%] top-1/2 h-24 w-24 rounded-full border border-white/10" />

          <div className="relative mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#E31E24]" />

                <p className="m-0 text-sm font-semibold uppercase tracking-[0.3em] text-[#9DB8D8]">
                  Legal
                </p>
              </div>

              <h1 className="m-0 text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
                Privacy
                <br />
                <span className="text-[#E31E24]">Policy</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-[#C7D5E7] sm:text-lg md:text-xl md:leading-8">
                Your privacy matters to us. This policy explains what
                information we collect, how we use it, and how we protect your
                personal information.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
                    CONTENT
                ========================================================== */}
        <section className="bg-[#F6F8FB] px-6 py-6 sm:px-8 md:px-12 md:py-13">
          <div className="relative mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-20">
            {/* =================================================
                            SIDEBAR
                            IMPORTANT:
                            self-stretch allows sticky to use the full
                            height of the grid row.
                        ================================================== */}
            <aside className="hidden self-stretch lg:block">
              <div className="sticky top-28 h-fit">
                {/* Need Help */}
                <div className="overflow-hidden rounded-[28px] bg-[#071A35] p-7">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#E31E24] text-lg text-white">
                    ?
                  </div>

                  <p className="m-0 text-xs font-bold uppercase tracking-[0.2em] text-[#8FA6C2]">
                    Need Help?
                  </p>

                  <p className="mt-3 mb-5 text-sm leading-6 text-[#C7D5E7]">
                    If you have questions about your privacy or personal
                    information, our team is here to help.
                  </p>

                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-full bg-[#E31E24] px-6 py-3 text-sm font-semibold text-white no-underline transition hover:bg-[#C8171D]"
                  >
                    Contact Us
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            </aside>

            {/* =================================================
                            MAIN CONTENT
                        ================================================== */}
            <div className="space-y-20">
              {/* INTRO */}
              <section>
                <div className="rounded-[28px] border border-[#E4E9F0] bg-white p-7 shadow-[0_12px_40px_rgba(7,26,53,0.04)] md:p-9">
                  <div className="mb-5 h-1 w-14 rounded-full bg-[#E31E24]" />

                  <p className="m-0 text-base leading-8 text-[#4B5563]">
                    We respect your privacy and are committed to protecting the
                    personal information you share with us. This Privacy Policy
                    describes how we collect, use, store, and protect your
                    information when you visit our website, purchase our
                    products, or interact with our services.
                  </p>
                </div>
              </section>

              {/* =================================================
                                01 INFORMATION
                            ================================================== */}
              <section id="information" className="scroll-mt-10">
                <SectionHeading
                  number="01"
                  title="Information We Collect"
                  description="We may collect information that you provide directly to us when you create an account, place an order, contact us, or otherwise interact with our website."
                />

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {informationCards.map((item, index) => (
                    <div
                      key={item.title}
                      className="group rounded-[24px] border border-[#E4E9F0] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#F0B8BB] hover:shadow-[0_18px_45px_rgba(227,30,36,0.08)]"
                    >
                      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF1F1] text-sm font-bold text-[#E31E24]">
                        0{index + 1}
                      </div>

                      <h3 className="m-0 text-lg font-semibold text-[#071A35]">
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
                                02 USAGE
                            ================================================== */}
              <section id="usage" className="scroll-mt-10">
                <SectionHeading
                  number="02"
                  title="How We Use Your Information"
                  description="We use the information we collect to operate our business, provide our services, and improve your shopping experience."
                />

                <div className="relative mt-8 overflow-hidden rounded-[28px] bg-[#071A35] p-7 md:p-9">
                  <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#E31E24]/15 blur-3xl" />

                  <div className="relative space-y-5">
                    {usageItems.map((item) => (
                      <div key={item} className="flex gap-4">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E31E24] text-xs font-bold text-white">
                          ✓
                        </span>

                        <p className="m-0 text-sm leading-6 text-[#D5DFEC]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* =================================================
                                03 SHARING
                            ================================================== */}
              <section id="sharing" className="scroll-mt-10">
                <SectionHeading
                  number="03"
                  title="Information Sharing"
                  description="We do not sell your personal information. We may share information with trusted service providers when necessary to operate our business and provide our services."
                />

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {sharingItems.map(([title, text], index) => (
                    <div
                      key={title}
                      className="group rounded-[24px] border border-[#E4E9F0] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F0B8BB] hover:shadow-[0_18px_40px_rgba(7,26,53,0.06)]"
                    >
                      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF2FF] text-sm font-bold text-[#1677FF]">
                        0{index + 1}
                      </div>

                      <h3 className="m-0 text-base font-semibold text-[#071A35]">
                        {title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#4B5563]">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* =================================================
                                04 SECURITY
                            ================================================== */}
              <section id="security" className="scroll-mt-10">
                <SectionHeading
                  number="04"
                  title="Data Security"
                  description="We take reasonable measures to help protect your personal information from unauthorized access, use, alteration, or disclosure."
                />

                <div className="mt-8 overflow-hidden rounded-[28px] border border-[#E4E9F0] bg-white p-7 shadow-[0_12px_40px_rgba(7,26,53,0.04)] md:p-9">
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFF1F1] text-xl">
                      🔒
                    </div>

                    <div>
                      <h3 className="m-0 text-xl font-semibold text-[#071A35]">
                        Protecting your information
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-[#4B5563]">
                        While we work to protect your personal information using
                        appropriate security practices, no method of
                        transmission or electronic storage can be guaranteed to
                        be completely secure.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* =================================================
                                05 COOKIES
                            ================================================== */}
              <section id="cookies" className="scroll-mt-10">
                <SectionHeading
                  number="05"
                  title="Cookies"
                  description="Our website may use cookies and similar technologies to remember your preferences, understand how visitors use our website, and improve your experience."
                />

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[24px] border border-[#E4E9F0] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#F0B8BB] hover:shadow-[0_18px_40px_rgba(227,30,36,0.06)]">
                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF1F1] text-lg">
                      🍪
                    </div>

                    <h3 className="m-0 text-lg font-semibold text-[#071A35]">
                      Essential Cookies
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#4B5563]">
                      These may be necessary for core website functionality and
                      services.
                    </p>
                  </div>

                  <div className="rounded-[24px] border border-[#E4E9F0] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#B9D5FF] hover:shadow-[0_18px_40px_rgba(22,119,255,0.06)]">
                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF2FF] text-lg">
                      📊
                    </div>

                    <h3 className="m-0 text-lg font-semibold text-[#071A35]">
                      Analytics
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#4B5563]">
                      These technologies may help us understand website usage
                      and improve our services.
                    </p>
                  </div>
                </div>
              </section>

              {/* =================================================
                                06 RIGHTS
                            ================================================== */}
              <section id="rights" className="scroll-mt-10">
                <SectionHeading
                  number="06"
                  title="Your Rights"
                  description="Depending on applicable law, you may have certain rights regarding your personal information."
                />

                <div className="relative mt-8 overflow-hidden rounded-[28px] bg-[#FFF5F5] p-7 md:p-9">
                  <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#E31E24]/10 blur-3xl" />

                  <ul className="relative m-0 list-none space-y-5 p-0">
                    {rightsItems.map((item) => (
                      <li
                        key={item}
                        className="flex gap-4 text-sm leading-6 text-[#4B5563]"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E31E24] text-xs font-bold text-white">
                          ✓
                        </span>

                        <span className="pt-0.5">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* =================================================
                                07 CONTACT
                            ================================================== */}
              <section id="contact" className="scroll-mt-10">
                <SectionHeading
                  number="07"
                  title="Contact Us"
                  description="If you have questions about this Privacy Policy or how we handle your personal information, please get in touch with our team."
                />

                <div className="relative mt-8 overflow-hidden rounded-[28px] bg-[#071A35] p-7 md:p-9">
                  <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#1677FF]/15 blur-3xl" />

                  <div className="relative">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E31E24] text-xl text-white">
                      ✉
                    </div>

                    <h3 className="m-0 text-xl font-semibold text-white">
                      We're happy to help
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-[#C7D5E7]">
                      For privacy-related questions or requests, please contact
                      us through our contact page.
                    </p>

                    <Link
                      href="/contact"
                      className="mt-6 inline-flex items-center rounded-full bg-[#E31E24] px-7 py-3.5 text-sm font-semibold text-white no-underline transition hover:bg-[#C8171D]"
                    >
                      Contact Us
                      <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* =========================================================
                    CTA
                ========================================================== */}
        <section className="bg-white px-6 py-16 sm:px-8 md:px-12 md:py-20 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[32px] bg-[#071A35] px-7 py-14 text-center sm:px-12 md:py-20">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#E31E24]/20 blur-3xl" />

              <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#1677FF]/15 blur-3xl" />

              <div className="relative">
                <div className="mb-5 flex items-center justify-center gap-3">
                  <span className="h-px w-8 bg-[#E31E24]" />

                  <p className="m-0 text-xs font-semibold uppercase tracking-[0.25em] text-[#FF8A8D]">
                    Your Privacy Matters
                  </p>

                  <span className="h-px w-8 bg-[#E31E24]" />
                </div>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                  Have a privacy question?
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-gray-300 md:text-base">
                  We're committed to being transparent about how your
                  information is handled.
                </p>

                <Link
                  href="tel:+919811117654"
                  className="mt-8 inline-flex items-center rounded-full bg-[#E31E24] px-8 py-3.5 text-sm font-semibold text-white no-underline transition hover:bg-[#C8171D]"
                >
                  Get Call Support
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
