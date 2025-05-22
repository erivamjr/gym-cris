import React from 'react';
import { Dumbbell, MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img src="https://i.imgur.com/tE0WPN4.png" alt="Cris Academia" className="h-8 md:h-12" /><p>{' -'}</p>
              <span className="text-xl font-bold">{' Academia'}</span>
            </div>
            <p className="text-gray-400 mb-6">
              Transformando Saúde em Movimento. Primeira academia da região com foco em saúde integral — estética e reabilitação.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Instagram />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Facebook />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-blue-500 transition-colors">Início</a>
              </li>
              <li>
                <a href="#beneficios" className="text-gray-400 hover:text-blue-500 transition-colors">Benefícios</a>
              </li>
              <li>
                <a href="#planos" className="text-gray-400 hover:text-blue-500 transition-colors">Planos</a>
              </li>
              <li>
                <a href="#equipe" className="text-gray-400 hover:text-blue-500 transition-colors">Equipe</a>
              </li>
              <li>
                <a href="#depoimentos" className="text-gray-400 hover:text-blue-500 transition-colors">Depoimentos</a>
              </li>
              <li>
                <a href="#galeria" className="text-gray-400 hover:text-blue-500 transition-colors">Galeria</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-blue-500 transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="text-blue-800 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Avenida Floriano Peixoto, 457<br />
                  Centro, Portel-PA
                </span>
              </li>
              <li className="flex">
                <Phone className="text-blue-800 mr-3 flex-shrink-0 mt-1" />
                <a 
                  href="https://wa.me/5591992543958" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  (91) 99254-3958
                </a>
              </li>
              <li className="flex">
                <Clock className="text-blue-800 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Segunda a Sexta<br />
                  06h00 às 20h30
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Inscreva-se</h3>
            <p className="text-gray-400 mb-4">
              Receba dicas de saúde, promoções exclusivas e novidades da Cris Academia.
            </p>
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button 
                type="submit" 
                className="w-full bg-blue-800 hover:bg-blue-900 text-white py-2 rounded-lg transition-colors"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500">
            &copy; {new Date().getFullYear()} Cris Academia. Todos os direitos reservados.
          </p>
          <p className="text-center text-gray-500">
            Desenvolvido com 💻 e ☕ por{' '} <a href="https://erivam.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">José Erivam</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;