"use client";

import { useState } from "react";
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
  const [causticsEnabled, setCausticsEnabled] = useState(true);

  return (
    <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-10 md:px-10">
      {causticsEnabled ? <div aria-hidden="true" className="caustics-layer" /> : null}
      <motion.header
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="glass-panel relative z-10 rounded-2xl p-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-copper/90">
            Visao Geral
          </p>
          <button
            type="button"
            onClick={() => setCausticsEnabled((prev) => !prev)}
            className="glass-pill rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-copper transition hover:text-foreground"
          >
            Caustics: {causticsEnabled ? "On" : "Off"}
          </button>
        </div>
        <h1 className="mt-3 font-heading text-4xl tracking-wide text-brass md:text-5xl">
          Horizonte Criativo
        </h1>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {items.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="glass-panel rounded-xl p-3 text-sm"
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
      <main className="relative z-10 mt-8 flex-1">{children}</main>
    </div>
  );
}
