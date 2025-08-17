import { useEffect, useState } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState('system')
  const [themeReady, setThemeReady] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme') || 'system'
    setTheme(stored)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const enableDark = theme === 'dark' || (theme === 'system' && systemDark)
    root.classList.toggle('dark', enableDark)
    setThemeReady(true)
  }, [theme])

  const toggle = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      localStorage.setItem('theme', next)
      const root = document.documentElement
      root.classList.toggle('dark', next === 'dark')
      return next
    })
  }

  return { theme, setTheme, toggle, themeReady }
}
