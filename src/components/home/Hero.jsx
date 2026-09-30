
"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative mt-29 w-full overflow-hidden">
      {/* Desktop Banner */}
      <div className="relative hidden h-[630px] w-full md:block ">
        <Image
          src="/desktop.webp"
          alt="Table Games"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Mobile Banner */}
      <div className="relative block aspect-[16/16] w-full md:hidden">
        <Image
          src="/mobb.webp"
          alt="Table Games"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}
