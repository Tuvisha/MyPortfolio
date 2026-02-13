import React from 'react'
import SectionWrapper from '../components/SectionWrapper'
import { motion } from 'framer-motion'
import { card } from '../animations/variants'

const certs = [
  'Machine Learning',
  'Time Series Forecasting',
  'Paper Presentation at Velammal Institute of Technology (28 March 2025)',
  'NPTEL Silver Elite – Design Thinking (76%)'
]

export default function Certifications(){
  return (
    <SectionWrapper id="certifications">
      <h2 className="text-2xl font-bold mb-6">Certifications & Achievements</h2>
      <ul className="space-y-3">
        {certs.map((c, i) => (
          <motion.li key={i} className="p-3 rounded-lg card-glass border border-gray-200 dark:border-gray-800 transform-gpu"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={card} whileHover="hover"
          >{c}</motion.li>
        ))}
      </ul>
    </SectionWrapper>
  )
}
