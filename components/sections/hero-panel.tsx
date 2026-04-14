"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroPanel() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.6 }}
      className="hero-metal glass-panel relative overflow-hidden rounded-2xl p-8 md:p-10"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 220 220"
        className="pointer-events-none absolute -right-14 -top-16 h-56 w-56 opacity-25"
      >
        <circle cx="110" cy="110" r="58" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="110" cy="110" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
        <g transform="translate(110 110)" stroke="currentColor" strokeWidth="4">
          <line x1="0" y1="-74" x2="0" y2="-88" />
          <line x1="0" y1="74" x2="0" y2="88" />
          <line x1="-74" y1="0" x2="-88" y2="0" />
          <line x1="74" y1="0" x2="88" y2="0" />
          <line x1="52" y1="-52" x2="63" y2="-63" />
          <line x1="-52" y1="52" x2="-63" y2="63" />
          <line x1="-52" y1="-52" x2="-63" y2="-63" />
          <line x1="52" y1="52" x2="63" y2="63" />
        </g>
      </svg>

      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className="pointer-events-none absolute -bottom-10 -left-10 h-44 w-44 rotate-6 opacity-20"
      >
        <circle cx="100" cy="100" r="62" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="100" cy="100" r="28" fill="none" stroke="currentColor" strokeWidth="2" />
        <path
          d="M100 40 L112 88 L160 100 L112 112 L100 160 L88 112 L40 100 L88 88 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>

      <div className="relative z-10">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-copper/90">
          Presença digital
        </p>
        <h1 className="mt-4 font-heading text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
          <span className="block sm:inline">Alice Wolf Fernandes</span>
          <span className="mt-2 block text-copper/70 sm:mt-0 sm:inline sm:px-2 md:px-3">
            <span aria-hidden="true" className="hidden sm:inline">
              |
            </span>
            <span className="block sm:inline sm:font-semibold">FullStack Developer</span>
          </span>
        </h1>
        <p className="mt-5 max-w-2xl text-base font-medium leading-relaxed text-foreground/95 md:text-lg">
          Estudante de{" "}
          <span className="text-brass">Análise e Desenvolvimento de Sistemas</span> e de{" "}
          <span className="text-brass">Ciência de Dados / IA</span> na{" "}
          <span className="font-semibold text-foreground">PUC Goiás</span>
          . Conecto engenharia de software, dados e olhar de designer para experiências digitais
          claras e funcionais.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button className="brass-button">Ver Projetos</Button>
          <Button variant="outline" className="brass-button-outline">
            Contato
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
