import { useGTM } from "@/hooks/useGTM";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { VideoTestimonial, VideoTestimonialCard } from "./VideoTestimonialCard";

// Dados dos depoimentos em vídeo - DIRETO NO ARQUIVO
const videoTestimonialsData: VideoTestimonial[] = [
  {
    id: 1,
    name: "André Pires",
    location: "Miguel Pereira, Rio de Janeiro - RJ",
    text: "Chegamos na parcela final. Tudo certinho, conforme o combinado. Parabéns pelo excelente trabalho e profissionalismo desenvolvido pela equipe. Deu tudo certo! O sistema está gerando muita energia e superou nossas expectativas.",
    videoUrl: "https://img.youtube.com/vi/gbaIGMJQx5E/maxresdefault.jpg",
    videoId: "gbaIGMJQx5E",
  },
  {
    id: 2,
    name: "Célia Condé",
    location: "Instalação Residencial - Taquara",
    text: "Hoje eu tenho uma economia muito grande de energia, e não tenho mais preocupação. A conta de luz era muito cara. Agora eu pago somente o mínimo e já tenho mais de 4.000KwH acumulados na rede.",
    videoUrl: "https://img.youtube.com/vi/ZdjvAkivEK4/maxresdefault.jpg",
    videoId: "ZdjvAkivEK4",
  },
  {
    id: 3,
    name: "Clerton Pereira",
    location: "Instalação Residencial - Turiaçu",
    text: "A equipe foi responsável e atenciosa. Me passaram confiança! Fizeram um serviço de primeira e tô satisfeito pra caramba. Fui bem atendido e o trabalho foi bem rápido. Foi a melhor coisa que fiz. Indico com certeza!",
    videoUrl: "https://img.youtube.com/vi/ZdjvAkivEK4/maxresdefault.jpg",
    videoId: "ZdjvAkivEK4",
  },
];

// Usar apenas os depoimentos originais
const testimonials = videoTestimonialsData;

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
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
    if (isAutoPlaying && !isDragging && !isVideoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, isDragging, isVideoPlaying]);

  // Touch and mouse events for smooth dragging
  const handleStart = (clientX: number) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    setStartX(clientX);
  };

  const handleMove = () => {
    if (!isDragging) return;
  };

  const handleEnd = (clientX: number) => {
    if (!isDragging) return;

    setIsDragging(false);

    const diff = startX - clientX;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      } else {
        setCurrentIndex(
          (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
      }
    }

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

  // Handler para quando um vídeo é reproduzido
  const handleVideoPlay = (testimonial: VideoTestimonial) => {
    console.log("Reproduzindo vídeo de:", testimonial.name);
    setIsVideoPlaying(true);
    setIsAutoPlaying(false);
    // Aqui você pode adicionar tracking específico para vídeos
  };

  // Handler para quando um vídeo para
  const handleVideoStop = () => {
    setIsVideoPlaying(false);
    // Retoma o autoplay após 3 segundos
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  return (
    <section
      ref={sectionRef}
      id="depoimentos"
      className="pt-12 md:pt-16 pb-2"
      style={{
        background: "linear-gradient(to bottom, #ffffff 0%, #ffffff 80%, #ff5001 80%, #ff5001 100%)",
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-4 text-gray-800">
          O que dizem nossos <span className="text-radial-orange">clientes</span>
        </h2>
        <p className="text-center text-base mb-8 max-w-2xl mx-auto text-gray-600">
          Veja como a energia solar está transformando a vida de moradores do
          Rio de Janeiro
        </p>

        {/* Desktop - Grid com 3 depoimentos */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 !mb-0 mb-0">
          {videoTestimonialsData.map((testimonial) => (
            <VideoTestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              onVideoPlay={handleVideoPlay}
              onVideoStop={handleVideoStop}
            />
          ))}
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="lg:hidden relative !mb-0 mb-0">
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
                  <VideoTestimonialCard
                    testimonial={testimonial}
                    onVideoPlay={handleVideoPlay}
                    onVideoStop={handleVideoStop}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-3 !mb-0 mb-0">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-11 h-11 rounded-full transition-colors flex items-center justify-center ${
                  index === currentIndex
                    ? "bg-yellow-300"
                    : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              >
                <div className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? "bg-radial-dark" : "bg-white"
                }`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default Testimonials;
