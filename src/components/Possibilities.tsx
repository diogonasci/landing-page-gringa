const Possibilities = () => {
  return (
    <section className="bg-gradient-to-r from-[#ff3231] to-[#ff8c4b] py-20 md:py-32">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
        {/* Ilustração */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start md:-mr-16">
          <img
            src="/mulher-ideias.png"
            alt="Ilustração de pessoa com ideias"
            className="max-w-sm md:max-w-xl lg:max-w-2xl"
          />
        </div>

        {/* Conteúdo da direita: Título e Pontos da lista */}
        <div className="w-full md:w-1/2">
          {/* Título POSSIBILIDADES */}
          <div className="flex justify-center md:justify-start mb-16">
            <div className="relative">
              {/* Fundo branco com borda fina preta */}
              <div className="bg-white rounded-3xl px-6 py-4 md:px-8 md:py-6 border-2 border-black relative z-10">
                <h2 className="text-radial-orange text-3xl md:text-4xl font-bold text-center tracking-wide">
                  POSSIBILIDADES
                </h2>
              </div>
              {/* Sombra/borda grossa preta só na direita e embaixo */}
              <div className="absolute top-1.5 left-1.5 w-full h-full bg-black rounded-3xl -z-10"></div>
            </div>
          </div>

          {/* Pontos da lista */}
          <div className="space-y-12">
            {/* Ponto 1: Compartilhamento de Energia */}
            <div className="flex items-start">
              {/* Placeholder para Icone 1 (Casa com painel) */}
              <div className="flex-shrink-0 mr-6">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                  COMPARTILHAMENTO DE ENERGIA
                </h3>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                  Você pode dividir sua energia solar com outro endereço, sem
                  pagar nada a mais por isso. Aproveite para ajudar sua família
                  ou amigos a economizar também.
                </p>
              </div>
            </div>

            {/* Ponto 2: Créditos Acumulativos */}
            <div className="flex items-start">
              {/* Placeholder para Icone 2 (Sol com dinheiro) */}
              <div className="flex-shrink-0 mr-6">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                  CRÉDITOS ACUMULATIVOS
                </h3>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                  Sua energia solar excedente pode ser acumulada e utilizada em
                  até 5 anos. Isso garante que você aproveite ao máximo sua
                  produção, mesmo em períodos de menor consumo.
                </p>
              </div>
            </div>

            {/* Ponto 3: Implante seu Sistema à Custo Zero */}
            <div className="flex items-start">
              {/* Placeholder para Icone 3 (Porquinho com dinheiro) */}
              <div className="flex-shrink-0 mr-6">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                  IMPLANTE SEU SISTEMA À CUSTO ZERO
                </h3>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                  Trocamos a sua parcela da conta de luz pela parcela do
                  financiamento, mas ele acaba bem rapidinho. Você economiza
                  desde o primeiro mês e ainda fica com um sistema próprio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Possibilities;
