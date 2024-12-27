import { Section } from "./Section";
import { buttonVariants } from "./ui/buttonVariants";

export default function FinalCTA() {
  return (
    <Section>
      <div className="rounded-xl bg-muted bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 px-6 py-10 text-center">
        <div className="text-3xl font-bold text-primary-foreground">
          Pronto para dominar as provas do CSANL?
        </div>

        <div className="mt-2 text-lg font-medium text-muted">
          Estude com quem conhece e diga adeus a notas baixas!
        </div>

        <div className="mt-6">
          {
            <a
              className={buttonVariants({ variant: "outline", size: "lg" })}
              href="https://wa.me/5521985043074?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20aulas."
            >
              Melhore suas notas agora →
            </a>
          }
        </div>
      </div>
    </Section>
  );
}
