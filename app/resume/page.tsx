"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toPng } from 'html-to-image';
import { 
  Mail, MapPin, Terminal, Database, Layout, 
  Download, CheckCircle2, Globe, Github, Linkedin, ExternalLink, Camera, Brain, ChevronRight
} from 'lucide-react';

// --- Terminal Typing Component ---
const TerminalLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [lines, setLines] = useState<string[]>([]);
  const fullLines = [
    "fetching shivam_soni_profile...",
    "accessing neural_network_weights...",
    "loading core_skills.json...",
    "optimizing_ui_components...",
    "shivam_soni.exe - READY"
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < fullLines.length) {
        setLines(prev => [...prev, fullLines[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 800);
      }
    }, 400);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div 
      exit={{ opacity: 0, scale: 1.05 }}
      className="fixed inset-0 z-[100] bg-slate-950 flex items-center justify-center p-6 font-mono"
    >
      <div className="w-full max-w-lg bg-slate-900 rounded-xl border border-slate-800 shadow-2xl overflow-hidden">
        <div className="bg-slate-800 px-4 py-2 flex gap-2 border-b border-slate-700">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-orange-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <div className="p-6 space-y-2 min-h-[220px]">
          {lines.map((line, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-orange-500 font-bold">$</span>
              <span className="text-slate-300 text-sm md:text-base">{line}</span>
            </div>
          ))}
          <motion.div 
            animate={{ opacity: [0, 1] }} 
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-2 h-5 bg-orange-500 inline-block align-middle ml-1"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default function ResumePage() {
  const [isScanning, setIsScanning] = useState(true);
  const [isCapturing, setIsCapturing] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  const downloadAsImage = async () => {
    if (resumeRef.current === null) return;
    setIsCapturing(true);
    const dataUrl = await toPng(resumeRef.current, { cacheBust: true, backgroundColor: "#fafaf9" });
    const link = document.createElement('a');
    link.download = 'Shivam-Soni-Resume.png';
    link.href = dataUrl;
    link.click();
    setIsCapturing(false);
  };

  return (
    <main className="min-h-screen bg-[#fafaf9] selection:bg-orange-100">
      <AnimatePresence>
        {isScanning && <TerminalLoader onComplete={() => setIsScanning(false)} />}
      </AnimatePresence>

      {!isScanning && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto py-12 px-4 md:px-8"
        >
          {/* Action Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm sticky top-24 z-30 gap-4">
            <div className="flex items-center gap-3 pl-2">
              <div className="bg-orange-100 p-2 rounded-lg">
                <Terminal className="text-orange-600" size={20} />
              </div>
              <h2 className="text-sm font-bold text-slate-700 tracking-tight uppercase">IndieCoder Intelligence v2.6</h2>
            </div>
            <button 
              onClick={downloadAsImage}
              disabled={isCapturing}
              className="w-full md:w-auto bg-slate-900 text-white px-8 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-orange-600 transition-all shadow-xl shadow-slate-200"
            >
              {isCapturing ? "Compiling..." : <><Camera size={16} /> Export as Image</>}
            </button>
          </div>

          {/* MAIN RESUME (Target for Snapshot) */}
          <div ref={resumeRef} className="bg-[#fafaf9] p-2 md:p-8 rounded-[3rem]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
              
              {/* LEFT COLUMN */}
              <aside className="lg:col-span-5 space-y-8">
                <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl overflow-hidden group">
                  <div className="aspect-[16/10] overflow-hidden bg-slate-200">
                    <img 
                      src="/Red Bold Portfolio Presentation (2560 x 1600 px).png" 
                      alt="Shivam Soni" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 space-y-6">
                    <div>
                      <h1 className="text-4xl md:text-5xl font-light text-slate-800 tracking-tighter uppercase">
                        Shivam <span className="font-bold text-orange-500">Soni</span>
                      </h1>
                      <p className="text-orange-600 text-[10px] font-bold uppercase tracking-[0.4em] mt-3">AI & ML Specialist</p>
                    </div>

                    <div className="space-y-3 pt-6 border-t border-slate-50 text-sm text-slate-500 font-light italic">
                      <div className="flex items-center gap-3"><Mail size={16} className="text-orange-400" /> shivamsoni20079835@gmail.com</div>
                      <div className="flex items-center gap-3"><MapPin size={16} className="text-orange-400" /> Hazaribag, Jharkhand, India</div>
                    </div>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white">
                  <h3 className="text-[10px] font-bold text-orange-400 uppercase tracking-[0.5em] mb-6">Mastered Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Machine Learning", "Deep Learning", "Next.js", "Pandas", "Scikit-Learn", "Git"].map(s => (
                      <span key={s} className="px-3 py-1.5 bg-white/5 rounded-lg text-[9px] font-bold uppercase border border-white/5">{s}</span>
                    ))}
                  </div>
                </div>
              </aside>

              {/* RIGHT COLUMN */}
              <section className="lg:col-span-7 space-y-10">
                {/* Summary */}
                <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 relative">
                  <Brain className="absolute top-8 right-8 text-orange-50 opacity-10" size={80} />
                  <h3 className="text-[10px] font-bold text-orange-500 uppercase tracking-[0.5em] mb-4 underline decoration-orange-200 decoration-2 underline-offset-8">Summary</h3>
                  <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed">
                    Motivated AI & Machine Learning learner building <span className="text-slate-900 font-medium">intelligent systems</span>. Specialized in Python and modern web tech to deploy real‑world applications.
                  </p>
                </div>

                {/* Content Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-8 bg-white border border-slate-100 rounded-[2rem] space-y-4">
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest flex items-center gap-2"><Database size={16} className="text-orange-500" /> ML Stack</h4>
                    {["Generative AI", "NLP", "CV", "Model Testing"].map(s => (
                      <div key={s} className="flex items-center gap-2 text-xs text-slate-400"><CheckCircle2 size={12} className="text-orange-400" /> {s}</div>
                    ))}
                  </div>
                  <div className="p-8 bg-white border border-slate-100 rounded-[2rem] space-y-4">
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest flex items-center gap-2"><Layout size={16} className="text-orange-500" /> Web Stack</h4>
                    {["React", "Next.js", "Tailwind", "API Integration"].map(s => (
                      <div key={s} className="flex items-center gap-2 text-xs text-slate-400"><CheckCircle2 size={12} className="text-orange-400" /> {s}</div>
                    ))}
                  </div>
                </div>

                {/* Projects */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-800 italic">Key Projects</h3>
                  <div className="group bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-orange-200 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-slate-800">AI / ML Prediction Model</h4>
                      <ExternalLink size={16} className="text-slate-300 group-hover:text-orange-500" />
                    </div>
                    <p className="text-xs text-slate-400 font-light">Built and trained ML models using Python and Scikit-Learn for advanced data analysis.</p>
                  </div>
                </div>

                {/* Education */}
                <div className="p-8 bg-orange-50/50 rounded-[2rem] border border-orange-100/50">
                  <h4 className="text-[10px] font-bold text-orange-600 uppercase tracking-widest mb-4">Education</h4>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold text-slate-800 text-sm">B.Sc. in Geology</p>
                      <p className="text-[10px] text-slate-400 uppercase">Vinoba Bhave University • Pursuing</p>
                    </div>
                  </div>
                </div>

              </section>
            </div>
          </div>
        </motion.div>
      )}
    </main>
  );
}