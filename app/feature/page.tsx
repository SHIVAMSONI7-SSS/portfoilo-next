"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Pickaxe, Mountain, Gem, Map, Compass, 
  HardHat, Layers, Microscope, Activity, Globe 
} from 'lucide-react';

export default function GeologySkillsPage() {
  const [isMined, setIsMined] = useState(false);
  const [isBreaking, setIsBreaking] = useState(false);

  const handleMine = () => {
    setIsBreaking(true);
    setTimeout(() => setIsMined(true), 1200);
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] font-sans selection:bg-orange-100">
      <AnimatePresence mode="wait">
        {!isMined ? (
          /* --- MINING ANIMATION (The Entrance) --- */
          <motion.div
            key="loader"
            exit={{ opacity: 0, y: -100, filter: "blur(20px)" }}
            className="fixed inset-0 z-[300] bg-slate-900 flex flex-col items-center justify-center cursor-none"
            onClick={handleMine}
          >
            <motion.div 
              className="fixed pointer-events-none z-[310] text-orange-500"
              animate={{ rotate: isBreaking ? [-20, 20, -20] : 0 }}
              transition={{ repeat: isBreaking ? Infinity : 0, duration: 0.2 }}
              style={{ left: '52%', top: '42%' }}
            >
              <Pickaxe size={60} />
            </motion.div>
            <motion.div animate={isBreaking ? { x: [-2, 2, -2] } : {}}>
              <Mountain size={150} className="text-slate-700" />
            </motion.div>
            <p className="mt-8 text-slate-500 font-bold text-[10px] uppercase tracking-[0.5em]">
              {isBreaking ? "Unearthing Skills..." : "Click to Explore my Geology Base"}
            </p>
          </motion.div>
        ) : (
          /* --- GEOLOGY SKILLS REVEALED --- */
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-6xl mx-auto py-20 px-6"
          >
            {/* HERO SECTION */}
            <header className="mb-24 relative">
              <div className="flex items-center gap-2 text-orange-600 mb-4">
                <HardHat size={18} />
                <span className="text-[10px] font-black uppercase tracking-widest">Academic Portfolio</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-light text-slate-900 tracking-tighter leading-none">
                B.Sc in <br />
                <span className="font-normal text-orange-600">Geology</span>
              </h1>
              <div className="mt-8 flex items-center gap-4 text-slate-400">
                <Globe size={20} strokeWidth={1} />
                <p className="max-w-md text-sm font-light leading-relaxed">
                  Exploring the Earth's history through strata, minerals, and structural data. Combining geological field-work with computational analysis.
                </p>
              </div>
            </header>

            {/* SKILLS BENTO GRID */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              
              {/* Skill 1: Mineralogy */}
              <div className="md:col-span-2 bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-orange-50 group-hover:text-orange-600 mb-6 transition-colors">
                  <Gem size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Mineralogy & Crystallography</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light">
                  Expertise in identifying physical and optical properties of minerals. Understanding atomic structures and crystal systems—concepts I apply to **Data Structures**.
                </p>
              </div>

              {/* Skill 2: Field Mapping */}
              <div className="md:col-span-2 bg-slate-900 p-8 rounded-[2.5rem] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Map size={150} />
                </div>
                <Compass className="text-orange-500 mb-6" size={32} />
                <h3 className="text-xl font-bold mb-3">Geological Field Mapping</h3>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  Hands-on experience in Hazaribag terrain. Using Brunton Compass for strike/dip measurements and creating topographic cross-sections.
                </p>
              </div>

              {/* Skill 3: Petrology */}
              <div className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm">
                <Microscope className="text-slate-400 mb-6" size={28} />
                <h4 className="font-bold text-slate-800 mb-2">Petrology</h4>
                <p className="text-xs text-slate-500 font-light italic">
                  Analyzing Igneous, Sedimentary, and Metamorphic rocks to reconstruct Earth's tectonic past.
                </p>
              </div>

              {/* Skill 4: Structural Geology */}
              <div className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm flex flex-col justify-between">
                <Layers className="text-slate-400 mb-6" size={28} />
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">Structural Analysis</h4>
                  <p className="text-xs text-slate-500 font-light">
                    Decoding folds, faults, and unconformities. Applying "Pattern Recognition" from rocks to **AI Models**.
                  </p>
                </div>
              </div>

              {/* Skill 5: The "Data-Rock" Bridge */}
              <div className="md:col-span-2 bg-orange-600 p-8 rounded-[2.5rem] text-white flex items-center justify-between">
                <div className="space-y-4">
                  <Activity size={32} className="animate-pulse" />
                  <h3 className="text-2xl font-black uppercase tracking-tighter italic">Geology meets AI</h3>
                  <p className="text-xs font-medium opacity-80">
                    Applying Python to process Geological Datasets. Data is my sediment, and I am the pressure that turns it into insights.
                  </p>
                </div>
              </div>

            </div>

            {/* ACADEMIC STATUS */}
            <div className="mt-12 p-8 bg-slate-50 rounded-[2rem] border border-slate-200 flex flex-wrap items-center justify-between gap-6">
               <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Current Status</span>
                  <span className="text-sm font-bold text-slate-800">Pursuing B.Sc in Geology</span>
               </div>
               <div className="h-8 w-px bg-slate-200 hidden md:block" />
               <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Core Interest</span>
                  <span className="text-sm font-bold text-slate-800">Lithology & Tectonics</span>
               </div>
               <div className="h-8 w-px bg-slate-200 hidden md:block" />
               <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Location</span>
                  <span className="text-sm font-bold text-slate-800">Hazaribag, Jharkhand</span>
               </div>
            </div>

            <footer className="mt-24 text-center">
              <p className="text-[9px] text-slate-300 uppercase tracking-[0.6em] font-medium">
                IndieCoder • Geoscientist in Training • 2026
              </p>
            </footer>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}