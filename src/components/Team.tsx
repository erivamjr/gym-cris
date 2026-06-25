import React from "react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import cris from "../assets/cris.png";

const Team = () => {
  return (
    <section
      id="sobre"
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Quem está por trás da Cris Academia"
          subtitle="Mais de duas décadas transformando vidas através da ciência do exercício, da saúde e do cuidado individualizado."
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
              À frente da Cris Academia está a Cristiane, 
              profissional de Educação Física (CREF 005410-G/PA), 
              apaixonada por promover saúde, qualidade de vida e 
              bem-estar por meio do exercício físico.
            </p>
            <p className="mb-5">
              Com uma trajetória de mais de duas décadas de experiência 
              e constante aperfeiçoamento profissional, possui especialização 
              em Musculação Avançada, Avaliação e Prescrição de Exercícios para
               Grupos Especiais, Pós-Graduação em Alta Performance em 
               Prescrição de Treinos e Exercícios – Hipertrofia, Saúde e Emagrecimento, 
               além de capacitação em Biomecânica Aplicada ao Treinamento de Força pela USP.
            </p>
            <p className="mb-5">
              Seu diferencial está no atendimento individualizado. 
              Cada treino é cuidadosamente planejado de acordo com os objetivos, limitações e 
              necessidades de cada aluno, oferecendo segurança tanto para quem busca 
              emagrecimento, hipertrofia e condicionamento físico quanto para pessoas 
              em processo de reabilitação, recuperação pós-cirúrgica, idosos e alunos 
              com necessidades especiais.
            </p>
             <p>
              Seu diferencial está no atendimento individualizado. 
              Cada treino é cuidadosamente planejado de acordo com os objetivos, limitações e 
              necessidades de cada aluno, oferecendo segurança tanto para quem busca 
              emagrecimento, hipertrofia e condicionamento físico quanto para pessoas 
              em processo de reabilitação, recuperação pós-cirúrgica, idosos e alunos 
              com necessidades especiais.
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
