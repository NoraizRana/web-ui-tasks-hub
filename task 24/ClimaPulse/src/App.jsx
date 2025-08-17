import React from 'react'
import Home from './pages/Home.jsx'
import { useTheme } from './hooks/useTheme.js'

export default function App() {
  const { themeReady } = useTheme()
  if (!themeReady) return null
  return <Home />
}
