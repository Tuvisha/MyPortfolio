import React, { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function ScrollProgress(){
  const [progress, setProgress] = useState(0)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce) return
    const onScroll = () => {
      const scrolled = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? (scrolled / docHeight) * 100 : 0
      setProgress(pct)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [reduce])

  return (
    <motion.div className="fixed left-0 top-0 h-1 z-[60] w-full bg-transparent">
      <motion.div style={{ width: `${progress}%` }}
        className="h-1 bg-gradient-to-r from-primary to-accent shadow-lg"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ ease: 'easeOut', duration: 0.25 }}
      />
    </motion.div>
  )
}
