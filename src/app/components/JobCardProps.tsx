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

export default function JobCard({
  logo,
  company,
  role,
  duration,
  location,
  type,
}: JobCardProps) {
  return (
    <div className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm overflow-hidden">
      {/* Right cyan accent curve */}
      <div className="absolute top-0 right-0 h-full w-[6px] bg-cyan-500 rounded-tr-2xl rounded-br-2xl"></div>

      <div className="flex items-start gap-4">
        {/* Logo */}
        <Image
          src={logo}
          alt={company}
          width={48}
          height={48}
          className="rounded-full object-contain"
        />

        {/* Text */}
        <div>
          <h4 className="text-sm text-gray-700">{company}</h4>
          <p className="text-[15px] font-semibold text-black mt-1">{role}</p>
          <ul className="text-sm text-gray-600 mt-2 list-disc list-inside space-y-1">
            <li>{duration}</li>
            <li>{location}</li>
            <li>{type}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
