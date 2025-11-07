

export default function Footer() {
  return (
    <footer className="mt-20 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 text-gray-700 dark:text-gray-300 py-8 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 text-center">
      
        {/* Copyright */}
        <p className="text-sm font-medium">
          © {new Date().getFullYear()} <span className="font-semibold text-blue-600">My Next.js App</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}