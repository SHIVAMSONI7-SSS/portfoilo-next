"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, Cpu, ShieldCheck, Globe, Code2, BarChart3, Layers } from "lucide-react";

const PROJECTS = [
  {
    id: "01",
    title: "Decision",
    titleItalic: "Tree.",
    category: "Decision Engineering",
    url: "https://decsiontree.vercel.app/",
    description: "Full-stack decision matrix designed to solve Choice Overload.",
    tags: ["Next.js", "AI", "SaaS"],
    features: [
      { icon: <Cpu size={20} />, label: "Neural Core", desc: "Recursive logic processing engine." },
      { icon: <ShieldCheck size={20} />, label: "Bias Shield", desc: "Filtering cognitive noise." }
    ]
  },
  {
    id: "02",
    title: "Power",
    titleItalic: "BI.",
    category: "Data Intelligence",
    url: "https://powerbi-seven.vercel.app/",
    description: "Advanced data visualization suite for real-time analytics.",
    tags: ["PowerBI", "Analytics", "Vercel"],
    features: [
      { icon: <BarChart3 size={20} />, label: "Insight Engine", desc: "Dynamic data parsing & visualization." },
      { icon: <Layers size={20} />, label: "Data Fabric", desc: "Unified multi-source integration." }
    ]
  }
];

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState(PROJECTS[0]);

  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-slate-200 overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold uppercase tracking-widest">Back to Lab</span>
        </a>
        <div className="flex gap-4">
            {PROJECTS.map((p) => (
                <button 
                    key={p.id}
                    onClick={() => setActiveProject(p)}
                    className={`text-[10px] font-black uppercase tracking-widest transition-all ${activeProject.id === p.id ? 'text-slate-900 underline underline-offset-4' : 'text-slate-400 hover:text-slate-600'}`}
                >
                    Project {p.id}
                </button>
            ))}
        </div>
      </nav>

      <AnimatePresence mode="wait">
        <motion.div 
            key={activeProject.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-7xl mx-auto px-6 pb-20"
        >
            
            {/* Project Header */}
            <header className="mb-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest rounded-full">Case Study {activeProject.id}</span>
                    <span className="text-slate-300">/</span>
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest italic">{activeProject.category}</span>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900">
                    {activeProject.title} <span className="text-slate-400 italic font-serif font-light">{activeProject.titleItalic}</span>
                  </h1>
                </div>
                
                <a 
                  href={activeProject.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-slate-200 px-6 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm group"
                >
                  Open Live Site <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </header>

            {/* Project Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Iframe Section */}
              <div className="lg:col-span-9">
                <div className="relative group">
                  <div className="bg-slate-200/50 border border-slate-200 border-b-0 rounded-t-[2rem] p-4 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300 opacity-50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300 opacity-50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300 opacity-50" />
                    </div>
                    <div className="mx-auto bg-white px-4 py-1 rounded-lg border border-slate-200 text-[10px] text-slate-400 font-medium flex items-center gap-2">
                      <Globe size={10} /> {activeProject.url}
                    </div>
                  </div>
                  
                  <div className="bg-white border border-slate-200 rounded-b-[2.5rem] overflow-hidden shadow-2xl h-[700px] relative">
                    <iframe 
                      src={activeProject.url}
                      className="w-full h-full border-none"
                      title={`${activeProject.title} Preview`}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-3 space-y-6">
                <div className="bg-white border border-slate-200 p-8 rounded-[2rem] shadow-sm">
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">System Architecture</h3>
                  <div className="space-y-8">
                    {activeProject.features.map((feature, idx) => (
                        <div key={idx} className="flex gap-4">
                            <div className="text-slate-900 shrink-0">{feature.icon}</div>
                            <div>
                                <h4 className="text-[11px] font-bold uppercase tracking-tight">{feature.label}</h4>
                                <p className="text-[11px] text-slate-500 leading-relaxed mt-1">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-900 p-8 rounded-[2rem] text-white shadow-xl">
                  <Code2 className="mb-4 opacity-50" size={20}/>
                  <h3 className="text-xl font-bold tracking-tight mb-2">Build Details</h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed mb-6">
                    {activeProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-white/10 rounded text-[9px] font-bold uppercase">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
        </motion.div>
      </AnimatePresence>
    </main>
  );
}