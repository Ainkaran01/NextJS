"use client";
import { useState } from "react";
import PostCard from "@/components/PostCard";

export default function BlogPage() {
  const mockPosts = [
    {
      id: 1,
      title: "Building a Modern Web App with Next.js 14",
      category: "Development",
      date: "Nov 5, 2025",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      excerpt:
        "Learn how to create a full-stack web app using Next.js 14, TypeScript, and Tailwind CSS with best practices for modern development.",
    },
    {
      id: 2,
      title: "Design Principles for a Better User Experience",
      category: "Design",
      date: "Oct 22, 2025",
      image: "https://images.unsplash.com/photo-1503602642458-232111445657",
      excerpt:
        "Explore the key design principles that improve user experience, accessibility, and overall product satisfaction.",
    },
    {
      id: 3,
      title: "How to Optimize Your Website for SEO in 2025",
      category: "Marketing",
      date: "Sep 15, 2025",
      image: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40",
      excerpt:
        "Master the latest SEO strategies for 2025 to boost visibility, rank higher, and attract more traffic to your website.",
    },
    
  ];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "Development", "Design", "Marketing", "Technology"];

  const filteredPosts = mockPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || post.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 mt-10">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800 dark:text-white">
        Latest Blog Posts
      </h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full md:w-1/4 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Blog Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-10">
          No posts found 😔
        </p>
      )}
    </main>
  );
}
