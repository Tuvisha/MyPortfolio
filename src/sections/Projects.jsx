import React from 'react'
import SectionWrapper from '../components/SectionWrapper'
import { FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { card } from '../animations/variants'

const projects = [
  {
    title: 'Blood Disease Classification using CNN',
    desc: 'Deep learning model to classify blood disorders from microscopic images. Built with TensorFlow and Keras.',
    tech: ['Python', 'TensorFlow', 'Keras', 'CNN'],
    github: '#'
  },
  {
    title: 'Sales Analysis & Forecasting',
    desc: 'Time series analysis and forecasting using ARIMA, SARIMA and Prophet to inform inventory decisions.',
    tech: ['Python', 'Pandas', 'Prophet', 'ARIMA'],
    github: '#'
  },
  {
    title: 'Provider Data Validation for Healthcare Payers',
    desc: 'Data cleansing and validation pipelines to improve provider data quality for claims processing.',
    tech: ['SQL', 'Python', 'ETL'],
    github: '#'
  }
]

export default function Projects(){
  return (
    <SectionWrapper id="projects">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div key={i} className="p-5 rounded-lg shadow transform transition card-glass border border-gray-200 dark:border-gray-800"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={card} whileHover="hover"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold">{p.title}</h3>
              <a href={p.github} className="text-gray-500 hover:text-primary"><FaGithub /></a>
            </div>
            <p className="text-sm text-gray-500 mb-3">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t, idx) => (
                <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
