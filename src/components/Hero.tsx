import React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import heroImage from "../assets/pesos.webp";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden py-24"
    >
      <Image
        src={heroImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-black/90" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="animate-[fadeInUp_700ms_ease-out_both]">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
            Cris Academia
          </h1>
          <p className="mb-6 text-2xl font-semibold italic text-blue-500 md:text-4xl">
            "Viver é Presente!"
          </p>
          <h2 className="mb-6 text-2xl font-light md:text-4xl">
            Corpo em{" "}
            <span className="font-semibold text-blue-500">Movimento</span>,
            vida em{" "}
            <span className="font-semibold text-blue-500">Transformação</span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300 md:text-xl">
            Academia em Portel-PA com foco em saúde integral, treino
            acompanhado e atendimento para diferentes idades e condições
            físicas.
          </p>
          <div className="mb-12 flex flex-col justify-center gap-4 md:flex-row md:gap-6">
            <a
              href="#planos"
              className="rounded-full bg-blue-800 px-8 py-3 text-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-blue-900"
            >
              Matricule-se Já!
            </a>
            <a
              href="#contato"
              className="rounded-full border-2 border-white bg-transparent px-8 py-3 text-lg font-medium text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              Agende sua Avaliação!
            </a>
          </div>
          <div className="flex items-center justify-center text-gray-400">
            <p className="mr-2">Descubra mais</p>
            <ChevronDown className="animate-bounce" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
