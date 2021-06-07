export function isDef(val: any): boolean {
  return val !== undefined && val !== null
}

export function localGet(key: string) {
  const value = window.sessionStorage.getItem(key)
  try {
    const val = window.sessionStorage.getItem(key) as string
    return JSON.parse(val)
  } catch (error) {
    return value
  }
}

export function localSet(key: string, value: Object) {
  window.sessionStorage.setItem(key, JSON.stringify(value))
}

export function localRemove(key: string) {
  window.sessionStorage.removeItem(key)
}
