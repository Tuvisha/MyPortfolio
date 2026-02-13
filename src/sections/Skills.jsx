import React from 'react'
import SectionWrapper from '../components/SectionWrapper'

const skills = [
  { name: 'Python', level: 90 },
  { name: 'Java', level: 70 },
  { name: 'SQL', level: 85 },
  { name: 'Power BI', level: 75 }
]

export default function Skills(){
  return (
    <SectionWrapper id="skills">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {skills.map((s, i) => (
          <div key={i} className="p-4 rounded-lg shadow card-glass border border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between mb-2">
              <div className="font-medium">{s.name}</div>
              <div className="text-sm text-gray-400">{s.level}%</div>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div style={{ width: `${s.level}%` }} className="h-full bg-primary"></div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
