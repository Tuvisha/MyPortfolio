import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeInUp } from '../animations/variants'

export default function SectionWrapper({ id, children, delay = 0 }){
  const reduce = useReducedMotion()
  const variants = reduce ? undefined : fadeInUp(delay)

  return (
    <section id={id} className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={variants}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
