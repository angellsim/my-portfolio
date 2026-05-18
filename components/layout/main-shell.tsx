"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, Cloud, Sparkles } from "lucide-react";

type MainShellProps = {
  children: React.ReactNode;
};

const items = [
  { icon: Eye, label: "Percepção", value: "Sincronia" },
  { icon: Cloud, label: "Vácuo", value: "Fluidez" },
  { icon: Sparkles, label: "Infinito", value: "Expansão" },
];

import { SixEyesBackground } from "@/components/effects/six-eyes-background";

export function MainShell({ children }: MainShellProps) {
  const [causticsEnabled, setCausticsEnabled] = useState(true);

  return (
    <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-10 md:px-10">
      <SixEyesBackground />
      {causticsEnabled ? <div aria-hidden="true" className="caustics-layer" /> : null}
      
      <main className="relative z-10 flex-1">{children}</main>

      <div className="fixed top-8 right-8 z-50">
        <button
          type="button"
          onClick={() => setCausticsEnabled((prev) => !prev)}
          className="glass-pill rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-sky-600 transition hover:text-sky-800 bg-white/40 backdrop-blur-md border border-white/60"
        >
          Aura: {causticsEnabled ? "Ativa" : "Oculta"}
        </button>
      </div>
    </div>
  );
}

