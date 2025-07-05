import { useGTM } from "@/hooks/useGTM";
import { Lightbulb } from "lucide-react";
import { useEffect, useRef } from "react";

// Dados dos cases de sucesso
const successCasesData = [
  {
    id: 1,
    imageUrl: "/api/placeholder/400/300",
    savings: "R$ 130.000,00",
  },
  {
    id: 2,
    imageUrl: "/api/placeholder/400/300",
    savings: "R$ 130.000,00",
  },
  {
    id: 3,
    imageUrl: "/api/placeholder/400/300",
    savings: "R$ 130.000,00",
  },
  {
    id: 4,
    imageUrl: "/api/placeholder/400/300",
    savings: "R$ 130.000,00",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {successCasesData.map((caseItem) => (
            <div key={caseItem.id} className="relative">
              {/* Imagem */}
              <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden mb-4">
                <img
                  src={caseItem.imageUrl}
                  alt={`Case de sucesso ${caseItem.id}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Label com economia */}
              <div
                className="text-white px-4 py-2 rounded-full shadow-lg text-center"
                style={{ backgroundColor: "#282232" }}
              >
                <div className="flex items-center justify-center space-x-2">
                  <Lightbulb className="w-4 h-4 text-white" strokeWidth={1.5} />
                  <span className="text-sm font-medium">
                    Economia anual estimada: {caseItem.savings}
                  </span>
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