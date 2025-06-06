import { useEffect, useState } from 'react'
import { MoonIcon } from '~/Icons/MoonIcon'
import { SunIcon } from '~/Icons/SunIcon'

export default function ThemeToggler() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme')
      if (typeof stored === 'string' && stored.length > 0) {
        return stored
      }
      const current = document.documentElement.getAttribute('data-theme')
      if (typeof current === 'string' && current.length > 0) {
        return current
      }
    }
    return 'light'
  })

  useEffect(() => {
    // Use view transitions if available for theme switching
    const doc = window.document as Document & {
      startViewTransition?: (cb: () => void) => void
    }
    if (typeof doc.startViewTransition === 'function') {
      doc.startViewTransition(() => {
        window.document.documentElement.setAttribute('data-theme', theme)
        window.localStorage.setItem('theme', theme)
      })
    }
    else {
      window.document.documentElement.setAttribute('data-theme', theme)
      window.localStorage.setItem('theme', theme)
    }
  }, [theme])

  if (theme === 'light') {
    return (
      <button
        type="button"
        className="btn btn-ghost join-item"
        aria-label="Switch to dark theme"
        onClick={() => setTheme('dark')}
      >
        <span className="text-xl">
          <MoonIcon />
        </span>
      </button>
    )
  }
  if (theme === 'dark') {
    return (
      <button
        type="button"
        className="btn btn-ghost join-item"
        aria-label="Switch to light theme"
        onClick={() => setTheme('light')}
      >
        <span className="text-xl">
          <SunIcon />
        </span>
      </button>
    )
  }
}
