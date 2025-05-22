import React from 'react';
import { Heart, Award, Clock, Users, ListChecks, Trophy } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Benefits = () => {
  const benefits = [
    {
      icon: <Heart className="w-12 h-12 text-blue-800 mb-4" />,
      title: "Saúde Integral",
      description: "Programas que integram estética, reabilitação e bem-estar físico e mental."
    },
    {
      icon: <Award className="w-12 h-12 text-blue-800 mb-4" />,
      title: "Mais de 20 Anos",
      description: "Experiência em treinos clínicos e estéticos para todas as idades e necessidades."
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-800 mb-4" />,
      title: "Horário Flexível",
      description: "Das 06h00 às 20h30, de segunda a sexta, para se adequar à sua rotina."
    },
    {
      icon: <Users className="w-12 h-12 text-blue-800 mb-4" />,
      title: "Equipe Especializada",
      description: "Profissionais certificados com experiência em diferentes áreas da saúde."
    },
    {
      icon: <ListChecks className="w-12 h-12 text-blue-800 mb-4" />,
      title: "Programas Personalizados",
      description: "Treinos adaptados para cada condição: lesões, mobilidade reduzida, pós-cirúrgico ou avançado."
    },
    {
      icon: <Trophy className="w-12 h-12 text-blue-800 mb-4" />,
      title: "Resultados Comprovados",
      description: "Histórico de sucesso com alunos de diferentes perfis e objetivos."
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Por que escolher a Cris Academia?"
          subtitle="Nossos diferenciais para sua jornada de transformação"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-gray-800 p-8 rounded-lg text-center hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#planos" 
            className="inline-block bg-blue-800 hover:bg-blue-900 text-white py-3 px-8 rounded-full font-medium text-lg transition-all duration-300"
          >
            Conheça Nossos Planos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;