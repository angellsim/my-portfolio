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
    name: "Engenharia de Prompt (Asimov)",
    description:
      "Desenvolvimento de pipelines e tecnicas avancadas de interacao com LLMs, focando em precisao e automacao de fluxos.",
    tech: ["Python", "OpenAI", "Prompt Engineering", "Vectara"],
    view: "blueprint",
  },
  {
    name: "Estágio em Desenvolvimento",
    description:
      "Exploracao de arquiteturas FullStack JS e Engenharia de Dados em ambiente corporativo real.",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    view: "vintage",
  },
  {
    name: "Atelier UX Lab",
    description:
      "Laboratorio de interfaces para prototipos com narrativa visual e interacoes cinematograficas.",
    tech: ["React", "Figma API", "Creative Coding"],
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
        className="glass-panel rounded-2xl p-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-copper">
              Portfolio Vivo
            </p>
            <h3 className="mt-2 font-heading text-3xl text-brass">Projetos em Foco</h3>
          </div>
          <span className="glass-pill inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-xs uppercase tracking-wide text-copper">
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
        className="glass-panel rounded-2xl p-5"
      >
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-copper/95">
          Destaque atual
        </p>
        <div className="mt-3 flex flex-wrap items-start gap-3">
          <BriefcaseBusiness className="mt-0.5 h-5 w-5 shrink-0 text-copper" aria-hidden />
          <div>
            <p className="font-heading text-lg text-foreground sm:text-xl">
              Estágio em desenvolvimento · 2 meses
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground/85">
              Experiência em ritmo de laboratório: exploro stacks e fluxos reais, prototipo com
              agilidade e fecho ciclos curtos de aprendizado — inovação com os pés no código e
              evolução contínua a cada sprint.
            </p>
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
                  className="glass-pill rounded-md px-2 py-1 font-mono text-[11px] uppercase tracking-wide text-copper"
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
