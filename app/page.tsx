import Link from "next/link"
import { getAllPosts } from "@/lib/posts"

export default function Home() {
  const posts = getAllPosts()

  return (
    <main className="terminal-main">
      <div className="terminal-prompt mb-6">
        <span className="terminal-user">rathi@blog</span>:<span className="terminal-path">~</span>$ cat welcome.txt
      </div>

      <header className="mb-8 terminal-output">
        <h1 className="text-2xl font-bold mb-2 terminal-heading">Welcome to my Terminal Blog</h1>
        <p className="terminal-text">A collection of thoughts and ideas in terminal format</p>
      </header>

      <div className="terminal-prompt mb-4">
        <span className="terminal-user">rathi@blog</span>:<span className="terminal-path">~</span>$ ls -la posts/
      </div>

      <section className="terminal-output">
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-terminal-border pb-4">
              <article>
                <div className="mb-2 text-sm text-terminal-muted">
                  <span className="terminal-permissions">drwxr-xr-x</span>{" "}
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <h2 className="text-xl font-semibold mb-2">
                  <Link href={`/posts/${post.slug}`} className="terminal-link">
                    <span className="terminal-command">cat</span> {post.title}
                  </Link>
                </h2>
                <p className="text-terminal-muted">{post.excerpt}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

