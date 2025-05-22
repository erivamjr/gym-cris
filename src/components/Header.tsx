'use client'
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="https://i.imgur.com/tE0WPN4.png" alt="Cris Academia" className="h-8 md:h-12" />
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <a href="#inicio" className="hover:text-blue-800 transition-colors">Início</a>
          <a href="#beneficios" className="hover:text-blue-800 transition-colors">Benefícios</a>
          <a href="#planos" className="hover:text-blue-800 transition-colors">Planos</a>
          <a href="#equipe" className="hover:text-blue-800 transition-colors">Equipe</a>
          <a href="#depoimentos" className="hover:text-blue-800 transition-colors">Depoimentos</a>
          <a href="#contato" className="hover:text-blue-800 transition-colors">Contato</a>
        </nav>
        
        {/* CTA Button */}
        <a 
          href="#planos" 
          className="hidden md:block bg-blue-800 hover:bg-blue-900 text-white py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          Matricule-se Já
        </a>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/95 transition-all duration-300 ease-in-out transform ${
          mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
        style={{ top: '62px' }}
      >
        <nav className="flex flex-col space-y-4 p-4">
          <a 
            href="#inicio" 
            className="text-white hover:text-blue-800 transition-colors text-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Início
          </a>
          <a 
            href="#beneficios" 
            className="text-white hover:text-blue-800 transition-colors text-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Benefícios
          </a>
          <a 
            href="#planos" 
            className="text-white hover:text-blue-800 transition-colors text-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Planos
          </a>
          <a 
            href="#equipe" 
            className="text-white hover:text-blue-800 transition-colors text-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Equipe
          </a>
          <a 
            href="#depoimentos" 
            className="text-white hover:text-blue-800 transition-colors text-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Depoimentos
          </a>
          <a 
            href="#contato" 
            className="text-white hover:text-blue-800 transition-colors text-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contato
          </a>
          <a 
            href="#planos" 
            className="bg-blue-800 hover:bg-blue-900 text-white py-3 px-6 rounded-full text-center transition-colors text-lg"
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