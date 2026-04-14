"use client";

import { motion } from "framer-motion";
import { Cog, Gauge, Zap } from "lucide-react";

type MainShellProps = {
  children: React.ReactNode;
};

const items = [
  { icon: Cog, label: "Sistema", value: "Sincronizado" },
  { icon: Gauge, label: "Ritmo", value: "Fluido" },
  { icon: Zap, label: "Fluxo", value: "Constante" },
];

export function MainShell({ children }: MainShellProps) {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-10 md:px-10">
      <motion.header
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="rounded-2xl border border-copper/30 bg-white/45 p-6 backdrop-blur-sm"
      >
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-copper/90">
          Visao Geral
        </p>
        <h1 className="mt-3 font-heading text-4xl tracking-wide text-brass md:text-5xl">
          Horizonte Criativo
        </h1>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {items.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="rounded-xl border border-copper/20 bg-white/50 p-3 text-sm"
            >
              <div className="flex items-center gap-2 font-mono uppercase tracking-wide text-copper/85">
                <Icon className="h-4 w-4" />
                {label}
              </div>
              <p className="mt-1 font-heading text-lg text-foreground">{value}</p>
            </div>
          ))}
        </div>
      </motion.header>
      <main className="mt-8 flex-1">{children}</main>
    </div>
  );
}
