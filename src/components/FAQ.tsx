import { useTranslation } from 'react-i18next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";
import { Section } from "./Section";

export const FAQ = () => {
  const { t } = useTranslation('content');
  const faqItems = t('faq.items', { returnObjects: true }) as Array<{ question: string; answer: string }>;

  return (
    <div id="faq">
      <Section>
        <h2 className="mb-8 text-center text-3xl font-bold">
          {t('faq.title')}
        </h2>
        <Accordion type="multiple" className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={`item-${index + 1}`} value={`item-${index + 1}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
    </div>
  );
};
