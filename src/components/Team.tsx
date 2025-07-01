import React from "react";
import SectionTitle from "./SectionTitle";

const Team = () => {
  const instructors = [
    // {
    //   name: "Carlos Silva",
    //   role: "Especialista em Reabilitação Ortopédica",
    //   image: "https://images.pexels.com/photos/4498232/pexels-photo-4498232.jpeg?auto=compress&cs=tinysrgb&w=600",
    //   description: "Fisioterapeuta com 15 anos de experiência em reabilitação de lesões esportivas e problemas posturais."
    // },
    // {
    //   name: "Ana Sousa",
    //   role: "Especialista em Hipertrofia",
    //   image: "https://images.pexels.com/photos/3757378/pexels-photo-3757378.jpeg?auto=compress&cs=tinysrgb&w=600",
    //   description: "Formada em Educação Física com especialização em treinamento de força e desenvolvimento muscular."
    // },
    {
      name: "Marcos Oliveira",
      role: "Treinamento Funcional",
      image:
        "https://images.pexels.com/photos/4662438/pexels-photo-4662438.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Especialista em treinamento funcional com foco em mobilidade, equilíbrio e condicionamento geral.",
    },
    {
      name: "Patrícia Lima",
      role: "Pilates Terapêutico",
      image:
        "https://images.pexels.com/photos/5384536/pexels-photo-5384536.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Certificada em Pilates clínico, atua com recuperação pós-cirúrgica e prevenção de lesões.",
    },
    {
      name: "Roberto Campos",
      role: "Treinamento Cardiovascular",
      image:
        "https://images.pexels.com/photos/6456141/pexels-photo-6456141.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Especialista em programas para emagrecimento, performance esportiva e saúde cardiovascular.",
    },
  ];

  return (
    <section
      id="equipe"
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Nossa Equipe de Profissionais"
          subtitle="Conheça os especialistas que vão transformar sua saúde e condicionamento"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{instructor.name}</h3>
                <h4 className="text-blue-600 font-medium mb-4">
                  {instructor.role}
                </h4>
                <p className="text-gray-300">{instructor.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            Nossa equipe está pronta para te ajudar a alcançar seus objetivos
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
