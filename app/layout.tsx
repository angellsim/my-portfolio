import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alice Wolf Fernandes | Data Science & FullStack Developer",
  description: "Estudante de ADS na PUC Goiás, especialista em Ciência de Dados, IA e Engenharia de Prompt. Conheça meu portfólio de soluções FullStack.",
  keywords: ["Data Science", "Inteligência Artificial", "FullStack", "Next.js", "Engenharia de Prompt", "PUC Goiás", "Alice Wolf"],
  authors: [{ name: "Alice Wolf Fernandes" }],
  openGraph: {
    title: "Alice Wolf Fernandes | Data Science & FullStack Developer",
    description: "Portfólio profissional de Alice Wolf Fernandes, especialista em Ciência de Dados e Engenharia de Prompt.",
    type: "website",
  },
};

import { Footer } from "@/components/layout/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="sky-bg min-h-full flex flex-col">
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
