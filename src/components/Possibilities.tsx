const Possibilities = () => {
  return (
    <section className="bg-gradient-to-r from-[#ff3231] to-[#ff8c4b] py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-12">
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
          <div className="flex justify-center md:justify-start mb-10">
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
          <div className="space-y-8">
            {/* Ponto 1: Compartilhamento de Energia */}
            <div className="flex items-start">
              {/* Placeholder para Icone 1 (Casa com painel) */}
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>{" "}
                {/* Exemplo de placeholder */}
              </div>
              <div>
                <h3 className="text-white text-xl font-bold mb-2">
                  COMPARTILHAMENTO DE ENERGIA
                </h3>
                <p className="text-gray-300 text-base">
                  Você pode dividir sua energia solar com outro endereço, sem
                  pagar nada a mais por isso
                </p>
              </div>
            </div>

            {/* Ponto 2: Créditos Acumulativos */}
            <div className="flex items-start">
              {/* Placeholder para Icone 2 (Sol com dinheiro) */}
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>{" "}
                {/* Exemplo de placeholder */}
              </div>
              <div>
                <h3 className="text-white text-xl font-bold mb-2">
                  CRÉDITOS ACUMULATIVOS
                </h3>
                <p className="text-gray-300 text-base">
                  Sua energia solar excedente pode ser acumulada e utilizada em
                  até 5 anos
                </p>
              </div>
            </div>

            {/* Ponto 3: Implante seu Sistema à Custo Zero */}
            <div className="flex items-start">
              {/* Placeholder para Icone 3 (Porquinho com dinheiro) */}
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>{" "}
                {/* Exemplo de placeholder */}
              </div>
              <div>
                <h3 className="text-white text-xl font-bold mb-2">
                  IMPLANTE SEU SISTEMA À CUSTO ZERO
                </h3>
                <p className="text-gray-300 text-base">
                  Trocamos a sua parcela da conta de luz pela parcela do
                  financiamento, mas ele acaba bem rapidinho
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
