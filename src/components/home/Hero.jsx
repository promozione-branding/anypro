import React from "react";

export default function Hero() {
  return (
    <section className="w-full mt-29 overflow-hidden">
      <picture>
        {/* Mobile Banner */}
        <source
          media="(max-width: 767px)"
          srcSet="/mob.webp"
        />

        {/* Desktop Banner */}
        <img
          src="/desktop.webp"
          alt="Table Games"
          className="w-full h-[650px]  object-center object-cover"
        />
      </picture>
    </section>
  );
}