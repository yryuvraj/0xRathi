import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import Footer from "@/components/footer"
import ThemeToggle from "@/components/theme-toggle"

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Terminal Blog",
  description: "A Linux terminal-themed blog",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark blue-theme">
      <body className={`${jetbrainsMono.className} min-h-screen bg-terminal text-terminal-text`}>
        <div className="terminal-window shadow-terminal">
          <div className="terminal-header">
            <div className="terminal-buttons">
              <span className="terminal-button terminal-close"></span>
              <span className="terminal-button terminal-minimize"></span>
              <span className="terminal-button terminal-maximize"></span>
            </div>
            <div className="terminal-title">rathi@blog:~</div>
            <div className="ml-auto">
              <ThemeToggle />
            </div>
          </div>
          <div className="terminal-content">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  )
}

