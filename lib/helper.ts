export function getLocalStorage<T>(key: string, defaultValue: T): T {
  const stickyValue = localStorage.getItem(key)
  return stickyValue !== null && stickyValue !== 'undefined'
    ? JSON.parse(stickyValue)
    : defaultValue
}

export function setLocalStorage<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value))
}
