import { Section } from "@/components/Section";
import { Star } from "lucide-react";
import { buttonVariants } from "./ui/buttonVariants";

type Testimonial = {
  id: string;
  author: string;
  rating: number;
  content: string;
  date: string;
};

const testimonials: Testimonial[] = [
  {
    id: "1",
    author: "Maria Silva",
    rating: 5,
    content:
      "Os professores são incríveis! O método de ensino é prático e envolvente. Meu filho está adorando!",
    date: "2024-01-15",
  },
  {
    id: "2",
    author: "João Santos",
    rating: 5,
    content:
      "O progresso da minha filha foi notável. A dedicação dos professores é realmente admirável. Recomendo muito!",
    date: "2024-02-01",
  },
  {
    id: "3",
    author: "Pedro Oliveira",
    rating: 5,
    content:
      "O material didático é excelente, e a atenção que recebemos dos professores faz toda a diferença. Fantástico!",
    date: "2024-02-15",
  },
  {
    id: "4",
    author: "Ana Clara Mendes",
    rating: 5,
    content:
      "O ambiente é muito acolhedor e os professores são super dedicados. Meu filho finalmente está gostando de estudar!",
    date: "2024-01-20",
  },
  {
    id: "5",
    author: "Carlos Ferreira",
    rating: 5,
    content:
      "Estou muito satisfeito com o resultado! Meu filho melhorou muito nas notas e está mais confiante na escola.",
    date: "2024-02-05",
  },
  {
    id: "6",
    author: "Fernanda Costa",
    rating: 5,
    content:
      "Os professores têm uma paciência incrível e explicam de um jeito que as crianças entendem facilmente. Maravilhoso!",
    date: "2024-01-25",
  },
];

const TestimonialsSection = () => {
  return (
    <Section
      subtitle="Depoimentos"
      title="O que nossos alunos dizem"
      description="Veja a experiência de quem já faz parte da nossa comunidade"
      className="bg-gray-50"
    >
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.author.charAt(0)}
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {testimonial.author}
                </h3>
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{testimonial.content}</p>
            <time className="text-sm text-gray-500">
              {new Date(testimonial.date).toLocaleDateString("pt-BR")}
            </time>
          </div>
        ))}
      </div>

      {/* New CTA Section */}
      <div className="mt-16 flex flex-col items-center space-y-6">
        <div className="text-center mb-2">
          <p className="text-2xl font-semibold text-gray-800 mb-2">
            Seja o próximo caso de sucesso
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Junte-se aos mais de 200 alunos que transformaram sua forma de
            estudar e passe nas provas com tranquilidade
          </p>
        </div>

        <a
          href="https://wa.me/5521985043074?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20aulas."
          className={`${buttonVariants({
            size: "lg",
          })} bg-[#4A90E2] hover:bg-[#357ABD] transition-colors duration-200 px-8`}
        >
          Prepare-se para as provas aqui →
        </a>
      </div>
    </Section>
  );
};

export default TestimonialsSection;
