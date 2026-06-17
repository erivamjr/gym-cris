import type { Metadata } from "next";
import Image from "next/image";
import { Globe2, MapPin } from "lucide-react";
import gymPhoto from "@/assets/vista_panoramica.webp";
import crisPhoto from "@/assets/cris.png";
import ShareLinksButton from "./ShareLinksButton";

const homeUrl = "/";
const publicSiteUrl = "https://crisacademia.netlify.app";
const instagramUrl = "https://instagram.com/_crisacademia";
const whatsappUrl =
  "https://wa.me/5591992543958?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Cris%20Academia";

export const metadata: Metadata = {
  title: "Links | Cris Academia",
  description:
    "Acesse o site, Instagram e WhatsApp da Cris Academia em Portel-PA.",
  openGraph: {
    title: "Cris Academia",
    description:
      "Acesse o site, Instagram e WhatsApp da Cris Academia em Portel-PA.",
    url: `${publicSiteUrl}/links`,
    siteName: "Cris Academia",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: `${publicSiteUrl}/logo1.png`,
        width: 1200,
        height: 630,
        alt: "Cris Academia",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cris Academia",
    description:
      "Acesse o site, Instagram e WhatsApp da Cris Academia em Portel-PA.",
    images: [`${publicSiteUrl}/logo1.png`],
  },
};

type LinkIconProps = {
  className?: string;
};

const WhatsAppBrandIcon = ({ className }: LinkIconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12.04 2C6.58 2 2.13 6.33 2.13 11.65c0 1.7.46 3.36 1.33 4.81L2 22l5.7-1.45a10.1 10.1 0 0 0 4.34.96c5.47 0 9.92-4.33 9.92-9.65S17.51 2 12.04 2Zm0 17.87c-1.43 0-2.82-.36-4.05-1.05l-.29-.16-3.38.86.88-3.22-.19-.31a8.06 8.06 0 0 1-1.24-4.34c0-4.41 3.71-8 8.27-8s8.28 3.59 8.28 8-3.72 8.22-8.28 8.22Zm4.54-6.16c-.25-.12-1.47-.71-1.7-.79-.23-.08-.4-.12-.57.12-.17.25-.65.79-.8.96-.15.17-.3.19-.55.06-.25-.12-1.05-.38-2-1.2-.74-.64-1.24-1.43-1.38-1.68-.15-.25-.02-.38.11-.5.11-.11.25-.28.37-.42.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.57-1.34-.78-1.84-.21-.48-.42-.42-.57-.43h-.49c-.17 0-.44.06-.67.31-.23.25-.88.84-.88 2.05 0 1.21.9 2.38 1.02 2.55.12.17 1.77 2.63 4.29 3.68.6.25 1.07.4 1.43.51.6.19 1.15.16 1.58.1.48-.07 1.47-.59 1.68-1.16.21-.57.21-1.06.15-1.16-.06-.1-.23-.16-.48-.28Z" />
  </svg>
);

const InstagramBrandIcon = ({ className }: LinkIconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="instagram-gradient" x1="2" x2="22" y1="22" y2="2">
        <stop offset="0" stopColor="#feda75" />
        <stop offset="0.28" stopColor="#fa7e1e" />
        <stop offset="0.52" stopColor="#d62976" />
        <stop offset="0.75" stopColor="#962fbf" />
        <stop offset="1" stopColor="#4f5bd5" />
      </linearGradient>
    </defs>
    <rect width="24" height="24" rx="6" fill="url(#instagram-gradient)" />
    <path
      d="M12 7.35A4.65 4.65 0 1 0 12 16.65 4.65 4.65 0 0 0 12 7.35Zm0 7.65A3 3 0 1 1 12 9a3 3 0 0 1 0 6Zm5.05-7.84a1.09 1.09 0 1 1-2.18 0 1.09 1.09 0 0 1 2.18 0Z"
      fill="#fff"
    />
    <path
      d="M12 4.8c2.35 0 2.63.01 3.56.05.86.04 1.33.18 1.64.3.42.16.71.35 1.02.66.31.31.5.6.66 1.02.12.31.26.78.3 1.64.04.93.05 1.21.05 3.56s-.01 2.63-.05 3.56c-.04.86-.18 1.33-.3 1.64-.16.42-.35.71-.66 1.02-.31.31-.6.5-1.02.66-.31.12-.78.26-1.64.3-.93.04-1.21.05-3.56.05s-2.63-.01-3.56-.05c-.86-.04-1.33-.18-1.64-.3a2.75 2.75 0 0 1-1.02-.66 2.75 2.75 0 0 1-.66-1.02c-.12-.31-.26-.78-.3-1.64-.04-.93-.05-1.21-.05-3.56s.01-2.63.05-3.56c.04-.86.18-1.33.3-1.64.16-.42.35-.71.66-1.02.31-.31.6-.5 1.02-.66.31-.12.78-.26 1.64-.3.93-.04 1.21-.05 3.56-.05Zm0-1.6c-2.39 0-2.69.01-3.63.05-.94.04-1.58.19-2.14.41a4.33 4.33 0 0 0-1.57 1.02 4.33 4.33 0 0 0-1.02 1.57c-.22.56-.37 1.2-.41 2.14-.04.94-.05 1.24-.05 3.63s.01 2.69.05 3.63c.04.94.19 1.58.41 2.14.23.58.53 1.08 1.02 1.57.49.49.99.79 1.57 1.02.56.22 1.2.37 2.14.41.94.04 1.24.05 3.63.05s2.69-.01 3.63-.05c.94-.04 1.58-.19 2.14-.41a4.33 4.33 0 0 0 1.57-1.02 4.33 4.33 0 0 0 1.02-1.57c.22-.56.37-1.2.41-2.14.04-.94.05-1.24.05-3.63s-.01-2.69-.05-3.63c-.04-.94-.19-1.58-.41-2.14a4.33 4.33 0 0 0-1.02-1.57 4.33 4.33 0 0 0-1.57-1.02c-.56-.22-1.2-.37-2.14-.41-.94-.04-1.24-.05-3.63-.05Z"
      fill="#fff"
    />
  </svg>
);

const links = [
  {
    label: "Conheça nosso site",
    description: "Planos, galeria, localização e estrutura",
    href: homeUrl,
    icon: Globe2,
    iconClassName: "text-blue-200",
    iconWrapperClassName: "bg-white/15",
    className: "bg-blue-800 hover:bg-blue-900 border-blue-700",
  },
  {
    label: "Chamar no WhatsApp",
    description: "Tire dúvidas e agende sua avaliação",
    href: whatsappUrl,
    icon: WhatsAppBrandIcon,
    iconClassName: "text-white",
    iconWrapperClassName: "bg-[#25D366]",
    className: "bg-green-600 hover:bg-green-700 border-green-500",
  },
  {
    label: "Seguir no Instagram",
    description: "Acompanhe novidades, treinos e avisos",
    href: instagramUrl,
    icon: InstagramBrandIcon,
    iconClassName: "",
    iconWrapperClassName: "bg-white",
    className: "bg-fuchsia-700 hover:bg-fuchsia-800 border-fuchsia-600",
  },
];

export default function LinksPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <Image
        src={gymPhoto}
        alt=""
        fill
        priority
        className="object-cover opacity-25"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-gray-950/90 to-black" />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-5 h-32 w-32 overflow-hidden rounded-full border-4 border-blue-500/70 bg-gray-900 shadow-2xl shadow-blue-950/50">
              <Image
                src={crisPhoto}
                alt="Cris Marques"
                width={180}
                height={180}
                className="h-full w-full object-cover object-[center_-6%]"
                priority
              />
            </div>

            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
              Cris Academia
            </p>
            <h1 className="text-3xl font-bold leading-tight md:text-4xl">
              Viver é Presente!
            </h1>
            <p className="mx-auto mt-3 max-w-sm text-base leading-relaxed text-gray-300">
              Saúde, movimento e bem-estar em um ambiente acolhedor para todas
              as idades.
            </p>
          </div>

          <div className="space-y-4">
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex min-h-[84px] items-center gap-4 rounded-lg border px-5 py-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${link.className}`}
                >
                  <span
                    className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full shadow-sm ${link.iconWrapperClassName}`}
                  >
                    <Icon
                      className={`h-7 w-7 ${link.iconClassName}`}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="min-w-0 text-left">
                    <span className="block text-lg font-bold leading-tight">
                      {link.label}
                    </span>
                    <span className="mt-1 block text-sm leading-snug text-white/85">
                      {link.description}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>

          <ShareLinksButton />

          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-300">
            <MapPin className="h-4 w-4 text-blue-400" aria-hidden="true" />
            <span>Av. Floriano Peixoto, 457 - Centro, Portel-PA</span>
          </div>
        </div>
      </section>
    </main>
  );
}
