import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const greetings = [
  {
    text: "Hi, I’m",
    gradient: "from-teal-400 via-cyan-500 to-blue-500",
    font: "font-bold",
  },
  {
    text: "Hello, I’m",
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    font: "font-extrabold",
  },
  {
    text: "Hey, I’m",
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    font: "font-semibold",
  },
  {
    text: "Greetings, I’m",
    gradient: "from-orange-400 via-pink-500 to-red-500",
    font: "font-black",
  },
];

export default function AnimatedGreeting() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.h1
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-3xl sm:text-4xl md:text-6xl text-gray-700 leading-tight"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -40, filter: "blur(6px)" }}
          transition={{ duration: 0.7 }}
          className="inline-block"
        >
          {greetings[index].text}{" "}

          <span
            className={`
              ${greetings[index].font}
              bg-gradient-to-red ${greetings[index].gradient}
              bg-clip-text text-transparent
              transition-all duration-700
            `}
          >
            Shivam Soni
          </span>

          {/* Cursor pulse */}
          <span className="ml-2 animate-pulse text-gray-500">|</span>

        </motion.span>
      </AnimatePresence>
    </motion.h1>
  );
}
