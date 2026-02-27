"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  Linkedin,
  Github,
  Mail,
  Brain,
  BarChart3,
  Palette,
  Share2,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-[#f8fafc] relative overflow-hidden flex items-center justify-center px-6 py-16">
      {/* ✨ Top Fade Grid Background */}
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

      {/* 📦 Content Container */}
      <div className="relative z-10 text-center max-w-3xl w-full">
        
        {/* 👋 Heading */}
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

        {/* 💻 Typewriter Roles */}
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
              "Canva Designer",
              "Social Media Creator",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </motion.h2>

        {/* 📝 Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-500 mt-8 leading-relaxed text-sm sm:text-base max-w-xl mx-auto"
        >
          I build creative digital experiences blending design,
          analytics, and AI-driven solutions.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-gray-400 mt-2 text-sm sm:text-base"
        >
          Passionate about Canva design, data storytelling,
          and machine learning innovation.
        </motion.p>

        {/* 🔗 Social / Skill Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-5 mt-10"
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
                <Icon className="text-gray-600 hover:text-teal-500 transition-colors" size={20} />
              </a>
            );
          })}
        </motion.div>
      </div>
    </main>
  );
}