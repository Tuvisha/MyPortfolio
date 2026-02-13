import { useReducedMotion } from 'framer-motion'

export const usePrefersReducedMotion = () => {
  return useReducedMotion()
}

export const navContainer = {
  hidden: { y: -20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { when: 'beforeChildren', staggerChildren: 0.08, duration: 0.5, ease: 'easeOut' } }
}

export const navItem = {
  hidden: { opacity: 0, y: -6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
}

export const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' } }
})

export const card = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  hover: { y: -6, boxShadow: '0 20px 40px rgba(12,12,20,0.25)', transition: { duration: 0.3, ease: 'easeOut' } }
}

export const floatAnim = {
  animate: { y: [0, -8, 0], transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }
}

export const subtlePulse = {
  hover: { scale: 1.03, boxShadow: '0 8px 20px rgba(99,102,241,0.12)', transition: { duration: 0.35 } },
  tap: { scale: 0.96 }
}
