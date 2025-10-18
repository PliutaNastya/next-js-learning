'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch (theme is undefined on server)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="
        flex items-center justify-center gap-2
        rounded-full border border-gray-200 dark:border-gray-700
        bg-white dark:bg-gray-800
        text-gray-700 dark:text-gray-200
        shadow-sm hover:shadow-md transition-all
        px-3 py-2
      "
    >
      {theme === 'light' ? (
        <>
          <Moon size={18} />
          <span className="text-sm">Dark</span>
        </>
      ) : (
        <>
          <Sun size={18} />
          <span className="text-sm">Light</span>
        </>
      )}
    </button>
  )
}
