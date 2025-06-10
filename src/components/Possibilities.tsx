import { Home, PiggyBank, Sun } from "lucide-react";

const Possibilities = () => {
  return (
    <section className="bg-gradient-to-r from-[#ff3231] to-[#ff8c4b] py-20 md:py-32">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
        {/* Ilustração */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start md:-mr-20">
          <img
            src="/mulher-ideias.png"
            alt="Ilustração de pessoa com ideias"
            className="max-w-md md:max-w-2xl lg:max-w-3xl"
          />
        </div>

        {/* Conteúdo da direita: Título e Pontos da lista */}
        <div className="w-full md:w-1/2">
          {/* Título POSSIBILIDADES */}
          <div className="flex justify-center md:justify-start mb-16 md:ml-8">
            <div className="relative">
              {/* Fundo branco com borda fina preta e sombra 3D */}
              <div
                className="bg-white rounded-3xl px-6 py-4 md:px-10 md:py-6 border-2 border-black relative z-10"
                style={{ boxShadow: "12px 5px 0 0 black" }}
              >
                <h2 className="text-radial-orange text-4xl md:text-5xl font-bold text-center tracking-wide">
                  POSSIBILIDADES
                </h2>
              </div>
            </div>
          </div>

          {/* Pontos da lista */}
          <div className="space-y-12">
            {/* Ponto 1: Compartilhamento de Energia */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Home className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                  COMPARTILHAMENTO DE ENERGIA
                </h3>
                <p className="text-white text-lg md:text-xl leading-relaxed">
                  Você pode dividir sua energia solar com outro endereço, sem
                  pagar nada a mais por isso. Aproveite para ajudar sua família
                  ou amigos a economizar também.
                </p>
              </div>
            </div>

            {/* Ponto 2: Créditos Acumulativos */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Sun className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                  CRÉDITOS ACUMULATIVOS
                </h3>
                <p className="text-white text-lg md:text-xl leading-relaxed">
                  Sua energia solar excedente pode ser acumulada e utilizada em
                  até 5 anos. Isso garante que você aproveite ao máximo sua
                  produção, mesmo em períodos de menor consumo.
                </p>
              </div>
            </div>

            {/* Ponto 3: Implante seu Sistema à Custo Zero */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <PiggyBank className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                  IMPLANTE SEU SISTEMA À CUSTO ZERO
                </h3>
                <p className="text-white text-lg md:text-xl leading-relaxed">
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
