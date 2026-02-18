"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Works", path: "/home" },
  { name: "skills", path: "/SKILLS" },
  { name: "Contact", path: "/contact" },
  { name: "2ndHome", path: "/2ndhome" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 🖱️ Scroll listener for smooth shrink effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 transition-all duration-500">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={clsx(
          "mx-auto transition-all duration-300 ease-in-out flex items-center justify-between rounded-2xl border",
          scrolled 
            ? "mt-4 max-w-4xl px-5 py-2 bg-white/80 backdrop-blur-lg border-gray-200/50 shadow-xl" 
            : "mt-6 max-w-5xl px-6 py-4 bg-white/40 backdrop-blur-md border-transparent shadow-none"
        )}
      >
        {/* 🔷 Logo */}
        <Link href="/" className="text-xl font-bold bg-gradient-to from-teal-600 to-cyan-600 bg-clip-text text-teal-600">
          Shivam
        </Link>

        {/* 🔗 Desktop Links */}
        <div className="hidden md:flex items-center gap-1 relative">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className="relative px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-teal-600"
              >
                {isActive && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 bg-teal-50 rounded-xl -z-10 border border-teal-100/50"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* 📱 Mobile Toggle */}
        <button className="md:hidden p-2 text-gray-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* 📱 Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-2 mx-auto max-w-[95%] bg-white/95 backdrop-blur-2xl rounded-2xl border border-gray-200 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={clsx(
                    "px-4 py-3 rounded-xl text-base font-medium transition-all",
                    pathname === link.path ? "bg-teal-500 text-white" : "text-gray-700 hover:bg-gray-100"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}