"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Github, 
  Mail, 
  FileText, 
  LayoutGrid, 
  BarChart3, 
  Share2 
} from 'lucide-react';

// --- Multi-Word Typewriter Component ---

const Typewriter = () => {
  const words = [
    "AI & ML Learner",
    "Canva Designer",
    "Social Media Creator",
    "Web Developer"
  ];
  
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1500);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <div className="inline-flex items-center min-h-[40px]">
      <span className="text-slate-400 font-light tracking-wide">
        {words[index].substring(0, subIndex)}
      </span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="w-[2px] h-[1em] bg-orange-500 ml-1 inline-block"
      />
    </div>
  );
};

// --- Social Icon Component ---

const SocialIcon = ({ icon: Icon, label, delay }: { icon: any, label: string, delay: number }) => (
  <motion.a
    href="#"
    initial={{ y: 0, opacity: 0 }}
    animate={{ 
      y: [0, -10, 0],
      opacity: 1 
    }}
    transition={{ 
      y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: delay * 0.2 },
      opacity: { duration: 0.5, delay: 0.8 + (delay * 0.1) }
    }}
    whileHover={{ 
      scale: 1.1, 
      boxShadow: "0 15px 30px -10px rgba(249, 115, 22, 0.2)",
    }}
    className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-white rounded-full border border-slate-200/60 shadow-sm text-slate-400 hover:text-orange-500 hover:border-orange-100 transition-all duration-300"
  >
    <Icon size={20} strokeWidth={1.2} />
    <span className="absolute -bottom-8 text-[10px] font-medium uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity text-orange-500/80 whitespace-nowrap">
      {label}
    </span>
  </motion.a>
);

// --- Main Page Component ---

export default function LandingPage() {
  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn" },
    { icon: Github, label: "GitHub" },
    { icon: Mail, label: "Email" },
    { icon: FileText, label: "Resume" },
    { icon: LayoutGrid, label: "Projects" },
    { icon: BarChart3, label: "Analytics" },
    { icon: Share2, label: "Share" },
  ];

  return (
    <main className="min-h-screen bg-[#fafaf9] flex flex-col items-center justify-center px-6 selection:bg-orange-100 selection:text-orange-900 overflow-hidden">
      
      {/* Background Decorative Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-15%] left-[-5%] w-[50%] h-[50%] rounded-full bg-orange-50/50 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-stone-100 blur-[100px]" />
      </div>

      <section className="relative z-10 max-w-4xl w-full text-center flex flex-col items-center space-y-12">
        
        {/* Hero Text */}
        <div className="space-y-2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="text-4xl md:text-7xl font-light tracking-tight text-slate-800"
          >
            Hi, I&apos;m <span className="text-orange-500 font-normal">Shivam Soni</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-3xl"
          >
            <Typewriter />
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto font-light"
        >
          Blending design with <span className="text-slate-600 font-medium">machine learning</span> to create
          interactive digital solutions. Focused on data storytelling and minimalist aesthetics.
        </motion.p>

        {/* Action Icons Row */}
        <div className="flex flex-wrap justify-center gap-5 md:gap-7 pt-2">
          {socialLinks.map((link, index) => (
            <SocialIcon 
              key={link.label} 
              icon={link.icon} 
              label={link.label} 
              delay={index} 
            />
          ))}
        </div>

      </section>

      {/* Footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-slate-300 font-light">
          Built with precision • 2026
        </span>
      </motion.div>
    </main>
  );
}