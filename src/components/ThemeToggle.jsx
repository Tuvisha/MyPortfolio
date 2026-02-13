import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function ThemeToggle(){
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'
  return (
    <motion.button
      onClick={toggle}
      aria-label="Toggle theme"
      initial={false}
      animate={{ rotate: isDark ? 180 : 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/6 transition"
    >
      {isDark ? <FaSun /> : <FaMoon />}
    </motion.button>
  )
}
