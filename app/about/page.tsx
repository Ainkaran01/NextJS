import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 mt-10">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800 dark:text-white">
        About Our Blog
      </h1>

      <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p className="text-lg">
          Welcome to <span className="font-semibold text-blue-600">My Blog</span> — a
          space where we explore everything about <span className="font-medium">web development,
          modern technologies, coding tips, and creative design ideas</span>.
        </p>

        <p>
          Our goal is simple: to make learning development more practical, exciting, and community-driven.
          Whether you are a beginner learning HTML or an experienced developer exploring Next.js,
          you’ll find valuable insights, tutorials, and real-world projects shared here.
        </p>

        <p>
          This blog was started with the belief that sharing knowledge helps everyone grow.
          We write about topics that inspire us — from building full-stack applications and understanding frameworks
          to improving design thinking and performance optimization.
        </p>

        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 mt-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
            🌍 What You’ll Find Here
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>🚀 Tutorials on React, Next.js, Node.js, and Django</li>
            <li>💡 Coding tips and best practices</li>
            <li>🎨 Frontend design and UI/UX ideas</li>
            <li>🧠 Problem-solving techniques and real project breakdowns</li>
            <li>📚 Articles on technology trends and productivity tools</li>
          </ul>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
            Join Our Developer Community 💬
          </h3>
          <p>
            We love connecting with readers and fellow developers!  
            If you have suggestions, topic requests, or want to collaborate, feel free to{" "}
            <Link
              href="/contact"
              className="text-blue-600 hover:underline font-medium"
            >
              reach out
            </Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
