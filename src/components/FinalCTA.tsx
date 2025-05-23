import { useTranslation } from "react-i18next";
import { Section } from "./Section";
import { buttonVariants } from "./ui/buttonVariants";
import { CALENDLY_URL } from "@/constants/urls";

export default function FinalCTA() {
  const { t } = useTranslation("content");

  return (
    <Section>
      <div className="rounded-xl bg-muted bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 px-6 py-10 text-center">
        <div className="text-3xl font-bold text-primary-foreground">
          {t("final_cta.title")}
        </div>

        <div className="mt-2 text-lg font-medium text-muted">
          {t("final_cta.subtitle")}
        </div>

        <div className="mt-6">
          <a
            className={buttonVariants({ variant: "outline", size: "lg" })}
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("final_cta.button")}
          </a>
        </div>
      </div>
    </Section>
  );
}
