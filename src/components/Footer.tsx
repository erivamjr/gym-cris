import React from "react";
import Image from "next/image";
import { Clock, Facebook, Instagram, MapPin, Phone } from "lucide-react";

const footerLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#planos", label: "Planos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#galeria", label: "Galeria" },
  { href: "#faq", label: "FAQ" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="mb-6 flex items-center">
              <Image
                src="/logo-banner.png"
                alt="Cris Academia"
                width={150}
                height={96}
                className="h-10 w-auto md:h-12"
              />
              <p>{" -"}</p>
              <span className="text-xl font-bold">{" Academia"}</span>
            </div>
            <p className="text-gray-400 mb-6">
              Transformando Saúde em Movimento. Academia em Portel-PA com foco
              em saúde integral, estética, bem-estar e reabilitação.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/_crisacademia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-blue-500"
                aria-label="Instagram da Cris Academia"
              >
                <Instagram />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-blue-500"
                aria-label="Facebook da Cris Academia"
              >
                <Facebook />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-blue-500"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="text-blue-800 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Avenida Floriano Peixoto, 457
                  <br />
                  Centro, Portel-PA
                </span>
              </li>
              <li className="flex">
                <Phone className="text-blue-800 mr-3 flex-shrink-0 mt-1" />
                <a
                  href="https://wa.me/5591992543958"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-blue-500"
                >
                  (91) 99254-3958
                </a>
              </li>
              <li className="flex">
                <Clock className="text-blue-800 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Segunda a Sexta
                  <br />
                  06h00 às 20h30
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500">
            &copy; {new Date().getFullYear()} Cris Academia. Todos os direitos
            reservados.
          </p>
          <p className="text-center text-gray-500">
            Desenvolvido com 💻 e ☕ por{" "}
            <a
              href="https://erivam.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              José Erivam
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
