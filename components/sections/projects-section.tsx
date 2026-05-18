"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Sparkles } from "lucide-react";

type Project = {
  name: string;
  description: string;
  tech: string[];
  view: "limitless" | "void";
};

const projects: Project[] = [
  {
    name: "Curso FullStack (RocketSeat)",
    description:
      "Desenvolvimento em front e back-end do básico ao avançado.",
    tech: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "BootStrap", "Tailwind", "Node.js", "Express", "SQL", "Docker"],
    view: "limitless",
  },
  {
    name: "Banco de dados (RocketSeat)",
    description:
      "Uso de banco de dados na prática: do básico ao avançado com PostgreSQL",
    tech: ["PostgreSQL", "SQL", "Banco de Dados"],
    view: "void",
  },
  {
    name: "Python (Curso em Vídeo)",
    description:
      "Desenvolvendo automações, análise de dados e construção de tabelas",
    tech: ["Python", "Flask", "RabbitMQ", "SQL"],
    view: "limitless",
  },
];

const projectIconSets = [
  // Card 1: React, TypeScript, Tailwind CSS (Modern and premium alternative to Bootstrap!)
  (
    <div className="absolute inset-0 flex items-center justify-center gap-4 z-20">
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-center justify-center p-2 rounded-xl bg-white/40 border border-white/60 backdrop-blur-md shadow-md"
      >
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="h-8 w-8 text-[#00d8ff] drop-shadow-[0_0_8px_rgba(0,216,255,0.6)]">
          <circle r="2.05" fill="currentColor" />
          <g fill="none" stroke="currentColor" strokeWidth="1">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      </motion.div>
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-center justify-center p-2 rounded-xl bg-white/40 border border-white/60 backdrop-blur-md shadow-md"
      >
        <svg viewBox="0 0 100 100" className="h-8 w-8 rounded-md drop-shadow-[0_0_8px_rgba(49,120,198,0.5)]">
          <rect width="100" height="100" rx="16" fill="#3178c6" />
          <text x="50" y="70" textAnchor="middle" fill="white" fontSize="42" fontFamily="var(--font-jetbrains-mono), monospace" fontWeight="bold">TS</text>
        </svg>
      </motion.div>
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, delay: 1, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-center justify-center p-2 rounded-xl bg-white/40 border border-white/60 backdrop-blur-md shadow-md"
      >
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-[#38bdf8] drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]">
          <path fill="currentColor" d="M12 6.5c-2.4 0-4 1.2-4.8 3.6 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.4 1.7 1.2 1.4 2.7 3 5.4 3 2.4 0 4-1.2 4.8-3.6-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.4-1.7-1.2-1.4-2.7-3-5.4-3zm-6 6c-2.4 0-4 1.2-4.8 3.6 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.4 1.7 1.2 1.4 2.7 3 5.4 3 2.4 0 4-1.2 4.8-3.6-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.4-1.7-1.2-1.4-2.7-3-5.4-3z" />
        </svg>
      </motion.div>
    </div>
  ),

  // Card 2: SQL, Supabase, pgAdmin
  (
    <div className="absolute inset-0 flex items-center justify-center gap-4 z-20">
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-center justify-center p-2 rounded-xl bg-white/40 border border-white/60 backdrop-blur-md shadow-md"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-8 w-8 text-sky-600 drop-shadow-[0_0_8px_rgba(2,132,199,0.5)]">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      </motion.div>
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-center justify-center p-2 rounded-xl bg-white/40 border border-white/60 backdrop-blur-md shadow-md"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-[#3ecf8e] drop-shadow-[0_0_8px_rgba(62,207,142,0.6)]">
          <path d="M13.35 2.1a1.2 1.2 0 0 0-1.7 0L2.43 11.3a1.2 1.2 0 0 0 .85 2h6.82v8.6a1.2 1.2 0 0 0 2 .85l9.22-9.2a1.2 1.2 0 0 0-.85-2h-6.82V2.1z" />
        </svg>
      </motion.div>
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, delay: 1, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-center justify-center p-2 rounded-xl bg-white/40 border border-white/60 backdrop-blur-md shadow-md"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-8 w-8 text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <path d="M6 8h8M6 12h4" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      </motion.div>
    </div>
  ),

  // Card 3: Python
  (
    <div className="absolute inset-0 flex items-center justify-center z-20">
      <motion.div
        animate={{ y: [0, -6, 0], rotate: [0, 2, -2, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-center justify-center p-3 rounded-2xl bg-white/40 border border-white/60 backdrop-blur-md shadow-lg"
      >
        <svg viewBox="0 0 110 110" className="h-14 w-14 drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]">
          <path fill="#3776AB" d="M52.3 3.1c-14.8 0-23.7 6.4-23.7 18.6v9.4h24.2v3.4H28.6C13.8 34.5 4 41.6 4 56.4s9.8 21.9 24.6 21.9h8.7v-12c0-14.8 12.1-26.9 26.9-26.9H89V25c0-14.8-12-21.9-26.9-21.9H52.3z" />
          <circle cx="41.7" cy="12.5" r="3.2" fill="#fff" />
          <path fill="#FFD343" d="M57.7 106.9c14.8 0 23.7-6.4 23.7-18.6v-9.4H57.2v-3.4h24.2c14.8 0 24.6-7.1 24.6-21.9S96.2 31.7 81.4 31.7h-8.7v12c0 14.8-12.1 26.9-26.9 26.9H21v14.4c0 14.8 12 21.9 26.9 21.9h9.8z" />
          <circle cx="68.3" cy="97.5" r="3.2" fill="#fff" />
        </svg>
      </motion.div>
    </div>
  )
];

export function ProjectsSection() {
  return (
    <section className="mt-8 space-y-6">
      <motion.aside
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.08 }}
        className="glass-panel p-5 bg-[#89CFF0]/30"
      >
        <div className="diamond-reflection" />
        <div className="relative z-10">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-sky-800">
            Current Prism
          </p>
          <div className="mt-3 flex flex-wrap items-start gap-3">
            <BriefcaseBusiness className="mt-0.5 h-5 w-5 shrink-0 text-sky-700" aria-hidden />
            <div>
              <p className="font-heading text-lg text-sky-950 sm:text-xl">
                Internship at Ação Tecnologia · 3 meses
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-sky-900/90">
                Desenvolvimento Full Stack com foco em arquitetura de APIs e gerenciamento de bancos de dados para soluções escaláveis. Aplicação de IA generativa e engenharia de prompt na automação de processos e suporte técnico especializado.
              </p>
            </div>
          </div>
        </div>
      </motion.aside>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="prismatic-glass p-5"
          >
            <div className="diamond-reflection" />
            <div className="relative z-10">
              <div className="thumbnail-frame">
                <div className="limitless-depth" />
                {projectIconSets[index]}
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <h4 className="font-heading text-2xl text-sky-900">{project.name}</h4>
                <Sparkles className="mt-1 h-4 w-4 shrink-0 text-sky-400" />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="glass-pill px-2 py-1 font-mono text-[11px] uppercase tracking-wide text-sky-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}


