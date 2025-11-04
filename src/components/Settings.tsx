import { useState, useRef, useEffect } from 'react'
import { Settings as SettingsIcon, Maximize2, Sun, Moon } from 'lucide-react'

interface SettingsProps {
  variant?: 'light' | 'dark'
}

export const Settings = ({ variant = 'dark' }: SettingsProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check if dark mode is already set
    const isDark = document.documentElement.classList.contains('dark')
    setIsDarkMode(isDark)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const toggleDarkMode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    
    if (newMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
    // Store preference in localStorage
    localStorage.setItem('darkMode', newMode ? 'dark' : 'light')
  }

  const openFullScreen = () => {
    // Open the extension in a new tab
    window.open(window.location.href, '_blank')
    setIsOpen(false)
  }

  const buttonClass = variant === 'light' 
    ? "p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 text-gray-700 dark:text-gray-300"
    : "p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 text-white"

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={buttonClass}
        aria-label="Settings"
      >
        <SettingsIcon size={20} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-50">
          <div className="py-1">
            <button
              onClick={openFullScreen}
              className="w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <Maximize2 size={18} className="text-gray-600 dark:text-gray-400" />
              <span className="text-sm text-gray-700 dark:text-gray-300">Full Screen View</span>
            </button>
            
            <button
              onClick={toggleDarkMode}
              className="w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {isDarkMode ? (
                <>
                  <Sun size={18} className="text-gray-600 dark:text-gray-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Light Mode</span>
                </>
              ) : (
                <>
                  <Moon size={18} className="text-gray-600 dark:text-gray-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Dark Mode</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

