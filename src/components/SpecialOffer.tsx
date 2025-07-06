import { FORM_URL } from "@/constants/urls";
import { useGTM } from "@/hooks/useGTM";
import { Check } from "lucide-react";
import { useEffect, useRef } from "react";

const SpecialOffer = () => {
  const { trackSectionView, trackButtonClick } = useGTM();
  const sectionRef = useRef<HTMLElement>(null);

  // Track quando a seção "Oferta Especial" fica visível
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackSectionView("special_offer");
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

  return (
    <section ref={sectionRef} className="bg-radial-orange py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-6 text-white">
          Oferta Especial por Tempo Limitado!
        </h2>

        <div className="max-w-3xl mx-auto bg-white rounded-[3rem] shadow-md border-2 border-black px-6 md:px-16 py-8">
          <div className="text-center mb-4">
            <div className="bg-orange-500 text-white px-6 py-2 rounded-lg text-sm font-bold inline-block">
              Desconto de 10% para os 15 primeiros
            </div>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-center mb-4 text-radial-dark">
            Análise Gratuita + Projeto Personalizado
          </h3>

          <p className="text-center text-gray-700 text-base mb-6 mt-8">
            Aproveite esta oportunidade e garanta economia imediata!
          </p>

          <div className="space-y-4 mb-8 max-w-md mx-auto">
            <div className="flex items-start">
              <Check className="w-6 h-6 text-black flex-shrink-0 mr-3 mt-0.5" />
              <p className="text-gray-700 text-base md:text-lg">
                Estudo completo de viabilidade técnica
              </p>
            </div>

            <div className="flex items-start">
              <Check className="w-6 h-6 text-black flex-shrink-0 mr-3 mt-0.5" />
              <p className="text-gray-700 text-base md:text-lg">
                Simulação detalhada da economia
              </p>
            </div>

            <div className="flex items-start">
              <Check className="w-6 h-6 text-black flex-shrink-0 mr-3 mt-0.5" />
              <p className="text-gray-700 text-base md:text-lg">
                Projeto técnico personalizado
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mb-12 pt-8">
          <a
            href={FORM_URL}
            className="inline-block text-white py-4 px-8 rounded-md text-lg font-medium hover:brightness-110 transition-all"
            style={{ backgroundColor: "#282131" }}
            onClick={() =>
              trackButtonClick("special_offer_cta", "special_offer_section")
            }
          >
            Quero minha análise gratuita
          </a>
        </div>
        <div className="text-center mt-8">
          <p className="text-white opacity-80 text-base">
            * Oferta válida para os 15 primeiros cadastros da semana
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
