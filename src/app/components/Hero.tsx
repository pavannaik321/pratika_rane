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
<div className="bg-white flex items-center justify-center px-4 py-10">
  <div className="space-y-6 max-w-2xl text-center lg:text-left">
    
    {/* Name */}
    <p className="text-black text-3xl font-semibold">
      Pratika <span className="text-cyan-500 text-3xl font-semibold">Rane</span>
    </p>
    
    {/* Title */}
    <p className="text-xl font-semibold text-black py-1">
      Quality Assurance (QA)
    </p>
    
    {/* Paragraph */}
    <p className="text-[17px] leading-[1.9rem] text-black py-2">
      Quality Assurance (QA) is a structured and proactive process aimed at preventing defects while ensuring that all deliverables meet defined standards. It emphasizes early planning and continuous improvement, helping teams to build reliable and high-performing products from the ground up. Instead of waiting for issues to appear, QA promotes building quality at every stage, leading to greater consistency, customer satisfaction, and long-term success.
    </p>

    {/* Button */}
    <a
      href="#"
      className="inline-block bg-cyan-500 text-white px-6 py-2.5 rounded-md hover:bg-cyan-700 transition duration-300"
    >
      View Work →
    </a>
  </div>
</div>


      </div>
    </section>
  )
}
