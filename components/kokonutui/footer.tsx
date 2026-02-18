"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  ArrowUpRight, 
  Zap 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Github', icon: Github, href: 'https://github.com' },
    { name: 'Linkedin', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  ];

  return (
    <footer className="relative bg-[#fafaf9] pt-24 pb-12 px-6 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        {/* --- Top Section: Big CTA --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-end">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-slate-800 leading-none">
              Have an idea? <br />
              <span className="text-orange-500 font-normal italic">Let&apos;s build it.</span>
            </h2>
            <Link 
              href="/contact" 
              className="group inline-flex items-center gap-2 text-lg font-medium text-slate-600 hover:text-orange-600 transition-colors"
            >
              Start a conversation
              <div className="p-2 rounded-full bg-orange-50 group-hover:bg-orange-500 group-hover:text-white transition-all">
                <ArrowUpRight size={20} />
              </div>
            </Link>
          </motion.div>

          <div className="flex flex-col md:items-end gap-6">
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white border border-slate-100 shadow-sm text-slate-400 hover:text-orange-500 hover:border-orange-100 transition-all"
                >
                  <social.icon size={20} strokeWidth={1.5} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* --- Bottom Section: Branding & Links --- */}
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="bg-orange-500 p-1.5 rounded-lg text-white">
              <Zap size={16} fill="currentColor" />
            </div>
            <span className="text-sm font-bold tracking-tight text-slate-800">
              IndieCoder<span className="text-orange-500">.</span>
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {['Home', 'Works', 'Skills', 'Contact'].map((item) => (
              <Link 
                key={item} 
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-xs uppercase tracking-[0.2em] font-bold text-slate-400 hover:text-orange-500 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          <p className="text-[10px] uppercase tracking-[0.3em] text-slate-300 font-medium">
            © {currentYear} • Designed by Shivam
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;