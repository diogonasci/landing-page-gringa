import professorDiogo from "@/assets/teachers/prof-diogo.webp";
import { Section } from "@/components/Section";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { buttonVariants } from "./ui/buttonVariants";

interface Teacher {
  id: string;
  name: string;
  subject: string;
  description: string;
}

const TeacherCarousel = () => {
  const { t } = useTranslation("content");
  const teachers = t("teachers.staff", { returnObjects: true }) as Teacher[];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidth = 288;

  const touchStartX = useRef(0);

  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    touchStartX.current = e.touches[0].clientX;
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const currentTouch = e.touches[0].clientX;
    const difference = currentTouch - touchStartX.current;
    setDragOffset(difference);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    const swipeThreshold = 50;
    
    if (dragOffset < -swipeThreshold) {
      nextSlide();
    } else if (dragOffset > swipeThreshold) {
      prevSlide();
    }
    
    setDragOffset(0);
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
      subtitle={t("teachers.title")}
      title={t("teachers.subtitle")}
      description={t("teachers.description")}
      className="py-16"
    >
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        <div
          ref={containerRef}
          className="relative w-[896px] overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={`flex gap-6 ${
              isDragging ? "" : "transition-transform duration-500"
            } ease-in-out`}
            style={{
              transform: `translateX(${
                -currentIndex * cardWidth + dragOffset
              }px)`,
            }}
          >
            {teachers.map((teacher) => (
              <div
                key={teacher.id}
                className="flex-shrink-0 flex flex-col items-center w-64 p-6 bg-white rounded-lg shadow-md transition-transform hover:scale-105"
              >
                <div className="w-32 h-32 mb-4 overflow-hidden rounded-full">
                  <img
                    src={professorDiogo}
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
          className="p-2 rounded-full text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>

      {/* CTA Section */}
      <div className="mt-16 flex flex-col items-center space-y-4">
        <div className="text-center mb-6">
          <p className="text-lg text-gray-700">{t("teachers.info")}</p>
          <p className="text-sm text-gray-600">{t("teachers.disclaimer")}</p>
        </div>

        <a
          href="https://wa.me/5521985043074?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20aulas."
          className={`${buttonVariants({
            size: "lg",
          })} bg-[#4A90E2] hover:bg-[#357ABD] transition-colors duration-200 group`}
        >
          {t("teachers.cta")}
        </a>
      </div>
    </Section>
  );
};

export default TeacherCarousel;
