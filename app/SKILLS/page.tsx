"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BrainCircuit, Cpu, Sparkles, MessageSquare, 
  Eye, BarChart, Wrench, CheckCircle, Rocket, Globe 
} from 'lucide-react';

const initialSkills = [
  { name: "Machine Learning", icon: BrainCircuit, rank: "A", suit: "♠", desc: "Predictive Models" },
  { name: "Deep Learning", icon: Cpu, rank: "K", suit: "♣", desc: "Neural Networks" },
  { name: "Generative AI", icon: Sparkles, rank: "Q", suit: "♥", desc: "LLMs & Creative" },
  { name: "NLP", icon: MessageSquare, rank: "J", suit: "♦", desc: "Text Processing" },
  { name: "Computer Vision", icon: Eye, rank: "A", suit: "♣", desc: "Image Analysis" },
  { name: "Data Analysis", icon: BarChart, rank: "K", suit: "♠", desc: "Insights & Stats" },
  { name: "Feature Eng.", icon: Wrench, rank: "Q", suit: "♦", desc: "Data Optimization" },
  { name: "Model Eval.", icon: CheckCircle, rank: "J", suit: "♥", desc: "Metrics & Testing" },
  { name: "AI Deployment", icon: Rocket, rank: "A", suit: "♦", desc: "Cloud Scaling" },
  { name: "Web Integration", icon: Globe, rank: "K", suit: "♥", desc: "API & Next.js" },
];

const SkillCard = ({ skill, index, isShuffling }: { skill: any, index: number, isShuffling: boolean }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    if (!isFlipped && !isShuffling) setIsFlipped(true);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isFlipped) {
      timer = setTimeout(() => setIsFlipped(false), 10000);
    }
    return () => clearTimeout(timer);
  }, [isFlipped]);

  // Agar shuffle ho raha hai toh card ko wapas seedha kar do
  useEffect(() => {
    if (isShuffling) setIsFlipped(false);
  }, [isShuffling]);

  return (
    <motion.div 
      layout // Smooth position changing
      className="group perspective-1000 w-full h-[240px] md:h-[300px]"
      onMouseEnter={handleFlip}
      onClick={handleFlip}
    >
      <motion.div
        animate={{ 
          rotateY: isFlipped ? 180 : 0,
          scale: isShuffling ? 0.8 : 1,
          rotateZ: isShuffling ? (index % 2 === 0 ? 5 : -5) : 0
        }}
        transition={{ type: "spring", stiffness: 60, damping: 15 }}
        className="relative w-full h-full preserve-3d cursor-pointer"
      >
        {/* --- FRONT SIDE --- */}
        <div className="absolute inset-0 backface-hidden bg-white border-2 border-slate-100 rounded-2xl shadow-sm p-4 flex flex-col justify-between overflow-hidden">
          <div className="flex flex-col items-start leading-none z-10">
            <span className={`text-xl font-bold ${skill.suit === '♥' || skill.suit === '♦' ? 'text-orange-500' : 'text-slate-800'}`}>
              {skill.rank}
            </span>
            <span className={`text-lg ${skill.suit === '♥' || skill.suit === '♦' ? 'text-orange-500' : 'text-slate-800'}`}>
              {skill.suit}
            </span>
          </div>
          <div className="absolute inset-0 flex justify-center items-center opacity-[0.03] pointer-events-none">
            <skill.icon size={120} strokeWidth={1} />
          </div>
          <div className="flex flex-col items-end leading-none rotate-180 z-10">
            <span className={`text-xl font-bold ${skill.suit === '♥' || skill.suit === '♦' ? 'text-orange-500' : 'text-slate-800'}`}>
              {skill.rank}
            </span>
            <span className={`text-lg ${skill.suit === '♥' || skill.suit === '♦' ? 'text-orange-500' : 'text-slate-800'}`}>
              {skill.suit}
            </span>
          </div>
        </div>

        {/* --- BACK SIDE --- */}
        <div className="absolute inset-0 backface-hidden rotateY-180 bg-orange-500 rounded-2xl p-6 flex flex-col items-center justify-center text-center text-white border-4 border-orange-400">
          <motion.div animate={{ scale: isFlipped ? 1 : 0.8 }} className="bg-white/20 p-4 rounded-full mb-4">
            <skill.icon size={36} />
          </motion.div>
          <h3 className="text-lg md:text-xl font-bold mb-2 tracking-tight">{skill.name}</h3>
          <p className="text-xs md:text-sm opacity-90 font-light leading-snug">{skill.desc}</p>
          <div className="absolute bottom-4 w-12 h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: "100%" }}
              animate={{ width: isFlipped ? "0%" : "100%" }}
              transition={{ duration: 10, ease: "linear" }}
              className="h-full bg-white"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function SkillsPage() {
  const [skillsList, setSkillsList] = useState(initialSkills);
  const [isShuffling, setIsShuffling] = useState(true);

  const shuffleSkills = () => {
    setIsShuffling(true);
    setTimeout(() => {
      const shuffled = [...initialSkills].sort(() => Math.random() - 0.5);
      setSkillsList(shuffled);
      setIsShuffling(false);
    }, 800); // Shuffle animation duration
  };

  // Initial load shuffle
  useEffect(() => {
    const timer = setTimeout(() => setIsShuffling(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Interval shuffle every 30 seconds
  useEffect(() => {
    const interval = setInterval(shuffleSkills, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#fafaf9] py-12 md:py-20 px-4 md:px-10 overflow-x-hidden">
      <style jsx global>{`
        .perspective-1000 { perspective: 1200px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotateY-180 { transform: rotateY(180deg); }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16 md:mb-24 space-y-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={shuffleSkills}
            className="inline-block px-4 py-1.5 rounded-full bg-orange-100 border border-orange-200 cursor-pointer"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-orange-600 font-bold">
              {isShuffling ? "Shuffling Deck..." : "The Master Deck"}
            </span>
          </motion.button>
          
          <h1 className="text-5xl md:text-7xl font-light text-slate-800 tracking-tighter">
            Technical <span className="font-normal text-orange-600">Arsenal</span>
          </h1>
          
          <p className="text-slate-400 font-light text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Automatic shuffle every 30s. Positions change to keep the deck fresh.
          </p>
        </header>

        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8"
        >
          <AnimatePresence>
            {skillsList.map((skill, i) => (
              <SkillCard 
                key={skill.name} // Key important for layout transitions
                skill={skill} 
                index={i} 
                isShuffling={isShuffling}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <footer className="mt-24 text-center">
          <div className="inline-flex items-center gap-4 text-slate-300">
            <div className="h-px w-8 bg-slate-200" />
            <span className="text-[10px] uppercase tracking-[0.5em] font-medium">
              Shivam Soni • Portfolio 2026
            </span>
            <div className="h-px w-8 bg-slate-200" />
          </div>
        </footer>
      </div>
    </main>
  );
}