import Image from "next/image";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      <Image
        src={post.image}
        alt={post.title}
        width={500}
        height={300}
        className="w-full h-56 object-cover"
      />
      <div className="p-5 space-y-3">
        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
          {post.category}
        </span>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
          {post.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <span>{post.date}</span>
          <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline">
            Read more →
          </Link>
        </div>
      </div>
    </div>
  );
}
