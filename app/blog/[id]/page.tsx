"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Post from "@/type/Post";

export default function BlogDetails() {
  const { id } = useParams();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_SITE_URL + "/posts")
      .then((res) => res.json())
      .then((res) => setPosts(res))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  const post = posts.find((p) => p._id === id);

  if (!post) return <p className="text-center mt-20">Post not found 😔</p>;

  return (
    <article className="max-w-4xl mx-auto px-6 py-16 mt-10">
      <Link
        href="/blog"
        className="text-blue-600 hover:underline mb-6 inline-block"
      >
        ← Back to Blogs
      </Link>

      <Image
        src={post.image}
        alt={post.title}
        width={900}
        height={400}
        className="w-full h-80 object-cover rounded-xl shadow-lg"
        loading="eager"
        priority
      />

      <div className="mt-8 space-y-6">
        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white">
          {post.title}
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {post.category} ·{" "}
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
          {post.content}
        </p>
      </div>
    </article>
  );
}
