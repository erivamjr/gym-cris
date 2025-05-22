'use client'

import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "Quais dias e horários funciona a academia?",
      answer: "Segunda a sexta, das 06h às 20h30."
    },
    {
      question: "Tem instrutor disponível?",
      answer: "Sim, todos os horários têm acompanhamento de profissional certificado."
    },
    {
      question: "Pessoas com problemas ósseos (artrose etc.) podem treinar?",
      answer: "Sim, criamos treinos adaptados às limitações de cada aluno."
    },
    {
      question: "Quem tem obesidade, depressão, ansiedade ou hipertensão controlada pode se matricular?",
      answer: "Claro! Temos protocolos clínicos para garantir segurança e bem-estar."
    },
    {
      question: "Gestantes podem treinar?",
      answer: "Sim, sob supervisão e com exercícios adaptados para cada trimestre."
    },
    {
      question: "Qual a idade mínima para se tornar aluno?",
      answer: "A partir de 12 anos, com autorização dos responsáveis."
    },
    {
      question: "Preciso pagar taxa de inscrição?",
      answer: "Não, não cobramos taxa de inscrição — você paga só o plano mensal."
    }
  ];
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Perguntas Frequentes"
          subtitle="Tire suas dúvidas sobre a Cris Academia"
        />
        
        <div className="max-w-3xl mx-auto mt-12">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`mb-4 border border-gray-700 rounded-lg overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'bg-gray-800' : 'bg-gray-900'
              }`}
            >
              <button
                className="w-full flex justify-between items-center p-4 text-left transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <span>
                  {openIndex === index ? (
                    <ChevronUp className="text-blue-600" />
                  ) : (
                    <ChevronDown className="text-gray-400" />
                  )}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 p-4 pt-0' : 'max-h-0'
                }`}
              >
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">Ainda tem dúvidas? Entre em contato conosco!</p>
          <a 
            href="#contato" 
            className="inline-block bg-blue-800 hover:bg-blue-900 text-white py-3 px-8 rounded-full font-medium text-lg transition-all duration-300"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;