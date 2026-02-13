import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer(){
  return (
    <footer className="mt-12 py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm">© {new Date().getFullYear()} Tuvisha B. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/TuvishaBabu" aria-label="GitHub" className="hover:text-primary"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/tuvisha-babu" aria-label="LinkedIn" className="hover:text-primary"><FaLinkedin /></a>
          <a href="mailto:btuvisha@gmail.com" aria-label="Email" className="hover:text-primary"><FaEnvelope /></a>
        </div>
      </div>
    </footer>
  )
}
