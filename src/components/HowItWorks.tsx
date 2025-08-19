import { CONTACT_WHATSAPP } from "@/constants/urls";
import { useGTM } from "@/hooks/useGTM";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const HowItWorks = () => {
  const { trackSectionView, trackButtonClick } = useGTM();
  const sectionRef = useRef<HTMLElement>(null);
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  // Track quando a seção "Como Funciona" fica visível
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackSectionView("how_it_works");
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

  // Passos simplificados e condensados
  const steps = [
    {
      number: 1,
      title: "ANÁLISE E PROPOSTA",
      description: "Análise gratuita de viabilidade e proposta personalizada para sua propriedade",
      details: [
        "Avaliação técnica e financeira completa",
        "Proposta 100% personalizada",
        "Simulação de economia detalhada",
        "Análise do consumo energético atual"
      ]
    },
    {
      number: 2,
      title: "PROJETO E APROVAÇÃO",
      description: "Desenvolvimento do projeto técnico e homologação junto à concessionária",
      details: [
        "Projeto técnico completo conforme normas",
        "Documentação técnica detalhada",
        "Aprovação junto à concessionária",
        "Todas as licenças necessárias"
      ]
    },
    {
      number: 3,
      title: "INSTALAÇÃO PROFISSIONAL",
      description: "Instalação completa com nossa equipe especializada e equipamentos de qualidade",
      details: [
        "Entrega dos equipamentos em até 20 dias",
        "Instalação com equipe própria certificada",
        "Equipamentos de alta qualidade",
        "Testes completos do sistema"
      ]
    },
    {
      number: 4,
      title: "MONITORAMENTO E SUPORTE",
      description: "Acompanhamento contínuo do desempenho e suporte técnico completo",
      details: [
        "Monitoramento em tempo real",
        "Suporte técnico contínuo",
        "Manutenção quando necessária",
        "Garantia de 30 anos"
      ]
    },
  ];

  const toggleStep = (stepNumber: number) => {
    setExpandedStep(expandedStep === stepNumber ? null : stepNumber);
    trackButtonClick(`step_${stepNumber}_toggle`, "how_it_works_section");
  };

  return (
    <section
      ref={sectionRef}
      id="como-funciona"
      className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 md:py-16"
    >
      <div className="container mx-auto px-4">
        {/* Header da seção */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <img
              src="/mulher-como-funciona.png"
              alt="Mulher pensando"
              className="w-32 md:w-40"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Como <span className="text-radial-orange">funciona</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            <span className="md:hidden">Um processo simples e transparente do primeiro contato até você estar economizando</span>
            <span className="hidden md:inline">Um processo simples e transparente do primeiro contato<br />até você estar economizando</span>
          </p>
        </div>

        {/* Accordion de passos */}
        <div className="max-w-4xl mx-auto space-y-4 mb-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden"
            >
              {/* Header do step - sempre visível */}
              <button
                onClick={() => toggleStep(step.number)}
                className="w-full p-6 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-radial-orange text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className="text-gray-400">
                  {expandedStep === step.number ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </div>
              </button>

              {/* Detalhes expansíveis */}
              {expandedStep === step.number && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="pt-4">
                    <h4 className="font-semibold text-gray-800 mb-3">O que inclui:</h4>
                    <ul className="space-y-2">
                      {step.details.map((detail, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-radial-orange rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="text-center">
          <a
            href={CONTACT_WHATSAPP}
            className="inline-block bg-radial-orange text-white py-4 px-8 rounded-full text-lg font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 relative overflow-hidden"
            onClick={() =>
              trackButtonClick("how_it_works_cta", "how_it_works_section")
            }
          >
            <span className="relative z-10">Quero economizar agora</span>
            <div
              className="absolute inset-0 opacity-25"
              style={{
                background: "linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.6) 50%, transparent 70%)",
                animation: "shimmer 3s infinite",
                transform: "translateX(-100%)"
              }}
            ></div>
            <style jsx>{`
              @keyframes shimmer {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
              }
            `}</style>
          </a>
          <p className="text-gray-600 mt-4 text-lg">
            ⚡ Processo simples • Equipe especializada • Resultado garantido
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;