"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h3 className="text-2xl font-extrabold text-primary tracking-tight">
          <Link href="/">My<span className="text-blue-600">Blog</span></Link>
        </h3>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 dark:text-gray-200 font-medium">
          <li><Link href="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
          <li><Link href="/about" className="hover:text-blue-600 transition-colors">About</Link></li>
          <li><Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg border-t border-gray-200 dark:border-gray-700">
          <ul className="flex flex-col items-center py-4 gap-4 text-gray-700 dark:text-gray-200 font-medium">
            <li><Link href="/" onClick={() => setIsOpen(false)} className="hover:text-blue-600 transition-colors">Home</Link></li>
            <li><Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-blue-600 transition-colors">About</Link></li>
            <li><Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-blue-600 transition-colors">Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
