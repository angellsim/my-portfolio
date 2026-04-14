"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, FolderGit2, Wrench } from "lucide-react";

type Project = {
  name: string;
  description: string;
  tech: string[];
  view: "blueprint" | "vintage";
};

const projects: Project[] = [
  {
    name: "steam-dashboard",
    description:
      "Painel de monitoramento para oficina digital, com visual steampunk e foco em performance.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    view: "blueprint",
  },
  {
    name: "atelier-ux-lab",
    description:
      "Laboratorio de interfaces para prototipos com narrativa visual e interacoes cinematograficas.",
    tech: ["React", "Figma API", "Node.js", "PostgreSQL"],
    view: "vintage",
  },
  {
    name: "copper-analytics",
    description:
      "App para exploracao de dados com foco em insights de produto e visualizacoes tecnicas.",
    tech: ["Python", "FastAPI", "Pandas", "Docker"],
    view: "blueprint",
  },
];

export function ProjectsSection() {
  return (
    <section className="mt-8 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55 }}
        className="rounded-2xl border border-copper/25 bg-white/45 p-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-copper">
              Portfolio Vivo
            </p>
            <h3 className="mt-2 font-heading text-3xl text-brass">Projetos em Foco</h3>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-copper/25 bg-white/60 px-3 py-1 font-mono text-xs uppercase tracking-wide text-copper">
            <FolderGit2 className="h-3.5 w-3.5" />
            Dados simulados do GitHub
          </span>
        </div>
      </motion.div>

      <motion.aside
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.08 }}
        className="rounded-2xl border border-copper/25 bg-gradient-to-r from-white/55 via-white/40 to-transparent p-5"
      >
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-copper/95">
          Destaque Atual
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <BriefcaseBusiness className="h-5 w-5 text-copper" />
          <p className="font-heading text-xl text-foreground">
            Estagio em desenvolvimento - 2 meses de experiencia pratica
          </p>
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
            className="schematic-card rounded-2xl p-5"
          >
            <div className={`thumbnail-frame ${project.view}`}>
              <div className="thumbnail-grid" />
              <div className="thumbnail-label font-mono">
                {project.view === "blueprint" ? "Blueprint" : "Foto de Epoca"}
              </div>
            </div>
            <div className="mt-4 flex items-start justify-between gap-3">
              <h4 className="font-heading text-2xl text-brass">{project.name}</h4>
              <Wrench className="mt-1 h-4 w-4 shrink-0 text-copper/90" />
            </div>
            <p className="mt-2 text-sm leading-relaxed text-foreground/85">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-copper/35 bg-coal/60 px-2 py-1 font-mono text-[11px] uppercase tracking-wide text-copper"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
