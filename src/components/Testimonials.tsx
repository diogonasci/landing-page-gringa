import { FORM_URL } from "@/constants/urls";
import { useGTM } from "@/hooks/useGTM";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Tipo para os dados de depoimentos
type Testimonial = {
  id: number;
  name: string;
  location: string;
  text: string;
  savings: string;
  photo: string;
};

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Clerton Pereira",
    location: "Turiaçu, Rio de Janeiro - RJ",
    text: "A equipe foi responsável e atenciosa. Me passaram confiança! Fizeram um serviço de primeira e tô satisfeito pra caramba. Fui bem atendido e o trabalho foi bem rápido. Foi a melhor coisa que fiz. Indico com certeza!",
    savings: "Economia mensal de R$ 387,50",
    photo: "/person1.png", // Caminho atualizado
  },
  {
    id: 2,
    name: "Célia Condé",
    location: "Taquara, Rio de Janeiro - RJ",
    text: "Hoje eu tenho uma economia muito grande de energia, e não tenho mais preocupação. A conta de luz era muito cara. Agora eu pago somente o mínimo e já tenho mais de 4.000KwH acumulados na rede.",
    savings: "Economia mensal de R$ 1.250,00",
    photo: "/person2.png", // Caminho atualizado
  },
  {
    id: 3,
    name: "André Pires",
    location: "Miguel Pereira, Rio de Janeiro - RJ",
    text: "Chegamos na parcela final. Tudo certinho, conforme o combinado. Parabéns pelo excelente trabalho e profissionalismo. Deu tudo certo! O sistema está gerando muita energia.",
    savings: "Economia mensal de R$ 653,00",
    photo: "/person3.png", // Caminho atualizado
  },
];

// Duplicar os depoimentos para teste
const testimonials = [...testimonialsData, ...testimonialsData];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout>();

  const { trackSectionView, trackTestimonialView, trackButtonClick } = useGTM();

  // Track quando a seção de depoimentos fica visível
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackSectionView("testimonials");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [trackSectionView]);

  // Track visualização de depoimento específico
  useEffect(() => {
    const currentTestimonial = testimonials[currentIndex];
    if (currentTestimonial) {
      trackTestimonialView(currentIndex, currentTestimonial.name);
    }
  }, [currentIndex, trackTestimonialView]);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && !isDragging) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, isDragging]);

  // Touch and mouse events for smooth dragging
  const handleStart = (clientX: number) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    setStartX(clientX);
  };

  const handleMove = () => {
    if (!isDragging) return;
    // Apenas previne o comportamento padrão, não move manualmente
    // Deixa o CSS transition fazer o trabalho
  };

  const handleEnd = (clientX: number) => {
    if (!isDragging) return;

    setIsDragging(false);

    // Calcula a diferença do movimento
    const diff = startX - clientX;
    const threshold = 50; // Mínimo de pixels para considerar um swipe

    // Se o movimento foi significativo, navega
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swipe para esquerda = próximo
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      } else {
        // Swipe para direita = anterior
        setCurrentIndex(
          (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
      }
    }

    // Retoma auto-play após 3 segundos
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      e.preventDefault();
      handleMove();
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (isDragging) {
      handleEnd(e.clientX);
    }
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (isDragging) {
      handleEnd(e.clientX);
    }
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      e.preventDefault();
      handleMove();
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isDragging && e.changedTouches[0]) {
      handleEnd(e.changedTouches[0].clientX);
    }
  };

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  return (
    <section
      ref={sectionRef}
      id="depoimentos"
      className="bg-white py-12 md:py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-3 text-radial-dark">
          O que dizem nossos{" "}
          <span className="text-radial-orange">clientes</span>
        </h2>
        <p className="text-center text-radial-dark mb-10 max-w-2xl mx-auto">
          Veja como a energia solar está transformando a vida de moradores do
          Rio de Janeiro
        </p>

        {/* Desktop - Grid para 3 ou menos, Carousel para mais de 3 */}
        {testimonialsData.length <= 3 ? (
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {testimonialsData.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        ) : (
          <div className="hidden lg:block mb-10">
            <DesktopCarousel testimonials={testimonials} />
          </div>
        )}

        {/* Mobile/Tablet Carousel */}
        <div className="lg:hidden relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-5 h-5 text-radial-dark" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-5 h-5 text-radial-dark" />
          </button>

          {/* Carousel Container */}
          <div
            ref={containerRef}
            className="overflow-hidden touch-pan-y"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              cursor: isDragging ? "grabbing" : "grab",
              userSelect: "none",
              WebkitUserSelect: "none",
            }}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                willChange: isDragging ? "auto" : "transform",
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="flex-none w-full px-4 select-none"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-radial-orange"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA após depoimentos */}
        <div className="text-center mt-12">
          <a
            href={FORM_URL}
            className="inline-block bg-radial-orange text-white py-4 px-8 rounded-full text-lg font-bold hover:brightness-110 transition-all shadow-lg hover:shadow-xl"
            onClick={() =>
              trackButtonClick("testimonials_cta", "testimonials_section")
            }
          >
            Quero economizar como eles
          </a>
          <p className="text-radial-dark mt-4 text-lg">
            ⚡ Economia real • Depoimentos reais • Resultados comprovados
          </p>
        </div>
      </div>
    </section>
  );
};

// Componente do carrossel para desktop
const DesktopCarousel = ({ testimonials }: { testimonials: Testimonial[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout>();

  // Número de slides visíveis no desktop
  const slidesPerView = 3;
  const maxIndex = Math.max(0, testimonials.length - slidesPerView);

  // Auto-play functionality para desktop
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          const nextIndex = prev + 1;
          return nextIndex > maxIndex ? 0 : nextIndex;
        });
      }, 6000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, maxIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all hover:scale-110"
        aria-label="Depoimentos anteriores"
      >
        <ChevronLeft className="w-6 h-6 text-radial-dark" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all hover:scale-110"
        aria-label="Próximos depoimentos"
      >
        <ChevronRight className="w-6 h-6 text-radial-dark" />
      </button>

      {/* Carousel Container */}
      <div className="overflow-hidden mx-12">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex-none w-1/3 px-3"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-3">
        {Array.from({ length: maxIndex + 1 }, (_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-radial-orange scale-125"
                : "bg-gray-300 hover:bg-gray-400 hover:scale-110"
            }`}
            aria-label={`Ver depoimentos ${
              index * slidesPerView + 1
            }-${Math.min((index + 1) * slidesPerView, testimonials.length)}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-4 mx-12">
        <div className="w-full bg-gray-200 rounded-full h-1">
          <div
            className="bg-radial-orange h-1 rounded-full transition-all duration-700 ease-out"
            style={{
              width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

// Componente do card de depoimento reutilizável
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden">
    <img
      src="/painel-solar.png"
      alt="Painel Solar"
      className="w-full h-48 object-cover"
    />

    <div className="p-6">
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 text-radial-orange fill-radial-orange"
          />
        ))}
      </div>

      <p className="text-gray-700 mb-4 italic min-h-[100px]">
        "{testimonial.text}"
      </p>

      <div className="border-t border-gray-200 pt-4 mt-4">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <img
              src={testimonial.photo}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-radial-dark">{testimonial.name}</p>
            <p className="text-sm text-gray-600">{testimonial.location}</p>
          </div>
        </div>
        <p className="text-radial-orange font-semibold">
          {testimonial.savings}
        </p>
      </div>
    </div>
  </div>
);

export default Testimonials;
