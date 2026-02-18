"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User } from 'lucide-react';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{ role: 'assistant', content: 'Hi! I am YURI, Shivam\'s AI. Ask me anything about his work!' }]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
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
        body: JSON.stringify({ messages: [...messages, userMsg].map(m => ({ role: m.role, content: m.content })) }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.text }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I'm having trouble connecting right now." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="mb-4 w-[350px] md:w-[400px] h-[550px] bg-white rounded-[2.5rem] border border-orange-100 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* --- LUXURY HEADER --- */}
            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-orange-600 p-5 text-white flex justify-between items-center shadow-lg">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-white/20 bg-white/10 backdrop-blur-md">
                    <img 
                      src="/Gemini_Generated_Image_m8i1vom8i1vom8i1.png" 
                      alt="YURI" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-slate-900 rounded-full animate-pulse" />
                </div>
                <div>
                  <h3 className="font-bold text-base tracking-tight leading-none">YURI</h3>
                  <p className="text-[9px] uppercase tracking-[0.2em] opacity-70 font-black mt-1">Soni Intelligence v1.0</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="bg-white/10 hover:bg-white/20 p-2 rounded-xl transition-all">
                <X size={20} />
              </button>
            </div>

            {/* --- CHAT MESSAGES --- */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-6 bg-[#fcfcfc]">
              {messages.map((msg, i) => (
                <div key={i} className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {/* AI Profile Avatar in Chat */}
                  {msg.role === 'assistant' && (
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-orange-200 shrink-0 shadow-sm">
                      <img src="/Gemini_Generated_Image_m8i1vom8i1vom8i1.png" alt="YURI" className="w-full h-full object-cover" />
                    </div>
                  )}
                  
                  <div className={`max-w-[80%] p-4 rounded-[1.5rem] text-sm leading-relaxed shadow-sm transition-all ${
                    msg.role === 'user' 
                      ? 'bg-slate-900 text-white rounded-br-none' 
                      : 'bg-white text-slate-700 border border-slate-100 rounded-bl-none'
                  }`}>
                    {msg.content}
                  </div>

                  {msg.role === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0 border border-orange-200">
                      <User size={14} className="text-orange-600" />
                    </div>
                  )}
                </div>
              ))}
              
              {loading && (
                <div className="flex items-end gap-2 justify-start">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-orange-200 shrink-0">
                    <img src="/Gemini_Generated_Image_m8i1vom8i1vom8i1.png" alt="YURI" className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-white border border-slate-100 p-4 rounded-[1.5rem] rounded-tl-none shadow-sm">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* --- INPUT AREA --- */}
            <div className="p-5 bg-white border-t border-slate-50">
              <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-[1.8rem] border border-slate-100 focus-within:border-orange-200 focus-within:bg-white transition-all shadow-inner">
                <input 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask YURI about Shivam..."
                  className="flex-1 bg-transparent px-4 py-2 text-sm outline-none text-slate-700 placeholder:text-slate-400"
                />
                <button 
                  onClick={handleSend} 
                  disabled={loading}
                  className="bg-slate-900 text-white p-3 rounded-full hover:bg-orange-600 shadow-md transition-all active:scale-95 disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- FLOATING TOGGLE BUTTON --- */}
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-slate-900 rounded-[1.5rem] flex items-center justify-center shadow-2xl shadow-orange-200/50 border-4 border-white relative group overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-600 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {isOpen ? (
          <X size={28} className="text-white relative z-10" />
        ) : (
          <div className="w-full h-full relative z-10">
             <img 
               src="/Gemini_Generated_Image_m8i1vom8i1vom8i1.png" 
               alt="YURI" 
               className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform"
             />
          </div>
        )}
      </motion.button>
    </div>
  );
}