import { FORM_URL } from "@/constants/urls";

const Hero = () => {
  return (
    <section className="bg-radial-dark py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Título principal centralizado */}
        <div className="text-center mb-12">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Pare de gastar com
            <br />
            <span className="text-radial-orange">contas de luz!</span>
          </h1>

          <h2 className="text-radial-orange text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
            Aprenda agora a como guardar esse dinheiro no seu bolso
          </h2>
        </div>

        {/* Vídeo GIGANTE como protagonista */}
        <div className="flex justify-center mb-12">
          <div className="relative max-w-5xl w-full">
            {/* Monitor minimalista e elegante */}
            <div className="relative bg-gradient-to-b from-slate-300 to-slate-400 rounded-3xl p-3 shadow-2xl">
              {/* Moldura interna sutil */}
              <div className="bg-gradient-to-b from-slate-100 to-slate-200 rounded-2xl p-2 shadow-inner">
                {/* VÍDEO GIGANTE */}
                <div className="bg-black rounded-xl overflow-hidden aspect-video shadow-lg">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/ekxYqw220rA?start=1&rel=0&modestbranding=1"
                    title="Como funciona energia solar?"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Barra inferior minimalista */}
              <div className="flex justify-center items-center mt-2">
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-slate-600 font-bold">RADIAL</div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Base minimalista */}
            <div className="flex justify-center mt-2">
              <div className="w-24 h-4 bg-gradient-to-b from-slate-400 to-slate-500 rounded-b-xl"></div>
            </div>

            {/* Pedestal discreto */}
            <div className="flex justify-center mt-1">
              <div className="w-40 h-3 bg-gradient-to-b from-slate-500 to-slate-600 rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>

        {/* Texto descritivo centralizado */}
        <div className="text-center mb-12">
          <p className="text-white text-xl md:text-2xl lg:text-3xl font-medium max-w-4xl mx-auto leading-relaxed">
            Moradores do RJ já estão economizando centenas por mês com a Radial
            Energia Solar.
          </p>
        </div>

        {/* CTA GIGANTE centralizado */}
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <a
              href={FORM_URL}
              className="block w-full bg-radial-orange text-white py-8 px-12 rounded-2xl text-center font-bold text-2xl md:text-3xl hover:bg-orange-500 transform hover:scale-105 transition-all duration-300 shadow-2xl border-4 border-orange-400 animate-pulse hover:animate-none"
            >
              🚀 QUERO REDUZIR MINHA CONTA DE LUZ AGORA!
            </a>

            {/* Benefícios abaixo do botão */}
            <div className="text-center mt-6">
              <p className="text-white text-lg opacity-90 mb-2">
                ⚡ Análise 100% gratuita • Sem compromisso • Resultado garantido
              </p>
              <p className="text-radial-orange text-xl font-bold animate-pulse">
                👆 Clique agora e descubra quanto pode economizar!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
