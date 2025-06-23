"use client";
import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center py-24"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.85)), url("https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">Cris Academia</span>
          </h1>
          <h2 className="text-blue-500 font-semibold text-2xl md:text-4xl mb-6 italic animate-pulse">
            "Viver é Presente!"
          </h2>
          <h2 className="text-2xl md:text-4xl font-light mb-6">
            Corpo em{" "}
            <span className="text-blue-500 font-semibold">Movimento</span>, vida
            em{" "}
            <span className="text-blue-500 font-semibold">Transformação</span>
          </h2>
          {/**Primeira academia da região com foco em saúde integral — combinando estética e reabilitação para todas as idades e condições físicas. */}
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Pioneira na região em saúde integral, atendendo todas as idades e
            condições físicas
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mb-12">
            <a
              href="#planos"
              className="bg-blue-800 hover:bg-blue-900 text-white py-3 px-8 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105"
            >
              Matricule-se Já!
            </a>
            <a
              href="#planos"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black py-3 px-8 rounded-full font-medium text-lg transition-all duration-300"
            >
              Agende sua Avaliação!
            </a>
          </div>
          <div className="text-gray-400 flex justify-center items-center">
            <p className="mr-2">Descubra mais</p>
            <ChevronDown className="animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
