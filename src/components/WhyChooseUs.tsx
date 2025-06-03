import { CheckCircle, Shield, Timer } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section id="por-que-escolher" className="bg-radial-dark py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-3 text-white">
          Por que escolher a <span className="text-radial-orange">Radial</span>?
        </h2>
        <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
          Somos especialistas em energia solar no Rio de Janeiro, com foco em
          qualidade e satisfação total
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1: Garantia */}
          <div className="relative p-1">
            {/* Sombra/borda inferior e direita */}
            <div className="absolute top-1 left-1 w-full h-full bg-radial-dark rounded-xl"></div>
            {/* Fundo branco com borda laranja no topo */}
            <div className="relative bg-white rounded-xl border-t-4 border-radial-orange p-6 md:p-8 text-center h-full flex flex-col justify-between z-10">
              <div>
                {/* Icone */}
                <div className="flex justify-center mb-4">
                  <Shield className="w-10 h-10 text-radial-orange" />
                </div>
                {/* Titulo */}
                <h3 className="text-xl font-bold mb-3 text-radial-dark">
                  Garantia de 25 anos
                </h3>
                {/* Descrição */}
                <p className="text-gray-700 text-base">
                  Nossos equipamentos possuem garantia estendida e
                  acompanhamento técnico contínuo para sua tranquilidade.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2: Instalações */}
          <div className="relative p-1">
            {/* Sombra/borda inferior e direita */}
            <div className="absolute top-1 left-1 w-full h-full bg-radial-dark rounded-xl"></div>
            {/* Fundo branco com borda laranja no topo */}
            <div className="relative bg-white rounded-xl border-t-4 border-radial-orange p-6 md:p-8 text-center h-full flex flex-col justify-between z-10">
              <div>
                {/* Icone */}
                <div className="flex justify-center mb-4">
                  <Timer className="w-10 h-10 text-radial-orange" />
                </div>
                {/* Titulo */}
                <h3 className="text-xl font-bold mb-3 text-radial-dark">
                  Mais de 200 instalações
                </h3>
                {/* Descrição */}
                <p className="text-gray-700 text-base">
                  Experiência comprovada com centenas de sistemas instalados em
                  todo o estado do Rio de Janeiro.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3: Regularizada */}
          <div className="relative p-1">
            {/* Sombra/borda inferior e direita */}
            <div className="absolute top-1 left-1 w-full h-full bg-radial-dark rounded-xl"></div>
            {/* Fundo branco com borda laranja no topo */}
            <div className="relative bg-white rounded-xl border-t-4 border-radial-orange p-6 md:p-8 text-center h-full flex flex-col justify-between z-10">
              <div>
                {/* Icone */}
                <div className="flex justify-center mb-4">
                  <CheckCircle className="w-10 h-10 text-radial-orange" />
                </div>
                {/* Titulo */}
                <h3 className="text-xl font-bold mb-3 text-radial-dark">
                  100% regularizada
                </h3>
                {/* Descrição */}
                <p className="text-gray-700 text-base">
                  Empresa certificada com engenheiros credenciados e todos os
                  processos em conformidade com normas técnicas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg border border-gray-200 max-w-3xl mx-auto text-center">
          <p className="italic text-gray-700 mb-6">
            "Nossa compromisso é com o seu satisfação e economia a longo prazo."
          </p>
          <p className="font-bold text-radial-dark">
            Eng. Roberto Carvalho - Diretor Técnico da Radial
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
