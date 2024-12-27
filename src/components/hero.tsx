import { badgeVariants } from "@/components/ui/badgeVariants";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { CenteredHero } from "./CenteredHero";
import { Section } from "./Section";
import { buttonVariants } from "./ui/buttonVariants";

const Hero: React.FC = () => {
  return (
    <Section className="py-36">
      <CenteredHero
        banner={
          <a
            className={badgeVariants()}
            href="https://wa.me/5521985043074?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20aulas."
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramLogoIcon className="mr-1 size-5" /> Siga @profcerto no
            Instagram
          </a>
        }
        title={
          <>
            Seu{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              sucesso nas provas
            </span>{" "}
            começa aqui: preparação feita por quem entende!
          </>
        }
        description="Com profunda experiência e domínio da metodologia do CSANL, nossa equipe é referência em preparar você para brilhar nas provas!"
        buttons={
          <div className="flex flex-col items-center space-y-4">
            <a
              className={`${buttonVariants({
                size: "lg",
              })} bg-[#4A90E2] hover:bg-[#357ABD] transition-colors duration-200 px-8 py-4 text-lg font-semibold`}
              href="https://wa.me/5521985043074?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20aulas."
            >
              COMECE SEUS ESTUDOS AGORA →
            </a>
            <p className="text-sm text-gray-600">
              Primeira aula grátis | +1000 alunos aprovados
            </p>
          </div>
        }
      />
    </Section>
  );
};

export default Hero;
