import { Star } from "lucide-react";
import React from "react";

// Tipo para os dados de depoimentos
type Testimonial = {
  id: number;
  name: string;
  location: string;
  text: string;
  savings: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Cecília Santos",
    location: "Copacabana, Rio de Janeiro - RJ",
    text: "Instalei as placas de energia solar e a redução na minha conta foi incrível! Em apenas 2 meses já vi a diferença no meu bolso.",
    savings: "Economia mensal de R$ 387,50",
  },
  {
    id: 2,
    name: "Ricardo Oliveira",
    location: "Barra da Tijuca, Rio de Janeiro - RJ",
    text: "Nunca imaginei que poderia economizar significativamente e o financiamento é o que mais me surpreendeu. As parcelas são menores que o valor que eu pagava de luz!",
    savings: "Economia mensal de R$ 1.250,00",
  },
  {
    id: 3,
    name: "Fernanda Lima",
    location: "Niterói, Rio de Janeiro - RJ",
    text: "Fiquei impressionada com a rapidez da instalação e com o profissionalismo da equipe. O processo foi muito mais simples do que eu imaginava.",
    savings: "Economia mensal de R$ 653,00",
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-3 text-radial-dark">
          O que dizem nossos{" "}
          <span className="text-radial-orange">clientes</span>
        </h2>
        <p className="text-center text-radial-dark mb-10 max-w-2xl mx-auto">
          Veja como a energia solar está transformando a vida de moradores do
          Rio de Janeiro
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-radial-orange fill-radial-orange"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>

              <div className="border-t border-gray-200 pt-4 mt-4">
                <p className="font-semibold text-radial-dark">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  {testimonial.location}
                </p>
                <p className="text-radial-orange font-semibold">
                  {testimonial.savings}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
