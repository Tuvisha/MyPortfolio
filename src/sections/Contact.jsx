import React from 'react'
import SectionWrapper from '../components/SectionWrapper'
import { motion } from 'framer-motion'
import { card } from '../animations/variants'

export default function Contact(){
  return (
    <SectionWrapper id="contact">
      <h2 className="text-2xl font-bold mb-6">Contact</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div className="p-4 rounded-lg card-glass border border-gray-200 dark:border-gray-800"
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={card} whileHover="hover"
        >
          <div className="space-y-3">
            <div><strong>Email:</strong> btuvisha@gmail.com</div>
            <div><strong>Phone:</strong> 6369734960</div>
            <div><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/tuvisha-babu" className="text-primary">/in/tuvisha-babu</a></div>
            <div><strong>GitHub:</strong> <a href="https://github.com/TuvishaBabu" className="text-primary">/TuvishaBabu</a></div>
          </div>
        </motion.div>
        <motion.form className="p-4 rounded-lg card-glass border border-gray-200 dark:border-gray-800 space-y-3 transform-gpu"
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={card}
        >
          <input className="w-full p-2 rounded-md bg-transparent border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Your name" />
          <input className="w-full p-2 rounded-md bg-transparent border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Email" />
          <textarea className="w-full p-2 rounded-md bg-transparent border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20" rows="5" placeholder="Message" />
          <motion.button type="button" className="px-4 py-2 bg-primary text-white rounded-md shadow-md"
            whileHover={{ y: -6 }} whileTap={{ scale: 0.96 }} transition={{ duration: 0.18 }}
          >Send Message</motion.button>
        </motion.form>
      </div>
    </SectionWrapper>
  )
}
