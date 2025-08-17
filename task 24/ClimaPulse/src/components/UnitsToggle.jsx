import React from 'react'

export default function UnitsToggle({ units, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="rounded-xl border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-800"
      aria-label="Toggle units"
    >
      {units === 'metric' ? '°C' : '°F'}
    </button>
  )
}
