export function formatLocalTime(unixSeconds, tzOffsetSeconds=0) {
  const localMs = (unixSeconds + tzOffsetSeconds) * 1000
  const d = new Date(localMs)
  return d.toLocaleString(undefined, {
    weekday: 'short', hour: '2-digit', minute: '2-digit',
    day: '2-digit', month: 'short', year: 'numeric'
  })
}
