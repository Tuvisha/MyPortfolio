import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Education from './sections/Education'
import Internships from './sections/Internships'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div id="home" />
        <Hero />
        <Education />
        <Internships />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
