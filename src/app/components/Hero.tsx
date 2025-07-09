'use client'
import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="w-full h-[600px] px-4">
      <div className="max-w-[1400px] mx-auto grid h-full grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-0">
        
        {/* Left: Zoomed out section */}
        <div className="bg-white flex justify-center transform scale-90 origin-center p-10">
          <div className="flex gap-4">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="relative w-[220px] h-[480px] overflow-hidden shadow-md"
              >
                <Image
                  src={`/images/Hero${num}.jpg`}
                  alt={`Hero ${num}`}
                  fill
                  className="object-cover object-top"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Text section stays normal */}
        <div className="bg-white flex items-center justify-center px-4">
          <div className="space-y-4 max-w-2xl">
            <h2 className="font-semibold text-black text-3xl">
              Pratika <span className="text-cyan-500 font-semibold">Rane</span>
            </h2>
            <h3 className="text-[22px] font-semibold text-black py-2">
              Quality Assurance (QA)
            </h3>
            <p className="text-[15px] leading-7 text-black py-2">
              Quality Assurance (QA) is a systematic process focused on preventing defects and ensuring that products,
              services, or processes meet specified requirements and standards. It’s a proactive approach that aims
              to build quality into a product or service from the beginning, rather than just finding and fixing problems
              at the end.
            </p>
            <a
              href="#"
              className="inline-block bg-cyan-500 text-white px-6 py-2 rounded-md hover:bg-cyan-700 transition"
            >
              View Work →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
