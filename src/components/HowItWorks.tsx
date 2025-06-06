const HowItWorks = () => {
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
    <section id="como-funciona" className="bg-radial-dark py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Título e Imagem introdutória */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-16 max-w-2xl mx-auto">
          {/* Imagem */}
          <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
            <img
              src="/mulher-como-funciona.png"
              alt="Mulher pensando"
              className="w-40 md:w-56 lg:w-72"
            />
          </div>

          {/* Título POSSIBILIDADES */}
          <div className="relative md:-ml-20">
            {/* Fundo branco com borda fina preta */}
            <div className="bg-white rounded-3xl px-8 py-6 md:px-10 md:py-8 border-2 border-black relative z-10">
              <h2 className="text-radial-orange text-4xl md:text-5xl font-bold text-center tracking-wide">
                COMO
                <br />
                FUNCIONA?
              </h2>
            </div>

            {/* Sombra/borda grossa preta só na direita e embaixo */}
            <div className="absolute top-2 left-2 w-full h-full bg-black rounded-3xl -z-10"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Linha vertical contínua de fundo */}
          <div className="absolute left-8 md:left-10 top-10 bottom-0 w-0.5 bg-gradient-to-b from-radial-orange/60 via-radial-orange/40 to-transparent"></div>

          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex items-start ${
                index !== steps.length - 1 ? "mb-16" : ""
              } relative`}
            >
              {/* Círculo com número */}
              <div className="flex-shrink-0 mr-8 relative z-10">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-radial-orange rounded-full flex items-center justify-center shadow-lg border-4 border-radial-dark">
                  <span className="text-white font-bold text-2xl md:text-3xl">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="flex-1 pt-3 md:pt-4">
                <h3 className="text-white text-xl md:text-2xl font-bold mb-4 uppercase tracking-wide leading-tight">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
