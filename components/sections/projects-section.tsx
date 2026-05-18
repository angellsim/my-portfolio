"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, FolderGit2, Sparkles } from "lucide-react";

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
                <div className="thumbnail-label font-mono">
                  {project.view === "limitless" ? "Limitless Shard" : "Void Shard"}
                </div>
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


