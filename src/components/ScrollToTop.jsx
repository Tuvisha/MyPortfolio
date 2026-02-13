import React, { useEffect, useState } from 'react'
import { FaChevronUp } from 'react-icons/fa'
import { motion, useReducedMotion } from 'framer-motion'

export default function ScrollToTop(){
  const [show, setShow] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handle = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  if (!show) return null

  return (
    <motion.button onClick={handle}
      initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: reduce ? 1 : 1.06 }} whileTap={{ scale: 0.96 }}
      className="fixed right-6 bottom-8 z-50 bg-primary text-white p-3 rounded-full shadow-lg"
      aria-label="Scroll to top"
    >
      <FaChevronUp />
    </motion.button>
  )
}
