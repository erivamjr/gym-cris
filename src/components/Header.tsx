"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "#inicio", label: "Início" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#planos", label: "Planos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-black/90 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="#inicio" className="flex items-center" aria-label="Cris Academia">
          <Image
            src="/logo-banner.png"
            alt="Cris Academia"
            width={150}
            height={96}
            className="h-10 w-auto md:h-12"
          />
        </a>

        <nav className="hidden space-x-8 md:flex" aria-label="Menu principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-blue-500 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#planos"
          className="hidden rounded-full bg-blue-800 px-6 py-2 text-white transition-all duration-300 hover:scale-105 hover:bg-blue-900 md:block"
        >
          Matricule-se Já
        </a>

        <button
          className="text-white md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-black/95 transition-all duration-300 ease-in-out md:hidden ${
          mobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
        style={{ top: "62px" }}
      >
        <nav className="flex flex-col space-y-4 p-4" aria-label="Menu mobile">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-lg text-white transition-colors hover:text-blue-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#planos"
            className="rounded-full bg-blue-800 px-6 py-3 text-center text-lg text-white transition-colors hover:bg-blue-900"
            onClick={() => setMobileMenuOpen(false)}
          >
            Matricule-se Já
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
