
const HowItWorks = () => {
  return (
    <section id="como-funciona" className="bg-radial-dark py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-10 text-white">
          Como <span className="text-radial-orange">funciona</span>?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-radial-orange rounded-full flex items-center justify-center mb-4 relative">
              <span className="text-white font-bold text-xl">1</span>
              <div className="absolute -inset-1 rounded-full bg-radial-orange/30 animate-pulse"></div>
            </div>
            <h3 className="text-white text-xl font-bold mb-3">
              Análise gratuita da conta
            </h3>
            <p className="text-gray-300">
              Analisamos sua conta de luz e calculamos quanto você pode
              economizar com energia solar.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-radial-orange rounded-full flex items-center justify-center mb-4 relative">
              <span className="text-white font-bold text-xl">2</span>
              <div className="absolute -inset-1 rounded-full bg-radial-orange/30 animate-pulse"></div>
            </div>
            <h3 className="text-white text-xl font-bold mb-3">
              Projeto e Financiamento
            </h3>
            <p className="text-gray-300">
              Desenvolvemos um projeto personalizado e apresentamos as melhores
              opções de financiamento.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-radial-orange rounded-full flex items-center justify-center mb-4 relative">
              <span className="text-white font-bold text-xl">3</span>
              <div className="absolute -inset-1 rounded-full bg-radial-orange/30 animate-pulse"></div>
            </div>
            <h3 className="text-white text-xl font-bold mb-3">
              Instalação rápida
            </h3>
            <p className="text-gray-300">
              Nossa equipe realiza a instalação completa em poucos dias, sem
              transtornos.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-radial-orange rounded-full flex items-center justify-center mb-4 relative">
              <span className="text-white font-bold text-xl">4</span>
              <div className="absolute -inset-1 rounded-full bg-radial-orange/30 animate-pulse"></div>
            </div>
            <h3 className="text-white text-xl font-bold mb-3">
              Comece a economizar
            </h3>
            <p className="text-gray-300">
              Aproveite sua nova independência energética e veja a economia na
              próxima conta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
