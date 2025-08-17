import React from 'react'

export default function LoadingState() {
  return (
    <section className="glass rounded-2xl p-6 shadow-soft">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-brand-600"></div>
        <div className="flex-1">
          <div className="skeleton h-4 w-1/3 animate-shimmer rounded"></div>
          <div className="mt-2 skeleton h-3 w-1/2 animate-shimmer rounded"></div>
        </div>
      </div>
    </section>
  )
}
