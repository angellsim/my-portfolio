"use client";

import { motion } from "framer-motion";
import {
  Award,
  BarChart3,
  BookOpenText,
  BriefcaseBusiness,
  GraduationCap,
  Headphones,
  Heart,
  Palette,
  Shield,
  Sparkles,
} from "lucide-react";

type Highlight = {
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
};

type ExperienceBlock = {
  title: string;
  organization: string;
  summary: string;
  Icon: React.ComponentType<{ className?: string }>;
  highlights?: Highlight[];
};

const experience: ExperienceBlock[] = [
  {
    title: "Estágio em desenvolvimento",
    organization: "2 meses · atual",
    summary:
      "Atuo no desenvolvimento de sistemas FullStack JS, unindo prototipagem agil de interfaces a otimizacao de fluxos de dados. Aplico Engenharia de Prompt para integrar LLMs de forma eficiente, transformando requisitos tecnicos em solucoes centradas no usuario.",
    Icon: Sparkles,
    highlights: [
      { Icon: BriefcaseBusiness, label: "FullStack JS" },
      { Icon: Sparkles, label: "Prompt Engineering" },
    ],
  },
  {
    title: "Customer Service",
    organization: "Drogasil",
    summary:
      "Linha de frente com escuta ativa: manter calma e clareza em alto volume exige resiliência emocional e empatia genuína.",
    Icon: Headphones,
    highlights: [
      { Icon: Shield, label: "Resiliência" },
      { Icon: Heart, label: "Empatia" },
    ],
  },
  {
    title: "Marketing digital",
    organization: "Cristel",
    summary:
      "Estratégias onde design conversa com dados: narrativa, mensuração e ajustes para fortalecer presença, alcance e conversão.",
    Icon: Palette,
    highlights: [
      { Icon: Palette, label: "Design" },
      { Icon: BarChart3, label: "Dados" },
    ],
  },
];

const education = [
  {
    title: "PUC Goiás",
    organization: "ADS · Ciência de Dados / IA",
    summary:
      "Base sólida em desenvolvimento, estatística e fundamentos de IA — com disciplinas que exigem rigor lógico e visão de produto.",
    Icon: GraduationCap,
  },
];

const certificates = [
  "Python",
  "Java",
  "RocketSeat",
  "Engenharia de Prompt — Asimov",
];

export function TimelineSection() {
  return (
    <section className="mt-8 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55 }}
        className="glass-panel rounded-2xl p-6"
      >
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-copper">Jornada</p>
        <h3 className="mt-2 font-heading text-3xl text-brass">Experiência e formação</h3>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="glass-panel rounded-2xl p-5">
          <h4 className="font-heading text-2xl text-brass">Experiência</h4>
          <div className="timeline-rail mt-5 space-y-4">
            {experience.map((item, index) => (
              <motion.article
                key={`${item.organization}-${item.title}`}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="timeline-card relative"
              >
                <div className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/50 text-copper shadow-sm backdrop-blur-sm">
                    <item.Icon className="h-[18px] w-[18px]" aria-hidden />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-heading text-lg leading-snug text-foreground">{item.title}</p>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-copper/85">
                      {item.organization}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/85">{item.summary}</p>
                    {item.highlights?.length ? (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.highlights.map(({ Icon, label }) => (
                          <span
                            key={label}
                            className="inline-flex items-center gap-1.5 rounded-full border border-white/50 bg-white/35 px-2.5 py-1 text-[11px] font-medium text-copper backdrop-blur-sm"
                          >
                            <Icon className="h-3 w-3 opacity-90" aria-hidden />
                            {label}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="glass-panel rounded-2xl p-5">
          <h4 className="font-heading text-2xl text-brass">Formação</h4>
          <div className="timeline-rail mt-5 space-y-4">
            {education.map((item) => (
              <motion.article
                key={item.organization}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45 }}
                className="timeline-card relative"
              >
                <div className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/50 text-copper shadow-sm backdrop-blur-sm">
                    <item.Icon className="h-[18px] w-[18px]" aria-hidden />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-heading text-lg leading-snug text-foreground">{item.title}</p>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-copper/85">
                      {item.organization}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/85">{item.summary}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="mech-seal">
                        <Award className="h-3.5 w-3.5" />
                        Excelência em Algoritmos
                      </span>
                      <span className="mech-seal">
                        <Award className="h-3.5 w-3.5" />
                        Excelência em Bancos de Dados
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, delay: 0.08 }}
        className="glass-panel rounded-2xl p-6"
      >
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-copper">Certificados</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {certificates.map((cert) => (
            <span
              key={cert}
              className="glass-pill inline-flex items-center rounded-md px-3 py-1.5 font-mono text-xs uppercase tracking-wide text-brass"
            >
              {cert}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
