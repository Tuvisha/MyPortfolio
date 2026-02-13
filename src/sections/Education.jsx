import React from 'react'
import SectionWrapper from '../components/SectionWrapper'
import { motion } from 'framer-motion'
import { card } from '../animations/variants'

export default function Education(){
  return (
    <SectionWrapper id="education">
      <h2 className="text-2xl font-bold mb-6">Education</h2>
      <div className="space-y-4">
        <motion.div className="p-4 rounded-lg shadow-md card-glass border border-gray-200 dark:border-gray-800"
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={card} whileHover="hover"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg font-semibold">B.Tech - Artificial Intelligence and Data Science</div>
              <div className="text-sm text-gray-500">RMK College of Engineering and Technology</div>
            </div>
            <div className="text-sm text-gray-400">2023 – 2027</div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
