const API_BASE = 'https://api.openweathermap.org/data/2.5/weather'

function withQuery(params) {
  const sp = new URLSearchParams(params)
  return `${API_BASE}?${sp.toString()}`
}

function timeoutPromise(ms) {
  return new Promise((_, reject) => setTimeout(() => reject({ code: 'TIMEOUT' }), ms))
}

export async function fetchWeather(q, units='metric') {
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY
  if (!apiKey) throw { code: 401, message: 'Missing API key' }

  const controller = new AbortController()
  const signal = controller.signal
  const url = typeof q === 'string'
    ? withQuery({ q, appid: apiKey, units })
    : withQuery({ lat: q.lat, lon: q.lon, appid: apiKey, units })

  const fetchPromise = fetch(url, { signal })
    .then(async (res) => {
      if (!res.ok) {
        const code = res.status
        let err = { code, message: 'Request failed' }
        try { err.details = await res.json() } catch {}
        throw err
      }
      return res.json()
    })
    .catch((e) => {
      if (e.name === 'AbortError') return Promise.reject({ code: 'TIMEOUT' })
      if (e.code) return Promise.reject(e)
      return Promise.reject({ code: 'NETWORK' })
    })

  try {
    const result = await Promise.race([fetchPromise, timeoutPromise(10000)])
    return result
  } finally {
    controller.abort()
  }
}
