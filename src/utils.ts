const DARK_OVERRIDE = 'is_dark_mode_override'

export const getDarkMode = () =>
  window.localStorage.getItem(DARK_OVERRIDE) !== null
    ? window.localStorage.getItem(DARK_OVERRIDE) === 'true'
    : getBrowserDarkMode()

export const getBrowserDarkMode = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches

const writeLocalDarkMode = (isDarkMode: boolean) => {
  window.localStorage.setItem(DARK_OVERRIDE, String(isDarkMode))
  setFlippedTheme()
}

export const clearLocalDarkMode = () => {
  window.localStorage.removeItem(DARK_OVERRIDE)
  setDefaultTheme()
}

export const setTheme = (isDarkMode: boolean) => {
  if (getBrowserDarkMode() === isDarkMode) {
    setDefaultTheme()
  } else {
    setFlippedTheme()
  }
}

const replaceMetaTheme = ({
  mode,
  color,
}: {
  mode: 'light' | 'dark'
  color: string
}) => {
  const oldNode = document.getElementById(`theme-${mode}`)
  oldNode && document.head.removeChild(oldNode)

  const node = document.createElement('meta')
  node.id = `theme-${mode}`
  node.name = 'theme-color'
  node.media = `(prefers-color-scheme: ${mode})`
  node.content = color

  document.head.appendChild(node)
}

const setDefaultTheme = () => {
  replaceMetaTheme({ mode: 'light', color: '#e2e8f0' })
  replaceMetaTheme({ mode: 'dark', color: '#475569' })
}

const setFlippedTheme = () => {
  replaceMetaTheme({ mode: 'light', color: '#475569' })
  replaceMetaTheme({ mode: 'dark', color: '#e2e8f0' })
}

export const setLocalDarkMode = (isDarkMode: boolean) =>
  getBrowserDarkMode() === isDarkMode
    ? clearLocalDarkMode()
    : writeLocalDarkMode(isDarkMode)
