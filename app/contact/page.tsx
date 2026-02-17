"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const res = await fetch(
      "https://formspree.io/f/mykdjllo",
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (res.ok) {
      setStatus("SUCCESS");
      e.target.reset();
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <main
      className={`
        ${poppins.className}
        min-h-screen
        bg-[#f3f5f7]
        flex items-center justify-center
        px-6 py-16
      `}
    >

      <div className="w-full max-w-2xl">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            text-3xl sm:text-4xl md:text-5xl
            font-semibold
            text-gray-700
            text-center
          "
        >
          Contact Me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 text-center mt-3"
        >
          Have a project or collaboration in mind?
          Let’s connect.
        </motion.p>

        {/* Form Card */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="
            mt-10
            bg-white
            shadow-xl
            rounded-2xl
            p-8
            space-y-6
          "
        >

          {/* Name */}
          <div>
            <label className="text-sm text-gray-600">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="
                w-full mt-2 p-3
                border border-gray-200
                rounded-lg
                focus:outline-none
                focus:ring-2 focus:ring-teal-500
              "
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-600">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="
                w-full mt-2 p-3
                border border-gray-200
                rounded-lg
                focus:outline-none
                focus:ring-2 focus:ring-teal-500
              "
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-sm text-gray-600">
              Message
            </label>
            <textarea
              name="message"
              required
              placeholder="Write your message..."
              className="
                w-full mt-2 p-3 h-32
                border border-gray-200
                rounded-lg
                focus:outline-none
                focus:ring-2 focus:ring-teal-500
              "
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="
              w-full py-3
              bg-teal-500
              text-white
              rounded-lg
              font-medium
              transition-all duration-300
              hover:bg-teal-600
              hover:shadow-lg
            "
          >
            Send Message
          </button>

          {/* Success Greeting */}
          {status === "SUCCESS" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="
                mt-4
                text-center
                text-teal-600
                font-medium
              "
            >
              Message sent successfully.  
              I will try to connect with you as soon as possible.
            </motion.div>
          )}

          {/* Error */}
          {status === "ERROR" && (
            <p className="text-red-600 text-center">
              Something went wrong. Please try again.
            </p>
          )}

        </motion.form>
      </div>
    </main>
  );
}
