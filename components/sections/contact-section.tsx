"use client";

import { motion } from "framer-motion";
import { FolderGit2, Mail, Network, Phone, ScrollText } from "lucide-react";
import { Button } from "@/components/ui/button";

const contact = {
  email: "alicewolf.dev@gmail.com",
  phone: "+55 (62) 99999-9999",
  github: "https://github.com/alicewolf",
  linkedin: "https://linkedin.com/in/alicewolf",
  resumePath: "/curriculo-alice-wolf-fernandes.pdf",
};

export function ContactSection() {
  return (
    <section className="mt-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.5 }}
        className="glass-panel rounded-2xl p-6 md:p-8"
      >
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-copper">
          Contato
        </p>
        <h3 className="mt-2 font-heading text-3xl text-brass md:text-4xl">
          Vamos construir algo relevante
        </h3>
        <p className="mt-3 max-w-2xl text-foreground/90">
          Estou disponivel para estagio, freelas e colaboracoes em produtos
          digitais que unem codigo, design e dados.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <a href={`mailto:${contact.email}`} className="contact-item">
            <Mail className="h-4 w-4 text-copper" />
            <span className="font-mono text-sm">{contact.email}</span>
          </a>
          <a href={`tel:${contact.phone.replace(/\D/g, "")}`} className="contact-item">
            <Phone className="h-4 w-4 text-copper" />
            <span className="font-mono text-sm">{contact.phone}</span>
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <FolderGit2 className="h-4 w-4 text-copper" />
            <span className="font-mono text-sm">GitHub</span>
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <Network className="h-4 w-4 text-copper" />
            <span className="font-mono text-sm">LinkedIn</span>
          </a>
        </div>

        <div className="mt-6">
          <a href={contact.resumePath} download className="inline-flex">
            <Button className="brass-button gap-2">
              <ScrollText className="h-4 w-4" />
              Baixar Curriculo
            </Button>
          </a>
          <p className="mt-2 text-xs text-foreground/70">
            Coloque seu PDF em `public/curriculo-alice-wolf-fernandes.pdf`.
          </p>
        </div>
      </motion.div>

      <footer className="steam-footer glass-panel mt-8 rounded-2xl p-5">
        <div className="steam-layer" aria-hidden="true">
          <span className="steam-puff steam-puff-1" />
          <span className="steam-puff steam-puff-2" />
          <span className="steam-puff steam-puff-3" />
        </div>
        <p className="relative z-10 text-center font-mono text-xs uppercase tracking-[0.2em] text-copper/85">
          Portfolio Alice Wolf Fernandes
        </p>
      </footer>
    </section>
  );
}
