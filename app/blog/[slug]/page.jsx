import BlogPostDetail from "@/components/blog-post-detail";

// This would typically come from your CMS or database
const mockPost = {
  id: "1",
  title: "Building Modern Web Applications with Next.js and React",
  excerpt:
    "Discover the power of server-side rendering, static site generation, and the latest features in Next.js 15 to create blazing-fast web applications.",
  date: "March 15, 2024",
  readTime: 12,
  image: "/cardimg/1.jpg",
  tags: ["Next.js", "React", "Web Development", "JavaScript"],
  author: {
    name: "Sarah Johnson",
    role: "Senior Frontend Engineer",
    avatar: "/placeholder-user.jpg",
    bio: "Passionate about building accessible, performant web experiences. I specialize in React, Next.js, and modern web technologies.",
  },
  tableOfContents: [
    { id: "introduction", title: "Introduction" },
    { id: "getting-started", title: "Getting Started" },
    { id: "server-components", title: "Server Components" },
    { id: "routing", title: "App Router" },
    { id: "performance", title: "Performance Optimization" },
    { id: "conclusion", title: "Conclusion" },
  ],
  content: [
    {
      type: "heading",
      id: "introduction",
      text: "Introduction",
    },
    {
      type: "paragraph",
      text: "Next.js has revolutionized the way we build React applications. With its powerful features like server-side rendering, static site generation, and the new App Router, developers can create highly performant and SEO-friendly applications with ease.",
    },
    {
      type: "paragraph",
      text: "In this comprehensive guide, we'll explore the latest features in Next.js 15 and learn how to leverage them to build modern web applications that are fast, scalable, and maintainable.",
    },
    {
      type: "heading",
      id: "getting-started",
      text: "Getting Started",
    },
    {
      type: "paragraph",
      text: "To get started with Next.js, you'll need to have Node.js installed on your machine. Once you have Node.js set up, you can create a new Next.js application using the following command:",
    },
    {
      type: "code",
      code: "npx create-next-app@latest my-app\ncd my-app\nnpm run dev",
    },
    {
      type: "paragraph",
      text: "This will create a new Next.js project with all the necessary dependencies and configuration files. The development server will start on http://localhost:3000.",
    },
    {
      type: "heading",
      id: "server-components",
      text: "Server Components",
    },
    {
      type: "paragraph",
      text: "React Server Components are one of the most exciting features in Next.js 15. They allow you to render components on the server, reducing the amount of JavaScript sent to the client and improving performance.",
    },
    {
      type: "list",
      items: [
        "Zero client-side JavaScript by default",
        "Direct access to backend resources",
        "Improved performance and SEO",
        "Automatic code splitting",
      ],
    },
    {
      type: "paragraph",
      text: "Here's an example of a simple server component:",
    },
    {
      type: "code",
      code: "// app/posts/page.jsx\nexport default async function PostsPage() {\n  const posts = await fetch('https://api.example.com/posts')\n  const data = await posts.json()\n  \n  return (\n    <div>\n      {data.map(post => (\n        <article key={post.id}>\n          <h2>{post.title}</h2>\n          <p>{post.excerpt}</p>\n        </article>\n      ))}\n    </div>\n  )\n}",
    },
    {
      type: "heading",
      id: "routing",
      text: "App Router",
    },
    {
      type: "paragraph",
      text: "The App Router is a new routing system in Next.js that provides a more intuitive and powerful way to structure your application. It uses the file system to define routes and supports nested layouts, loading states, and error boundaries.",
    },
    {
      type: "quote",
      text: "The App Router represents a fundamental shift in how we think about routing in React applications. It's not just about navigation—it's about creating a better user experience through thoughtful data loading and error handling.",
    },
    {
      type: "heading",
      id: "performance",
      text: "Performance Optimization",
    },
    {
      type: "paragraph",
      text: "Next.js provides several built-in optimizations to ensure your application performs well. These include automatic image optimization, font optimization, and script optimization.",
    },
    {
      type: "list",
      items: [
        "Image optimization with next/image",
        "Automatic font optimization",
        "Code splitting and lazy loading",
        "Static and dynamic rendering",
        "Incremental Static Regeneration",
      ],
    },
    {
      type: "heading",
      id: "conclusion",
      text: "Conclusion",
    },
    {
      type: "paragraph",
      text: "Next.js continues to push the boundaries of what's possible with React. By leveraging its powerful features, you can build applications that are not only fast and performant but also provide an excellent developer experience.",
    },
    {
      type: "paragraph",
      text: "Whether you're building a simple blog or a complex web application, Next.js provides the tools and features you need to succeed. Start exploring these features today and see how they can transform your development workflow.",
    },
  ],
  relatedPosts: [
    {
      id: "2",
      title: "Understanding React Server Components",
      readTime: 8,
      image: "/react-components.png",
    },
    {
      id: "3",
      title: "Optimizing Web Performance in 2024",
      readTime: 10,
      image: "/web-performance-concept.png",
    },
    {
      id: "4",
      title: "The Future of Web Development",
      readTime: 6,
      image: "/future-technology-cityscape.png",
    },
  ],
  previousPost: {
    id: "0",
    title: "Introduction to Modern JavaScript",
  },
  nextPost: {
    id: "2",
    title: "Understanding React Server Components",
  },
};

export default function BlogPostPage({ params }) {
  // In a real application, you would fetch the post data based on params.slug
  return <BlogPostDetail post={mockPost} />;
}
