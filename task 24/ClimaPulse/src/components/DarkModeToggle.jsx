import React, { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => setIsDark(document.documentElement.classList.contains('dark'))
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const toggle = () => {
    document.documentElement.classList.toggle('dark')
    const next = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    localStorage.setItem('theme', next)
    setIsDark(next === 'dark')
  }

  return (
    <button
      onClick={toggle}
      className="rounded-xl border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-800"
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
    >
      {isDark ? '🌙' : '☀️'}
    </button>
  )
}
