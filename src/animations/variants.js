import { useReducedMotion } from 'framer-motion'

export const usePrefersReducedMotion = () => useReducedMotion()

export const pageTransition = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.45, ease: 'easeInOut' } },
  exit: { opacity: 0, transition: { duration: 0.35, ease: 'easeInOut' } }
}

export const navContainer = {
  hidden: { y: -22, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { when: 'beforeChildren', staggerChildren: 0.07, duration: 0.5, ease: 'easeOut' } }
}

export const navItem = {
  hidden: { opacity: 0, y: -6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.42, ease: 'easeOut' } }
}

export const containerStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } }
}

export const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' } }
})

export const card = {
  hidden: { opacity: 0, y: 20, scale: 0.996 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } },
  hover: { y: -8, scale: 1.02, boxShadow: '0 28px 60px rgba(12,12,30,0.22)', transition: { duration: 0.3, ease: 'easeOut' } }
}

export const floatAnim = {
  animate: { y: [0, -8, 0], transition: { duration: 4.2, repeat: Infinity, ease: 'easeInOut' } }
}

export const subtlePulse = {
  hover: { scale: 1.035, boxShadow: '0 10px 30px rgba(99,102,241,0.12)', transition: { duration: 0.35 } },
  tap: { scale: 0.96 }
}

export const titleReveal = {
  hidden: { opacity: 0, y: 6 },
  show: i => ({ opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.03, ease: 'easeOut' } })
}

export const tag = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.36, ease: 'easeOut' } },
  hover: { scale: 1.06 }
}

export const imageHover = {
  hover: { scale: 1.06, transition: { duration: 0.4, ease: 'easeOut' } }
}
