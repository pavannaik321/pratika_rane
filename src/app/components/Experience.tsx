'use client'
import React from 'react'
import Image from 'next/image'

interface JobCardProps {
  logo: string
  company: string
  role: string
  duration: string
  location: string
  type: string
}

function JobCard({
  logo,
  company,
  role,
  duration,
  location,
  type,
}: JobCardProps) {
  return (
    <div className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm overflow-hidden flex flex-col h-full">
      {/* Right cyan accent */}
      <div className="absolute top-0 right-0 h-full w-[6px] bg-cyan-500 rounded-tr-2xl rounded-br-2xl"></div>

      {/* Responsive flex direction */}
      <div className="flex flex-col lg:flex-row items-start gap-4">
        {/* Rounded image */}
        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={logo}
            alt={company}
            width={64}
            height={64}
            className="w-full h-full object-cover scale-110"
          />
        </div>

        {/* Text content */}
        <div className="text-left">
          <h4 className="text-[15px] font-bold text-black">{company}</h4>
          <p className="text-sm text-gray-800 font-semibold pt-2 lg:pt-4">{role}</p>
          <ul className="list-disc list-inside text-sm text-black mt-2 space-y-1 px-1">
            <li>{duration}</li>
            <li>{location}</li>
            <li>{type}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function SkillsCard() {
  const skills = {
    'Quality Systems & Tools': [
      'CAPA',
      'TrackWise',
      'Change Control',
      'Audit Readiness',
      'cGMP',
      'EMEA/FDA',
    ],
    'Laboratory Techniques': [
      'SDS-PAGE',
      'PCR',
      'DNA analysis',
      'Bacterial transformation',
    ],
    Tools: ['Microsoft Office', 'FileNet', 'NovoGlow', 'TrackWise'],
    'Soft Skills': [
      'Leadership',
      'Documentation',
      'Training',
      'Time Management',
    ],
  }

  return (
    <div className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm overflow-hidden flex flex-col h-full">
      <div className="absolute top-0 right-0 h-full w-[6px] bg-cyan-500 rounded-tr-2xl rounded-br-2xl"></div>

      <h3 className="text-center font-semibold text-lg mb-6 text-gray-900">
        Core Competencies & Practical Skills
      </h3>

      <div className="grid grid-cols-1 gap-6 text-sm">
        {Object.entries(skills).map(([title, items]) => (
          <div key={title}>
            <h4 className="font-semibold mb-2 text-gray-700 p-1">{title}</h4>
            <div className="flex flex-wrap gap-2">
              {items.map((item, i) => (
                <span
                  key={i}
                  className="bg-white border border-gray-300 px-3 py-1 rounded-xl text-gray-700 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="bg-white">
      {/* Header */}
      <div className="bg-cyan-500 py-10 text-center px-4">
        <h2 className="text-white text-2xl font-semibold">
          Pratika Rane{' '}
          <span className="underline underline-offset-4 decoration-white">
            Work Experience
          </span>
        </h2>
        <p className="text-white mt-2 text-sm sm:text-base p-2">
          A dedicated professional with a passion for precision in pharma<br className="hidden sm:block" />
          compliance.
        </p>
      </div>

      {/* Responsive grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Left – Experience Cards */}
        <div className="flex flex-col gap-6">
          <JobCard
            logo="/images/lbox1.png"
            company="Novo Nordisk"
            role="Advanced Quality Professional"
            duration="Feb 2022 – Present"
            location="Bangalore Urban, India"
            type="Full-Time"
          />
          <JobCard
            logo="/images/lbox2.jpg"
            company="Biocon Biologics India"
            role="Executive – Quality Management Systems"
            duration="Jun 2018 – Dec 2021"
            location="Bangalore Urban, India"
            type="Full-Time"
          />
        </div>

        {/* Right – Skills */}
        <SkillsCard />
      </div>
    </section>
  )
}
