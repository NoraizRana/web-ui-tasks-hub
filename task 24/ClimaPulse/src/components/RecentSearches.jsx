import React from 'react'

export default function RecentSearches({ items, onClick }) {
  if (!items?.length) return null
  return (
    <section className="mt-6">
      <h3 className="mb-2 text-sm font-semibold">Recent searches</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((c) => (
          <button
            key={c}
            onClick={() => onClick(c)}
            className="rounded-full border border-gray-300 px-3 py-1 text-sm transition hover:-translate-y-0.5 hover:shadow focus:outline-none focus:ring-2 focus:ring-brand-500 dark:border-gray-700"
          >
            {c}
          </button>
        ))}
      </div>
    </section>
  )
}
