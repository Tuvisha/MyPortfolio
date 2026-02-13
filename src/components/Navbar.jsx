import React, { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'
import { navContainer, navItem } from '../animations/variants'

const NavLink = ({ href, children, active }) => (
  <a href={href} className={`relative text-sm md:text-base ${active ? 'text-primary' : 'text-gray-700 dark:text-gray-200'}`}>
    <span className="hover:text-primary transition">{children}</span>
    <span className={`absolute left-0 bottom-0 h-[2px] bg-primary origin-left transition-all duration-300 ${active ? 'w-full' : 'w-0'}`} />
  </a>
)

export default function Navbar(){
  const [active, setActive] = useState('about')
  const [scrolled, setScrolled] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'))
    if (!sections.length) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id)
      })
    }, { threshold: 0.5 })
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav initial={reduce ? undefined : 'hidden'} animate={reduce ? undefined : 'show'} variants={navContainer} className={`sticky top-0 z-40 transition-all ${scrolled ? 'backdrop-blur bg-white/40 dark:bg-black/40 border-b border-gray-200 dark:border-gray-800' : 'bg-transparent'} `}>
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <motion.div variants={navItem} className="flex items-center gap-4">
          <a href="#home" className="font-semibold text-lg md:text-xl hover:scale-105 transition-transform">Tuvisha B</a>
        </motion.div>
        <motion.div className="hidden md:flex items-center gap-6" variants={navItem}>
          <motion.div variants={navItem} className="flex items-center gap-6">
            <NavLink href="#about" active={active==='about'}>About</NavLink>
            <NavLink href="#education" active={active==='education'}>Education</NavLink>
            <NavLink href="#projects" active={active==='projects'}>Projects</NavLink>
            <NavLink href="#certifications" active={active==='certifications'}>Certifications</NavLink>
            <NavLink href="#contact" active={active==='contact'}>Contact</NavLink>
          </motion.div>
          <motion.div variants={navItem}><ThemeToggle /></motion.div>
        </motion.div>
        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  )
}
