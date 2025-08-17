import React from 'react'
import DarkModeToggle from './DarkModeToggle.jsx'

export default function Header({ units, onUnitsToggle }) {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/70 backdrop-blur dark:border-gray-800 dark:bg-gray-900/70">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
        <a href="/" className="group inline-flex items-center gap-2">
          <img src="/favicon.svg" alt="Weather logo" className="h-7 w-7 transition-transform group-hover:rotate-6" />
          <h1 className="text-lg font-bold tracking-tight">ClimaPulse</h1>
        </a>
        <div className="flex items-center gap-2">
          <button
            onClick={onUnitsToggle}
            className="rounded-xl border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-800"
            aria-label="Toggle units"
            title="Toggle °C / °F"
          >
            {units === 'metric' ? '°C' : '°F'}
          </button>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  )
}
