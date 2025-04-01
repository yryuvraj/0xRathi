import { getAllPosts, getPostBySlug } from "@/lib/posts"
import Link from "next/link"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="terminal-main">
      <div className="terminal-prompt mb-4">
        <span className="terminal-user">rathi@blog</span>:<span className="terminal-path">~/posts</span>$ cd ..
      </div>

      <Link href="/" className="text-sm text-terminal-link hover:underline mb-6 inline-block">
        ← Back to home
      </Link>

      <div className="terminal-prompt mb-4">
        <span className="terminal-user">rathi@blog</span>:<span className="terminal-path">~/posts</span>$ cat{" "}
        {params.slug}.md
      </div>

      <article className="terminal-output">
        <header className="mb-6">
          <div className="mb-2 text-sm text-terminal-muted">
            <span className="terminal-permissions">-rw-r--r--</span>{" "}
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <h1 className="text-2xl font-bold terminal-heading">{post.title}</h1>
        </header>

        <div className="terminal-prose" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </main>
  )
}

