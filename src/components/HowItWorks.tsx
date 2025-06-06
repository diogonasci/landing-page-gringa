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
    <section id="como-funciona" className="bg-radial-dark py-20 md:py-32">
      <div className="container mx-auto px-6">
        {/* Título e Imagem introdutória */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-20 max-w-3xl mx-auto">
          {/* Imagem */}
          <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-10">
            <img
              src="/mulher-como-funciona.png"
              alt="Mulher pensando"
              className="w-48 md:w-64 lg:w-80"
            />
          </div>

          {/* Título POSSIBILIDADES */}
          <div className="relative md:-ml-24">
            {/* Fundo branco com borda fina preta */}
            <div className="bg-white rounded-3xl px-10 py-8 md:px-12 md:py-10 border-2 border-black relative z-10">
              <h2 className="text-radial-orange text-5xl md:text-6xl font-bold text-center tracking-wide">
                COMO
                <br />
                FUNCIONA?
              </h2>
            </div>

            {/* Sombra/borda grossa preta só na direita e embaixo */}
            <div className="absolute top-3 left-3 w-full h-full bg-black rounded-3xl -z-10"></div>
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
      </div>
    </section>
  );
};

export default HowItWorks;
