import React from 'react'
import { useDarkMode } from '../use-dark-mode'
import { setTheme } from '../utils'

const NightSwitch = () => {
  const [darkMode, setDarkMode] = useDarkMode()

  React.useEffect(() => {
    setTheme(darkMode)
    const bodyClasses = document.querySelector('body')?.classList
    if (bodyClasses) {
      !darkMode && bodyClasses.remove('dark')
      darkMode && bodyClasses.add('dark')
    }
  }, [darkMode])

  const label = `Set ${darkMode ? 'Light' : 'Dark'} Mode`

  return (
    <button
      className="text-sky-600 dark:text-sky-400"
      onClick={() => setDarkMode(!darkMode)}
      title={label}
    >
      {darkMode ? '☼' : '☾'}
    </button>
  )
}

export default NightSwitch
