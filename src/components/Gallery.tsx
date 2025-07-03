"use client";

import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { X } from "lucide-react";
import hallEntrada from "../assets/hall-de-entrada.webp";
import salaDeMusculacaoPesada from "../assets/area_musculacao_pesada.webp";
import espacoTecnicoComEspelhos from "../assets/espaco_tecnico_com_espelhos.webp";
import espacoParaSupino from "../assets/espaco_para_supino.webp";
import areaDeAlongamento from "../assets/area_alongamento.webp";
import areaDeMusculacaoGeral from "../assets/area_musculacao_geral.webp";
import Image, { type StaticImageData } from "next/image";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<
    string | StaticImageData | null
  >(null);

  const galleryImages = [
    {
      src: hallEntrada,
      alt: "Recepção da Cris Academia",
      title: "Recepção",
    },
    {
      src: salaDeMusculacaoPesada,
      alt: "Área de musculação inferior da Cris Academia",
      title: "Área de Musculação Inferior",
    },
    {
      src: espacoTecnicoComEspelhos,
      alt: "Espaço técnico com espelhos da Cris Academia",
      title: "Espaço Técnico com Espelhos",
    },
    {
      src: espacoParaSupino,
      alt: "Espaço para supino da Cris Academia",
      title: "Espaço para Supino",
    },
    {
      src: areaDeAlongamento,
      alt: "Área de alongamento da Cris Academia",
      title: "Área de Alongamento",
    },
    {
      src: areaDeMusculacaoGeral,
      alt: "Area de Musculação Geral da Cris Academia",
      title: "Area de Musculação Geral",
    },
  ];

  return (
    <section
      id="galeria"
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
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
              {typeof image.src === "string" ? (
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ objectFit: "cover" }}
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">
                  {image.title}
                </span>
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
              {typeof selectedImage === "string" ? (
                <img
                  src={selectedImage}
                  alt="Imagem ampliada"
                  className="w-full h-auto max-h-[80vh] object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
              ) : (
                <Image
                  src={selectedImage}
                  alt="Imagem ampliada"
                  className="w-full h-auto max-h-[80vh] object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
              )}
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            Visite nossa academia e conheça pessoalmente nossa estrutura
          </p>
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
