import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://crisacademia.netlify.app";
const previewImage = `${siteUrl}/og-preview.jpg`;
const title = "Cris Academia em Portel-PA | Saúde, Musculação e Bem-Estar";
const description =
  "Cris Academia em Portel-PA: treinos acompanhados, musculação, saúde integral, reabilitação, bem-estar e atendimento para diferentes idades e objetivos.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Cris Academia",
  },
  description,
  applicationName: "Cris Academia",
  category: "Fitness",
  keywords: [
    "Cris Academia",
    "academia em Portel",
    "academia Portel PA",
    "musculação em Portel",
    "treino acompanhado",
    "saúde integral",
    "reabilitação física",
    "atividade física",
    "bem-estar",
    "emagrecimento",
    "hipertrofia",
    "avaliação física",
    "Portel-PA",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Cris Academia",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: previewImage,
        width: 1200,
        height: 630,
        alt: "Cris Academia em Portel-PA",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    site: "@_crisacademia",
    creator: "@_crisacademia",
    images: [previewImage],
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
