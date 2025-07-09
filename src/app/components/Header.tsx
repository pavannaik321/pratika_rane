'use client'
import React from 'react'

export default function Header() {
  return (
    <header className="bg-cyan-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left - Navigation Menu */}
        <nav className="flex items-center space-x-6 text-white text-sm font-medium">
          {['Home', 'About', 'Experience', 'Education', 'Contact'].map((item, index, arr) => (
            <React.Fragment key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`hover:underline ${
                  item === 'Home' ? 'font-bold text-white' : 'text-white'
                }`}
              >
                {item}
              </a>
              {index !== arr.length - 1 && (
                <span className="text-white opacity-50">|</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Right - Download CV Button */}
        <a
          href="/your-cv.pdf"
          download
          className="border border-white text-white px-4 py-1 rounded hover:bg-cyon-700 hover:text-cyan-500 transition duration-200 text-sm"
        >
          Download CV
        </a>
      </div>
    </header>
  )
}
