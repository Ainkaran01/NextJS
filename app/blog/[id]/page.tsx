"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function BlogDetails() {
  const { id } = useParams(); 

  const mockPosts = [
    {
      id: 1,
      title: "Building a Modern Web App with Next.js 14",
      category: "Development",
      date: "Nov 5, 2025",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      content: `
        Learn how to create a full-stack web app using Next.js 14, TypeScript, and Tailwind CSS.
        We'll cover routing, data fetching, and performance optimization tips.
      `,
    },
    {
      id: 2,
      title: "Design Principles for a Better User Experience",
      category: "Design",
      date: "Oct 22, 2025",
      image: "https://images.unsplash.com/photo-1503602642458-232111445657",
      content: `
        Good design starts with empathy — understanding user needs and crafting intuitive interfaces.
      `,
    },
    {
      id: 3,
      title: "How to Optimize Your Website for SEO in 2025",
      category: "Marketing",
      date: "Sep 15, 2025",
      image: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40",
      content: `
        SEO in 2025 focuses on experience, accessibility, and meaningful content that builds trust.
      `,
    },
  ];

  const post = mockPosts.find((p) => p.id === Number(id));

  if (!post) return <p className="text-center mt-20">Post not found 😔</p>;

  return (
    <article className="max-w-4xl mx-auto px-6 py-16 mt-10">
      <Link href="/blog" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to Blogs
      </Link>

      <Image
        src={post.image}
        alt={post.title}
        width={900}
        height={400}
        className="w-full h-80 object-cover rounded-xl shadow-lg"
      />

      <div className="mt-8 space-y-6">
        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white">
          {post.title}
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {post.category} · {post.date}
        </p>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
          {post.content}
        </p>
      </div>
    </article>
  );
}
