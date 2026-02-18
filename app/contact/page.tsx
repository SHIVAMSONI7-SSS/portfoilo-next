"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, User, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  const [status, setStatus] = useState<"CLOSED" | "OPENING" | "FORM" | "SENDING" | "SUCCESS">("CLOSED");

  const openMailbox = () => {
    setStatus("OPENING");
    setTimeout(() => setStatus("FORM"), 600); // Door khulne ka wait
  };

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
        setTimeout(() => setStatus("SUCCESS"), 1000);
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
          
          {/* --- 1. MAILBOX (WITH OPENING DOOR) --- */}
          {(status === "CLOSED" || status === "OPENING") && (
            <motion.div 
              key="mailbox-container"
              exit={{ y: 100, opacity: 0 }}
              className="flex flex-col items-center cursor-pointer"
              onClick={openMailbox}
            >
              <div className="relative perspective-1000">
                {/* Mailbox Body */}
                <div className="w-48 h-36 bg-orange-600 rounded-t-full relative z-0 shadow-2xl flex items-center justify-center text-white/20">
                   <Mail size={60} />
                </div>

                {/* Front Door Animation */}
                <motion.div 
                  initial={{ rotateX: 0 }}
                  animate={{ rotateX: status === "OPENING" ? -110 : 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0 bg-orange-500 rounded-t-full border-b-4 border-orange-700 origin-bottom z-20 flex items-center justify-center text-white"
                >
                  <Mail size={60} strokeWidth={1.5} />
                  {/* Handle */}
                  <div className="absolute top-4 right-4 w-3 h-8 bg-orange-800 rounded-full" />
                </motion.div>

                {/* Internal Form Preview (Coming out) */}
                {status === "OPENING" && (
                  <motion.div 
                    initial={{ y: 0, opacity: 0 }}
                    animate={{ y: -40, opacity: 1 }}
                    className="absolute inset-x-4 top-0 h-20 bg-white rounded-t-lg z-10 shadow-inner"
                  />
                )}
              </div>
              <p className="mt-8 text-orange-500 font-bold tracking-[0.4em] uppercase text-[10px]">Tap to Open</p>
            </motion.div>
          )}

          {/* --- 2. THE FORM --- */}
          {(status === "FORM" || status === "SENDING") && (
            <motion.div
              key="form-card"
              initial={{ y: 200, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ 
                y: -150, 
                scale: 0.2, 
                rotate: 15, 
                opacity: 0,
                transition: { duration: 0.8 } 
              }}
              className="bg-white border-2 border-slate-100 rounded-[2rem] shadow-2xl overflow-hidden shadow-orange-100"
            >
              <div className="bg-orange-500 p-6 text-center text-white uppercase tracking-tighter">
                <h2 className="font-bold">Write to Shivam</h2>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-4">
                <input required name="name" type="text" placeholder="Name" className="input-style" />
                <input required name="email" type="email" placeholder="Email" className="input-style" />
                <textarea required name="message" rows={4} placeholder="Your message..." className="input-style pt-3" />
                <button 
                  disabled={status === "SENDING"}
                  className="w-full bg-orange-500 py-4 rounded-xl text-white font-bold tracking-widest uppercase text-xs hover:bg-orange-600 transition-colors"
                >
                  {status === "SENDING" ? "Processing..." : "Deal Message"}
                </button>
              </form>
            </motion.div>
          )}

          {/* --- 3. SLOW PIGEON ANIMATION --- */}
          {status === "SUCCESS" && (
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ x: -300, y: 150, opacity: 0 }}
                animate={{ 
                  x: [-200, 100, 400, 900], 
                  y: [100, 0, -100, -400],
                  opacity: [0, 1, 1, 0],
                  rotate: [0, -5, -15, -25]
                }}
                transition={{ duration: 6, ease: "linear" }} // Slowed down from 3s to 6s
                className="text-8xl relative mb-12"
              >
                <motion.span
                  animate={{ scaleY: [1, 0.6, 1] }}
                  transition={{ repeat: Infinity, duration: 0.5 }} // Smooth wing flap
                  className="inline-block"
                >
                  🕊️
                </motion.span>
                {/* Small Paper in Beak */}
                <div className="absolute top-10 left-0 w-5 h-3 bg-white border border-slate-200 shadow-sm rotate-12" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-center"
              >
                <CheckCircle2 className="text-green-500 mx-auto mb-4" size={48} />
                <h2 className="text-2xl font-bold text-slate-800">Message Delivered!</h2>
                <p className="text-slate-400 font-light mt-1">Kabootar has left the building.</p>
                <button 
                  onClick={() => setStatus("CLOSED")}
                  className="mt-10 text-orange-500 font-bold uppercase tracking-widest text-[10px] hover:underline"
                >
                  Send New Mail
                </button>
              </motion.div>
            </div>
          )}

        </AnimatePresence>
      </div>

      <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        .input-style {
          width: 100%;
          padding: 0.8rem 1rem;
          background: #f8fafc;
          border: 1px solid #f1f5f9;
          border-radius: 1rem;
          font-size: 0.875rem;
          outline: none;
        }
        .input-style:focus {
          border-color: #f97316;
          background: white;
        }
      `}</style>
    </main>
  );
}