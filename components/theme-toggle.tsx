"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"

type Theme = "blue-theme" | "green-theme"

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("blue-theme")

  // Initialize theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("terminal-theme") as Theme | null
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.remove("blue-theme", "green-theme")
      document.documentElement.classList.add(savedTheme)
    }
  }, [])

  // Update theme when it changes
  const toggleTheme = () => {
    const newTheme = theme === "blue-theme" ? "green-theme" : "blue-theme"
    setTheme(newTheme)

    // Update classList
    document.documentElement.classList.remove("blue-theme", "green-theme")
    document.documentElement.classList.add(newTheme)

    // Save to localStorage
    localStorage.setItem("terminal-theme", newTheme)
  }

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-6 h-6 rounded-full focus:outline-none"
      title={theme === "blue-theme" ? "Switch to green theme" : "Switch to blue theme"}
    >
      {theme === "blue-theme" ? (
        <Sun size={14} className="text-blue-300" />
      ) : (
        <Moon size={14} className="text-green-300" />
      )}
    </button>
  )
}

