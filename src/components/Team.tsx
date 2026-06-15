import React from "react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import cris from "../assets/cris.png";

const Team = () => {
  return (
    <section
      id="equipe"
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Quem está por trás da Cris Academia"
          subtitle="Há mais de 20 anos dedicando sua vida à saúde e ao bem-estar das pessoas"
        />

        <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-lg bg-gray-800">
            <Image
              src={cris}
              alt="Cris Marques"
              width={520}
              height={680}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="text-lg leading-relaxed text-gray-300">
            <p className="mb-5">
              A Cris Academia nasceu do compromisso de oferecer mais do que
              treinos: um ambiente acolhedor, seguro e preparado para atender
              pessoas de todas as idades e condições físicas.
            </p>
            <p className="mb-5">
              Com experiência no acompanhamento de alunos que buscam desde
              qualidade de vida até recuperação física e melhora da autoestima,
              Cris acredita que cada pessoa possui uma jornada única e merece um
              atendimento individualizado.
            </p>
            <p>
              Seu propósito é ajudar cada aluno a conquistar mais saúde,
              autonomia, confiança e bem-estar através do movimento.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            A Cris está pronta para te ajudar a alcançar seus objetivos
          </p>
          <a
            href="#contato"
            className="inline-block bg-blue-800 hover:bg-blue-900 text-white py-3 px-8 rounded-full font-medium text-lg transition-all duration-300"
          >
            Conheça Nossa Academia
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
