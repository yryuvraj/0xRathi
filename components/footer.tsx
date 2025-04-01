import Link from "next/link"

export default function Footer() {
  return (
    <footer className="terminal-footer">
      <div className="terminal-prompt">
        <span className="terminal-user">rathi@blog</span>:<span className="terminal-path">~</span>$ echo "© $(date +%Y)
        Terminal Blog"
      </div>
      <div className="terminal-output flex justify-between items-center">
        <p>© {new Date().getFullYear()} Terminal Blog</p>
        <nav className="terminal-footer-nav">
          <Link href="/" className="terminal-link mr-4">
            Home
          </Link>
          <Link href="/contact" className="terminal-link">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  )
}

