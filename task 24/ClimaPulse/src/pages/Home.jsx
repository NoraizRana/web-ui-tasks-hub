import React, { useMemo, useState } from 'react'
import Header from '../components/Header.jsx'
import SearchBar from '../components/SearchBar.jsx'
import LoadingState from '../components/LoadingState.jsx'
import ErrorBanner from '../components/ErrorBanner.jsx'
import WeatherCard from '../components/WeatherCard.jsx'
import RecentSearches from '../components/RecentSearches.jsx'
import Toast from '../components/Toast.jsx'
import { fetchWeather } from '../lib/api.js'
import { createCache } from '../lib/cache.js'

const cache = createCache({ ttl: 5 * 60 * 1000 }) 

export default function Home() {
  const [units, setUnits] = useState('metric') // 'metric' | 'imperial'
  const [city, setCity] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | error | success
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)
  const [recent, setRecent] = useState([])
  const [toast, setToast] = useState(null)

  const search = async (query) => {
    const q = (query ?? city).trim()
    if (!q) return
    const key = `${q.toLowerCase()}|${units}`

    setStatus('loading')
    setError(null)

    // Cache
    const cached = cache.get(key)
    if (cached) {
      setData(cached)
      setStatus('success')
      return
    }

    try {
      const result = await fetchWeather(q, units)
      setData(result)
      cache.set(key, result)
      setStatus('success')
      setRecent((prev) => {
        const next = [result.name, ...prev.filter((c) => c.toLowerCase() !== result.name.toLowerCase())]
        return next.slice(0, 5)
      })
    } catch (e) {
      setError(e)
      setStatus('error')
    }
  }

  const onUnitsToggle = () => {
    const next = units === 'metric' ? 'imperial' : 'metric'
    setUnits(next)
    if (data) {
      setToast({ id: Date.now(), message: `Switched to ${next === 'metric' ? '°C' : '°F'}` })
      // Re-fetch with new units
      search(data.name)
    }
  }

  const onUseMyLocation = async () => {
    if (!navigator.geolocation) {
      setToast({ id: Date.now(), message: 'Geolocation not supported' })
      return
    }
    setStatus('loading')
    setError(null)
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords
      try {
        const result = await fetchWeather({ lat: latitude, lon: longitude }, units)
        setData(result)
        setStatus('success')
        setRecent((prev) => [result.name, ...prev.filter((c) => c.toLowerCase() !== result.name.toLowerCase())].slice(0,5))
      } catch (e) {
        setError(e)
        setStatus('error')
      }
    }, (err) => {
      setError({ code: 'GEO_DENIED', message: 'Location permission denied.' })
      setStatus('error')
    })
  }

  return (
    <div className="min-h-screen">
      <Header units={units} onUnitsToggle={onUnitsToggle} />
      <main className="mx-auto max-w-3xl px-4 pb-16 pt-6">
        <SearchBar
          value={city}
          onChange={setCity}
          onSubmit={() => search()}
          onUseMyLocation={onUseMyLocation}
        />

        {status === 'loading' && <LoadingState />}
        {status === 'error' && <ErrorBanner error={error} onRetry={() => search()} />}
        {status === 'success' && data && <WeatherCard data={data} units={units} />}

        <RecentSearches
          items={recent}
          onClick={(name) => {
            setCity(name)
            search(name)
          }}
        />
      </main>

      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  )
}
