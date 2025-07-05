import { useGTM } from "@/hooks/useGTM";
import { Lightbulb } from "lucide-react";
import { useEffect, useRef } from "react";

// Dados dos cases de sucesso
const successCasesData = [
  {
    id: 1,
    imageUrl: "/galpao-prime-alimentos.png",
    savings: "R$ 160.000,00",
  },
  {
    id: 2,
    imageUrl: "/pizzaria-exagerados.png",
    savings: "R$ 130.000,00",
  },
  {
    id: 3,
    imageUrl: "/padaria-nossa-senhora.png",
    savings: "R$ 70.000,00",
  },
  {
    id: 4,
    imageUrl: "/galpao-aguas-boas.png",
    savings: "R$ 70.000,00",
  },
  {
    id: 5,
    imageUrl: "/condominio-riviera.png",
    savings: "R$ 40.000,00",
  },
  {
    id: 6,
    imageUrl: "/condominio-four-seasons.png",
    savings: "R$ 40.000,00",
  },
];

const SuccessCases = () => {
  const { trackSectionView } = useGTM();
  const sectionRef = useRef<HTMLElement>(null);

  // Track quando a seção "Cases de Sucesso" fica visível
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackSectionView("success_cases");
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
    <section ref={sectionRef} className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-3 text-gray-800">
          Cases de <span className="text-orange-500">sucesso</span>
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Confira alguns dos nossos projetos criados pela nossa empresa
        </p>

        {/* Grid de cases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-full mx-auto px-8">
          {successCasesData.map((caseItem) => (
            <div key={caseItem.id} className="relative">
              {/* Imagem */}
              <div className="aspect-[16/9] bg-gray-200 overflow-hidden mb-6">
                <img
                  src={caseItem.imageUrl}
                  alt={`Case de sucesso ${caseItem.id}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Label com economia */}
              <div
                className="text-white px-4 py-3 rounded-full shadow-lg"
                style={{ backgroundColor: "#282232" }}
              >
                <div className="flex items-center space-x-3">
                  <Lightbulb className="w-6 h-6 text-white flex-shrink-0" strokeWidth={1.5} />
                  <div className="text-left">
                    <div className="text-sm font-medium">Economia anual</div>
                    <div className="text-sm font-medium">estimada: <span className="font-bold">{caseItem.savings}</span></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessCases;