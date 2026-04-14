"use client";

import { FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Bot, Cpu, FlaskConical, Sparkles } from "lucide-react";

type Certificate = {
  name: string;
  track: "Python" | "Java" | "FullStack JS";
  level: "Fundamentos" | "Aplicado" | "Avancado";
  focus: string;
};

type Message = {
  role: "user" | "assistant";
  content: string;
};

const certificateData: Certificate[] = [
  { name: "Python para Dados", track: "Python", level: "Aplicado", focus: "analise e IA" },
  { name: "Java OO e APIs", track: "Java", level: "Fundamentos", focus: "backend solido" },
  {
    name: "FullStack JavaScript",
    track: "FullStack JS",
    level: "Avancado",
    focus: "frontend + node",
  },
];

const filters: Array<Certificate["track"]> = ["Python", "Java", "FullStack JS"];

function createLabReply(text: string) {
  const lower = text.toLowerCase();
  if (lower.includes("prompt")) {
    return "Modo Engenharia de Prompt: defino contexto, persona, restricoes e formato de saida para respostas mais consistentes.";
  }
  if (lower.includes("ia") || lower.includes("dados")) {
    return "Fluxo de IA sugerido: coleta -> limpeza -> feature engineering -> avaliacao -> deploy monitorado.";
  }
  if (lower.includes("portfolio")) {
    return "Sugestao para portfolio: destaque problema real, stack, impacto medido e aprendizados tecnicos.";
  }
  return "Analise concluida. Posso explicar arquitetura, modelagem de dados ou estrategia de prompts para este tema.";
}

export function LaboratorySection() {
  const [activeFilters, setActiveFilters] = useState<Certificate["track"][]>([...filters]);
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Sou sua IA de Laboratorio. Pergunte sobre IA, prompts, automacoes ou arquitetura de projetos.",
    },
  ]);

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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!prompt.trim()) return;

    const userContent = prompt.trim();
    const reply = createLabReply(userContent);
    setMessages((prev) => [
      ...prev,
      { role: "user", content: userContent },
      { role: "assistant", content: reply },
    ]);
    setPrompt("");
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
          Exploracao IA
        </p>
        <h3 className="mt-2 font-heading text-3xl text-brass md:text-4xl">
          Laboratorio de IA e Engenharia de Prompt
        </h3>
      </motion.div>

      <div className="grid gap-6 xl:grid-cols-[1.35fr_1fr]">
        <motion.article
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="glass-panel rounded-2xl p-5"
        >
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-copper" />
            <h4 className="font-heading text-2xl text-brass">IA Interativa</h4>
          </div>
          <p className="mt-2 text-sm text-foreground/85">
            Simulador local com respostas orientadas a IA aplicada, engenharia de
            prompt e arquitetura de portfolio tecnico.
          </p>

          <div className="steam-chat mt-4 max-h-[360px] space-y-2 overflow-y-auto rounded-xl p-3">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`chat-bubble ${
                  message.role === "assistant" ? "assistant-bubble" : "user-bubble"
                }`}
              >
                {message.content}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="mt-3 flex flex-col gap-2 sm:flex-row">
            <input
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
              placeholder="Pergunte algo sobre IA, dados ou prompts..."
              className="glass-input h-11 flex-1 rounded-lg px-3 font-mono text-sm text-foreground placeholder:text-foreground/45"
            />
            <button type="submit" className="brass-button h-11 rounded-lg px-4 text-sm">
              Gerar resposta
            </button>
          </form>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.52, delay: 0.06 }}
          className="glass-panel rounded-2xl p-5"
        >
          <div className="flex items-center gap-2">
            <FlaskConical className="h-5 w-5 text-copper" />
            <h4 className="font-heading text-2xl text-brass">Filtro de Certificados</h4>
          </div>
          <p className="mt-2 text-sm text-foreground/85">
            Interruptores de pressao para segmentar trilhas por linguagem e stack.
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

          <div className="mt-4 space-y-2">
            {visibleCertificates.map((cert) => (
              <div key={cert.name} className="cert-row">
                <div className="flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-copper" />
                  <p className="font-heading text-lg text-foreground">{cert.name}</p>
                </div>
                <div className="mt-1 flex flex-wrap gap-2 font-mono text-[11px] uppercase">
                  <span className="cert-chip">{cert.track}</span>
                  <span className="cert-chip">{cert.level}</span>
                  <span className="cert-chip">{cert.focus}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-pill mt-4 inline-flex items-center gap-2 rounded-md px-3 py-1.5 font-mono text-xs uppercase tracking-wide text-copper">
            <Sparkles className="h-3.5 w-3.5" />
            Filtros combinaveis em tempo real
          </div>
        </motion.article>
      </div>
    </section>
  );
}
