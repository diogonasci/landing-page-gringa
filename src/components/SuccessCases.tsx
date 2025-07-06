import { useGTM } from "@/hooks/useGTM";
import { Lightbulb, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";

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
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-4 text-gray-800">
          Cases de <span className="text-radial-orange">sucesso</span>
        </h2>
        <p className="text-center text-base mb-8 max-w-2xl mx-auto text-gray-600">
          Confira alguns dos nossos projetos criados pela nossa empresa
        </p>

        {/* Grid de cases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {successCasesData.map((caseItem) => (
            <div key={caseItem.id} className="relative">
              {/* Nome do local e localização */}
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-semibold text-gray-800 uppercase leading-tight flex-1 mr-3 truncate">
                  {caseItem.name}
                </h3>
                <div className="flex items-center space-x-1 flex-shrink-0">
                  <MapPin className="w-4 h-4 text-radial-orange" style={{ fill: 'none', stroke: 'currentColor', strokeWidth: 2 }} />
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
                className="relative -mt-8 mx-4 text-white px-4 py-3 rounded-full shadow-lg z-10"
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