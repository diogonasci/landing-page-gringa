import { buttonVariants } from "@/components/ui/buttonVariants";
import React from "react";
import { useTranslation } from "react-i18next";
import { CenteredMenu } from "./CenteredMenu";
import { Logo } from "./Logo";

const Header: React.FC = () => {
  const { t } = useTranslation("content");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm px-3 py-4">
      <CenteredMenu
        logo={<Logo />}
        rightMenu={
          <>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className={buttonVariants()}
              >
                {t("navigation.cta")}
              </button>
            </li>
          </>
        }
      >
        <li>
          <button
            onClick={() => scrollToSection("services")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("navigation.services")}
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("team")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("navigation.team")}
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("navigation.testimonials")}
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("navigation.contact")}
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("navigation.faq")}
          </button>
        </li>
      </CenteredMenu>
    </div>
  );
};

export default Header;
