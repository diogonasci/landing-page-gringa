import { FORM_URL } from "@/constants/urls";
import { Check } from "lucide-react";

const SpecialOffer = () => {
  return (
    <section className="bg-radial-orange py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-6 text-white">
          Oferta Especial por Tempo Limitado!
        </h2>
        <p className="text-center text-white mb-8 max-w-2xl mx-auto">
          Aproveite o desconto especial por tempo limitado para novos clientes
        </p>

        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-6 text-radial-dark">
            Análise Gratuita + Projeto Personalizado
          </h3>

          <p className="text-center text-gray-700 mb-6">
            Aproveite esta oportunidade e garanta economia imediata!
          </p>

          <div className="space-y-4 mb-8 max-w-md mx-auto">
            <div className="flex items-start">
              <Check className="w-6 h-6 text-black flex-shrink-0 mr-3 mt-0.5" />
              <p className="text-gray-700">
                Estudo completo de viabilidade técnica
              </p>
            </div>

            <div className="flex items-start">
              <Check className="w-6 h-6 text-black flex-shrink-0 mr-3 mt-0.5" />
              <p className="text-gray-700">Simulação detalhada da economia</p>
            </div>

            <div className="flex items-start">
              <Check className="w-6 h-6 text-black flex-shrink-0 mr-3 mt-0.5" />
              <p className="text-gray-700">Projeto técnico personalizado</p>
            </div>
          </div>

          <div className="text-center">
            <a
              href={FORM_URL}
              className="inline-block bg-radial-orange text-white py-3 px-8 rounded-md text-lg font-medium hover:brightness-110 transition-all"
            >
              Quero minha análise gratuita
            </a>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-white opacity-80 text-sm">
            *Promoção válida até o final do mês ou enquanto durar o estoque de
            equipamentos
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
