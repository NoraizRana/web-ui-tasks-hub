# Weather Info Dashboard

A production-grade Vite + React app with Tailwind CSS that fetches real-time weather using OpenWeatherMap. Includes loading and error states, dark mode, units toggle, recent searches, and subtle animations.

## Features
- Search by city name
- Loading skeletons and spinner
- Clear error messages for invalid city, network, API limit/invalid key
- Weather card: temp, feels-like, humidity, wind, condition, icon, local time
- Dark mode (persisted), units toggle (°C/°F)
- Recent searches (last 5), in-memory cache (5 min TTL)
- Accessible and responsive

## Getting an API key
1. Create an account at https://openweathermap.org
2. Find your API key in your profile (`API keys`).
3. Create a `.env` file in the project root and add:
   ```
   VITE_OPENWEATHER_API_KEY=YOUR_KEY_HERE
   ```

## Install & run
```bash
npm i
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Notes
- Input is debounced. Press Enter or click Search.
- Geolocation optional quick action.
- Cache reduces API calls within 5 minutes.
- Accessible labels and `aria-live` regions included.

## Architecture
- `src/lib/api.js`: fetch with timeout + AbortController, error mapping
- `src/lib/cache.js`: simple Map-based TTL cache
- `src/lib/units.js`: format helpers
- Components under `src/components/*`
- Theme hook in `src/hooks/useTheme.js`

## QA Checklist
- [ ] Set `.env` with your API key
- [ ] Search for a valid city shows data
- [ ] Invalid city shows friendly error
- [ ] Disconnect network to see network error
- [ ] Toggle °C/°F updates values
- [ ] Dark mode toggles and persists
- [ ] Recent searches clickable
- [ ] Mobile layout looks good, keyboard navigation works
