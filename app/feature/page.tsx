"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pickaxe, Mountain, Gem, Map, Compass, HardHat, Layers } from 'lucide-react';

export default function GeologyPage() {
  const [isMined, setIsMined] = useState(false);
  const [isBreaking, setIsBreaking] = useState(false);

  // Animation trigger
  const handleMine = () => {
    setIsBreaking(true);
    setTimeout(() => setIsMined(true), 1200); // 1.2s baad reveal
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] overflow-hidden">
      <AnimatePresence>
        {!isMined ? (
          /* --- STARTING MINING ANIMATION --- */
          <motion.div
            key="loader"
            exit={{ opacity: 0, scale: 1.5, filter: "blur(20px)" }}
            className="fixed inset-0 z-[300] bg-slate-900 flex flex-col items-center justify-center cursor-none"
            onClick={handleMine}
          >
            {/* Custom Pickaxe Cursor */}
            <motion.div 
              className="fixed pointer-events-none z-[310] text-orange-500"
              animate={{ 
                rotate: isBreaking ? [0, -45, 0] : 0,
                x: isBreaking ? [0, 20, 0] : 0 
              }}
              transition={{ repeat: isBreaking ? Infinity : 0, duration: 0.3 }}
              style={{ left: '55%', top: '40%' }}
            >
              <Pickaxe size={80} strokeWidth={1.5} />
            </motion.div>

            {/* The Rock to be Mined */}
            <motion.div
              animate={isBreaking ? { shake: [0, 10, -10, 0] } : {}}
              className="relative"
            >
              <Mountain 
                size={200} 
                className={`${isBreaking ? 'text-slate-600 animate-pulse' : 'text-slate-700'} transition-colors`}
                strokeWidth={1}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white font-black tracking-[0.5em] text-[10px] uppercase opacity-50">
                  {isBreaking ? "Mining Data..." : "Click to Mine My Journey"}
                </p>
              </div>
            </motion.div>

            <p className="mt-12 text-slate-500 font-mono text-xs uppercase tracking-widest">
              B.Sc Geology • Shivam Soni • IndieCoder
            </p>
          </motion.div>
        ) : (
          /* --- REVEALED GEOLOGY PAGE --- */
          <motion.main
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-7xl mx-auto py-20 px-6 font-sans"
          >
            {/* HEADER */}
            <header className="mb-20 space-y-4">
              <div className="flex items-center gap-2 text-orange-600">
                <HardHat size={20} />
                <span className="text-xs font-black uppercase tracking-[0.4em]">Academic Expedition</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-light text-slate-800 tracking-tighter">
                Earth <span className="font-normal text-orange-600 underline decoration-slate-200 underline-offset-8">Sciences</span>
              </h1>
              <p className="text-slate-400 max-w-xl font-light leading-relaxed">
                Exploring the intersection of Lithosphere and Software. My B.Sc in Geology provides a unique perspective on data patterns and structural analysis.
              </p>
            </header>

            {/* GEOLOGY BENTO GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Core Subjects */}
              <div className="md:col-span-2 bg-white border border-slate-100 p-10 rounded-[2.5rem] shadow-sm flex flex-col justify-between group hover:border-orange-200 transition-colors">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-orange-50 group-hover:text-orange-500 transition-all">
                    <Layers size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Stratigraphy & Petrology</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Study of rock layers and their formation. Applying these structural concepts to **Neural Network Architectures** and data layering.
                  </p>
                </div>
                <div className="mt-10 flex gap-3 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                  <span>Igneous</span> • <span>Sedimentary</span> • <span>Metamorphic</span>
                </div>
              </div>

              {/* Card 2: Field Work */}
              <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute -top-10 -right-10 opacity-10">
                  <Compass size={200} />
                </div>
                <div className="z-10">
                  <Map size={32} className="text-orange-500 mb-6" />
                  <h3 className="text-xl font-bold mb-4">Field Surveys</h3>
                  <p className="text-slate-400 text-xs leading-relaxed font-light">
                    Hazaribag Terrain Analysis & Mineral Mapping. Data collection in the wild, processed with Python.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2">
                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                   <span className="text-[10px] uppercase font-bold tracking-widest">Observations Active</span>
                </div>
              </div>

              {/* Card 3: The "Gem" Connection */}
              <div className="bg-orange-500 p-10 rounded-[2.5rem] text-white md:col-span-3 flex items-center justify-between group overflow-hidden relative">
                <div className="space-y-2 relative z-10">
                  <h3 className="text-3xl font-black italic tracking-tighter uppercase leading-none">Why Geology?</h3>
                  <p className="text-sm opacity-90 font-medium">Data is the new oil, and I know how to mine it.</p>
                </div>
                <motion.div 
                  whileHover={{ rotate: 360 }} 
                  transition={{ duration: 1 }}
                  className="bg-white/20 p-6 rounded-full relative z-10"
                >
                  <Gem size={48} />
                </motion.div>
                {/* Decorative background text */}
                <div className="absolute inset-y-0 right-0 text-[120px] font-black text-black/5 select-none pointer-events-none translate-y-10">
                  LITHOS
                </div>
              </div>

            </div>

            <footer className="mt-20 text-center">
              <p className="text-[10px] text-slate-300 uppercase tracking-[0.5em] font-medium italic">
                "From Rocks to Code" — IndieCoder V2.6
              </p>
            </footer>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}