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
  Code2,
} from "lucide-react";

export default function HomePage() {
  // Organized Project List
  const projects = [
    { name: "LuminaAI", link: "https://luminaai-alpha.vercel.app/" },
    { name: "Vyapar", link: "https://vyapar-iota.vercel.app/" },
    { name: "E-Commerce", link: "https://ecomerce-eight-nu.vercel.app/" },
    { name: "Portfolio V1", link: "https://shivammsoni.vercel.app/" },
    { name: "New-Beige Project", link: "https://neww-beige-nine.vercel.app/" },
    { name: "PowerBI Dashboard", link: "https://powerbi-seven.vercel.app/" },
    { name: "Decision Tree", link: "https://decsiontree.vercel.app/" },
    { name: "Indie Coders", link: "https://indiecoders.online/" },
  ];

  return (
    <main className="min-h-screen w-full bg-[#f8fafc] relative overflow-hidden flex items-center justify-center px-6 py-16">
      
      {/* Background Grid */}
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

      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-600 text-xs font-bold mb-6 tracking-wide uppercase"
          >
            <Sparkles size={14} className="animate-pulse" />
            Explore My Work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-gray-700 leading-tight"
          >
            Hi, I'm <span className="text-teal-500">Shivam Soni</span>
          </motion.h1>

          <motion.h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mt-4 h-[1.2em]">
            <Typewriter
              words={["AI & ML Learner", "Data Analyst", "Designer", "Builder"]}
              loop cursor cursorStyle="|"
              typeSpeed={70} deleteSpeed={40} delaySpeed={1500}
            />
          </motion.h2>

          {/* PROJECTS LIST SECTION */}
          <div className="mt-10">
            <h3 className="text-gray-400 font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
              <Code2 size={16} /> Featured Projects
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projects.map((proj, idx) => (
                <motion.a
                  key={idx}
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex items-center justify-between px-4 py-3 bg-white border border-slate-200 rounded-xl hover:border-teal-500 hover:shadow-md transition-all duration-300"
                >
                  <span className="text-gray-700 font-medium group-hover:text-teal-600">
                    {proj.name}
                  </span>
                  <ExternalLink size={14} className="text-gray-400 group-hover:text-teal-500 group-hover:-translate-y-0.5 transition-transform" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap justify-center md:justify-start gap-4 mt-10"
          >
            {[
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Github, label: "GitHub" },
              { icon: Mail, label: "Mail" },
              { icon: Brain, label: "AI/ML" },
              { icon: BarChart3, label: "Data" },
              { icon: Palette, label: "Design" },
              { icon: Share2, label: "Social" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon className="text-gray-600 hover:text-teal-500" size={18} />
                </a>
              );
            })}
          </motion.div>
        </div>

        {/* RIGHT CONTENT - Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full flex justify-center lg:justify-end"
        >
          <div className="w-[300px] sm:w-[400px] lg:w-[450px]">
            <ThreeDCarousel />
          </div>
        </motion.div>
      </div>
    </main>
  );
}