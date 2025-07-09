'use client'
import React from 'react'
import Image from 'next/image'

export default function Education() {
  return (
    <section id="education" className="bg-white">
      {/* Header */}
      <div className="bg-cyan-500 py-10 text-center px-4 ">
        <h2 className="text-white text-2xl font-semibold p-2">
          Pratika Rane <span className="underline underline-offset-4 decoration-white">Education</span>
        </h2>
        <p className="text-white mt-2 text-sm">
          A dedicated professional with a passion for precision in pharma<br></br> compliance.
        </p>
      </div>

      {/* Pill Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center text-center">
        {/* === LEFT: Academic Background === */}
        <div className="flex flex-col items-center">
          <h3 className="text-[#007EA7] font-semibold text-lg mb-4">Academic Background</h3>
          <div className="w-[260px] h-[520px] rounded-full overflow-hidden shadow-md border flex flex-col">
            {/* Top White 50% */}
            <div className="bg-white px-6 flex-1 flex flex-col justify-center space-y-6 py-4">
              <div>
                <h4 className="text-xs font-semibold text-gray-800 p-2">High school</h4>
                <p className="text-xs text-gray-600 mt-1 leading-tight">
                  Jawahar Navodaya Vidyalaya<br />
                  Canacona, South Goa – 2010<br />
                  CBSE (76%)
                </p>
              </div>
              <hr className="border-t border-gray-300 w-50 mx-auto p-2" />
              <div>
                <h4 className="text-xs font-semibold text-gray-800 p-2">Higher secondary</h4>
                <p className="text-xs text-gray-600 mt-1 leading-tight">
                  Jawahar Navodaya Vidyalaya<br />
                  Canacona, South Goa – 2012<br />
                  CBSE (67%)
                </p>
              </div>
            </div>
            {/* Bottom Cyan 50% */}
            <div className="bg-cyan-500 px-6 flex-1 flex flex-col justify-center space-y-6 text-white text-xs py-4">
              <div>
                <h4 className="font-semibold text-sm p-2">B.Sc (Biotechnology)</h4>
                <p className="leading-tight p-1">
                  Dhempe College of Arts and Science<br />
                  Panaji, Goa – 2015<br />
                  CGPA (7.8)
                </p>
              </div>
              <hr className="border-t border-white w-50 mx-auto opacity-40 p-2" />
              <div>
                <h4 className="font-semibold text-sm p-2">M.Sc (Biotechnology)</h4>
                <p className="leading-tight p-1">
                  Goa University<br />
                  Taleigao plateau, Goa – 2017<br />
                  CGPA (7.2)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* === CENTER: Academic Projects === */}
        <div className="flex flex-col items-center">
          <h3 className="text-[#007EA7] font-semibold text-lg mb-4">Academic Projects</h3>
          <div className="w-[260px] h-[520px] rounded-full overflow-hidden shadow-md border flex flex-col">
            {/* Top Cyan */}
            <div className="bg-cyan-500 px-6 flex-1 flex flex-col justify-center text-white text-xs py-6 ">
              <div className="flex flex-col items-center mt-1">
                <Image src="/images/mpill1.jpg" alt="Project" width={50} height={50} className="mb-2 rounded-full" />
                <h4 className="text-sm font-semibold">Saltpan bacteria & Korgut rice growth</h4>
                <p className="mt-1 text-xs leading-tight">
                  (Goa University)<br />
                  Studied the impact of saltpan bacteria on germination and quality of Korgut rice.
                  Focused on enhancing crop growth using microbial protoplast fusion techniques. Studied the impact of saltpan bacteria on germination and quanlity of Korgut rice. 
                </p>
              </div>
            </div>
            {/* Bottom White */}
            <div className="bg-white px-6 flex-1 flex flex-col justify-center text-xs text-gray-700 py-6">
              <div className="flex flex-col items-center mb-10">
                <Image src="/images/mpill2.png" alt="Project" width={50} height={50} className="mb-2 rounded-full" />
                <h3 className="text-xs font-semibold text-center">Effect of Preservatives on Fresh Juices</h3>
                <p className="mt-1 leading-tight text-xs text-center">
                  (Dhempe College)<br />
                  Analyzed how common preservatives affect the nutritional value of fruit juices.Aimed to access health implications and shelf-life variation.
                  Studied the impact of saltpan bacteria on germination and quality of Korgut rice.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* === RIGHT: Workshops & Conferences === */}
        {/* === RIGHT: Workshops & Conferences === */}
<div className="flex flex-col items-center">
  <h3 className="text-[#007EA7] font-semibold text-lg mb-4">
    Workshops & Conferences Attended
  </h3>
  <div className="w-[260px] h-[520px] rounded-full overflow-hidden shadow-md border flex flex-col">

    {/* Top White - 50% */}
    <div className="bg-white px-4 flex-1 flex flex-col justify-center space-y-6 py-4 text-xs text-center">
      
      {/* First */}
      <div className="flex flex-col items-center gap-1">
        <div className="w-[48px] h-[48px] rounded-full overflow-hidden relative">
          <Image
            src="/images/rpill1.jpg"
            alt="Project"
            fill
            className="object-cover scale-110"
          />
        </div>
        <h5 className="font-semibold text-xs">Pharmig Microbiology Conference</h5>
        <p className="text-xs text-gray-600">Bangalore (2018)</p>
      </div>

      <hr className="border-t border-gray-300 mx-auto w-50 p-1" />

      {/* Second */}
      <div className="flex flex-col items-center gap-1">
        <div className="w-[48px] h-[48px] rounded-full overflow-hidden relative">
          <Image
            src="/images/rpill2.jpg"
            alt="Project"
            fill
            className="object-cover scale-110"
          />
        </div>
        <h4 className="font-semibold text-xs">ICAR Mushroom Training</h4>
        <p className="text-xs text-gray-600">Bangalore (2016)</p>
      </div>
    </div>

    {/* Bottom Cyan - 50% */}
    <div className="bg-cyan-500 px-4 flex-1 flex flex-col justify-center space-y-5 text-white text-xs py-4 text-center">
      
      {/* Third */}
      <div className="flex flex-col items-center gap-1">
        <div className="w-[48px] h-[48px] rounded-full overflow-hidden relative">
          <Image
            src="/images/rpill3.jpg"
            alt="Project"
            fill
            className="object-cover scale-110"
          />
        </div>
        <h4 className="font-semibold text-sm text-center leading-tight">
          Goa University Scientific Writing Workshop
        </h4>
        <p className="mt-1">Goa (2015)</p>
      </div>

      <hr className="border-t border-white mx-auto w-50 opacity-30 p-1" />

      {/* Fourth */}
      <div className="flex flex-col items-center gap-1">
        <div className="w-[48px] h-[48px] rounded-full overflow-hidden relative">
          <Image
            src="/images/rpill4.jpg"
            alt="Project"
            fill
            className="object-cover scale-110"
          />
        </div>
        <h4 className="font-semibold text-sm text-center leading-tight">
          National Seminars On Life And Life Processes
        </h4>
        <p className="mt-1">Goa (2016)</p>
      </div>
    </div>
  </div>
</div>
      </div>
    </section>
  )
}
