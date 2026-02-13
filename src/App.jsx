import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Education from './sections/Education'
import Internships from './sections/Internships'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import { pageTransition } from './animations/variants'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main key="main" initial="initial" animate="enter" exit="exit" variants={pageTransition} className="flex-1">
          <div id="home" />
          <Hero />
          <Education />
          <Internships />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
