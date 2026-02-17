"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Poppins } from "next/font/google";
import { Send, CheckCircle2, AlertCircle, Mail, User, MessageSquare } from "lucide-react";

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
    // Added pt-[50px] here for the top space
    <main className={`${poppins.className} min-h-screen bg-[#f8fafc] flex items-center justify-center pt-[50p] p-4 md:px-8 md:pb-8`}>
      
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-teal-50/50 blur-3xl" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-gray-100 blur-3xl" />
      </div>

      <div className="relative w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white/80 backdrop-blur-xl rounded-[2re] shadow-2xl shadow-gray-200/50 border border-white overflow-hidden">
        
        {/* Left Side: Info */}
        <div className="lg:col-span-5 bg-teal-600 p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Let’s build <br /> something <span className="text-teal-200">great.</span>
            </h1>
            <p className="mt-6 text-teal-50/80 text-lg font-light max-w-xs">
              Have a project in mind? Fill out the form and I'll get back to you within 24 hours.
            </p>
          </motion.div>

          <div className="mt-12 space-y-6 relative z-10">
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                <Mail size={20} />
              </div>
              <span className="font-light text-sm md:text-base">hello@yourdomain.com</span>
            </div>
          </div>

          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
        </div>

        {/* Right Side: Form */}
        <div className="lg:col-span-7 p-8 md:p-12 bg-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                  <User size={14} /> Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all placeholder:text-gray-300 text-gray-700"
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
                  placeholder="john@example.com"
                  className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all placeholder:text-gray-300 text-gray-700"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                <MessageSquare size={14} /> Your Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all placeholder:text-gray-300 text-gray-700 resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              className={`
                w-full py-4 rounded-xl font-semibold text-white shadow-lg
                flex items-center justify-center gap-2 transition-all
                ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-teal-500 hover:bg-teal-600 shadow-teal-200"}
              `}
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </motion.button>

            <AnimatePresence>
              {status === "SUCCESS" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-emerald-600 bg-emerald-50 p-4 rounded-xl border border-emerald-100"
                >
                  <CheckCircle2 size={20} />
                  <p className="text-sm font-medium">Got it! I'll reach out shortly.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </main>
  );
}