'use client'
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer' // Adjust the path if Header is in a different folder

export default function page() {
  return (
    <div>
      <Header />
      <Hero/>
      <About/>
      <Experience/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  )
}
