import React from 'react'
import SectionWrapper from '../components/SectionWrapper'
import { motion } from 'framer-motion'
import { card } from '../animations/variants'

const internships = [
  { title: 'Front End Development', org: 'WIZTECH Automation Solutions Pvt Ltd', date: 'June 2025' },
  { title: 'Data Analytics & Visualization', org: 'Accenture (Forage)', date: 'Dec 2024' },
  { title: 'Machine Learning', org: 'Inspire Softech Solutions', date: 'Jan–Feb 2024' }
]

export default function Internships(){
  return (
    <SectionWrapper id="internships">
      <h2 className="text-2xl font-bold mb-6">Internships</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {internships.map((i, idx) => (
          <motion.div key={idx} className="p-4 rounded-lg shadow transition card-glass border border-gray-200 dark:border-gray-800 transform-gpu"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={card} whileHover="hover"
          >
            <div className="text-sm text-gray-400">{i.date}</div>
            <div className="font-semibold mt-2">{i.title}</div>
            <div className="text-sm text-gray-500">{i.org}</div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
