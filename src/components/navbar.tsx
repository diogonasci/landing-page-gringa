import { buttonVariants } from "@/components/ui/buttonVariants";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { CenteredMenu } from "./CenteredMenu";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { Logo } from "./Logo";

const Header: React.FC = () => {
  const { t } = useTranslation("content");

  return (
    <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm px-3 py-4">
      <CenteredMenu
        logo={<Logo />}
        rightMenu={
          <>
            <li data-fade>
              <LocaleSwitcher />
            </li>
            <li className="ml-1 mr-2.5" data-fade>
              <Link to="/sign-in">{t("navigation.login")}</Link>
            </li>
            <li>
              <Link className={buttonVariants()} to="/sign-up">
                {t("navigation.cta")}</Link>
            </li>
          </>
        }
      >
        <li>
          <Link to="/sign-up">{t("navigation.private_class")}</Link>
        </li>
        <li>
          <Link to="/sign-up">{t("navigation.group_classes")}</Link>
        </li>
        <li>
          <Link to="/sign-up">{t("navigation.past_exams")}</Link>
        </li>
        <li>
          <Link to="/sign-up">{t("navigation.enem_exams")}</Link>
        </li>
      </CenteredMenu>
    </div>
  );
};

export default Header;
