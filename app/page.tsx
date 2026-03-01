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
    <main className="min-h-screen w-full bg-[#f8fafc] relative overflow-x-hidden flex flex-col items-center justify-start md:justify-center px-4 sm:px-6 py-8 md:py-12">
      
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

      {/* 📦 MAIN CONTAINER */}
      <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* 🧠 TOP/LEFT: CONTENT */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
          
          {/* ⚡ NAMASTE Fix: Responsive height and font */}
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
              minFontSize={28} // Smaller for phones
            />
          </div>

          {/* Main Heading: Responsive text sizes */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-gray-800 leading-[1.1]"
          >
            I'm <span className="text-teal-500">Shivam Soni</span>
          </motion.h1>

          {/* Typewriter Effect: Adjust height to prevent jumping */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-600 mt-2 h-[1.5em]"
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

          {/* Social Icons: Wrap on small screens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 mt-6 md:mt-10"
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
                  className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-teal-400 transition-all duration-300 group"
                >
                  <Icon className="text-gray-600 group-hover:text-teal-500" size={18} />
                </a>
              );
            } )}
          </motion.div>
        </div>

        {/* 🎯 BOTTOM/RIGHT: CAROUSEL (Order 1 on mobile to show first) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full flex justify-center items-center order-1 md:order-2 mt-4 md:mt-0"
        >
          <div className="w-[240px] sm:w-[320px] md:w-[450px] aspect-square">
            <ThreeDCarousel />
          </div>
        </motion.div>
      </div>

      {/* 🛠️ SKILLS SPOTLIGHT (TrueFocus) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="relative z-10 mt-12 md:mt-20 w-full max-w-4xl px-4 py-6 md:py-8 border-t border-slate-200/50"
      >
        <p className="text-center text-slate-400 text-[10px] md:text-sm font-medium mb-4 md:mb-6 uppercase tracking-widest">
          Expertise Focus
        </p>
        <div className="flex justify-center scale-75 sm:scale-90 md:scale-100">
          <TrueFocus 
            sentence="Python Machine-Learning Data-Analysis next Canva"
            manualMode={false}
            blurAmount={5}
            borderColor="#14b8a6"
            animationDuration={0.5}
            pauseBetweenAnimations={1}
          />
        </div>
      </motion.div>

    </main>
  );
}