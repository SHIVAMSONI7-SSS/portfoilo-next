"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import ThreeDCarousel from "@/components/kokonutui/carousel";
import TextPressure from "@/components/kokonutui/TextPressure";
import TrueFocus from "@/components/kokonutui/TrueFocus";
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
    <main className="min-h-screen w-full bg-[#f8fafc] relative overflow-x-hidden flex flex-col items-center px-4 sm:px-6 py-10 md:py-20">
      
      {/* ✨ Background Grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
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

      {/* 📦 HERO SECTION */}
      <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        
        {/* 🧠 CONTENT (Always Top on Mobile) */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left order-1">
          
          {/* ⚡ NAMASTE Element */}
          <div className="w-full h-20 sm:h-24 md:h-36 flex items-center overflow-visible mb-2">
            <TextPressure
              text="NAMASTE!"
              flex
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#14b8a6" 
              minFontSize={32} 
            />
          </div>

          {/* Name Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-800 leading-tight"
          >
            I'm <span className="text-teal-500">Shivam Soni</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-600 mt-2 h-[1.2em]"
          >
            <Typewriter
              words={["AI & ML Learner", "Data Analyst", "Designer", "Builder"]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center md:justify-start gap-3 mt-8 md:mt-12"
          >
            {[
              { icon: Linkedin, link: "#" },
              { icon: Github, link: "#" },
              { icon: Mail, link: "#" },
              { icon: Brain, link: "#" },
              { icon: BarChart3, link: "#" },
              { icon: Palette, link: "#" },
              { icon: Share2, link: "#" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.link}
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-teal-400 transition-all duration-300 group"
                >
                  <Icon className="text-gray-600 group-hover:text-teal-500" size={18} />
                </a>
              );
            })}
          </motion.div>
        </div>

        {/* 🎯 CAROUSEL (Now Bottom on Mobile) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full flex justify-center items-center order-2 md:order-2 mt-10 md:mt-0"
        >
          <div className="w-[260px] sm:w-[350px] md:w-[480px] aspect-square">
            <ThreeDCarousel />
          </div>
        </motion.div>
      </div>

      {/* 🛠️ SKILLS SPOTLIGHT (TrueFocus) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="relative z-10 mt-16 md:mt-24 w-full max-w-5xl px-4 py-10 border-t border-slate-200/50"
      >
        <p className="text-center text-slate-400 text-xs md:text-sm font-semibold mb-8 uppercase tracking-[0.2em]">
          Core Expertise
        </p>
        
        {/* Alignment & Scaling Fix for Mobile */}
        <div className="w-full flex justify-center overflow-x-hidden">
          <div className="scale-[0.65] sm:scale-90 md:scale-110 origin-center transition-transform duration-500">
            <TrueFocus 
              sentence="Python Machine-Learning Data-Analysis NextJS Canva"
              manualMode={false}
              blurAmount={5}
              borderColor="#14b8a6"
              animationDuration={0.4}
              pauseBetweenAnimations={1}
            />
          </div>
        </div>
      </motion.div>

    </main>
  );
}