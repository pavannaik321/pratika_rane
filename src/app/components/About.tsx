'use client'
import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="bg-white">
      {/* Top Heading */}
      <div className="bg-cyan-500 py-10 text-center px-4 sm:px-2">
        <p className="text-white text-lg sm:text-xl font-semibold">
          <span className="underline underline-offset-4 decoration-white">About</span>{' '}
          <span className="text-white font-semibold no-underline">Pratika Rane</span>
        </p>
        <p className="text-white mt-2 text-sm sm:text-base">
          A dedicated professional with a passion for precision in pharma<br></br>
          compliance.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Left Side Cards */}
        <div className="space-y-6 flex flex-col items-center lg:items-start">
          {/* Card 1 */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm flex items-center gap-4 w-full max-w-[580px] h-[142px] px-4 py-3">
            <div className="w-[250px] sm:w-[250px] sm:h-[138px] h-[138px] overflow-hidden rounded-lg">
              <Image
                src="/images/card1.png"
                alt="Career Objective"
                width={250}
                height={138}
                className="w-full h-full sm:object-cover"
              />
            </div>
            <div className="pr-2 text-left">
              <h3 className="font-semibold text-black text-sm sm:text-lg py-1">Career Objective</h3>
              <p className="text-black text-xs sm:text-sm py-1">
                To contribute to the pharmaceutical industry through expertise in
                quality systems and compliance, while supporting continuous improvement
                and business goals in a globally respected organization.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm flex items-center gap-4 w-full max-w-[580px] h-[142px] px-4 py-3">
            <div className="w-[250px] sm:w-[250px] sm:h-[138px] h-[138px] overflow-hidden rounded-lg">
              <Image
                src="/images/card2.png"
                alt="Professional Qualities"
                width={250}
                height={138}
                className="w-full h-full sm:object-cover"
              />
            </div>
            <div className="pr-2 text-left">
              <h3 className="font-semibold text-black text-sm sm:text-lg py-1">Professional Qualities</h3>
              <p className="text-black text-xs sm:text-sm py-1">
                Detail-oriented, analytical, and collaborative professional with strong
                documentation and audit readiness skills, committed to continuous
                learning and high performance under pressure.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm flex items-center gap-4 w-full max-w-[580px] h-[142px] px-4 py-3">
            <div className="w-[250px] sm:w-[250px] sm:h-[138px] h-[138px] overflow-hidden rounded-lg">
              <Image
                src="/images/card3.png"
                alt="Core Strengths"
                width={250}
                height={138}
                className="w-full h-full sm:object-cover"
              />
            </div>
            <div className="pr-2 text-left">
              <h3 className="font-semibold text-black text-sm sm:text-lg py-1">Core Strengths</h3>
              <p className="text-black text-xs sm:text-sm py-1">
                Skilled in managing deviations, complaints, and compliance using tools
                like TrackWise and NovoGlow, with a strong foundation in lab techniques
                and strategic quality oversight.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Combined Card */}
        <div className="w-full max-w-[520px] mx-auto lg:mx-0 h-auto lg:h-[475px]">
          <div className="bg-gray-50 border border-gray-200 p-4 sm:p-6 rounded-lg shadow-sm h-full flex flex-col justify-between space-y-6">
            {/* Languages Spoken */}
            <div>
              <h3 className="font-semibold text-black text-lg mb-4">Languages Spoken</h3>
              <div className="space-y-4">
                {[
                  { lang: 'English', level: 90 },
                  { lang: 'English', level: 80 },
                  { lang: 'English', level: 70 },
                  { lang: 'English', level: 60 },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm text-gray-700 mb-1">
                      <span>{item.lang}</span>
                      <span>{item.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-cyan-500 rounded-full"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hobbies & Interests */}
            <div className="mb-3">
              <h3 className="font-semibold text-black text-lg sm:text-2xl mb-4">Hobbies & Interests</h3>
              <ul className="list-disc list-inside text-gray-800 text-sm space-y-2 marker:text-black px-2">
                <li>Practicing Yoga for mindfulness and well-being</li>
                <li>Reading books on science, personal growth, and wellness</li>
                <li>Listening to music for relaxation and inspiration</li>
                <li>Engaging in environmental sustainability workshops</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
