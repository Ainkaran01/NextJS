"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24 mt-10">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-10 
                   bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent"
      >
        About Our Blog
      </motion.h1>

      {/* Intro Paragraphs */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
      >
        <p>
          Welcome to{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            My Blog
          </span>{" "}
          — your go-to place for{" "}
          <span className="font-medium">
            web development, modern technologies, coding tips, and creative
            design ideas
          </span>
          .
        </p>

        <p>
          Our mission is simple — make learning development practical,
          exciting, and community-driven. Whether you are a beginner learning
          HTML or an experienced developer exploring Next.js, you wll find
          valuable tutorials, insights, and project breakdowns.
        </p>

        <p>
          This blog began with the belief that knowledge grows when shared. We
          dive into topics that inspire — from full-stack app building to
          mastering frameworks, design thinking, and performance optimization.
        </p>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 
                   border border-gray-200 dark:border-gray-700 rounded-3xl p-8 mt-12 shadow-xl"
      >
        <h2 className="text-3xl font-bold mb-5 text-gray-800 dark:text-white flex items-center gap-2">
          🌍 What You’ll Find Here
        </h2>

        <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 dark:text-gray-300">
          {[
            "🚀 Tutorials on React, Next.js, Node.js, and Django",
            "💡 Coding tips and best practices",
            "🎨 Frontend design and UI/UX ideas",
            "🧠 Real-world problem-solving breakdowns",
            "📚 Articles on trends, tools, and productivity",
          ].map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              viewport={{ once: true }}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-xl px-4 py-3 
                         border border-gray-100 dark:border-gray-700 hover:border-blue-500/50 
                         transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Call To Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-20"
      >
        <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">
          Join Our Developer Community 💬
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Got ideas, topic requests, or want to collaborate?{" "}
          <Link
            href="/contact"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            Reach out here
          </Link>{" "}
          — we’d love to connect with you!
        </p>
      </motion.div>
    </section>
  );
}
