import React from 'react'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'
import { navContainer, navItem } from '../animations/variants'

const NavLink = ({ href, children }) => (
  <a href={href} className="relative text-sm md:text-base text-gray-700 dark:text-gray-200">
    <span className="hover:text-primary transition">{children}</span>
    <motion.span layoutId={`underline-${href}`} className="absolute left-0 bottom-0 h-[2px] bg-primary origin-left"
      style={{ width: 0 }}
      whileHover={{ width: '100%' }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    />
  </a>
)

export default function Navbar(){
  return (
    <motion.nav initial="hidden" animate="show" variants={navContainer} className="sticky top-0 z-40 backdrop-blur bg-white/60 dark:bg-black/40 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <motion.div variants={navItem} className="flex items-center gap-4">
          <a href="#home" className="font-semibold text-lg md:text-xl">Tuvisha B</a>
        </motion.div>
        <motion.div className="hidden md:flex items-center gap-6" variants={navItem}>
          <motion.div variants={navItem} className="flex items-center gap-6">
            <motion.a variants={navItem}><NavLink href="#about">About</NavLink></motion.a>
            <motion.a variants={navItem}><NavLink href="#education">Education</NavLink></motion.a>
            <motion.a variants={navItem}><NavLink href="#projects">Projects</NavLink></motion.a>
            <motion.a variants={navItem}><NavLink href="#certifications">Certifications</NavLink></motion.a>
            <motion.a variants={navItem}><NavLink href="#contact">Contact</NavLink></motion.a>
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
