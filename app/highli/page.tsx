"use client";

import React from 'react';
import ScrollStack, { ScrollStackItem } from '@/components/kokonutui/ScrollStack';

export default function HighliPage() {
  return (
    // Pure White Background
    <main className="min-h-screen w-full bg-white">
      {/* Container to center the stack */}
      <div className="max-w-5xl mx-auto">
        
        <ScrollStack 
          useWindowScroll={false} 
          itemDistance={120}      // Cards ke beech ka gap scroll ke waqt
          stackPosition="15%"     // Kis point par card stack hona shuru ho
          itemScale={0.05}        // Har card piche jaakar kitna chhota dikhega
          baseScale={0.9}         // Sabse niche wale card ka scale
          className="h-screen"
        >
          {/* Card 1: Animations */}
          <ScrollStackItem>
            <div className="w-full h-64 md:h-72 bg-[#FF2E63] rounded-[32px] p-10 flex items-center justify-between shadow-lg border-b-8 border-black/10">
              <div className="flex flex-col">
                <span className="text-white/70 font-bold text-sm uppercase tracking-widest mb-2">Creative</span>
                <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter">
                  ANIMATIONS
                </h2>
              </div>
              {/* Minimal Geometric Shape */}
              <div className="w-24 h-24 border-[12px] border-white/20 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-white rotate-45" />
              </div>
            </div>
          </ScrollStackItem>

          {/* Card 2: Data Analysis */}
          <ScrollStackItem>
            <div className="w-full h-64 md:h-72 bg-[#08D9D6] rounded-[32px] p-10 flex items-center justify-between shadow-lg border-b-8 border-black/10">
              <div className="flex flex-col">
                <span className="text-black/50 font-bold text-sm uppercase tracking-widest mb-2">Technical</span>
                <h2 className="text-4xl md:text-6xl font-black text-[#252A34] italic tracking-tighter">
                  DATA ANALYSIS
                </h2>
              </div>
              <div className="flex gap-2 items-end h-20">
                <div className="w-4 h-12 bg-black/20 rounded-full" />
                <div className="w-4 h-20 bg-black/20 rounded-full" />
                <div className="w-4 h-16 bg-black/20 rounded-full" />
              </div>
            </div>
          </ScrollStackItem>

          {/* Card 3: Machine Learning */}
          <ScrollStackItem>
            <div className="w-full h-64 md:h-72 bg-[#252A34] rounded-[32px] p-10 flex items-center justify-between shadow-lg border-b-8 border-white/5">
              <div className="flex flex-col">
                <span className="text-teal-400 font-bold text-sm uppercase tracking-widest mb-2">Future</span>
                <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter">
                  AI & ML
                </h2>
              </div>
              <div className="w-24 h-24 relative">
                <div className="absolute inset-0 border-4 border-teal-400 rounded-xl animate-pulse" />
                <div className="absolute inset-4 border-2 border-white/30 rounded-lg" />
              </div>
            </div>
          </ScrollStackItem>

          {/* Card 4: Geology */}
          <ScrollStackItem>
            <div className="w-full h-64 md:h-72 bg-[#FF9F1C] rounded-[32px] p-10 flex items-center justify-between shadow-lg border-b-8 border-black/10">
              <div className="flex flex-col">
                <span className="text-white/70 font-bold text-sm uppercase tracking-widest mb-2">Core</span>
                <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter">
                  GEOLOGY
                </h2>
              </div>
              <div className="w-24 h-24 border-t-8 border-l-8 border-white opacity-40 rounded-tl-3xl" />
            </div>
          </ScrollStackItem>

        </ScrollStack>
      </div>
    </main>
  );
}