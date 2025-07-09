'use client'
import React from 'react'

export default function SkillsCard() {
  const skills = {
    'Quality Systems & Tools': ['CAPA', 'TrackWise', 'Change Control', 'Audit Readiness', 'cGMP', 'EMEA/FDA'],
    'Laboratory Techniques': ['SDS-PAGE', 'PCR', 'DNA analysis', 'Bacterial transformation'],
    Tools: ['Microsoft Office', 'FileNet', 'NovoGlow', 'TrackWise'],
    'Soft Skills': ['Leadership', 'Documentation', 'Training', 'Time Management'],
  }

  return (
    <div className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm overflow-hidden">
      {/* Cyan right accent */}
      <div className="absolute top-0 right-0 h-full w-[6px] bg-cyan-500 rounded-tr-2xl rounded-br-2xl"></div>

      <h3 className="text-center font-semibold text-lg mb-6 text-gray-900">
        Core Competencies & Practical Skills
      </h3>

      <div className="grid grid-cols-1 gap-6 text-sm p-2">
        {Object.entries(skills).map(([title, items]) => (
          <div key={title}>
            <h4 className="font-semibold mb-2 text-gray-700">{title}</h4>
            <div className="flex flex-wrap gap-2 p-2">
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
