"use client";

import { motion } from "framer-motion";

export function Footer() {
  const contact = {
    email: "alicewolf.dev@gmail.com",
    github: "https://github.com/angellsim",
    linkedin: "https://linkedin.com/in/alicewolf",
  };

  return (
    <footer className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/20 py-8 px-6 md:flex-row">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-copper/80 order-2 md:order-1 text-center md:text-left">
        © 2026 · Projetado por Alice Wolf Fernandes
      </p>
      
      <div className="flex flex-wrap justify-center gap-6 order-1 md:order-2">
         <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-copper transition hover:text-brass font-mono text-xs uppercase tracking-widest">GitHub</a>
         <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-copper transition hover:text-brass font-mono text-xs uppercase tracking-widest">LinkedIn</a>
         <a href={`mailto:${contact.email}`} className="text-copper transition hover:text-brass font-mono text-xs uppercase tracking-widest">Email</a>
      </div>

      {/* Floating Crystal Back to Top */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-2xl glass-panel shadow-lg shadow-sky-mid/20 group backdrop-blur-xl border border-white/40"
        aria-label="Voltar ao topo"
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-mid/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="h-7 w-7 rotate-45 border-2 border-brass/60 bg-white/30 blur-[0.2px] group-hover:border-brass transition-all duration-300 shadow-[0_0_15px_rgba(31,110,155,0.4)]" />
      </motion.button>
    </footer>
  );
}
