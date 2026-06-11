import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white dark:bg-slate-800 text-slate-800 dark:text-white text-sm font-semibold px-4 py-2.5 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 whitespace-nowrap"
          >
            Chat with us on WhatsApp
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/233246445790?text=Hello%20Mikessat%20Engineering%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Mikessat Engineering on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl bg-[#25D366] hover:bg-[#20bc5a] transition-colors duration-200"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />

        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="white"
          className="w-7 h-7 relative z-10"
        >
          <path d="M16.003 2.667C8.637 2.667 2.667 8.637 2.667 16c0 2.363.627 4.588 1.72 6.52L2.667 29.333l6.98-1.693A13.267 13.267 0 0 0 16.003 29.333C23.37 29.333 29.333 23.363 29.333 16S23.37 2.667 16.003 2.667zm0 2.4c5.92 0 10.93 5.013 10.93 10.933 0 5.92-5.01 10.933-10.93 10.933a10.9 10.9 0 0 1-5.587-1.533l-.4-.24-4.147 1.007 1.053-3.987-.267-.413A10.9 10.9 0 0 1 5.07 16c0-5.92 5.013-10.933 10.933-10.933zm-3.6 5.6c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667s1.147 3.093 1.307 3.307c.16.213 2.24 3.573 5.52 4.867 2.72 1.08 3.28.867 3.867.813.587-.053 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373s-1.893-.933-2.187-1.04c-.293-.107-.507-.16-.72.16-.213.32-.827 1.04-.987 1.253-.16.213-.32.24-.64.08-.32-.16-1.347-.493-2.56-1.573-.947-.84-1.587-1.88-1.773-2.2-.187-.32-.02-.493.14-.653.143-.14.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.707-1.733-.987-2.373-.253-.587-.52-.507-.72-.52-.187-.013-.4-.013-.613-.013z" />
        </svg>
      </motion.a>
    </div>
  );
}
