"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Poppins } from "next/font/google";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Mail,
  User,
  MessageSquare,
} from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function ContactPage() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    const res = await fetch("https://formspree.io/f/mykdjllo", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    setIsSubmitting(false);

    if (res.ok) {
      setStatus("SUCCESS");
      e.target.reset();
      setTimeout(() => setStatus(""), 5000);
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <main
      className={`
        ${poppins.className}
        min-h-screen
        bg-[#f3f5f7]
        flex items-center justify-center
        pt-[120p]     /* 🔥 Navbar safe gap */
        pb-16
        px-4 md:px-8
        relative
      `}
    >
      {/* Background blur decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-teal-50 blur-3xl opacity-60" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-gray-200 blur-3xl opacity-60" />
      </div>

      {/* Container */}
      <div className="relative w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 bg-white/80 backdrop-blur-xl rounded-[2re] shadow-2xl border border-white overflow-hidden">
        
        {/* Left Info Panel */}
        <div className="lg:col-span-5 bg-teal-600 p-8 md:p-12 text-white flex flex-col justify-between relative">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Let’s build <br />
              something <span className="text-teal-200">great.</span>
            </h1>

            <p className="mt-6 text-teal-50/90 text-lg font-light">
              Have a project in mind? Fill out the form and  
              I’ll try to connect with you as soon as possible.
            </p>
          </motion.div>

          <div className="mt-12 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white/10 rounded-xl">
                <Mail size={18} />
              </div>
              <span className="font-light text-sm md:text-base">
                yourmail@example.com
              </span>
            </div>
          </div>

          {/* Decorative blob */}
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-teal-500 rounded-full blur-3xl opacity-40" />
        </div>

        {/* Form Panel */}
        <div className="lg:col-span-7 p-8 md:p-12 bg-white">
          
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                  <User size={14} /> Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full bg-gray-50 rounded-xl p-4 focus:ring-2 focus:ring-teal-500/30 outline-none transition"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                  <Mail size={14} /> Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full bg-gray-50 rounded-xl p-4 focus:ring-2 focus:ring-teal-500/30 outline-none transition"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                <MessageSquare size={14} /> Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Write your message..."
                className="w-full bg-gray-50 rounded-xl p-4 focus:ring-2 focus:ring-teal-500/30 outline-none transition resize-none"
              />
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              disabled={isSubmitting}
              className={`
                w-full py-4 rounded-xl font-medium text-white
                flex items-center justify-center gap-2
                transition-all shadow-lg
                ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-teal-500 hover:bg-teal-600"
                }
              `}
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </motion.button>

            {/* Success / Error */}
            <AnimatePresence>
              {status === "SUCCESS" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-emerald-600 bg-emerald-50 p-4 rounded-xl border"
                >
                  <CheckCircle2 size={18} />
                  <p className="text-sm font-medium">
                    Message sent successfully. I’ll try to connect with you soon.
                  </p>
                </motion.div>
              )}

              {status === "ERROR" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl border"
                >
                  <AlertCircle size={18} />
                  <p className="text-sm font-medium">
                    Something went wrong. Please try again.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

          </form>
        </div>
      </div>
    </main>
  );
}
