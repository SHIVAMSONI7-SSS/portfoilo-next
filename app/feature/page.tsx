"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Trash2, Image as ImageIcon, Sparkles, Pickaxe, Mountain, Search, ScanLine, FileText } from 'lucide-react';

export default function GeologyAnalysisPage() {
  const [isMined, setIsMined] = useState(false);
  const [isBreaking, setIsBreaking] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [report, setReport] = useState(false);

  // Mining Animation Logic
  const handleMine = () => {
    setIsBreaking(true);
    setTimeout(() => setIsMined(true), 1500);
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImage(previewUrl);
      setReport(false);
    }
  };

  const startAnalysis = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setReport(true);
    }, 3000); // 3 seconds scan animation
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] font-sans selection:bg-orange-100">
      <AnimatePresence mode="wait">
        {!isMined ? (
          /* --- MINING LOADER (Stable) --- */
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            className="fixed inset-0 z-[300] bg-slate-900 flex flex-col items-center justify-center cursor-pointer"
            onClick={handleMine}
          >
            <motion.div
              className="relative flex flex-col items-center"
              animate={isBreaking ? { x: [-2, 2, -2, 2, 0], transition: { repeat: Infinity, duration: 0.1 } } : {}}
            >
              <motion.div
                animate={isBreaking ? { rotate: [-20, 20, -20] } : { rotate: 0 }}
                transition={{ duration: 0.2, repeat: Infinity }}
                className="mb-8 text-orange-500"
              >
                <Pickaxe size={80} strokeWidth={1.5} />
              </motion.div>
              
              <Mountain size={120} className={`${isBreaking ? 'text-slate-400' : 'text-slate-600'} transition-colors`} />
              
              <div className="mt-8 text-center text-white">
                <p className="font-bold tracking-[0.3em] text-xs uppercase opacity-80">
                  {isBreaking ? "Analyzing Crust..." : "Click to Mine My Data"}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          /* --- MAIN GEOLOGY TOOL UI --- */
          <motion.main
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto py-12 px-6"
          >
            <header className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-orange-50 border border-orange-100 mb-4">
                <Search size={14} className="text-orange-600" />
                <span className="text-[10px] font-black uppercase tracking-widest text-orange-700">Geology Strata Scanner</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-light text-slate-800 tracking-tighter">
                Earth <span className="font-normal text-orange-600">Scanner</span>
              </h1>
            </header>

            <div className="grid md:grid-cols-2 gap-12">
              {/* UPLOAD & PREVIEW */}
              <div className="space-y-6">
                <div className="group relative aspect-square bg-white rounded-[2.5rem] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center overflow-hidden hover:border-orange-400 transition-all shadow-sm">
                  {image ? (
                    <div className="relative w-full h-full">
                      <img src={image} alt="Original" className="w-full h-full object-cover" />
                      {analyzing && (
                        <motion.div 
                          initial={{ top: 0 }}
                          animate={{ top: "100%" }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                          className="absolute left-0 right-0 h-1 bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.8)] z-10"
                        />
                      )}
                    </div>
                  ) : (
                    <label className="cursor-pointer flex flex-col items-center">
                      <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <ScanLine className="text-slate-400 group-hover:text-orange-500" />
                      </div>
                      <p className="text-sm font-bold text-slate-500 uppercase tracking-tighter">Upload Rock Sample</p>
                      <input type="file" className="hidden" onChange={handleUpload} accept="image/*" />
                    </label>
                  )}
                </div>
                
                <button 
                  disabled={!image || analyzing}
                  onClick={startAnalysis}
                  className="w-full py-5 bg-[#0f172a] text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-orange-600 transition-all shadow-xl disabled:opacity-50"
                >
                  {analyzing ? "Scanning Strata..." : "Analyze Formation"}
                </button>
              </div>

              {/* ANALYSIS REPORT BOX */}
              <div className="space-y-6">
                <div className="aspect-square bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl flex flex-col">
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-orange-500">Lithology Report</h3>
                    <FileText size={18} className="text-slate-500" />
                  </div>

                  <AnimatePresence mode="wait">
                    {report ? (
                      <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        className="space-y-6 flex-1"
                      >
                        <div className="space-y-2">
                          <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Sample Density</p>
                          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                             <motion.div initial={{ width: 0 }} animate={{ width: "85%" }} className="h-full bg-orange-500" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                            <p className="text-[9px] text-slate-500 uppercase font-bold mb-1">Mineral Type</p>
                            <p className="text-sm font-bold">Quartzite Mix</p>
                          </div>
                          <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                            <p className="text-[9px] text-slate-500 uppercase font-bold mb-1">Age Est.</p>
                            <p className="text-sm font-bold">~250 Million Yrs</p>
                          </div>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed font-light italic">
                          "This strata shows significant tectonic pressure and metamorphic transformation."
                        </p>
                      </motion.div>
                    ) : (
                      <div className="flex-1 flex flex-col items-center justify-center text-slate-600">
                        <Sparkles size={40} className="mb-4 opacity-10" />
                        <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-center">
                          {analyzing ? "Reading Crystal Structure" : "Waiting for Sample"}
                        </p>
                      </div>
                    )}
                  </AnimatePresence>

                  <div className="mt-auto pt-4 border-t border-white/10 text-[9px] text-slate-500 flex justify-between">
                    <span>IndieCoder Geol-01</span>
                    <span>Status: {analyzing ? "Scanning..." : "Ready"}</span>
                  </div>
                </div>

                <button 
                  onClick={() => {setImage(null); setReport(false);}}
                  className={`w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all ${image ? 'bg-slate-200 text-slate-700 hover:bg-red-100 hover:text-red-600' : 'bg-slate-100 text-slate-300 pointer-events-none'}`}
                >
                  <Trash2 size={20} /> Clear Data
                </button>
              </div>
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}