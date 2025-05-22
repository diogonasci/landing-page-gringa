import { CheckCircle, Shield, Timer } from "lucide-react";
import React from "react";

const WhyChooseUs = () => {
  return (
    <section id="por-que-escolher" className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-3 text-radial-dark">
          Por que escolher a <span className="text-radial-orange">Radial</span>?
        </h2>
        <p className="text-center text-radial-dark mb-10 max-w-2xl mx-auto">
          Somos especialistas em energia solar no Rio de Janeiro, com foco em
          qualidade e satisfação total
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-radial-orange/10 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-radial-orange" />
            </div>
            <h3 className="text-xl font-bold mb-4">Garantia de 25 anos</h3>
            <p className="text-gray-700">
              Todos os nossos painéis solares contam com garantia de fabricação
              e acompanhamento técnico para desempenho contínuo com máxima
              eficiência.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-radial-orange/10 rounded-full flex items-center justify-center mb-4">
              <Timer className="w-8 h-8 text-radial-orange" />
            </div>
            <h3 className="text-xl font-bold mb-4">Mais de 200 instalações</h3>
            <p className="text-gray-700">
              Nossa experiência garante uma instalação perfeita. Atuamos em toda
              região metropolitana do Rio de Janeiro com equipes especializadas.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-radial-orange/10 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-radial-orange" />
            </div>
            <h3 className="text-xl font-bold mb-4">100% regularizada</h3>
            <p className="text-gray-700">
              Cuidamos de todo o processo de homologação junto à concessionária,
              garantindo que sua instalação esteja completamente conforme as
              normas técnicas.
            </p>
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
