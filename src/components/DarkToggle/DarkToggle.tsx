import { useEffect } from 'react'
import { useDarkMode } from 'usehooks-ts'

export function DarkToggle() {
  const { isDarkMode, toggle } = useDarkMode()

  // when isDarkMode changes, add or remove dark from the documentElelemt (<html>)
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const icon = isDarkMode ? '/images/icon-sun.svg' : '/images/icon-moon.svg'

  return (
    <button
      onClick={toggle}
      title="Toggle Dark Mode"
      className="dark-toggle-btn"
    >
      <img src={icon} alt="Toggle Dark Mode" />
    </button>
  )
}
