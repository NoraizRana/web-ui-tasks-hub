import React, { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

export default function SearchBar({ value, onChange, onSubmit, onUseMyLocation }) {
  const [debounced, setDebounced] = useState(value)
  const timer = useRef(null)

  useEffect(() => setDebounced(value), [value])

  const handleChange = (e) => {
    const v = e.target.value
    onChange(v)
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => setDebounced(v), 500)
  }

  return (
    <section className="mb-6">
      <label htmlFor="city" className="sr-only">City</label>
      <div className="flex items-center gap-2">
        <input
          id="city"
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Search city, e.g., Toronto"
          className={clsx(
            'w-full rounded-xl border border-gray-300 bg-white/90 px-4 py-3 shadow-sm outline-none transition',
            'focus:ring-2 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-800/80'
          )}
          onKeyDown={(e) => { if (e.key === 'Enter') onSubmit() }}
          aria-describedby="search-help"
        />
        <button
          onClick={onSubmit}
          className="rounded-xl bg-brand-600 px-4 py-3 font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
        >
          Search
        </button>
        <button
          onClick={onUseMyLocation}
          className="rounded-xl border border-gray-300 px-3 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-500 dark:border-gray-700"
          title="Use my location"
        >
          📍
        </button>
      </div>
      <p id="search-help" className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        Press Enter or click Search. Input is debounced to reduce requests.
      </p>
    </section>
  )
}
