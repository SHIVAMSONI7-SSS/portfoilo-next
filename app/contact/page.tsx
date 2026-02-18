"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, User, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  const [status, setStatus] = useState<"CLOSED" | "FORM" | "SENDING" | "SUCCESS">("CLOSED");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("SENDING");
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/mykdjllo", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setTimeout(() => setStatus("SUCCESS"), 800);
      } else {
        setStatus("FORM");
      }
    } catch (error) {
      setStatus("FORM");
    }
  }

  return (
    <main className="min-h-screen bg-[#fafaf9] flex items-center justify-center p-6 overflow-hidden">
      
      <div className="max-w-md w-full relative">
        <AnimatePresence mode="wait">
          
          {/* --- 1. INTERACTIVE MAILBOX --- */}
          {status === "CLOSED" && (
            <motion.div 
              key="mailbox"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0, transition: { duration: 0.4 } }}
              onClick={() => setStatus("FORM")}
              className="cursor-pointer group relative flex flex-col items-center"
            >
              <div className="relative">
                {/* Mailbox Body */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="w-48 h-40 bg-orange-500 rounded-t-[3rem] rounded-b-xl shadow-2xl flex items-center justify-center text-white relative z-10"
                >
                  <Mail size={80} strokeWidth={1} className="group-hover:scale-110 transition-transform" />
                </motion.div>
                
                {/* Mailbox Lever (Handle) */}
                <motion.div 
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 90 }}
                  className="absolute -left-4 top-20 w-2 h-16 bg-orange-700 rounded-full origin-top transition-all duration-500"
                >
                  <div className="absolute bottom-0 -left-2 w-6 h-6 bg-red-600 rounded-full shadow-md" />
                </motion.div>
              </div>

              <motion.div 
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="mt-10 flex items-center gap-2 text-orange-500 font-bold tracking-[0.3em] uppercase text-[10px]"
              >
                Click to Open <ArrowRight size={12} />
              </motion.div>
            </motion.div>
          )}

          {/* --- 2. THE FORM (FOLDING EFFECT) --- */}
          {(status === "FORM" || status === "SENDING") && (
            <motion.div
              key="form"
              initial={{ scale: 0, rotate: -10, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ 
                scale: [1, 0.5, 0],
                rotate: [0, 20, 45],
                y: [0, -100, -200],
                opacity: 0,
                transition: { duration: 0.8, ease: "backIn" }
              }}
              className="bg-white border-2 border-slate-100 rounded-[2.5rem] shadow-2xl overflow-hidden origin-bottom"
            >
              <div className="bg-orange-500 p-6 text-center text-white">
                <h2 className="text-xl font-bold tracking-tighter uppercase italic">Express Delivery</h2>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-4">
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-orange-500 transition-colors" size={18} />
                  <input required name="name" type="text" placeholder="Full Name" className="input-style" />
                </div>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-orange-500 transition-colors" size={18} />
                  <input required name="email" type="email" placeholder="Email" className="input-style" />
                </div>
                <div className="relative group">
                  <MessageSquare className="absolute left-4 top-4 text-slate-300 group-focus-within:text-orange-500 transition-colors" size={18} />
                  <textarea required name="message" rows={4} placeholder="Your Message" className="input-style pl-12 pt-4" />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={status === "SENDING"}
                  className="w-full bg-orange-500 py-4 rounded-2xl text-white font-bold tracking-widest uppercase text-xs shadow-lg shadow-orange-200 overflow-hidden relative"
                >
                  <span className="relative z-10">
                    {status === "SENDING" ? "Folding Letter..." : "Deal Message"}
                  </span>
                  {status === "SENDING" && (
                    <motion.div 
                      className="absolute inset-0 bg-orange-600"
                      initial={{ x: "-100%" }}
                      animate={{ x: "0%" }}
                      transition={{ duration: 0.8 }}
                    />
                  )}
                </motion.button>
              </form>
            </motion.div>
          )}

          {/* --- 3. THE KABOOTAR (PIGEON) PARALLAX --- */}
          {status === "SUCCESS" && (
            <div className="relative flex flex-col items-center">
              <motion.div
                initial={{ x: -200, y: 200, opacity: 0, rotate: -20 }}
                animate={{ 
                  x: [0, 150, 400, 800], 
                  y: [0, -100, -250, -500],
                  rotate: [0, -10, -20, -30],
                  opacity: [0, 1, 1, 0],
                  scale: [0.5, 1.2, 1, 0.5]
                }}
                transition={{ duration: 4, ease: "circOut" }}
                className="text-8xl relative"
              >
                {/* Flapping Wings Effect */}
                <motion.span
                  animate={{ scaleY: [1, 0.7, 1] }}
                  transition={{ repeat: Infinity, duration: 0.3 }}
                  className="inline-block"
                >
                  🕊️
                </motion.span>
                {/* Letter in beak */}
                <motion.div 
                  className="absolute top-12 left-0 w-6 h-4 bg-white border border-slate-200 rounded-sm shadow-sm"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 0.5 }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: 1.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-green-500" size={32} />
                </div>
                <h2 className="text-3xl font-light text-slate-800">Mail <span className="font-bold">Deployed!</span></h2>
                <p className="text-slate-400 font-light mt-2 italic text-sm">The Joker's messenger is on it.</p>
                <button 
                  onClick={() => setStatus("CLOSED")}
                  className="mt-10 px-6 py-2 border border-slate-200 rounded-full text-[10px] uppercase tracking-widest text-slate-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all"
                >
                  Send another letter
                </button>
              </motion.div>
            </div>
          )}

        </AnimatePresence>
      </div>

      <style jsx>{`
        .input-style {
          width: 100%;
          padding: 1rem 1rem 1rem 3rem;
          background: #f8fafc;
          border: 1px solid #f1f5f9;
          border-radius: 1.2rem;
          font-size: 0.875rem;
          outline: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .input-style:focus {
          border-color: #f97316;
          background: white;
          box-shadow: 0 10px 25px -5px rgba(249, 115, 22, 0.1);
        }
      `}</style>
    </main>
  );
}