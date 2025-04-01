"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"

// Define our "file system"
const fileSystem = {
  "about_me.txt": `Hey! 
I'm an enthusiastic developer and competitive coder.
I enjoy learning about the Stock markets and Macro Economics as a pastime. I trade futures and options as a hobby.
I'm attempting to combine my skills from these two areas to create something remarkable.
Hit me up if you have similar interests! `,

  "projects.txt": `# My Projects

1. Terminal Blog - A Linux-themed blog built with Next.js

2. Omilia | Python, Pygame, OOP  
   - Designed an e-learning dialect game for children with special needs.  
   - Implemented custom mechanics and GUI for an interactive experience.  
   - Utilized OOP principles to enhance code maintainability.  
   (April 2023)

3. SignSense | Python, TensorFlow, Streamlit, Pygame  
   - Developed a sign language detection program using a machine learning model.  
   - Utilized OpenCV and NumPy for image processing and Pandas for data analysis.  
   - Created an engaging GUI using the Pygame module.  
   (March 2023)

4. BCI Gaming Software | Python, Emotiv SDK
    - Play games with your mind! 
    - Built software to play video games using brain-controlled instructions with Emotiv EpocX.  `,

  "skills.txt": `# Technical Skills

- Languages: Python, C, C++, Elixir, MySQL, pSQL, JavaScript
- Frameworks: Streamlit, Django, FastAPI, Flask, Phoenix, LiveView, Ash (Elixir), Next.js
- Libraries: Pandas, NumPy, Matplotlib, Tensorflow, PyTorch, PyGame`,

  "contact.txt": `# Contact Information

- Email: yrathi66@gmail.com
- GitHub: github.com/yryuvraj
- Twitter: @0xRathi
- LinkedIn: https://www.linkedin.com/in/yuvraj-rathi/`,
}

// Available commands
const commands = ["ls", "cat", "help", "clear"]

export default function Contact() {
  const [history, setHistory] = useState<Array<{ command: string; output: string }>>([
    { command: "", output: 'Welcome to the interactive terminal! Type "help" for available commands.' },
  ])
  const [input, setInput] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  // Focus input when clicking anywhere in the terminal
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  // Scroll to bottom when history updates
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  // Process command
  const processCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim()
    const parts = trimmedCmd.split(" ")
    const command = parts[0].toLowerCase()
    const args = parts.slice(1)

    let output = ""

    switch (command) {
      case "ls":
        output = Object.keys(fileSystem).join("\n")
        break

      case "cat":
        if (args.length === 0) {
          output = "Usage: cat <filename>"
        } else {
          const filename = args[0]
          if (fileSystem[filename]) {
            output = fileSystem[filename]
          } else {
            output = `cat: ${filename}: No such file or directory`
          }
        }
        break

      case "help":
        output = `Available commands:
- ls: List all files
- cat <filename>: Display file contents
- clear: Clear the terminal
- help: Show this help message`
        break

      case "clear":
        setHistory([])
        return

      case "":
        output = ""
        break

      default:
        output = `Command not found: ${command}. Type "help" for available commands.`
    }

    setHistory((prev) => [...prev, { command: trimmedCmd, output }])
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    processCommand(input)
    setInput("")
  }

  return (
    <main className="terminal-main">
      <div className="terminal-prompt mb-4">
        <span className="terminal-user">rathi@blog</span>:<span className="terminal-path">~</span>$ cat contact.txt
      </div>

      <header className="mb-6 terminal-output">
        <h1 className="text-2xl font-bold mb-2 terminal-heading">Contact Me</h1>
        <p className="terminal-text">Try the interactive terminal below to learn more about me</p>
      </header>

      <div
        ref={terminalRef}
        className="terminal-interactive p-4 rounded-md border border-terminal-border mb-8 h-80 overflow-y-auto"
        onClick={focusInput}
      >
        {history.map((item, index) => (
          <div key={index} className="mb-2">
            {item.command && (
              <div className="terminal-prompt">
                <span className="terminal-user">rathi@blog</span>:<span className="terminal-path">~</span>${" "}
                {item.command}
              </div>
            )}
            {item.output && <div className="terminal-output whitespace-pre-line">{item.output}</div>}
          </div>
        ))}

        <form onSubmit={handleSubmit} className="flex">
          <div className="terminal-prompt mr-2">
            <span className="terminal-user">rathi@blog</span>:<span className="terminal-path">~</span>$
          </div>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent flex-1 outline-none text-terminal-text"
            autoFocus
          />
        </form>
      </div>

      <div className="mb-4">
        <p className="text-terminal-muted">Hint: Try typing these commands:</p>
        <ul className="list-disc list-inside text-terminal-muted ml-4">
          <li>ls</li>
          <li>cat about_me.txt</li>
          <li>cat projects.txt</li>
          <li>cat skills.txt</li>
          <li>clear</li>
        </ul>
      </div>

      <div className="terminal-prompt mb-4">
        <span className="terminal-user">rathi@blog</span>:<span className="terminal-path">~</span>$ cd ..
      </div>

      <Link href="/" className="text-sm text-terminal-link hover:underline inline-block">
        ← Back to home
      </Link>
    </main>
  )
}

