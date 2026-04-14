"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroPanel() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.6 }}
      className="hero-metal relative overflow-hidden rounded-2xl border border-brass/40 p-8 md:p-10"
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
          Presenca Digital
        </p>
        <h2 className="mt-4 font-heading text-4xl text-foreground md:text-6xl">
          Alice Wolf Fernandes
        </h2>
        <p className="mt-3 font-mono text-sm uppercase tracking-[0.25em] text-brass">
          FullStack Developer
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/90 md:text-lg">
          Estudante de Analise e Desenvolvimento de Sistemas e Ciencia de
          Dados/IA na PUC Goias, combinando engenharia de software com
          pensamento visual para criar experiencias digitais funcionais e
          expressivas.
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
