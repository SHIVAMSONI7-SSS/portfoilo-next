"use client";

import { useState, useEffect, useRef } from 'react';
import Pusher from 'pusher-js';
import { createClient } from '@supabase/supabase-js';
import { Send, Hash, User } from 'lucide-react';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function GlobalChatPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Initial Load from 'cht' table
    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from('cht')
        .select('*')
        .order('created_at', { ascending: true });
      
      if (data) setMessages(data);
      if (error) console.error("Load Error:", error.message);
    };
    fetchMessages();

    // 2. Pusher Listener
    const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
      cluster: 'ap2',
    });

    const channel = pusher.subscribe('global-chat');
    channel.bind('new-message', (newMessage: any) => {
      setMessages((prev) => [...prev, newMessage]);
    });

    return () => { pusher.unsubscribe('global-chat'); pusher.disconnect(); };
  }, []);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    setLoading(true);
    const textToSend = input;
    setInput('');

    try {
      const res = await fetch('/api/chat/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: textToSend, user_name: "Shivam" }),
      });

      if (!res.ok) throw new Error("404 or Server Error");
    } catch (err) {
      console.error("Send Error:", err);
      setInput(textToSend); // Error pe text wapas
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-10 bg-white rounded-[2rem] shadow-2xl border flex flex-col h-[600px] overflow-hidden">
      <div className="p-5 bg-slate-900 text-white flex items-center gap-3">
        <Hash className="text-orange-500" />
        <h1 className="font-bold">Global Chat</h1>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50">
        {messages.map((m, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-white border flex items-center justify-center shrink-0">
              <User size={14} className="text-slate-400" />
            </div>
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 max-w-[80%]">
              <p className="text-[10px] font-bold text-orange-600 uppercase mb-1">{m.user_name}</p>
              <p className="text-sm text-slate-700 font-medium">{m.chat}</p> {/* */}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={sendMessage} className="p-4 bg-white border-t flex gap-2">
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type here..."
          className="flex-1 bg-slate-100 px-4 py-2 rounded-xl outline-none"
        />
        <button disabled={loading} className="bg-orange-500 text-white p-3 rounded-xl hover:bg-orange-600">
          <Send size={18} />
        </button>
      </form>
    </div>
  );
}