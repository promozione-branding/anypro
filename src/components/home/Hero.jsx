import React from 'react';

export default function Hero() {
  return (
    <div className="w-full h-[90vh] mt-25 overflow-hidden">
      <img
        src="/homeBanner.jpeg"
        alt="Hero banner"
        className="w-full h-full object-cover"
      />
    </div>
  );
}