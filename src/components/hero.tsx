import telaPC from "@/assets/tela-pc.png"; // Importe a imagem da tela do PC
import { COMPANY_DESCRIPTION, FORM_URL } from "@/constants/urls";

const Hero = () => {
  return (
    <section className="bg-radial-dark py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Coluna da Esquerda - Texto */}
          <div className="text-left">
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Pare de
              <br />
              gastar com
              <br />
              contas de luz!
            </h1>

            <p className="text-white mb-8 text-base md:text-lg opacity-90">
              {COMPANY_DESCRIPTION}
            </p>
          </div>

          {/* Coluna da Direita - Vídeo na Tela do PC */}
          <div className="relative flex justify-center">
            {/* Container para a tela do PC */}
            <div className="relative w-full max-w-lg">
              {/* Imagem da tela do PC */}
              <img
                src={telaPC}
                alt="Tela do computador"
                className="w-full h-auto"
              />

              {/* Vídeo posicionado dentro da tela */}
              <div className="absolute top-[8%] left-[8%] right-[8%] bottom-[25%] rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/ekxYqw220rA?start=1"
                  title="Como funciona energia solar?"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Botão CTA posicionado abaixo da tela */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4">
                <a
                  href={FORM_URL}
                  className="block w-full bg-white text-radial-dark py-3 px-6 rounded-full text-center font-bold text-sm md:text-base hover:bg-gray-100 transition-all shadow-lg"
                >
                  Quero reduzir minha conta de luz
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
