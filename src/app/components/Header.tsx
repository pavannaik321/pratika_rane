'use client'
import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    // Function to handle resizing and update the state
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768)
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false)
    }

    handleResize() // Run on first render
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navItems = ['Home', 'About', 'Experience', 'Education', 'Contact']

  return (
    <header className="bg-cyan-500 text-white w-full z-50 relative">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left - Navigation Menu */}
        <nav className={`items-center text-white text-sm font-medium ${isDesktop ? 'flex space-x-6' : 'hidden'}`}>
          {navItems.map((item, index, arr) => (
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

        {/* Mobile Menu Toggle */}
        {!isDesktop && (
          <button
            className="text-white md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}

        {/* Right - Download CV Button */}
        <a
          href="/your-cv.pdf"
          download
          className="border border-white text-white px-4 py-1 rounded hover:bg-cyan-700 hover:text-cyan-200 transition duration-200 text-sm ml-4"
        >
          Download CV
        </a>
      </div>

      {/* Mobile Navigation Links */}
      {isMobileMenuOpen && !isDesktop && (
        <div className="bg-cyan-500 px-6 pb-4 space-y-2 text-sm font-medium md:hidden">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`block py-1 hover:underline ${
                item === 'Home' ? 'font-bold text-white' : 'text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
