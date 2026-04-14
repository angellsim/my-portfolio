"use client";

import { motion } from "framer-motion";
import { Cog, Gauge, Zap } from "lucide-react";

type MainShellProps = {
  children: React.ReactNode;
};

const items = [
  { icon: Cog, label: "Mecanica", value: "Calibrada" },
  { icon: Gauge, label: "Pressao", value: "142 PSI" },
  { icon: Zap, label: "Energia", value: "Estavel" },
];

export function MainShell({ children }: MainShellProps) {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-10 md:px-10">
      <motion.header
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="rounded-2xl border border-copper/45 bg-black/20 p-6 backdrop-blur-sm"
      >
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-brass/80">
          Dossie Tecnico
        </p>
        <h1 className="mt-3 font-heading text-4xl tracking-wide text-brass md:text-5xl">
          Steampunk Moderno
        </h1>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {items.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="rounded-xl border border-brass/35 bg-coal/40 p-3 text-sm"
            >
              <div className="flex items-center gap-2 font-mono uppercase tracking-wide text-copper">
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
