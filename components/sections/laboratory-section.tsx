"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Cpu, FlaskConical, Sparkles } from "lucide-react";

type Certificate = {
  name: string;
  track: "Python" | "Java" | "FullStack JS" | "Banco de Dados";
  level: "Fundamentos" | "Aplicado" | "Avancado";
  focus: string;
};

const certificateData: Certificate[] = [
  { name: "Python aplicado à Dados", track: "Python", level: "Aplicado", focus: "analise e IA" },
  { name: "Java OO e APIs", track: "Java", level: "Fundamentos", focus: "backend solido" },
  {
    name: "FullStack JavaScript",
    track: "FullStack JS",
    level: "Avancado",
    focus: "frontend + node",
  },
  {
    name: "PostgreSQL e pandasDB na prática",
    track: "Banco de Dados",
    level: "Avancado",
    focus: "backend solido",
  }
];

const filters: Array<Certificate["track"]> = ["Python", "Java", "FullStack JS", "Banco de Dados"];

export function LaboratorySection() {
  const [activeFilters, setActiveFilters] = useState<Certificate["track"][]>([...filters]);

  const visibleCertificates = useMemo(() => {
    return certificateData.filter((cert) => activeFilters.includes(cert.track));
  }, [activeFilters]);

  function toggleFilter(filter: Certificate["track"]) {
    setActiveFilters((prev) => {
      if (prev.includes(filter)) {
        const next = prev.filter((item) => item !== filter);
        return next.length ? next : prev;
      }
      return [...prev, filter];
    });
  }

  return (
    <section className="mt-8 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        className="glass-panel rounded-2xl p-6"
      >
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-copper">
          Especialidades e Conquistas
        </p>
        <h3 className="mt-2 font-heading text-3xl text-brass md:text-4xl">
          Laboratório de Aprendizado e Certificados
        </h3>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-foreground/80 md:text-base">
          Consolidação de trilhas teóricas e práticas em desenvolvimento e análise.
          Abaixo estão listadas algumas das principais certificações obtidas, filtráveis por linguagem e stack em tempo real.
        </p>
      </motion.div>

      <div className="w-full">
        <motion.article
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.52 }}
          className="glass-panel rounded-2xl p-5"
        >
          <div className="flex items-center gap-2">
            <FlaskConical className="h-5 w-5 text-copper" />
            <h4 className="font-heading text-2xl text-brass">Filtro de Certificados</h4>
          </div>
          <p className="mt-2 text-sm text-foreground/85">
            Interruptores de pressão para segmentar trilhas por linguagem e stack.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {filters.map((filter) => {
              const active = activeFilters.includes(filter);
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => toggleFilter(filter)}
                  aria-pressed={active}
                  className={`pressure-switch ${active ? "switch-on" : "switch-off"}`}
                >
                  <span className="switch-dot" />
                  {filter}
                </button>
              );
            })}
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {visibleCertificates.map((cert) => (
              <div key={cert.name} className="cert-row flex flex-col justify-between">
                <div className="flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-copper" />
                  <p className="font-heading text-base font-semibold text-foreground">{cert.name}</p>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5 font-mono text-[11px] uppercase">
                  <span className="cert-chip">{cert.track}</span>
                  <span className="cert-chip">{cert.level}</span>
                  <span className="cert-chip">{cert.focus}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-pill mt-4 inline-flex items-center gap-2 rounded-md px-3 py-1.5 font-mono text-xs uppercase tracking-wide text-copper">
            <Sparkles className="h-3.5 w-3.5" />
            Filtros combináveis em tempo real
          </div>
        </motion.article>
      </div>
    </section>
  );
}
