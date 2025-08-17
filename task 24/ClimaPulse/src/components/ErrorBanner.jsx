import React from 'react'

function messageFor(err) {
  if (!err) return 'Unknown error.'
  if (err.code === 404) return "We couldn’t find that city. Check spelling and try again."
  if (err.code === 429 || err.code === 401) return "API limit reached or key invalid. Wait a bit or update your API key in .env."
  if (err.code === 'NETWORK') return 'Network error. Check your connection and retry.'
  if (err.code === 'TIMEOUT') return 'Request timed out. Please try again.'
  if (err.code === 'GEO_DENIED') return 'Location permission denied.'
  return 'Something went wrong. Please try again.'
}

export default function ErrorBanner({ error, onRetry }) {
  return (
    <section role="alert" className="glass mt-4 rounded-2xl border border-red-300/40 p-4 text-red-800 shadow-soft dark:border-red-700/40 dark:text-red-200">
      <div className="flex items-center justify-between gap-4">
        <p>{messageFor(error)}</p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="rounded-lg border border-red-300/60 px-3 py-1.5 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow focus:outline-none focus:ring-2 focus:ring-red-400 dark:border-red-700/60"
          >
            Retry
          </button>
        )}
      </div>
    </section>
  )
}
