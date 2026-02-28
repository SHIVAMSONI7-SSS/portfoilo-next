"use client";

import { motion } from "framer-motion";
import ImageTrail from "@/components/kokonutui/ImageTrail";

export default function HighliPage() {
  return (
    <main className="min-h-screen w-full bg-[#f8fafc] flex items-center justify-center px-6 py-16 relative overflow-hidden">
      
      {/* 🔳 Background Grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: "20px 30px",
        }}
      />

      {/* 📦 Content */}
      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center gap-12">
        
        {/* 🧠 Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl font-bold text-gray-700 text-center"
        >
          {/* Interactive Image Trail */}
        </motion.h1>

        {/* 🎯 Image Trail Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-3xl"
        >
          <div
            className="w-full h-[400px] sm:h-[500px] relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg"
          >
            <ImageTrail
              items={[
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=300&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=300&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=300&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1537432376769-00a5c2f4c8d2?w=300&auto=format&fit=crop&q=80",
              ]}
              // variant="3"
            />
          </div>
        </motion.div>

        {/* 📝 Subtitle */}
        <p className="text-gray-500 text-center max-w-md">
          Move your cursor around to explore the interactive trail effect.
          Clean visuals. Smooth motion. Real UI feel.
        </p>
      </div>
    </main>
  );
}