// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const siteUrl = "https://crisacademia.netlify.app";
const title = "Cris Academia | Transformando Saúde em Movimento";
const description =
  "Cris Academia – Academia com foco em saúde integral, estética e reabilitação em Portel-PA.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "academia",
    "Portel",
    "saúde",
    "musculação",
    "treinamento",
    "personal trainer",
    "reabilitação",
    "exercício",
    "bem-estar",
    "Cris Academia",
    "pilates",
    "cardio",
    "emagrecimento",
    "hipertrofia",
    "atividade física",
    "personalizado",
    "avaliação física",
    "profissionais",
    "Portel-PA",
  ],

  // favicon / ícones
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  // Open Graph (WhatsApp, Facebook, etc)
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Cris Academia",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: `${siteUrl}/logo.png`, // coloque em /public
        width: 1200,
        height: 630,
        alt: "Logo da Cris Academia",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    site: "@crisacademia", // ajuste se houver @ real
    creator: "@crisacademia",
    images: [`${siteUrl}/logo.png`],
  },
  authors: [{ name: "Cris Academia", url: siteUrl }],
  publisher: "Cris Academia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
