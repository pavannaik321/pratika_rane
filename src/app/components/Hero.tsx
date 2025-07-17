"use client";
import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full h-auto lg:h-[600px] px-4 bg-white">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-0 h-full">
        {/* Left Section */}
        <div className="bg-white flex flex-col items-center lg:justify-center p-4 lg:p-10">
          {/* ✅ Mobile View: Single Image */}
          <div className="relative w-full max-w-[320px] h-[400px] overflow-hidden shadow-md mb-6 lg:hidden">
            <Image
              src={`/images/Hero1.jpg`}
              alt={`Hero Mobile`}
              fill
              className="object-cover object-top"
            />
          </div>

          {/* ✅ Desktop View: Original 3 Images (unchanged) */}
          <div className="hidden lg:flex gap-4 transform scale-90 origin-center">
            <div className="relative w-[220px] h-[480px] overflow-hidden shadow-md">
              <Image
                src={`/images/Hero1.jpg`}
                alt={`Hero 1`}
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="relative w-[220px] h-[480px] overflow-hidden shadow-md">
              <Image
                src={`/images/Hero2.jpg`}
                alt={`Hero 2`}
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="relative w-[220px] h-[480px] overflow-hidden shadow-md">
              <Image
                src={`/images/Hero3.jpg`}
                alt={`Hero 3`}
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Right: Text Section */}
        <div className="bg-white flex items-center justify-center px-4 py-2 lg:py-10">
          <div className="max-w-2xl text-justify lg:text-left">
            {/* Heading */}
            <p className="text-black text-center lg:text-left text-2xl lg:text-3xl font-semibold mb-2">
              Pratika <span className="text-cyan-500">Rane</span>
            </p>

            {/* Subheading */}
            <p className="text-lg lg:text-xl text-center lg:text-left font-semibold text-black mb-3">
              Quality Assurance (QA)
            </p>

            {/* Description */}
            <p className="text-[13px] lg:text-[17px] leading-relaxed text-black mb-5">
              Quality Assurance (QA) is a structured and proactive process aimed
              at preventing defects while ensuring that all deliverables meet
              defined standards. It emphasizes early planning and continuous
              improvement, helping teams to build reliable and high-performing
              products from the ground up. Instead of waiting for issues to
              appear, QA promotes building quality at every stage, leading to
              greater consistency, customer satisfaction, and long-term success.
            </p>

            {/* Button */}
            <div className="flex justify-center lg:justify-start">
      <a
        href="#"
        className="inline-block text-sm px-4 py-2 lg:text-base lg:px-6 lg:py-2.5 bg-cyan-500 text-white rounded-md hover:bg-cyan-700 transition duration-300"
      >
        View Work →
      </a>
    </div>
          </div>
        </div>
      </div>
    </section>
  );
}
