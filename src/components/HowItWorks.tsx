const HowItWorks = () => {
  return (
    <section id="como-funciona" className="bg-radial-dark py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-10 text-white">
          Como <span className="text-radial-orange">funciona</span>?
        </h2>

        <div className="max-w-2xl mx-auto">
          {/* Step 1 */}
          <div className="flex items-start mb-8 relative">
            <div className="flex-shrink-0 mr-6">
              <div className="w-16 h-16 bg-radial-orange rounded-full flex items-center justify-center relative">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
            </div>
            <div className="flex-1 pt-2">
              <h3 className="text-white text-xl font-bold mb-2 uppercase tracking-wide">
                GERAÇÃO DE PROPOSTA EXCLUSIVA
              </h3>
              <p className="text-gray-300">
                Proposta 100% personalizada, adequada à sua necessidade e
                propriedade.
              </p>
            </div>
            {/* Linha pontilhada conectora */}
            <div className="absolute left-8 top-16 w-px h-16 border-l-2 border-dashed border-radial-orange opacity-60"></div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start mb-8 relative">
            <div className="flex-shrink-0 mr-6">
              <div className="w-16 h-16 bg-radial-orange rounded-full flex items-center justify-center relative">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
            </div>
            <div className="flex-1 pt-2">
              <h3 className="text-white text-xl font-bold mb-2 uppercase tracking-wide">
                AVALIAÇÃO GRATUITA
              </h3>
              <p className="text-gray-300">
                Faremos a análise de viabilidade técnica e financeira do sistema
                solar.
              </p>
            </div>
            {/* Linha pontilhada conectora */}
            <div className="absolute left-8 top-16 w-px h-16 border-l-2 border-dashed border-radial-orange opacity-60"></div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start mb-8 relative">
            <div className="flex-shrink-0 mr-6">
              <div className="w-16 h-16 bg-radial-orange rounded-full flex items-center justify-center relative">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
            </div>
            <div className="flex-1 pt-2">
              <h3 className="text-white text-xl font-bold mb-2 uppercase tracking-wide">
                PROJETO TÉCNICO
              </h3>
              <p className="text-gray-300">
                Seu projeto técnico será desenvolvido pelo nosso time e atenderá
                todas as exigências normativas.
              </p>
            </div>
            {/* Linha pontilhada conectora */}
            <div className="absolute left-8 top-16 w-px h-16 border-l-2 border-dashed border-radial-orange opacity-60"></div>
          </div>

          {/* Step 4 */}
          <div className="flex items-start mb-8 relative">
            <div className="flex-shrink-0 mr-6">
              <div className="w-16 h-16 bg-radial-orange rounded-full flex items-center justify-center relative">
                <span className="text-white font-bold text-2xl">4</span>
              </div>
            </div>
            <div className="flex-1 pt-2">
              <h3 className="text-white text-xl font-bold mb-2 uppercase tracking-wide">
                HOMOLOGAÇÃO
              </h3>
              <p className="text-gray-300">
                Cuidaremos de toda papelada da homologação do seu sistema junto
                à concessionária.
              </p>
            </div>
            {/* Linha pontilhada conectora */}
            <div className="absolute left-8 top-16 w-px h-16 border-l-2 border-dashed border-radial-orange opacity-60"></div>
          </div>

          {/* Step 5 */}
          <div className="flex items-start mb-8 relative">
            <div className="flex-shrink-0 mr-6">
              <div className="w-16 h-16 bg-radial-orange rounded-full flex items-center justify-center relative">
                <span className="text-white font-bold text-2xl">5</span>
              </div>
            </div>
            <div className="flex-1 pt-2">
              <h3 className="text-white text-xl font-bold mb-2 uppercase tracking-wide">
                LOGÍSTICA
              </h3>
              <p className="text-gray-300">
                Os equipamentos serão entregues no local de instalação em até 20
                dias úteis após o pagamento do sistema, de acordo com os termos
                do contrato.
              </p>
            </div>
            {/* Linha pontilhada conectora */}
            <div className="absolute left-8 top-16 w-px h-16 border-l-2 border-dashed border-radial-orange opacity-60"></div>
          </div>

          {/* Step 6 */}
          <div className="flex items-start mb-8 relative">
            <div className="flex-shrink-0 mr-6">
              <div className="w-16 h-16 bg-radial-orange rounded-full flex items-center justify-center relative">
                <span className="text-white font-bold text-2xl">6</span>
              </div>
            </div>
            <div className="flex-1 pt-2">
              <h3 className="text-white text-xl font-bold mb-2 uppercase tracking-wide">
                INSTALAÇÃO
              </h3>
              <p className="text-gray-300">
                Fazemos a instalação completa com equipe própria de técnicos
                capacitados e especializados em sistemas fotovoltaicos.
              </p>
            </div>
            {/* Linha pontilhada conectora */}
            <div className="absolute left-8 top-16 w-px h-16 border-l-2 border-dashed border-radial-orange opacity-60"></div>
          </div>

          {/* Step 7 */}
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-6">
              <div className="w-16 h-16 bg-radial-orange rounded-full flex items-center justify-center relative">
                <span className="text-white font-bold text-2xl">7</span>
              </div>
            </div>
            <div className="flex-1 pt-2">
              <h3 className="text-white text-xl font-bold mb-2 uppercase tracking-wide">
                MONITORAMENTO
              </h3>
              <p className="text-gray-300">
                Você poderá acompanhar a geração de energia do seu sistema, para
                se certificar de que ele estará operando em pleno funcionamento
                e identificar períodos em que necessite de manutenção (como
                limpeza dos painéis).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
