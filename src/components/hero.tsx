import { CONTACT_WHATSAPP } from "@/constants/urls";
import { useGTM } from "@/hooks/useGTM";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const { trackButtonClick, trackVideoInteraction, trackSectionView } =
    useGTM();
  const heroRef = useRef<HTMLElement>(null);
  const [showVideo, setShowVideo] = useState(false);

  // Track quando a seção hero fica visível
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackSectionView("hero");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, [trackSectionView]);

  const handlePlayVideo = () => {
    setShowVideo(true);
    trackVideoInteraction("play");
  };

  return (
    <section ref={heroRef} className="bg-radial-dark py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Título principal centralizado */}
        <div className="text-center mb-12">
          <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            Pare de gastar com
            <br />
            <span className="text-radial-orange">contas de luz!</span>
          </h1>

          <h2 className="text-white text-2xl md:text-3xl font-bold mb-8">
            Aprenda agora a como guardar esse dinheiro no seu bolso
          </h2>
        </div>

        {/* Vídeo GIGANTE como protagonista */}
        <div className="flex justify-center mb-12">
          <div className="relative max-w-5xl w-full">
            {/* Monitor minimalista e elegante */}
            <div className="relative bg-gradient-to-b from-slate-300 to-slate-400 rounded-3xl p-3 shadow-2xl">
              {/* Moldura interna sutil */}
              <div className="bg-gradient-to-b from-slate-100 to-slate-200 rounded-2xl p-2 shadow-inner">
                {/* VÍDEO GIGANTE */}
                <div className="bg-black rounded-xl overflow-hidden aspect-video shadow-lg relative">
                  {!showVideo ? (
                    // Capa customizada com frame do segundo 6
                    <div 
                      className="relative w-full h-full cursor-pointer group"
                      onClick={handlePlayVideo}
                    >
                      {/* Thumbnail customizado do segundo 6 */}
                      <img 
                        src="/thumbnail-video-hero.png"
                        alt="Como funciona energia solar?"
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Overlay escuro sutil */}
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
                      
                      {/* Botão de play discreto */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/80 hover:bg-white/90 rounded-full p-4 group-hover:scale-105 transition-all duration-300 shadow-lg backdrop-blur-sm">
                          <svg 
                            className="w-8 h-8 text-gray-800 ml-0.5" 
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Iframe do YouTube que aparece após o clique
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/rg1ZPyEXSrY?autoplay=1&vq=hd720p&hd=1"
                      title="Como funciona energia solar?"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
              </div>

              {/* Barra inferior minimalista */}
              <div className="flex justify-center items-center mt-2">
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-slate-600 font-bold">RADIAL</div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Base minimalista */}
            <div className="flex justify-center mt-2">
              <div className="w-24 h-4 bg-gradient-to-b from-slate-400 to-slate-500 rounded-b-xl"></div>
            </div>

            {/* Pedestal discreto */}
            <div className="flex justify-center mt-1">
              <div className="w-40 h-3 bg-gradient-to-b from-slate-500 to-slate-600 rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>

        {/* Texto descritivo centralizado */}
        <div className="text-center mb-12">
          <p className="text-white text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed">
            Moradores do RJ já estão economizando centenas por mês com a Radial
            Energia Solar.
          </p>
        </div>

        {/* CTA SECTION - Mais limpa e elegante */}
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-xl">
            {/* CTA Principal - Estilo anterior sem quebra de linha */}
            <a
              href={CONTACT_WHATSAPP}
              className="block w-full bg-white text-radial-dark py-4 px-8 rounded-full text-center font-bold text-lg md:text-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 relative mb-6"
              style={{
                boxShadow:
                  "0 6px 0 #ff5d26, 0 8px 16px rgba(255, 93, 38, 0.3)",
              }}
              onClick={() => trackButtonClick("main_cta", "hero_section")}
            >
              Quero minha análise gratuita
            </a>

            {/* Benefícios mantidos - Design mais clean */}
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <p className="text-white text-sm md:text-base font-medium">
                  ✅ Estudo de viabilidade completo • ✅ Simulação de economia • ✅ Projeto personalizado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
