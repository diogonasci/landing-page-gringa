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
    <section id="como-funciona" className="bg-radial-dark py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Título e Imagem introdutória */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-10 max-w-lg mx-auto">
          {/* Imagem */}
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <img
              src="/mulher-como-funciona.png"
              alt="Mulher pensando"
              className="w-32 md:w-48 lg:w-64"
            />{" "}
            {/* Ajuste o tamanho conforme necessário */}
          </div>

          {/* Título POSSIBILIDADES */}
          <div className="relative md:-ml-16">
            {/* Fundo branco com borda fina preta */}
            <div className="bg-white rounded-3xl px-6 py-4 md:px-8 md:py-6 border-2 border-black relative z-10">
              <h2 className="text-radial-orange text-3xl md:text-4xl font-bold text-center tracking-wide">
                COMO
                <br />
                FUNCIONA?
              </h2>
            </div>

            {/* Sombra/borda grossa preta só na direita e embaixo */}
            <div className="absolute top-1.5 left-1.5 w-full h-full bg-black rounded-3xl -z-10"></div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto relative">
          {/* Linha vertical contínua de fundo */}
          <div className="absolute left-6 md:left-8 top-8 bottom-0 w-0.5 bg-gradient-to-b from-radial-orange/60 via-radial-orange/40 to-transparent"></div>

          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex items-start ${
                index !== steps.length - 1 ? "mb-12" : ""
              } relative`}
            >
              {/* Círculo com número */}
              <div className="flex-shrink-0 mr-6 relative z-10">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-radial-orange rounded-full flex items-center justify-center shadow-lg border-4 border-radial-dark">
                  <span className="text-white font-bold text-lg md:text-2xl">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="flex-1 pt-2 md:pt-3">
                <h3 className="text-white text-lg md:text-xl font-bold mb-3 uppercase tracking-wide leading-tight">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
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
