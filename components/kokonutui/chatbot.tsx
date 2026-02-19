"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, Sparkles, Terminal, Hash } from 'lucide-react';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Oye! Shivam ka dimag (YURI) bol raha hoon. Pucho kya puchna hai, par dhang ka sawaal hona chahiye." }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.text }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Server down hai. Shayad tune hi kuch kaand kiya hai." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[200] font-sans">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          /* --- MINIMALIST TOGGLE (Portfolio Theme) --- */
          <motion.button
            layoutId="chat-morph"
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 bg-[#0f172a] rounded-2xl flex items-center justify-center shadow-xl border border-slate-700 group"
          >
            <Bot size={24} className="text-white group-hover:text-orange-500 transition-colors" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
            </span>
          </motion.button>
        ) : (
          /* --- CLEAN TRANSFORMED CHAT --- */
          <motion.div
            layoutId="chat-morph"
            className="w-[350px] md:w-[380px] h-[500px] bg-white rounded-[2rem] shadow-2xl flex flex-col overflow-hidden border border-slate-200 origin-bottom-right"
          >
            {/* Header: Matching your IndieCoder Branding */}
            <div className="bg-[#0f172a] p-5 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-orange-500 p-2 rounded-lg">
                  <Terminal size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-tight">YURI INTELLIGENCE</h3>
                  <p className="text-[10px] text-orange-400 font-bold tracking-widest uppercase">Shivam's Bestie</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1.5 rounded-full transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Chat Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f8fafc]">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-xl text-sm leading-relaxed
                    ${msg.role === 'user' 
                      ? 'bg-[#0f172a] text-white rounded-tr-none' 
                      : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none font-medium'}`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex gap-1 p-2 bg-slate-200/50 w-fit rounded-lg animate-pulse">
                  <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce" />
                  <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-100">
              <div className="flex items-center gap-2 bg-slate-50 rounded-xl px-3 py-1 border border-slate-200 focus-within:ring-1 ring-orange-500 transition-all">
                <Hash size={16} className="text-slate-400" />
                <input 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Kuch dhang ka pucho..."
                  className="flex-1 bg-transparent text-sm outline-none text-slate-700 py-2"
                />
                <button onClick={handleSend} className="text-orange-600 p-1.5 hover:bg-orange-50 rounded-lg transition-colors">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}