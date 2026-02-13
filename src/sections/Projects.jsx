import React from 'react'
import SectionWrapper from '../components/SectionWrapper'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { card, tag, imageHover } from '../animations/variants'

const projects = [
  {
    title: 'Blood Disease Classification using CNN',
    desc: 'Deep learning model to classify blood disorders from microscopic images. Built with TensorFlow and Keras.',
    tech: ['Python', 'TensorFlow', 'Keras', 'CNN'],
    github: '#',
    img: 'https://images.unsplash.com/photo-1581091215367-6c0b6f2b8b1a?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    title: 'Sales Analysis & Forecasting',
    desc: 'Time series analysis and forecasting using ARIMA, SARIMA and Prophet to inform inventory decisions.',
    tech: ['Python', 'Pandas', 'Prophet', 'ARIMA'],
    github: '#',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    title: 'Provider Data Validation for Healthcare Payers',
    desc: 'Data cleansing and validation pipelines to improve provider data quality for claims processing.',
    tech: ['SQL', 'Python', 'ETL'],
    github: '#',
    img: 'https://images.unsplash.com/photo-1581091228475-6f3b9d2a6f3b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3'
  }
]

export default function Projects(){
  return (
    <SectionWrapper id="projects">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div key={i} className="relative rounded-lg overflow-hidden card-glass border border-gray-200 dark:border-gray-800"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={card}
          >
            <motion.div className="h-40 bg-gray-100 dark:bg-gray-800 overflow-hidden" variants={imageHover} whileHover="hover">
              <motion.img src={p.img} alt={p.title} className="w-full h-full object-cover transform" whileHover={{ scale: 1.06 }} transition={{ duration: 0.5 }} />
            </motion.div>
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold">{p.title}</h3>
                <div className="flex items-center gap-3 text-gray-500">
                  <a href={p.github} className="hover:text-primary"><FaGithub /></a>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-3">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {p.tech.map((t, idx) => (
                  <motion.span key={idx} className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md" variants={tag} whileHover="hover">{t}</motion.span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <a href={p.github} className="text-primary inline-flex items-center gap-2">
                  <span>View Project</span>
                  <motion.span whileHover={{ x: 6 }} transition={{ duration: 0.25 }}><FaExternalLinkAlt /></motion.span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
