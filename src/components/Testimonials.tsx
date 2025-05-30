import { Star } from "lucide-react";
import painelSolar from "../assets/painel-solar.png";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";

// Tipo para os dados de depoimentos
type Testimonial = {
  id: number;
  name: string;
  location: string;
  text: string;
  savings: string;
  photo: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Clerton Pereira",
    location: "Turiaçu, Rio de Janeiro - RJ",
    text: "A equipe foi responsável e atenciosa. Me passaram confiança! Fizeram um serviço de primeira e tô satisfeito pra caramba. Fui bem atendido e o trabalho foi bem rápido. Foi a melhor coisa que fiz. Indico com certeza!",
    savings: "Economia mensal de R$ 387,50",
    photo: person1,
  },
  {
    id: 2,
    name: "Célia Condé",
    location: "Taquara, Rio de Janeiro - RJ",
    text: "Hoje eu tenho uma economia muito grande de energia, e não tenho mais preocupação. A conta de luz era muito cara. Agora eu pago somente o mínimo e já tenho mais de 4.000KwH acumulados na rede.",
    savings: "Economia mensal de R$ 1.250,00",
    photo: person2,
  },
  {
    id: 3,
    name: "André Pires",
    location: "Miguel Pereira, Rio de Janeiro - RJ",
    text: "Chegamos na parcela final. Tudo certinho, conforme o combinado. Parabéns pelo excelente trabalho e profissionalismo. Deu tudo certo! O sistema está gerando muita energia.",
    savings: "Economia mensal de R$ 653,00",
    photo: person3,
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
              className="border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <img
                src={painelSolar}
                alt="Painel Solar"
                className="w-full object-cover"
              />

              <div className="p-6">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-radial-orange fill-radial-orange"
                    />
                  ))}
                </div>

                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={testimonial.photo}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-radial-dark">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  <p className="text-radial-orange font-semibold">
                    {testimonial.savings}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
