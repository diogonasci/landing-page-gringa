import { FORM_URL } from "@/constants/urls";
import { useGTM } from "@/hooks/useGTM";
import { useEffect, useRef } from "react";

const HowItWorks = () => {
  const { trackSectionView, trackButtonClick } = useGTM();
  const sectionRef = useRef<HTMLElement>(null);

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

  const steps = [
    {
      number: 1,
      title: "GERAÇÃO DE PROPOSTA EXCLUSIVA",
      description:
        "Proposta 100% personalizada, adequada à sua necessidade e propriedade.",
    },
    {
      number: 2,
      title: "AVALIAÇÃO GRATUITA",
      description:
        "Faremos a análise de viabilidade técnica e financeira do sistema solar.",
    },
    {
      number: 3,
      title: "PROJETO TÉCNICO",
      description:
        "Seu projeto técnico será desenvolvido pelo nosso time e atenderá todas as exigências normativas.",
    },
    {
      number: 4,
      title: "HOMOLOGAÇÃO",
      description:
        "Cuidaremos de toda papelada da homologação do seu sistema junto à concessionária.",
    },
    {
      number: 5,
      title: "LOGÍSTICA",
      description:
        "Os equipamentos serão entregues no local de instalação em até 20 dias úteis após o pagamento do sistema, de acordo com os termos do contrato.",
    },
    {
      number: 6,
      title: "INSTALAÇÃO",
      description:
        "Fazemos a instalação completa com equipe própria de técnicos capacitados e especializados em sistemas fotovoltaicos.",
    },
    {
      number: 7,
      title: "MONITORAMENTO",
      description:
        "Você poderá acompanhar a geração de energia do seu sistema, para se certificar de que ele estará operando em pleno funcionamento e identificar períodos em que necessite de manutenção (como limpeza dos painéis).",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="como-funciona"
      className="bg-radial-dark py-20 md:py-32"
    >
      <div className="container mx-auto px-6">
        {/* Título e Imagem introdutória */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-20 max-w-3xl mx-auto">
          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col items-center w-full">
            {/* Imagem para mobile, com z-index maior */}
            <div className="relative z-20 translate-x-24 translate-y-2">
              <img
                src="/mulher-como-funciona.png"
                alt="Mulher pensando"
                className="w-52"
              />
            </div>

            {/* Título para mobile, com z-index menor e margem negativa para sobrepor */}
            <div className="relative z-10 -mt-16">
              <div
                className="bg-white rounded-3xl px-10 py-4 border-2 border-black"
                style={{ boxShadow: "12px 5px 0 0 black" }}
              >
                <h2 className="text-radial-orange text-4xl font-bold text-left tracking-wide">
                  <span className="block mb-4">COMO</span>
                  FUNCIONA?
                </h2>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Existing structure, hidden on mobile */}
          <div className="hidden md:flex w-full items-center justify-center">
            {/* Imagem */}
            <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-10">
              <img
                src="/mulher-como-funciona.png"
                alt="Mulher pensando"
                className="w-48 md:w-64 lg:w-80"
              />
            </div>

            {/* Título COMO FUNCIONA? */}
            <div className="relative md:-ml-24">
              {/* Fundo branco com borda fina preta */}
              <div
                className="bg-white rounded-3xl px-10 py-4 md:px-16 md:py-6 border-2 border-black relative z-10"
                style={{ boxShadow: "12px 5px 0 0 black" }}
              >
                <h2 className="text-radial-orange text-4xl md:text-5xl font-bold text-left tracking-wide">
                  <span className="block mb-4">COMO</span>
                  FUNCIONA?
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Linha vertical contínua de fundo */}
          <div className="absolute left-10 md:left-12 top-12 bottom-0 w-0.5 bg-gradient-to-b from-radial-orange/60 via-radial-orange/40 to-transparent"></div>

          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex items-start ${
                index !== steps.length - 1 ? "mb-20" : ""
              } relative`}
            >
              {/* Círculo com número */}
              <div className="flex-shrink-0 mr-10 relative z-10">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-radial-orange rounded-full flex items-center justify-center shadow-lg border-4 border-radial-dark">
                  <span className="text-white font-bold text-3xl md:text-4xl">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="flex-1 pt-4 md:pt-5">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-5 uppercase tracking-wide leading-tight">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA após os passos */}
        <div className="text-center mt-12">
          <a
            href={FORM_URL}
            className="inline-block bg-radial-orange text-white py-4 px-8 rounded-full text-lg font-bold hover:brightness-110 transition-all shadow-lg hover:shadow-xl"
            onClick={() =>
              trackButtonClick("how_it_works_cta", "how_it_works_section")
            }
          >
            Começar meu projeto solar
          </a>
          <p className="text-white mt-4 text-lg">
            ⚡ Projeto personalizado • Instalação profissional • Economia
            garantida
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
