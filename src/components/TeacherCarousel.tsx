import professorDiogo from "@/assets/teachers/prof-diogo.webp";
import { Section } from "@/components/Section";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef, useState } from "react";
import { buttonVariants } from "./ui/buttonVariants";

const TeacherCarousel = () => {
  const teachers = [
    {
      id: 1,
      name: "Prof. Diogo",
      subject: "Matemática",
      image: professorDiogo,
      description: "Especialista em Álgebra e Geometria",
    },
    {
      id: 2,
      name: "Prof. Diogo",
      subject: "Física",
      image: professorDiogo,
      description: "Doutor em Física Quântica",
    },
    {
      id: 3,
      name: "Prof. Diogo",
      subject: "Química",
      image: professorDiogo,
      description: "Mestre em Química Orgânica",
    },
    {
      id: 4,
      name: "Prof. Diogo",
      subject: "Biologia",
      image: professorDiogo,
      description: "Especialista em Genética",
    },
    {
      id: 5,
      name: "Prof. Diogo",
      subject: "História",
      image: professorDiogo,
      description: "Doutora em História do Brasil",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidth = 288;

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide(); // Swipe para a esquerda
    }
    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide(); // Swipe para a direita
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= teachers.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teachers.length - 1 : prevIndex - 1
    );
  };

  return (
    <Section
      subtitle="Corpo Docente"
      title="Conheça Nossos Professores"
      description="Nossa equipe de professores altamente qualificados está pronta para guiar você em sua jornada de aprendizado."
      className="py-16"
    >
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div
          className="relative w-[896px] overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
          >
            {teachers.map((teacher) => (
              <div
                key={teacher.id}
                className="flex-shrink-0 flex flex-col items-center w-64 p-6 bg-white rounded-lg shadow-md transition-transform hover:scale-105"
              >
                <div className="w-32 h-32 mb-4 overflow-hidden rounded-full">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {teacher.name}
                </h3>
                <p className="text-blue-600 font-medium">{teacher.subject}</p>
                <p className="text-gray-600 text-center mt-2">
                  {teacher.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* CTA Section */}
      <div className="mt-16 flex flex-col items-center space-y-4">
        <div className="text-center mb-6">
          <p className="text-lg text-gray-700">
            Aprenda com professores especialistas em cada área
          </p>
          <p className="text-sm text-gray-600">
            Média de aprovação superior a 85% entre nossos alunos
          </p>
        </div>

        <a
          href="https://wa.me/5521985043074?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20aulas."
          className={`${buttonVariants({
            size: "lg",
          })} bg-[#4A90E2] hover:bg-[#357ABD] transition-colors duration-200 group`}
        >
          Agende uma aula com nosso time →
        </a>
      </div>
    </Section>
  );
};

export default TeacherCarousel;
