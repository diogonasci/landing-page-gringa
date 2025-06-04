import { CheckCircle, Shield, Timer } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section id="por-que-escolher" className="bg-radial-dark py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Bloco da imagem e texto introdutório */}
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left mb-10 max-w-4xl mx-auto">
          {/* Imagem */}
          <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
            <img
              src="/mulher-certo-errado.png"
              alt="Mulher pensando entre certo e errado"
              className="w-48 md:w-64"
            />
          </div>

          {/* Texto introdutório */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
              Por que escolher a{" "}
              <span className="text-radial-orange">Radial</span>?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              Somos especialistas em energia solar no Rio de Janeiro, com foco
              em qualidade e satisfação total
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
          {/* Feature 1: Garantia */}
          <div className="relative p-0.5">
            {/* Sombra/borda inferior e direita */}
            <div className="absolute top-0.5 left-0.5 w-full h-full bg-radial-dark rounded-2xl"></div>
            {/* Fundo branco com borda laranja no topo */}
            <div className="relative bg-white rounded-2xl border-t-4 border-radial-orange px-6 py-10 md:px-8 md:py-12 text-center h-full flex flex-col justify-between z-10">
              <div>
                {/* Icone */}
                <div className="flex justify-center mb-6 md:mb-8">
                  <Shield className="w-14 h-14 text-radial-orange" />
                </div>
                {/* Titulo */}
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-radial-dark">
                  Garantia de 25 anos
                </h3>
                {/* Descrição */}
                <p className="text-gray-700 text-base leading-relaxed">
                  Nossos equipamentos possuem garantia estendida e
                  acompanhamento técnico contínuo para sua tranquilidade.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2: Instalações */}
          <div className="relative p-0.5">
            {/* Sombra/borda inferior e direita */}
            <div className="absolute top-0.5 left-0.5 w-full h-full bg-radial-dark rounded-2xl"></div>
            {/* Fundo branco com borda laranja no topo */}
            <div className="relative bg-white rounded-2xl border-t-4 border-radial-orange px-6 py-10 md:px-8 md:py-12 text-center h-full flex flex-col justify-between z-10">
              <div>
                {/* Icone */}
                <div className="flex justify-center mb-6 md:mb-8">
                  <Timer className="w-14 h-14 text-radial-orange" />
                </div>
                {/* Titulo */}
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-radial-dark">
                  Mais de 200 instalações
                </h3>
                {/* Descrição */}
                <p className="text-gray-700 text-base leading-relaxed">
                  Experiência comprovada com centenas de sistemas instalados em
                  todo o estado do Rio de Janeiro.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3: Regularizada */}
          <div className="relative p-0.5">
            {/* Sombra/borda inferior e direita */}
            <div className="absolute top-0.5 left-0.5 w-full h-full bg-radial-dark rounded-2xl"></div>
            {/* Fundo branco com borda laranja no topo */}
            <div className="relative bg-white rounded-2xl border-t-4 border-radial-orange px-6 py-10 md:px-8 md:py-12 text-center h-full flex flex-col justify-between z-10">
              <div>
                {/* Icone */}
                <div className="flex justify-center mb-6 md:mb-8">
                  <CheckCircle className="w-14 h-14 text-radial-orange" />
                </div>
                {/* Titulo */}
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-radial-dark">
                  100% regularizada
                </h3>
                {/* Descrição */}
                <p className="text-gray-700 text-base leading-relaxed">
                  Empresa certificada com engenheiros credenciados e todos os
                  processos em conformidade com normas técnicas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Novo texto de citação */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <p className="text-white text-2xl md:text-3xl font-bold mb-4 leading-relaxed">
            "Nosso compromisso é com a sua satisfação e economia a longo prazo."
          </p>
          <p className="text-gray-400 text-lg">
            Pedro Nascimento e Remisson Ventura, diretores da Radial.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
