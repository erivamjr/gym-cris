import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/5591992543958?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Cris%20Academia"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110 z-40 flex items-center justify-center"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="ml-2 hidden md:inline">Fale Conosco</span>
    </a>
  );
};

export default FloatingWhatsApp;