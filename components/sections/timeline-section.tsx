"use client";

import { motion } from "framer-motion";
import { Award, BookOpenText, BriefcaseBusiness, GraduationCap } from "lucide-react";

type TimelineItem = {
  title: string;
  organization: string;
  summary: string;
  icon: React.ComponentType<{ className?: string }>;
};

const experience: TimelineItem[] = [
  {
    title: "Customer Service",
    organization: "Drogasil",
    summary:
      "Atendimento com foco em resiliência, empatia e resolucao pratica de problemas.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Marketing Digital",
    organization: "Cristel",
    summary:
      "Atuacao conectando design e dados para melhorar comunicacao, alcance e conversao.",
    icon: BookOpenText,
  },
];

const education: TimelineItem[] = [
  {
    title: "PUC Goias",
    organization: "ADS e Ciencia de Dados/IA",
    summary:
      "Formacao tecnica em desenvolvimento de software, dados e fundamentos de inteligencia artificial.",
    icon: GraduationCap,
  },
];

const certificates = [
  "Python",
  "Java",
  "RocketSeat",
  "Engenharia de Prompt - Asimov",
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
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-copper">
          Jornada
        </p>
        <h3 className="mt-2 font-heading text-3xl text-brass">
          Experiencia e Formacao
        </h3>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="glass-panel rounded-2xl p-5">
          <h4 className="font-heading text-2xl text-brass">Experiencia</h4>
          <ol className="timeline-rail mt-4 space-y-4">
            {experience.map((item, index) => (
              <motion.li
                key={item.organization}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="timeline-card"
              >
                <div className="flex items-start gap-3">
                  <item.icon className="mt-0.5 h-4 w-4 text-copper" />
                  <div>
                    <p className="font-heading text-xl text-foreground">{item.title}</p>
                    <p className="font-mono text-xs uppercase tracking-wide text-copper/80">
                      {item.organization}
                    </p>
                    <p className="mt-2 text-sm text-foreground/85">{item.summary}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="glass-panel rounded-2xl p-5">
          <h4 className="font-heading text-2xl text-brass">Educacao</h4>
          <ol className="timeline-rail mt-4 space-y-4">
            {education.map((item) => (
              <motion.li
                key={item.organization}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45 }}
                className="timeline-card"
              >
                <div className="flex items-start gap-3">
                  <item.icon className="mt-0.5 h-4 w-4 text-copper" />
                  <div>
                    <p className="font-heading text-xl text-foreground">{item.title}</p>
                    <p className="font-mono text-xs uppercase tracking-wide text-copper/80">
                      {item.organization}
                    </p>
                    <p className="mt-2 text-sm text-foreground/85">{item.summary}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="mech-seal">
                        <Award className="h-3.5 w-3.5" />
                        Excelencia em Algoritmos
                      </span>
                      <span className="mech-seal">
                        <Award className="h-3.5 w-3.5" />
                        Excelencia em Bancos de Dados
                      </span>
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, delay: 0.08 }}
        className="glass-panel rounded-2xl p-6"
      >
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-copper">
          Certificados
        </p>
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
