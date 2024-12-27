import React from "react";
import { FeatureCard } from "./FeatureCard";
import { Section } from "./Section";
import { buttonVariants } from "./ui/buttonVariants";

const Features: React.FC = () => {
  const features = [
    {
      title: "Aula particular",
      description:
        "Aulas individuais, presenciais ou online, personalizadas para focar nas suas necessidades, com atenção exclusiva.",
      icon: (
        <svg
          className="stroke-primary-foreground stroke-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
        </svg>
      ),
    },
    {
      title: "Aulão temático",
      description:
        "Aulões online temáticos focados em testes, provas e recuperação, com conteúdo direcionado para melhorar seu desempenho.",
      icon: (
        <svg
          className="stroke-primary-foreground stroke-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 21v-14" />
          <path d="M12 3l7 4.5l-7 4.5l-7 -4.5l7 -4.5" />
          <path d="M3 12l9 6l9 -6" />
        </svg>
      ),
    },
    {
      title: "Aulão personalizado",
      description:
        "Aulões online sugeridos pelos alunos, com temas escolhidos por eles e lecionados por nosso time de professores especializados.",
      icon: (
        <svg
          className="stroke-primary-foreground stroke-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 4.55a8 8 0 0 1 6 14.9m0 -4.45v5h5" />
          <path d="M5.63 7.16l0 .01" />
          <path d="M4.06 11l0 .01" />
          <path d="M4.63 15.1l0 .01" />
          <path d="M7.16 18.37l0 .01" />
          <path d="M11 19.94l0 .01" />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full bg-secondary">
      <Section
        subtitle="Nossos Serviços"
        title="Escolha o Formato Ideal para Sua Preparação"
        description="Acompanhamento educacional focado no seu objetivo, com profissionais que dominam as particularidades do CSANL"
      >
        <div className="grid grid-cols-1 gap-x-3 gap-y-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title}>
              {feature.description}
            </FeatureCard>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 flex flex-col items-center space-y-4">
          <a
            href="https://wa.me/5521985043074?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20aulas."
            className={`${buttonVariants({
              size: "lg",
            })} bg-[#4A90E2] hover:bg-[#357ABD] transition-colors duration-200`}
          >
            Escolha seu formato de estudo →
          </a>
          <p className="text-sm text-gray-600">
            Escolha o melhor formato para suas necessidades
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Features;
