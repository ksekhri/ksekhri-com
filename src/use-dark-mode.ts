import * as React from 'react'
import * as Utils from './utils'

export const useDarkMode = (): [boolean, (darkMode: boolean) => void] => {
  const [darkMode, setDarkMode] = React.useState<boolean>(Utils.getDarkMode())

  React.useEffect(() => {
    const onBrowserDarkModeUpdate = () => {
      setDarkMode(Utils.getBrowserDarkMode())
      Utils.clearLocalDarkMode()
    }

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', onBrowserDarkModeUpdate)

    return window
      .matchMedia('(prefers-color-scheme: dark)')
      .removeEventListener('change', onBrowserDarkModeUpdate)
  }, [])

  const handleSetDarkMode = (newDarkMode: boolean) => {
    setDarkMode(newDarkMode)
    Utils.setLocalDarkMode(newDarkMode)
  }

  return [darkMode, handleSetDarkMode]
}
