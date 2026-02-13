import React from 'react'

export default function Button({ children, href, onClick, variant='solid' }){
  const base = 'px-4 py-2 rounded-md font-medium inline-flex items-center gap-2'
  const solid = 'bg-primary text-white hover:opacity-95'
  const ghost = 'bg-transparent border border-gray-200 dark:border-gray-700'
  return (
    href ? (
      <a href={href} className={`${base} ${variant==='solid'?solid:ghost}`} target="_blank" rel="noreferrer">{children}</a>
    ) : (
      <button onClick={onClick} className={`${base} ${variant==='solid'?solid:ghost}`}>{children}</button>
    )
  )
}
