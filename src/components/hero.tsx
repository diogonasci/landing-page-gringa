import { badgeVariants } from "@/components/ui/badgeVariants";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { useTranslation } from "react-i18next";
import { CenteredHero } from "./CenteredHero";
import { Section } from "./Section";
import { buttonVariants } from "./ui/buttonVariants";
import { CALENDLY_URL } from "@/constants/urls";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section className="py-36">
      <CenteredHero
        banner={
          <a
            className={badgeVariants()}
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramLogoIcon className="mr-1 size-5" /> {t("hero.tag")}
          </a>
        }
        title={
          <>
            {t("hero.title.prefix")}{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {t("hero.title.highlight")}
            </span>{" "}
            {t("hero.title.suffix")} {t("hero.subtitle")}
          </>
        }
        description={t("hero.description")}
        buttons={
          <div className="flex flex-col items-center space-y-4">
            <a
              className={`${buttonVariants({
                size: "lg",
              })} bg-[#4A90E2] hover:bg-[#357ABD] transition-colors duration-200 px-8 py-4 text-lg font-semibold`}
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("hero.cta")}
            </a>
            <p className="text-sm text-gray-600">{t("hero.disclaimer")}</p>
          </div>
        }
      />
    </Section>
  );
};

export default Hero;
