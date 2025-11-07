"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-24 mt-10">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-center mb-6 
                   bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent"
      >
        Get in Touch
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 text-lg"
      >
        Have a question, feedback, or collaboration idea?  
        Drop a message below — I’d love to hear from you!
      </motion.p>

      {submitted ? (
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center text-green-600 dark:text-green-400 text-lg font-medium mt-10"
        >
          ✅ Thanks for your message! I’ll get back to you soon.
        </motion.p>
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800
                     border border-gray-200 dark:border-gray-700 shadow-xl rounded-3xl p-10 space-y-8"
        >
          {/* Name */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 
                         bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 
                         focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="example@email.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 
                         bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 
                         focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Write your message here..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 
                         bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 
                         focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            ></textarea>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 font-semibold rounded-lg 
                       bg-gradient-to-r from-blue-600 to-purple-600 
                       hover:from-blue-700 hover:to-purple-700 
                       text-white shadow-md transition-all duration-300"
          >
            Send Message 🚀
          </motion.button>
        </motion.form>
      )}

      {/* Contact Info Cards */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="grid sm:grid-cols-3 gap-6 mt-16"
      >
        {[
          {
            icon: <Mail className="w-6 h-6 text-blue-600" />,
            title: "Email",
            value: "hello@myblog.com",
          },
          {
            icon: <Phone className="w-6 h-6 text-blue-600" />,
            title: "Phone",
            value: "+94 71 234 5678",
          },
          {
            icon: <MapPin className="w-6 h-6 text-blue-600" />,
            title: "Location",
            value: "Colombo, Sri Lanka",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
            viewport={{ once: true }}
            className="p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-gray-200 
                       dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-lg 
                       transition-all duration-300 text-center"
          >
            <div className="flex justify-center mb-3">{item.icon}</div>
            <h4 className="font-semibold text-gray-800 dark:text-white">
              {item.title}
            </h4>
            <p className="text-gray-600 dark:text-gray-400">{item.value}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
