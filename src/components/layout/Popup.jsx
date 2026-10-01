"use client";

import React, { useEffect, useRef, useState } from "react";
import {
    X,
    ArrowRight,
    CheckCircle2,
    AlertCircle,
} from "lucide-react";

import { categories } from "@/data/data";

export default function Popup({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        product: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState("");

    // Store timeout so we can clean it up properly
    const closeTimerRef = useRef(null);

    // --------------------------------------------------
    // LOCK BODY SCROLL WHEN POPUP IS OPEN
    // --------------------------------------------------
    useEffect(() => {
        if (!isOpen) return;

        const originalOverflow = document.body.style.overflow;
        const originalPaddingRight =
            document.body.style.paddingRight;

        const scrollbarWidth =
            window.innerWidth -
            document.documentElement.clientWidth;

        document.body.style.overflow = "hidden";

        if (scrollbarWidth > 0) {
            document.body.style.paddingRight =
                `${scrollbarWidth}px`;
        }

        return () => {
            document.body.style.overflow = originalOverflow;
            document.body.style.paddingRight =
                originalPaddingRight;
        };
    }, [isOpen]);

    // --------------------------------------------------
    // CLEANUP CLOSE TIMER
    // --------------------------------------------------
    useEffect(() => {
        return () => {
            if (closeTimerRef.current) {
                clearTimeout(closeTimerRef.current);
            }
        };
    }, []);

    // --------------------------------------------------
    // HANDLE INPUT CHANGE
    // --------------------------------------------------
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Remove previous success/error message
        // when user starts typing again
        if (status) {
            setStatus("");
        }
    };

    // --------------------------------------------------
    // HANDLE FORM SUBMIT
    // --------------------------------------------------
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prevent multiple submissions
        if (isSubmitting) return;

        setIsSubmitting(true);
        setStatus("");

        const form = e.currentTarget;
        const submittedFormData = new FormData(form);

        const trimmedFullName = String(
            submittedFormData.get("name") || ""
        ).trim();

        const trimmedPhone = String(
            submittedFormData.get("phone") || ""
        ).trim();

        const trimmedEmail = String(
            submittedFormData.get("email") || ""
        ).trim();

        const trimmedProduct = String(
            submittedFormData.get("product") || ""
        ).trim();

        const trimmedMessage = String(
            submittedFormData.get("message") || ""
        ).trim();

        try {
            const res = await fetch(
                "https://brandbnalo.com/api/form/add",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({
                        platform: "Anypro Contact Page",

                        platformEmail:
                            "info@toyparkindia.com",

                        name: trimmedFullName,

                        email:
                            trimmedEmail || "N/A",

                        company: "NA",

                        phone: trimmedPhone,

                        product:
                            trimmedProduct || "N/A",

                        place: "N/A",

                        message: trimmedMessage,
                    }),
                }
            );

            if (!res.ok) {
                throw new Error(
                    "Failed to submit form"
                );
            }

            // ------------------------------------------
            // SUCCESS
            // ------------------------------------------

            setStatus("success");

            // Reset native form
            form.reset();

            // Reset React state
            setFormData({
                name: "",
                email: "",
                phone: "",
                product: "",
                message: "",
            });

            // ------------------------------------------
            // CLOSE POPUP AFTER 3 SECONDS
            // ------------------------------------------

            if (closeTimerRef.current) {
                clearTimeout(closeTimerRef.current);
            }

            closeTimerRef.current = setTimeout(() => {
                setStatus("");
                onClose();
            }, 3000);
        } catch (error) {
            console.error(
                "Contact form submission error:",
                error
            );

            setStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    // --------------------------------------------------
    // CLOSE POPUP
    // --------------------------------------------------
    const handleClose = () => {
        // Don't close while submitting
        if (isSubmitting) return;

        if (closeTimerRef.current) {
            clearTimeout(closeTimerRef.current);
            closeTimerRef.current = null;
        }

        setStatus("");

        onClose();
    };

    // --------------------------------------------------
    // DON'T RENDER WHEN CLOSED
    // --------------------------------------------------
    if (!isOpen) return null;

    // --------------------------------------------------
    // INPUT STYLES
    // --------------------------------------------------
    const inputClass = `
        h-[48px]
        w-full
        rounded-lg
        border
        border-[#D5D9DE]
        bg-[#F8F9FA]
        px-3.5
        text-[13px]
        font-medium
        text-[#111827]
        outline-none
        transition-all
        placeholder:text-[#9AA3B2]
        focus:border-[#ED1C24]
        focus:bg-white
        focus:ring-2
        focus:ring-[#ED1C24]/10
        disabled:cursor-not-allowed
        disabled:opacity-60
    `;

    const labelClass = `
        mb-1.5
        block
        text-[10px]
        font-bold
        uppercase
        tracking-[0.7px]
        text-[#374151]
    `;

    return (
        <div
            className="
                fixed
                inset-0
                z-[9999]
                flex
                items-center
                justify-center
                overflow-hidden
                bg-black/55
                px-3
                py-3
                backdrop-blur-[3px]
                sm:px-4
                sm:py-4
            "
            onClick={(e) => {
                if (
                    e.target === e.currentTarget &&
                    !isSubmitting
                ) {
                    handleClose();
                }
            }}
        >
            {/* ==================================================
                POPUP
            ================================================== */}

            <div
                className="
                    relative
                    flex
                    max-h-[calc(100dvh-24px)]
                    w-full
                    max-w-[560px]
                    flex-col
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#D7DADF]
                    bg-white
                    shadow-[0_18px_50px_rgba(0,0,0,0.20)]
                    sm:max-h-[calc(100dvh-32px)]
                "
                onClick={(e) =>
                    e.stopPropagation()
                }
            >
                {/* ==================================================
                    DECORATIVE SHAPE
                ================================================== */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        -right-10
                        -top-10
                        h-28
                        w-28
                        rounded-full
                        bg-[#ED1C24]/[0.06]
                    "
                />

                {/* ==================================================
                    TOP RED LINE
                ================================================== */}

                <div
                    className="
                        absolute
                        left-5
                        top-0
                        z-10
                        h-1
                        w-12
                        rounded-full
                        bg-[#ED1C24]
                    "
                />

                {/* ==================================================
                    CLOSE BUTTON
                ================================================== */}

                <button
                    type="button"
                    onClick={handleClose}
                    disabled={isSubmitting}
                    aria-label="Close popup"
                    className="
                        absolute
                        right-3
                        top-3
                        z-30
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#D5D9DE]
                        bg-white
                        text-[#374151]
                        transition-all
                        duration-200
                        hover:border-[#ED1C24]
                        hover:bg-[#ED1C24]
                        hover:text-white
                        hover:rotate-90
                        disabled:cursor-not-allowed
                        disabled:opacity-50
                    "
                >
                    <X
                        size={16}
                        strokeWidth={2.3}
                    />
                </button>

                {/* ==================================================
                    SCROLLABLE CONTENT
                ================================================== */}

                <div
                    className="
                        min-h-0
                        flex-1
                        overflow-y-auto
                        overscroll-contain
                        px-4
                        pb-4
                        pt-6
                        sm:px-6
                        sm:pb-5
                        sm:pt-7
                    "
                    style={{
                        WebkitOverflowScrolling:
                            "touch",
                    }}
                >
                    {/* ==================================================
                        HEADING
                    ================================================== */}

                    <div className="pr-9">
                        <div className="mb-1.5 flex items-center gap-2">
                            <span
                                className="
                                    h-[2px]
                                    w-5
                                    bg-[#ED1C24]
                                "
                            />

                            <span
                                className="
                                    text-[9px]
                                    font-bold
                                    uppercase
                                    tracking-[1.4px]
                                    text-[#ED1C24]
                                "
                            >
                                AnyPro
                            </span>
                        </div>

                        <h2
                            className="
                                text-[25px]
                                font-black
                                leading-tight
                                tracking-[-0.7px]
                                text-[#111827]
                                sm:text-[30px]
                            "
                        >
                            Have Questions?
                        </h2>

                        <p
                            className="
                                mt-1
                                max-w-[500px]
                                text-[12px]
                                leading-[18px]
                                text-[#6B7280]
                                sm:text-[13px]
                            "
                        >
                            Send us a message and our AnyPro
                            team will get back to you shortly.
                        </p>
                    </div>

                    {/* ==================================================
                        SUCCESS MESSAGE
                    ================================================== */}

                    {status === "success" && (
                        <div
                            className="
                                mt-4
                                flex
                                items-center
                                gap-2
                                rounded-lg
                                border
                                border-green-200
                                bg-green-50
                                px-3
                                py-2.5
                                text-[12px]
                                font-semibold
                                text-green-700
                            "
                        >
                            <CheckCircle2
                                size={16}
                                className="shrink-0"
                            />

                            <span>
                                Thank you! Your inquiry has
                                been submitted successfully.
                            </span>
                        </div>
                    )}

                    {/* ==================================================
                        ERROR MESSAGE
                    ================================================== */}

                    {status === "error" && (
                        <div
                            className="
                                mt-4
                                flex
                                items-center
                                gap-2
                                rounded-lg
                                border
                                border-red-200
                                bg-red-50
                                px-3
                                py-2.5
                                text-[12px]
                                font-semibold
                                text-red-700
                            "
                        >
                            <AlertCircle
                                size={16}
                                className="shrink-0"
                            />

                            <span>
                                Something went wrong.
                                Please try again.
                            </span>
                        </div>
                    )}

                    {/* ==================================================
                        FORM
                    ================================================== */}

                    <form
                        onSubmit={handleSubmit}
                        className="mt-5 sm:mt-6"
                    >
                        {/* ==================================================
                            INPUT GRID
                        ================================================== */}

                        <div
                            className="
                                grid
                                grid-cols-1
                                gap-3
                                sm:grid-cols-2
                            "
                        >
                            {/* ==========================================
                                FULL NAME
                            ========================================== */}

                            <div>
                                <label
                                    className={labelClass}
                                >
                                    Full Name{" "}
                                    <span className="text-[#ED1C24]">
                                        *
                                    </span>
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={
                                        formData.name
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    placeholder="Your full name"
                                    required
                                    disabled={
                                        isSubmitting
                                    }
                                    className={
                                        inputClass
                                    }
                                />
                            </div>

                            {/* ==========================================
                                EMAIL
                            ========================================== */}

                            <div>
                                <label
                                    className={labelClass}
                                >
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={
                                        formData.email
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    placeholder="you@example.com"
                                    disabled={
                                        isSubmitting
                                    }
                                    className={
                                        inputClass
                                    }
                                />
                            </div>

                            {/* ==========================================
                                PHONE
                            ========================================== */}

                            <div>
                                <label
                                    className={labelClass}
                                >
                                    Phone / WhatsApp{" "}
                                    <span className="text-[#ED1C24]">
                                        *
                                    </span>
                                </label>

                                <input
                                    type="tel"
                                    name="phone"
                                    value={
                                        formData.phone
                                    }
                                    maxLength={10}
                                    onChange={
                                        handleChange
                                    }
                                    placeholder="9999999999"
                                    required
                                    disabled={
                                        isSubmitting
                                    }
                                    className={
                                        inputClass
                                    }
                                />
                            </div>

                            {/* ==========================================
                                PRODUCT
                            ========================================== */}

                            <div>
                                <label
                                    className={labelClass}
                                >
                                    Product
                                </label>

                                <select
                                    name="product"
                                    value={
                                        formData.product
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    disabled={
                                        isSubmitting
                                    }
                                    className={`
                                        ${inputClass}
                                        appearance-none
                                        cursor-pointer
                                    `}
                                >
                                    <option value="">
                                        Select Product
                                    </option>

                                    {categories?.map(
                                        (
                                            category,
                                            index
                                        ) => {
                                            /*
                                             * Supports common
                                             * category structures:
                                             *
                                             * category.name
                                             * category.title
                                             * category.label
                                             * category.categoryName
                                             */

                                            const categoryName =
                                                category?.name ||
                                                category?.title ||
                                                category?.label ||
                                                category?.categoryName;

                                            const categoryValue =
                                                category?.slug ||
                                                categoryName;

                                            if (
                                                !categoryName
                                            ) {
                                                return null;
                                            }

                                            return (
                                                <option
                                                    key={
                                                        category?.id ||
                                                        category?._id ||
                                                        category?.slug ||
                                                        index
                                                    }
                                                    value={
                                                        categoryValue
                                                    }
                                                >
                                                    {
                                                        categoryName
                                                    }
                                                </option>
                                            );
                                        }
                                    )}
                                </select>
                            </div>
                        </div>

                        {/* ==================================================
                            MESSAGE
                        ================================================== */}

                        <div className="mt-3">
                            <label
                                className={labelClass}
                            >
                                Message{" "}
                                <span className="text-[#ED1C24]">
                                    *
                                </span>
                            </label>

                            <textarea
                                name="message"
                                value={
                                    formData.message
                                }
                                onChange={
                                    handleChange
                                }
                                placeholder="How can we help you?"
                                required
                                disabled={
                                    isSubmitting
                                }
                                rows={3}
                                className="
                                    min-h-[78px]
                                    w-full
                                    resize-none
                                    rounded-lg
                                    border
                                    border-[#D5D9DE]
                                    bg-[#F8F9FA]
                                    px-3.5
                                    py-2.5
                                    text-[13px]
                                    font-medium
                                    text-[#111827]
                                    outline-none
                                    transition-all
                                    placeholder:text-[#9AA3B2]
                                    focus:border-[#ED1C24]
                                    focus:bg-white
                                    focus:ring-2
                                    focus:ring-[#ED1C24]/10
                                    disabled:cursor-not-allowed
                                    disabled:opacity-60
                                "
                            />
                        </div>

                        {/* ==================================================
                            SUBMIT BUTTON
                        ================================================== */}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="
                                group
                                mt-3
                                flex
                                h-[48px]
                                w-full
                                items-center
                                justify-center
                                gap-2
                                rounded-lg
                                bg-[#ED1C24]
                                px-5
                                text-[12px]
                                font-bold
                                uppercase
                                tracking-[0.4px]
                                text-white
                                shadow-[0_3px_0px_#B9141A]
                                transition-all
                                duration-200
                                hover:translate-y-[2px]
                                hover:shadow-[0_1px_0px_#B9141A]
                                active:translate-y-[3px]
                                active:shadow-none
                                disabled:cursor-not-allowed
                                disabled:translate-y-0
                                disabled:opacity-70
                                disabled:shadow-[0_3px_0px_#B9141A]
                            "
                        >
                            {isSubmitting ? (
                                <>
                                    <span
                                        className="
                                            h-4
                                            w-4
                                            animate-spin
                                            rounded-full
                                            border-2
                                            border-white/30
                                            border-t-white
                                        "
                                    />

                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Inquiry Now

                                    <ArrowRight
                                        size={17}
                                        strokeWidth={2.5}
                                        className="
                                            transition-transform
                                            duration-300
                                            group-hover:translate-x-1
                                        "
                                    />
                                </>
                            )}
                        </button>
                    </form>

                    {/* ==================================================
                        PRIVACY
                    ================================================== */}

                    <p
                        className="
                            mt-3
                            text-center
                            text-[9px]
                            leading-[14px]
                            text-[#8A919C]
                            sm:text-[10px]
                        "
                    >
                        We respect your privacy and will only
                        use your information to respond to
                        your inquiry.
                    </p>
                </div>
            </div>
        </div>
    );
}