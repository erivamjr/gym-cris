'use client'

import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Recepção da Cris Academia",
      title: "Recepção"
    },
    {
      src: "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Sala de musculação da Cris Academia",
      title: "Sala de Musculação"
    },
    {
      src: "https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Área de cardio da Cris Academia",
      title: "Área de Cardio"
    },
    {
      src: "https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Vestiários da Cris Academia",
      title: "Vestiários"
    },
    {
      src: "https://images.pexels.com/photos/917653/pexels-photo-917653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Área de estiramento da Cris Academia",
      title: "Área de Alongamento"
    },
    {
      src: "https://images.pexels.com/photos/260409/pexels-photo-260409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Sala de avaliação da Cris Academia",
      title: "Sala de Avaliação"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Nossa Estrutura"
          subtitle="Conheça o ambiente onde sua transformação acontece"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="aspect-video overflow-hidden rounded-lg cursor-pointer relative group"
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">{image.title}</span>
              </div>
            </div>
          ))}
        </div>
        
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full">
              <button 
                className="absolute -top-12 right-0 text-white hover:text-blue-500 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={32} />
              </button>
              <img 
                src={selectedImage} 
                alt="Imagem ampliada" 
                className="w-full h-auto max-h-[80vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
        
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">Visite nossa academia e conheça pessoalmente nossa estrutura</p>
          <a 
            href="#contato" 
            className="inline-block bg-blue-800 hover:bg-blue-900 text-white py-3 px-8 rounded-full font-medium text-lg transition-all duration-300"
          >
            Agendar Visita
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;