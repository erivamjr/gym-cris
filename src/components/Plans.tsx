"use client";
import React, { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import SectionTitle from "./SectionTitle";

const Plans = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Plano Essencial",
      price: isAnnual ? 90 : 100,
      description:
        "Ideal para quem busca os benefícios essenciais da atividade física.",
      features: [
        { name: "Acesso 4/semana", included: true },
        { name: "Acompanhamento de instrutores", included: true },
        { name: "Área de musculação e cardio", included: true },
        { name: "Planilha de treino", included: false },
        { name: "Avaliação física", included: false },
      ],
      highlight: false,
      cta: "Escolher Plano",
    },
    {
      name: "Plano Fit",
      price: isAnnual ? 99 : 110,
      description:
        "Perfeito para quem quer acompanhamento personalizado e resultados eficientes.",
      features: [
        { name: "Acesso ilimitado", included: true },
        { name: "Acompanhamento de instrutores", included: true },
        { name: "Área de musculação e cardio", included: true },
        { name: "Planilha de treino personalizada", included: true },
        { name: "Avaliação física", included: false },
      ],
      highlight: true,
      cta: "Escolher Plano",
    },
    {
      name: "Plano Premium",
      price: isAnnual ? 145 : 160,
      description:
        "A experiência completa para maximizar seus resultados e transformação.",
      features: [
        { name: "Acesso ilimitado", included: true },
        { name: "Acompanhamento de instrutores", included: true },
        { name: "Área de musculação e cardio", included: true },
        { name: "Planilha de treino personalizada", included: true },
        { name: "Avaliação física mensal", included: true },
      ],
      highlight: false,
      cta: "Escolher Plano",
    },
  ];

  return (
    <section
      id="planos"
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Planos que cabem no seu bolso"
          subtitle="Escolha o plano ideal para seus objetivos e necessidades"
        />

        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 p-1 rounded-full inline-flex">
            <button
              className={`px-6 py-2 rounded-full transition-all ${
                !isAnnual ? "bg-blue-800 text-white" : "text-gray-300"
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Mensal
            </button>
            <button
              className={`px-6 py-2 rounded-full transition-all ${
                isAnnual ? "bg-blue-800 text-white" : "text-gray-300"
              }`}
              onClick={() => setIsAnnual(true)}
            >
              Anual (10% de desconto)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden ${
                plan.highlight
                  ? "bg-blue-900 transform scale-105"
                  : "bg-gray-800 hover:bg-gray-700"
              } transition-all duration-300 flex flex-col`}
            >
              {plan.highlight && (
                <div className="bg-blue-800 text-white text-center py-2 font-semibold">
                  Mais Popular
                </div>
              )}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">R$ {plan.price},00</span>
                  <span className="text-gray-300">/mês</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      {feature.included ? (
                        <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                      ) : (
                        <XCircle className="text-gray-500 mr-2 h-5 w-5" />
                      )}
                      <span
                        className={
                          feature.included ? "text-white" : "text-gray-400"
                        }
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contato"
                  className={`block text-center py-3 px-6 rounded-full font-semibold transition-all ${
                    plan.highlight
                      ? "bg-white text-blue-900 hover:bg-gray-200"
                      : "bg-blue-800 text-white hover:bg-blue-900"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gray-800 rounded-xl mx-auto max-w-2xl">
          <h3 className="text-xl font-bold mb-4 text-center">
            Avaliação Física Avulsa
          </h3>
          <p className="text-gray-300 text-center mb-4">
            Disponível também para não-matriculados, nossa avaliação física
            completa identifica seu perfil e necessidades específicas.
          </p>
          <div className="text-center font-bold text-2xl mb-4">R$ 50,00</div>
          <div className="text-center">
            <a
              href="https://wa.me/5591992543958?text=Olá,%20gostaria%20de%20agendar%20uma%20avaliação%20na%20Cris%20Academia"
              className="inline-block bg-blue-800 hover:bg-blue-900 text-white py-3 px-8 rounded-full font-medium transition-all duration-300"
            >
              Agendar Avaliação
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
