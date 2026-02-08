'use client'
import React from 'react'

const authorities = [
  'FDA (USA)',
  'ANVISA (Brazil)',
  'PMDA (Japan)',
  'MFDS (Korea)',
  'ANSM (France)',
  'TMMDA (Turkey)',
  'NMPA (China)',
  'GCC',
  'PPB (Kenya)',
  'Ministries of Health (Global)',
]

const standards = ['ISO 13485', 'MDSAP', 'TÜV SÜD', 'Global GMP']

export default function RegulatoryAuditSection() {
  return (
    <section id="audit-inspection" className="bg-gradient-to-b from-white via-cyan-50 to-white py-14 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-cyan-600 text-sm font-semibold tracking-widest uppercase">
            Compliance & Governance
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Regulatory Audit & Inspection Exposure
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-sm sm:text-base">
            Extensive hands-on participation in global regulatory inspections,
            notified body audits, and customer quality assessments across
            multiple international markets.
          </p>
        </div>

        {/* Main Card */}
        <div className="relative bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
          {/* Cyan Accent */}
          <div className="absolute top-0 left-0 h-full w-2 bg-gradient-to-b from-cyan-400 to-cyan-600" />

          <div className="p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left Content */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Global Regulatory Authorities
              </h3>

              <div className="flex flex-wrap gap-2 mb-8">
                {authorities.map((auth, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 rounded-full text-sm border border-cyan-200 bg-cyan-50 text-cyan-700"
                  >
                    {auth}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Standards & Audit Frameworks
              </h3>

              <div className="flex flex-wrap gap-3">
                {standards.map((std, i) => (
                  <span
                    key={i}
                    className="px-5 py-2 rounded-xl bg-white border border-gray-300 shadow-sm text-gray-800 font-medium"
                  >
                    {std}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-cyan-50 to-white border border-cyan-200 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Audit Readiness & Execution
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Ensured continuous inspection readiness through accurate
                  documentation, real-time evidence presentation, and strict
                  adherence to global GMP and quality system requirements.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Cross-Functional & Customer Audits
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Actively interacted with customer quality audits across global
                  markets, supporting transparent communication, CAPA responses,
                  and sustained compliance excellence.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-600 to-cyan-500 text-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-semibold mb-2">
                  Compliance Mindset
                </h4>
                <p className="text-sm leading-relaxed opacity-95">
                  Known for calm, confident audit participation with a strong
                  focus on data integrity, procedural clarity, and regulatory
                  trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
