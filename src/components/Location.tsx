import React from 'react';
import SectionTitle from './SectionTitle';
import { MapPin, Clock, Phone } from 'lucide-react';

const Location = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Localização e Contato"
          subtitle="Estamos bem localizados no centro da cidade, com fácil acesso"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <div className="bg-gray-800 rounded-lg overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.2211303143837!2d-50.818813405930996!3d-1.9371871949508175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92977d0017af87d5%3A0xccc58b194a5bb274!2sCris%20Academia!5e0!3m2!1spt-BR!2sus!4v1747871795322!5m2!1spt-BR!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Cris Academia"
            />
          </div>
          
          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Entre em Contato</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <MapPin className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Endereço</h4>
                  <p className="text-gray-300">
                    Avenida Floriano Peixoto, 457<br />
                    Centro, Portel-PA
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Horário de Funcionamento</h4>
                  <p className="text-gray-300">
                    Segunda a Sexta<br />
                    06h00 às 20h30
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">WhatsApp</h4>
                  <p className="text-gray-300">
                    <a 
                      href="https://wa.me/5591992543958" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-blue-500 transition-colors"
                    >
                      (91) 99254-3958
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Nome
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  E-mail ou WhatsApp
                </label>
                <input 
                  type="text" 
                  id="email" 
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Seu contato"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Mensagem
                </label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-blue-800 hover:bg-blue-900 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;