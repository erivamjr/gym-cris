'use client'
import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Pedro Almeida, 42 anos",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Após uma cirurgia no joelho, achei que não conseguiria mais treinar normalmente. Com o treinamento personalizado da Cris Academia, recuperei 100% dos movimentos e ainda melhorei minha condição física geral. Hoje estou mais forte do que antes da lesão!",
      before: "Movimento limitado no joelho, dor constante e perda de massa muscular",
      after: "Mobilidade completa, sem dores e aumento de 8kg de massa muscular"
    },
    {
      name: "Mariana Santos, 35 anos",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Com hipertensão e sobrepeso, estava insegura para começar a treinar. A abordagem clínica da equipe me deu confiança. Em 7 meses, perdi 23kg e minha pressão está controlada sem medicamentos. Minha qualidade de vida mudou completamente!",
      before: "Hipertensão, 92kg, sedentária e baixa autoestima",
      after: "Pressão normalizada, 69kg, ativa e confiante"
    },
    {
      name: "Roberto Costa, 68 anos",
      image: "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Aos 68 anos, sofria com artrose e mobilidade reduzida. Com o Programa Sênior personalizado da Cris Academia, recuperei movimentos que não conseguia fazer há anos. Hoje subo escadas sem dor e brinco com meus netos. Sinto-me 20 anos mais jovem!",
      before: "Dores articulares, dificuldade para subir escadas e baixa energia",
      after: "Sem dores, maior autonomia e aumento significativo da disposição diária"
    },
    {
      name: "Juliana Mendes, 28 anos",
      image: "https://images.pexels.com/photos/1832959/pexels-photo-1832959.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Sempre fui magra e tinha dificuldade para ganhar massa muscular. Com o acompanhamento nutricional e o plano de treino específico da Cris Academia, ganhei 6kg de massa magra em 5 meses. Minha autoestima e saúde transformaram completamente!",
      before: "Magreza excessiva, dificuldade para ganhar peso e baixa energia",
      after: "Corpo tonificado, ganho de 6kg de massa magra e aumento de força"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Histórias de Transformação"
          subtitle="Conheça quem já transformou sua saúde com nossos programas"
        />
        
        <div className="relative max-w-5xl mx-auto mt-16">
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-800 hover:bg-blue-900 text-white rounded-full p-2 transition-all"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-6 md:px-12">
                  <div className="bg-gray-800 rounded-2xl p-8 md:p-10">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="md:w-1/3">
                        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mx-auto">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <div className="mb-6">
                          <div className="flex space-x-1 mb-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                            ))}
                          </div>
                          <p className="text-gray-300 italic mb-6">"{testimonial.text}"</p>
                          <h3 className="text-xl font-bold">{testimonial.name}</h3>
                        </div>
                        <div className="bg-gray-700 rounded-lg p-4 hidden md:block">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="text-sm font-semibold text-gray-400">ANTES</h4>
                              <p className="text-gray-300">{testimonial.before}</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-blue-500">DEPOIS</h4>
                              <p className="text-white">{testimonial.after}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-800 hover:bg-blue-900 text-white rounded-full p-2 transition-all"
            aria-label="Próximo"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  index === currentIndex ? 'bg-blue-800' : 'bg-gray-600'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#planos" 
            className="inline-block bg-blue-800 hover:bg-blue-900 text-white py-3 px-8 rounded-full font-medium text-lg transition-all duration-300"
          >
            Quero Transformar Minha Vida Também
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;