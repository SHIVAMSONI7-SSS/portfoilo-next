"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import ThreeDCarousel from "@/components/kokonutui/carousel";
import {
  Linkedin,
  Github,
  Mail,
  Brain,
  BarChart3,
  Palette,
  Share2,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-[#f8fafc] relative overflow-hidden flex items-center justify-center px-6 py-16">
      
      {/* ✨ Background Grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: "20px 30px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
        }}
      />

      {/* 📦 MAIN GRID */}
      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* 🧠 LEFT: TEXT & PROJECT */}
        <div className="text-center md:text-left">

          {/* Featured Project Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-600 text-xs font-bold mb-6 tracking-wide uppercase"
          >
            <Sparkles size={14} className="animate-pulse" />
            New Project: LuminaAI
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-700 leading-tight"
          >
            Hi, I'm{" "}
            <span className="text-teal-500">
              Shivam Soni
            </span>
          </motion.h1>

          {/* Typewriter */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-5xl font-semibold text-gray-800 mt-4 h-[1.2em]"
          >
            <Typewriter
              words={[
                "AI & ML Learner",
                "Data Analyst",
                "Designer",
                "Builder",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-500 mt-6 max-w-md mx-auto md:mx-0 text-lg"
          >
            I build clean digital products combining data, design,
            and real-world problem solving.
          </motion.p>

          {/* 🚀 PROJECT ACTION BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex flex-wrap justify-center md:justify-start gap-4"
          >
            <a
              href="https://luminaai-alpha.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-2xl font-semibold hover:bg-teal-600 transition-all duration-300 shadow-xl shadow-gray-200 hover:shadow-teal-200 hover:-translate-y-1"
            >
              Explore LuminaAI
              <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>

          {/* Icons Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap justify-center md:justify-start gap-4 mt-10"
          >
            {[
              { icon: Linkedin, link: "#", label: "LinkedIn" },
              { icon: Github, link: "#", label: "GitHub" },
              { icon: Mail, link: "#", label: "Mail" },
              { icon: Brain, link: "#", label: "AI/ML" },
              { icon: BarChart3, link: "#", label: "Data" },
              { icon: Palette, link: "#", label: "Design" },
              { icon: Share2, link: "#", label: "Social" },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <a
                  key={index}
                  href={item.link}
                  title={item.label}
                  className="
                    w-12 h-12 sm:w-14 sm:h-14
                    flex items-center justify-center
                    rounded-xl bg-white/80 backdrop-blur-sm
                    border border-slate-200
                    shadow-sm hover:shadow-xl
                    hover:-translate-y-1 hover:border-teal-200
                    transition-all duration-300
                  "
                >
                  <Icon
                    className="text-gray-600 hover:text-teal-500 transition-colors"
                    size={20}
                  />
                </a>
              );
            })}
          </motion.div>
        </div>

        {/* 🎯 RIGHT: CAROUSEL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="w-full flex justify-center"
        >
          <div className="w-[280px] sm:w-[340px] md:w-[400px] lg:w-[450px]">
            <ThreeDCarousel />
          </div>
        </motion.div>
      </div>
    </main>
  );
}