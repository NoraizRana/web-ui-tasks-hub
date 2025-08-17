import React from 'react'
import { formatLocalTime } from '../lib/units.js'

export default function WeatherCard({ data, units }) {
  const tempUnit = units === 'metric' ? '°C' : '°F'
  const speedUnit = units === 'metric' ? 'm/s' : 'mph'

  return (
    <section
      className="glass mt-4 rounded-2xl p-6 shadow-soft transition hover:-translate-y-0.5"
      aria-live="polite"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold">{data.name}, {data.sys?.country}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {formatLocalTime(data.dt, data.timezone)}
          </p>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${data.weather?.[0]?.icon || '01d'}@2x.png`}
          alt={data.weather?.[0]?.description || 'Weather icon'}
          className="h-16 w-16"
        />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="rounded-xl border border-gray-200 p-4 text-center dark:border-gray-700">
          <div className="text-3xl font-extrabold">
            {Math.round(data.main?.temp)}{tempUnit}
          </div>
          <div className="text-xs text-gray-500">Temperature</div>
        </div>
        <div className="rounded-xl border border-gray-200 p-4 text-center dark:border-gray-700">
          <div className="text-3xl font-extrabold">
            {Math.round(data.main?.feels_like)}{tempUnit}
          </div>
          <div className="text-xs text-gray-500">Feels like</div>
        </div>
        <div className="rounded-xl border border-gray-200 p-4 text-center dark:border-gray-700">
          <div className="text-3xl font-extrabold">{data.main?.humidity}%</div>
          <div className="text-xs text-gray-500">Humidity</div>
        </div>
        <div className="rounded-xl border border-gray-200 p-4 text-center dark:border-gray-700">
          <div className="text-3xl font-extrabold">{Math.round(data.wind?.speed)} {speedUnit}</div>
          <div className="text-xs text-gray-500">Wind</div>
        </div>
      </div>

      <p className="mt-4 text-center text-lg capitalize">
        {data.weather?.[0]?.description || 'Clear sky'}
      </p>
    </section>
  )
}
