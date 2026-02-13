import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Button from '../components/Button'
import { floatAnim, subtlePulse } from '../animations/variants'

export default function Hero(){
  const reduce = useReducedMotion()
  return (
    <section id="about" className="pt-12">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="flex justify-center md:justify-start relative">
            <motion.div className="rounded-xl p-1"
              {...(!reduce ? floatAnim : {})}
            >
              <motion.div className="rounded-full inline-block relative"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.35 }}
              >
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcd"
                  alt="Tuvisha" className="w-44 h-44 rounded-xl object-cover shadow-lg"/>
                <motion.span className="absolute inset-0 rounded-xl ring-2 ring-primary/20 pointer-events-none"
                  animate={{ boxShadow: ['0 0 0px rgba(108,92,231,0.0)', '0 0 24px rgba(108,92,231,0.08)', '0 0 0px rgba(108,92,231,0.0)'] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
                />
              </motion.div>
            </motion.div>
          </div>
          <div className="md:col-span-2">
            <motion.h1 className="text-3xl md:text-4xl font-extrabold mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >TUVISHA B</motion.h1>
            <motion.p className="text-primary font-semibold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >AI & Data Science Student | Frontend Developer | ML Enthusiast</motion.p>
            <motion.p className="mb-4 text-gray-600 dark:text-gray-300" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.12 }}>
              Final year B.Tech student specializing in AI & Data Science with hands-on experience in machine learning, data analytics and front-end development. Passionate about building intuitive ML-powered applications and creating insightful data visualizations.
            </motion.p>
            <div className="flex flex-wrap gap-3">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                <Button href="/resume.pdf">Download Resume</Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                <Button href="https://github.com/TuvishaBabu" variant="ghost">GitHub</Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                <Button href="https://www.linkedin.com/in/tuvisha-babu" variant="ghost">LinkedIn</Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
