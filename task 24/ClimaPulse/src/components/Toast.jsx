import React, { useEffect } from 'react'

export default function Toast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return
    const t = setTimeout(onClose, 2000)
    return () => clearTimeout(t)
  }, [toast, onClose])

  if (!toast) return null
  return (
    <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transform">
      <div className="rounded-xl bg-gray-900 px-4 py-2 text-white shadow-lg dark:bg-gray-800">
        {toast.message}
      </div>
    </div>
  )
}
