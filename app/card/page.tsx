"use client";

import React from 'react';
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Cpu, ShieldCheck, Zap, Globe, Code2 } from "lucide-react";

export default function ProjectsPage() {
  const projectUrl = "https://decsiontree.vercel.app/";

  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-slate-200 overflow-x-hidden">
      
      {/* Navigation - Using standard <a> instead of <Link> */}
      <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold uppercase tracking-widest">Back to Lab</span>
        </a>
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Deployment: Active</span>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        
        {/* Project Header */}
        <header className="mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest rounded-full">Case Study 01</span>
                <span className="text-slate-300">/</span>
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest italic">Decision Engineering</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900">
                Decision <span className="text-slate-400 italic font-serif font-light">Tree.</span>
              </h1>
            </div>
            
            <a 
              href={projectUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-slate-200 px-6 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm group"
            >
              Open Live Site <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </header>

        {/* Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Iframe Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-9"
          >
            <div className="relative group">
              <div className="bg-slate-200/50 border border-slate-200 border-b-0 rounded-t-[2rem] p-4 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300 opacity-50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300 opacity-50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300 opacity-50" />
                </div>
                <div className="mx-auto bg-white px-4 py-1 rounded-lg border border-slate-200 text-[10px] text-slate-400 font-medium flex items-center gap-2">
                  <Globe size={10} /> {projectUrl}
                </div>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-b-[2.5rem] overflow-hidden shadow-2xl h-[700px] relative">
                <iframe 
                  src={projectUrl}
                  className="w-full h-full border-none"
                  title="Decision Tree Live Preview"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="bg-white border border-slate-200 p-8 rounded-[2rem] shadow-sm">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">System Architecture</h3>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <Cpu className="text-slate-900 shrink-0" size={20} />
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-tight">Neural Core</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed mt-1">Recursive logic processing engine.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <ShieldCheck className="text-slate-900 shrink-0" size={20} />
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-tight">Bias Shield</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed mt-1">Filtering cognitive noise.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-[2rem] text-white shadow-xl">
              <Code2 className="mb-4 opacity-50" size={20}/>
              <h3 className="text-xl font-bold tracking-tight mb-2">Build Details</h3>
              <p className="text-[11px] text-slate-400 leading-relaxed mb-6">
                Full-stack decision matrix designed to solve Choice Overload.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "AI", "SaaS"].map(tag => (
                    <span key={tag} className="px-2 py-1 bg-white/10 rounded text-[9px] font-bold uppercase">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}