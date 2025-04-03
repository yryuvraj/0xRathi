// This is a simple in-memory implementation
// In a real project, you might want to read from markdown files

export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

const posts: Post[] = [
  {
    slug: "cursor-ai-developer-productivity",
    title: "Cursor AI: A Game-Changer for Developer Productivity",
    date: "2025-04-15",
    excerpt: "Discover how Cursor AI is revolutionizing the way developers write and understand code.",
    content: `
      <p>As a developer always looking for tools to enhance productivity, I've found Cursor AI to be an absolute game-changer in my daily workflow. Let me share why this AI-powered code editor has become an indispensable part of my development toolkit.</p>

      <h2>What Makes Cursor AI Special?</h2>
      <p>Cursor AI isn't just another code editor with basic AI features. It's a thoughtfully designed tool that brings the power of large language models directly into your development environment. Here are some standout features:</p>
      <ul>
        <li>Contextual Code Understanding - It doesn't just autocomplete; it understands your entire codebase</li>
        <li>Intelligent Code Generation - Generates high-quality, context-aware code suggestions</li>
        <li>Natural Language Interactions - Ask questions about your code in plain English</li>
        <li>Code Explanations - Get detailed explanations of complex code blocks</li>
      </ul>

      <h2>Real-World Benefits</h2>
      <p>In my experience, Cursor AI has significantly improved my development workflow in several ways:</p>
      <ul>
        <li>Faster Code Navigation - Quickly understand and navigate large codebases</li>
        <li>Reduced Context Switching - Get answers without leaving your editor</li>
        <li>Better Code Quality - AI-powered suggestions often catch potential issues</li>
        <li>Accelerated Learning - Great for understanding new codebases or frameworks</li>
      </ul>

      <h2>Getting Started with Cursor AI</h2>
      <p>If you're interested in trying Cursor AI, here's how to get started:</p>
      <ol>
        <li>Download Cursor AI from their official website</li>
        <li>Install and set up your preferred language support</li>
        <li>Start with simple queries to get familiar with the AI capabilities</li>
        <li>Gradually incorporate it into your daily coding workflow</li>
      </ol>

      <h2>Final Thoughts</h2>
      <p>While AI coding assistants are becoming increasingly common, Cursor AI stands out for its deep integration with the development workflow and its ability to understand context. Whether you're a seasoned developer or just starting out, it's worth giving Cursor AI a try to experience the future of code editing.</p>
    `,
  },
  {
    slug: "hello-world",
    title: "Hello, World!",
    date: "2025-03-01",
    excerpt: "Welcome to my new blog where I share my thoughts and ideas.",
    content: `
      <p>Welcome to my new blog! This is where I'll be sharing my thoughts, ideas, and experiences.</p>
      <p>I'm excited to start this journey and hope you'll join me along the way.</p>
      <h2>Why I Started This Blog</h2>
      <p>I've always enjoyed writing and wanted a place to share my thoughts with the world.</p>
      <p>This blog will be a collection of my experiences, learnings, and musings on various topics.</p>
    `,
  },
  {
    slug: "building-omilia-with-pygame",
    title: "Building Omilia: A Python Game with Pygame",
    date: "2025-04-01",
    excerpt: "Learn how to create an engaging game using Python and the Pygame library.",
    content: `
      <p>Pygame is a powerful Python library that makes building games accessible and enjoyable for developers of all levels.</p>
      <p>In this post, I'll share my experience creating Omilia, a Python game, and why Pygame is a great choice for game development.</p>
      <h2>Why Pygame?</h2>
      <p>Pygame provides an excellent game development experience with features like:</p>
      <ul>
        <li>Simple sprite and animation handling</li>
        <li>Built-in collision detection</li>
        <li>Event-driven programming model</li>
        <li>Cross-platform compatibility</li>
      </ul>
      <p>These features make it perfect for creating interactive games like Omilia, which you can check out on <a href="https://github.com/yryuvraj/omilia">GitHub</a>.</p>
    `,
  },
  {
    slug: "functional-programming-in-elixir",
    title: "Embracing Functional Programming with Elixir",
    date: "2025-04-01",
    excerpt: "A deep dive into functional programming concepts and how Elixir makes them both powerful and approachable.",
    content: `
      <p>Functional programming has been gaining significant traction in recent years, and Elixir stands out as a language that makes functional concepts both practical and enjoyable.</p>
      <p>Built on the battle-tested Erlang VM, Elixir combines the reliability of Erlang with modern syntax and tooling that developers love.</p>
      <h2>Core Functional Programming Concepts in Elixir</h2>
      <ul>
        <li>Immutability by default - data never changes, it transforms</li>
        <li>Pattern matching - elegant way to destructure and handle data</li>
        <li>Higher-order functions - functions that work with other functions</li>
        <li>Pipeline operator - composing functions in a readable way</li>
      </ul>
      <h2>Why Elixir Shines</h2>
      <p>Elixir's approach to concurrency through the Actor model makes it perfect for modern, distributed systems. The language's immutable data structures and pattern matching make code safer and more predictable.</p>
      <h2>Practical Examples</h2>
      <p>Let's look at how Elixir handles common programming tasks:</p>
      <pre class="code-block"><code class="language-elixir">
# Transform a list using map
numbers = [1, 2, 3, 4, 5]
doubled = Enum.map(numbers, fn x -> x * 2 end)

# Pattern matching in function heads
def fibonacci(0), do: 0
def fibonacci(1), do: 1
def fibonacci(n), do: fibonacci(n-1) + fibonacci(n-2)
      </code></pre>
      <p>The beauty of Elixir lies in how it makes functional programming concepts accessible while maintaining performance and scalability.</p>
    `,
  },
]

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}

