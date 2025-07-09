'use client'
import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="bg-white">
      {/* Top Heading */}
      <div className="bg-cyan-500 py-10 text-center px-2">
        <h2 className="text-white text-2xl font-semibold p-1">
          <span className="underline underline-offset-4 decoration-white">About</span>{' '}
          <span className="text-white font-semibold no-underline">Pratika Rane</span>
        </h2>
        <p className="text-white mt-2 text-sm sm:text-base">
          A dedicated professional with a passion for precision in pharma<br></br>
          compliance.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Left Side Cards */}
        <div className="space-y-6">
          {/* Card 1 */}
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm flex items-start gap-4">
            <Image
              src="/images/lbox1.png"
              alt="Career Objective"
              width={50}
              height={50}
              className="mt-1 w-16 h-25"
            />
            <div>
              <h3 className="font-semibold text-lg">Career Objective</h3>
              <p className="text-gray-600 text-sm mt-1">
                To contribute to the pharmaceutical industry through expertise in
                quality systems and compliance, while supporting continuous improvement
                and business goals in a globally respected organization.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm flex items-start gap-4">
            <Image
              src="/images/lbox2.jpg"
              alt="Professional Qualities"
              width={50}
              height={50}
              className="mt-1 w-16 h-25"
            />
            <div>
              <h3 className="font-semibold text-lg">Professional Qualities</h3>
              <p className="text-gray-600 text-sm mt-1">
                Detail-oriented, analytical, and collaborative professional with strong
                documentation and audit readiness skills, committed to continuous
                learning and high performance under pressure.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm flex items-start gap-4">
            <Image
              src="/core.png"
              alt="Core Strengths"
              width={50}
              height={50}
              className="mt-1 w-12 h-12"
            />
            <div>
              <h3 className="font-semibold text-lg">Core Strengths</h3>
              <p className="text-gray-600 text-sm mt-1">
                Skilled in managing deviations, complaints, and compliance using tools
                like TrackWise and NovoGlow, with a strong foundation in lab techniques
                and strategic quality oversight.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Combined Card */}
        <div className="h-full">
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm h-full flex flex-col justify-between">
            {/* Languages Spoken */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Languages Spoken</h3>
              <div className="space-y-3 mb-6">
                {[
                  { lang: 'English', level: 80 },
                  { lang: 'English', level: 60 },
                  { lang: 'English', level: 90 },
                  { lang: 'English', level: 70 },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm text-gray-700 mb-1">
                      <span>{item.lang}</span>
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
            <div>
            <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
              <h3 className="font-semibold text-lg mb-4">Hobbies & Interests</h3>
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
