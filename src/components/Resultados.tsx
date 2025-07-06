import { useGTM } from "@/hooks/useGTM";
import { ChevronLeft, ChevronRight, Lightbulb, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { VideoTestimonial, VideoTestimonialCard } from "./VideoTestimonialCard";

// Dados dos depoimentos em vídeo
const videoTestimonialsData: VideoTestimonial[] = [
  {
    id: 1,
    name: "Célia Condé",
    location: "Instalação Residencial - Taquara",
    text: "Hoje eu tenho uma economia muito grande de energia, e não tenho mais preocupação. A conta de luz era muito cara. Agora eu pago somente o mínimo e já tenho mais de 4.000KwH acumulados na rede.",
    videoUrl: "https://img.youtube.com/vi/ZdjvAkivEK4/maxresdefault.jpg",
    videoId: "ZdjvAkivEK4",
  },
  {
    id: 2,
    name: "Clerton Pereira",
    location: "Instalação Residencial - Turiaçu",
    text: "A equipe foi responsável e atenciosa. Me passaram confiança! Fizeram um serviço de primeira e tô satisfeito pra caramba. Fui bem atendido e o trabalho foi bem rápido. Foi a melhor coisa que fiz. Indico com certeza!",
    videoUrl: "https://img.youtube.com/vi/ZdjvAkivEK4/maxresdefault.jpg",
    videoId: "ZdjvAkivEK4",
  },
  {
    id: 3,
    name: "André Pires",
    location: "Miguel Pereira, Rio de Janeiro - RJ",
    text: "Chegamos na parcela final. Tudo certinho, conforme o combinado. Parabéns pelo excelente trabalho e profissionalismo desenvolvido pela equipe. Deu tudo certo! O sistema está gerando muita energia e superou nossas expectativas.",
    videoUrl: "https://img.youtube.com/vi/gbaIGMJQx5E/maxresdefault.jpg",
    videoId: "gbaIGMJQx5E",
  },
];

// Dados dos cases de sucesso
const successCasesData = [
  {
    id: 1,
    imageUrl: "/galpao-prime-alimentos.png",
    savings: "R$ 160.000,00",
    name: "Prime Alimentos",
    location: "Jardim América",
  },
  {
    id: 2,
    imageUrl: "/pizzaria-exagerados.png",
    savings: "R$ 130.000,00",
    name: "Pizzaria Exagerados",
    location: "Bangu",
  },
  {
    id: 3,
    imageUrl: "/padaria-nossa-senhora.png",
    savings: "R$ 70.000,00",
    name: "Padaria N. Senhora",
    location: "Bangu",
  },
  {
    id: 4,
    imageUrl: "/galpao-aguas-boas.png",
    savings: "R$ 70.000,00",
    name: "Galpão Águas Boas",
    location: "Pechincha",
  },
  {
    id: 5,
    imageUrl: "/condominio-riviera.png",
    savings: "R$ 40.000,00",
    name: "Condomínio Riviera",
    location: "Santa Cruz",
  },
  {
    id: 6,
    imageUrl: "/condominio-four-seasons.png",
    savings: "R$ 40.000,00",
    name: "Cond. Four Seasons",
    location: "Freguesia",
  },
];

const Resultados = () => {
  const { trackSectionView, trackTestimonialView, trackButtonClick } = useGTM();
  const sectionRef = useRef<HTMLElement>(null);
  
  // Estados para tabs
  const [activeTab, setActiveTab] = useState<'depoimentos' | 'cases'>('depoimentos');
  
  // Estados para carousel de depoimentos
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);
  const [forceStopAll, setForceStopAll] = useState(false);
  
  // Estados para carousel de cases
  const [currentCaseIndex, setCurrentCaseIndex] = useState(0);

  // Track quando a seção fica visível
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackSectionView("resultados");
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

  // Track depoimento atual
  useEffect(() => {
    if (activeTab === 'depoimentos') {
      const currentTestimonial = videoTestimonialsData[currentTestimonialIndex];
      if (currentTestimonial) {
        trackTestimonialView(currentTestimonialIndex, currentTestimonial.name);
      }
    }
  }, [currentTestimonialIndex, activeTab, trackTestimonialView]);

  // Funções para parar vídeos
  const stopAllVideos = () => {
    if (isVideoPlaying) {
      setForceStopAll(true);
      setIsVideoPlaying(false);
      setPlayingVideoId(null);
      setTimeout(() => setForceStopAll(false), 100);
    }
  };

  // Navegação dos depoimentos
  const goToPreviousTestimonial = () => {
    stopAllVideos();
    setCurrentTestimonialIndex(
      (prev) => (prev - 1 + videoTestimonialsData.length) % videoTestimonialsData.length
    );
  };

  const goToNextTestimonial = () => {
    stopAllVideos();
    setCurrentTestimonialIndex((prev) => (prev + 1) % videoTestimonialsData.length);
  };

  const goToTestimonialSlide = (index: number) => {
    stopAllVideos();
    setCurrentTestimonialIndex(index);
  };

  // Navegação dos cases
  const goToPreviousCase = () => {
    setCurrentCaseIndex(
      (prev) => (prev - 1 + successCasesData.length) % successCasesData.length
    );
  };

  const goToNextCase = () => {
    setCurrentCaseIndex((prev) => (prev + 1) % successCasesData.length);
  };

  const goToCaseSlide = (index: number) => {
    setCurrentCaseIndex(index);
  };

  // Handlers para vídeos
  const handleVideoPlay = (testimonial: VideoTestimonial) => {
    setIsVideoPlaying(true);
    setPlayingVideoId(testimonial.id);
  };

  const handleVideoStop = () => {
    setIsVideoPlaying(false);
    setPlayingVideoId(null);
  };

  // Handler para mudança de tab
  const handleTabChange = (tab: 'depoimentos' | 'cases') => {
    stopAllVideos();
    setActiveTab(tab);
    trackButtonClick(`tab_${tab}`, "resultados_section");
  };

  return (
    <section
      ref={sectionRef}
      id="resultados"
      className="py-12 md:py-16"
      style={{
        background: "linear-gradient(to bottom, #ffffff 0%, #ffffff 85%, #ff5001 85%, #ff5001 100%)",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Header da seção */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            Resultados <span className="text-radial-orange">comprovados</span>
          </h2>
          <p className="text-base mb-8 max-w-3xl mx-auto text-gray-600">
            Veja depoimentos reais de nossos clientes e os projetos que transformaram suas vidas
          </p>
        </div>

        {/* Tabs de navegação */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 rounded-full p-1 inline-flex">
            <button
              onClick={() => handleTabChange('depoimentos')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === 'depoimentos'
                  ? 'bg-radial-orange text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              📹 Depoimentos
            </button>
            <button
              onClick={() => handleTabChange('cases')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === 'cases'
                  ? 'bg-radial-orange text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              🏢 Cases de Sucesso
            </button>
          </div>
        </div>

        {/* Conteúdo dos Depoimentos */}
        {activeTab === 'depoimentos' && (
          <div>
            {/* Desktop - Grid com 3 depoimentos */}
            <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {videoTestimonialsData.map((testimonial) => (
                <VideoTestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  onVideoPlay={handleVideoPlay}
                  onVideoStop={handleVideoStop}
                  shouldStop={forceStopAll}
                />
              ))}
            </div>

            {/* Mobile/Tablet Carousel */}
            <div className="lg:hidden relative mb-8">
              {/* Navigation Arrows */}
              <button
                onClick={goToPreviousTestimonial}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-5 h-5 text-radial-dark" />
              </button>

              <button
                onClick={goToNextTestimonial}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-5 h-5 text-radial-dark" />
              </button>

              {/* Carousel Container */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{
                    transform: `translateX(-${currentTestimonialIndex * 100}%)`,
                  }}
                >
                  {videoTestimonialsData.map((testimonial, index) => (
                    <div
                      key={`${testimonial.id}-${index}`}
                      className="flex-none w-full px-4"
                    >
                      <VideoTestimonialCard
                        testimonial={testimonial}
                        onVideoPlay={handleVideoPlay}
                        onVideoStop={handleVideoStop}
                        shouldStop={forceStopAll}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {videoTestimonialsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonialSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonialIndex
                        ? "bg-radial-orange"
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Conteúdo dos Cases */}
        {activeTab === 'cases' && (
          <div>
            {/* Desktop - Grid com 3 colunas */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
              {successCasesData.map((caseItem) => (
                <div key={caseItem.id} className="relative">
                  {/* Nome do local e localização */}
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-base md:text-sm font-semibold text-gray-800 uppercase leading-tight flex-1 mr-3 truncate">
                      {caseItem.name}
                    </h3>
                    <div className="flex items-center space-x-1 flex-shrink-0">
                      <MapPin className="w-5 h-5 text-radial-orange" style={{ fill: 'none', stroke: 'currentColor', strokeWidth: 2 }} />
                      <span className="text-sm md:text-sm text-gray-800 whitespace-nowrap">{caseItem.location}</span>
                    </div>
                  </div>
                  
                  {/* Imagem com offset shadow */}
                  <div className="aspect-[16/9] mb-4 relative">
                    {/* Sombra laranja apenas no canto inferior direito */}
                    <div 
                      className="absolute bottom-0 right-0 w-2 h-2 bg-radial-orange"
                      style={{ 
                        borderRadius: "0 0 0 0",
                        transform: "translate(8px, 8px)",
                        width: "60%",
                        height: "8px"
                      }}
                    ></div>
                    
                    {/* Sombra laranja na lateral direita */}
                    <div 
                      className="absolute right-0 w-2 bg-radial-orange"
                      style={{ 
                        transform: "translateX(8px)",
                        width: "8px",
                        top: "16px",
                        height: "calc(100% - 16px)"
                      }}
                    ></div>
                    
                    {/* Imagem principal */}
                    <div className="w-full h-full bg-gray-200 overflow-hidden">
                      <img
                        src={caseItem.imageUrl}
                        alt={`Case de sucesso ${caseItem.id}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Label com economia metade sobreposto */}
                  <div
                    className="relative -mt-8 mx-4 text-white px-4 py-2 rounded-full shadow-lg z-10"
                    style={{ backgroundColor: "#282232" }}
                  >
                    <div className="flex items-center space-x-3">
                      <Lightbulb className="w-6 h-6 text-white flex-shrink-0" strokeWidth={1.5} />
                      <div className="text-left leading-tight">
                        <div className="text-sm font-medium">Economia anual</div>
                        <div className="text-sm font-medium">estimada: <span className="font-bold">{caseItem.savings}</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile - Carousel */}
            <div className="md:hidden relative mb-8">
              {/* Navigation Arrows */}
              <button
                onClick={goToPreviousCase}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                aria-label="Case anterior"
              >
                <ChevronLeft className="w-5 h-5 text-radial-dark" />
              </button>

              <button
                onClick={goToNextCase}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                aria-label="Próximo case"
              >
                <ChevronRight className="w-5 h-5 text-radial-dark" />
              </button>

              {/* Carousel Container */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{
                    transform: `translateX(-${currentCaseIndex * 100}%)`,
                  }}
                >
                  {successCasesData.map((caseItem, index) => (
                    <div
                      key={`${caseItem.id}-${index}`}
                      className="flex-none w-full px-4"
                    >
                      <div className="relative max-w-sm mx-auto">
                        {/* Nome do local e localização */}
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="text-base font-semibold text-gray-800 uppercase leading-tight flex-1 mr-3 truncate">
                            {caseItem.name}
                          </h3>
                          <div className="flex items-center space-x-1 flex-shrink-0">
                            <MapPin className="w-5 h-5 text-radial-orange" style={{ fill: 'none', stroke: 'currentColor', strokeWidth: 2 }} />
                            <span className="text-sm text-gray-800 whitespace-nowrap">{caseItem.location}</span>
                          </div>
                        </div>
                        
                        {/* Imagem com offset shadow */}
                        <div className="aspect-[16/9] mb-4 relative">
                          {/* Sombra laranja apenas no canto inferior direito */}
                          <div 
                            className="absolute bottom-0 right-0 w-2 h-2 bg-radial-orange"
                            style={{ 
                              borderRadius: "0 0 0 0",
                              transform: "translate(8px, 8px)",
                              width: "60%",
                              height: "8px"
                            }}
                          ></div>
                          
                          {/* Sombra laranja na lateral direita */}
                          <div 
                            className="absolute right-0 w-2 bg-radial-orange"
                            style={{ 
                              transform: "translateX(8px)",
                              width: "8px",
                              top: "16px",
                              height: "calc(100% - 16px)"
                            }}
                          ></div>
                          
                          {/* Imagem principal */}
                          <div className="w-full h-full bg-gray-200 overflow-hidden">
                            <img
                              src={caseItem.imageUrl}
                              alt={`Case de sucesso ${caseItem.id}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        
                        {/* Label com economia metade sobreposto */}
                        <div
                          className="relative -mt-8 mx-4 text-white px-4 py-2 rounded-full shadow-lg z-10"
                          style={{ backgroundColor: "#282232" }}
                        >
                          <div className="flex items-center space-x-3">
                            <Lightbulb className="w-6 h-6 text-white flex-shrink-0" strokeWidth={1.5} />
                            <div className="text-left leading-tight">
                              <div className="text-sm font-medium">Economia anual</div>
                              <div className="text-sm font-medium">estimada: <span className="font-bold">{caseItem.savings}</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {successCasesData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToCaseSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentCaseIndex
                        ? "bg-radial-orange"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Ir para case ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Resultados;