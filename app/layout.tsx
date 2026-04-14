import type { Metadata } from "next";
import { JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Steampunk Moderno",
  description: "Base visual steampunk moderno para portfólio em Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="noise-bg min-h-full flex flex-col">{children}</body>
    </html>
  );
}
