import { Section } from "@/components/Section";
import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import { buttonVariants } from "./ui/buttonVariants";

type Testimonial = {
  name: string;
  testimonial: string;
  rating: number;
  date: string;
};

const TestimonialsSection = () => {
  const { t } = useTranslation("content");
  const testimonials = t("testimonials.items", {
    returnObjects: true,
  }) as Testimonial[];

  return (
    <Section
      subtitle={t("testimonials.title")}
      title={t("testimonials.subtitle")}
      description={t("testimonials.description")}
      className="bg-gray-50"
    >
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {testimonial.name}
                </h3>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{testimonial.testimonial}</p>
            <time className="text-sm text-gray-500">{testimonial.date}</time>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 flex flex-col items-center space-y-6">
        <div className="text-center mb-2">
          <p className="text-2xl font-semibold text-gray-800 mb-2">
            {t("testimonials.info")}
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("testimonials.disclaimer")}
          </p>
        </div>

        <a
          href="https://wa.me/5521985043074?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20aulas."
          className={`${buttonVariants({
            size: "lg",
          })} bg-[#4A90E2] hover:bg-[#357ABD] transition-colors duration-200 px-8`}
        >
          {t("testimonials.cta")}
        </a>
      </div>
    </Section>
  );
};

export default TestimonialsSection;
