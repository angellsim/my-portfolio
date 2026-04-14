## Portfolio - Alice Wolf Fernandes

Portfolio em Next.js com tema Steampunk Moderno.

## Getting Started

Rode o servidor local:

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Curriculo em PDF

Para o botao "Baixar CV no Dossie de Bronze" funcionar, coloque seu arquivo em:

`public/curriculo-alice-wolf-fernandes.pdf`

## Deploy na Vercel

1. Suba o repositorio para o GitHub.
2. Importe o projeto na Vercel.
3. Build command: `npm run build`
4. Output automatico (Next.js): sem configuracao extra.

## Deploy no GitHub Pages

Este projeto ja esta preparado para export estatico quando estiver em GitHub Actions.

1. Ative GitHub Pages nas configuracoes do repositorio (source: GitHub Actions).
2. Use um workflow com os comandos:

```bash
npm ci
npm run build
```

3. Publique a pasta `out` gerada pelo `next export`.
