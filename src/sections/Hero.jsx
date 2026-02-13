import React, { useState, useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import Button from '../components/Button'
import { floatAnim } from '../animations/variants'

const name = 'TUVISHA B'

export default function Hero(){
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 400], [0, -18])

  // 3D tilt
  const [tilt, setTilt] = useState({rx:0, ry:0})
  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width/2)
    const dy = e.clientY - (rect.top + rect.height/2)
    const ry = (dx / rect.width) * 8
    const rx = -(dy / rect.height) * 8
    setTilt({rx, ry})
  }
  const reset = () => setTilt({rx:0, ry:0})

  return (
    <section id="about" className="pt-12">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div style={{ y }} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="flex justify-center md:justify-start relative">
            <motion.div ref={ref} className="rounded-xl p-1" onMouseMove={onMove} onMouseLeave={reset} {...(!reduce ? floatAnim : {})}>
              <motion.div style={{ transform: `perspective(700px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` }}
                whileHover={{ scale: 1.04 }} transition={{ duration: 0.35 }} className="rounded-xl relative"
              >
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcd"
                  alt="Tuvisha" className="w-44 h-44 rounded-xl object-cover shadow-2xl"/>
                <motion.span className="absolute -inset-1 rounded-xl pointer-events-none"
                  style={{
                    background: 'linear-gradient(90deg, rgba(108,92,231,0.12), rgba(0,184,148,0.06))',
                    filter: 'blur(18px)'
                  }} animate={{ opacity: [0.6, 0.2, 0.6] }} transition={{ duration: 6, repeat: Infinity }} />
              </motion.div>
            </motion.div>
          </div>
          <div className="md:col-span-2">
            <motion.h1 className="text-3xl md:text-4xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
              initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {name.split('').map((ch, i) => (
                <motion.span key={i} initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}>{ch}</motion.span>
              ))}
            </motion.h1>
            <motion.p className="text-primary font-semibold mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.06 }}>
              AI & Data Science Student | Frontend Developer | ML Enthusiast
            </motion.p>
            <motion.p className="mb-4 text-gray-600 dark:text-gray-300" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.12 }}>
              Final year B.Tech student specializing in AI & Data Science with hands-on experience in machine learning, data analytics and front-end development. Passionate about building intuitive ML-powered applications and creating insightful data visualizations.
            </motion.p>
            <div className="flex flex-wrap gap-3">
              <motion.div whileHover={{ y: -6 }} whileTap={{ scale: 0.96 }}>
                <Button href="/resume.pdf">Download Resume</Button>
              </motion.div>
              <motion.div whileHover={{ y: -6 }} whileTap={{ scale: 0.96 }}>
                <Button href="https://github.com/TuvishaBabu" variant="ghost">GitHub</Button>
              </motion.div>
              <motion.div whileHover={{ y: -6 }} whileTap={{ scale: 0.96 }}>
                <Button href="https://www.linkedin.com/in/tuvisha-babu" variant="ghost">LinkedIn</Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
