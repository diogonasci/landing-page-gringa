import { FORM_URL } from "@/constants/urls";
import { Check } from "lucide-react";

const SpecialOffer = () => {
  return (
    <section className="bg-radial-orange py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-6 text-white">
          Oferta Especial por Tempo Limitado!
        </h2>

        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md border-2 border-black p-8">
        <div className="text-center mb-4">
            <div className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold inline-block">
              Desconto de 10% para os 15 primeiros
            </div>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-center mb-4 text-radial-dark">
            Análise Gratuita + Projeto Personalizado
          </h3>

         

          <div className="space-y-4 mb-8 max-w-md mx-auto">
            <div className="flex items-start">
              <Check className="w-6 h-6 text-black flex-shrink-0 mr-3 mt-0.5" />
              <p className="text-gray-700 text-lg md:text-xl">
                Estudo completo de viabilidade técnica
              </p>
            </div>

            <div className="flex items-start">
              <Check className="w-6 h-6 text-black flex-shrink-0 mr-3 mt-0.5" />
              <p className="text-gray-700 text-lg md:text-xl">
                Simulação detalhada da economia
              </p>
            </div>

            <div className="flex items-start">
              <Check className="w-6 h-6 text-black flex-shrink-0 mr-3 mt-0.5" />
              <p className="text-gray-700 text-lg md:text-xl">
                Projeto técnico personalizado
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mb-6">
          <a
            href={FORM_URL}
            className="inline-block text-white py-3 px-8 rounded-md text-lg font-medium hover:brightness-110 transition-all"
            style={{ backgroundColor: "#282131" }}
          >
            Quero minha análise gratuita
          </a>
        </div>
        <div className="text-center mt-8">
          <p className="text-white opacity-80 text-sm">
            * Oferta válida para os 15 primeiros cadastros da semana
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
