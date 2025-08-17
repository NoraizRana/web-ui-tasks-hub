export function createCache({ ttl = 300000 } = {}) {
  const store = new Map()
  return {
    get(key) {
      const item = store.get(key)
      if (!item) return null
      if (Date.now() - item.time > ttl) {
        store.delete(key)
        return null
      }
      return item.value
    },
    set(key, value) {
      store.set(key, { value, time: Date.now() })
    },
    clear() { store.clear() }
  }
}
