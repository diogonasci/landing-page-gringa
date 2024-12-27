import { buttonVariants } from "@/components/ui/buttonVariants";
import React from "react";
import { Link } from "react-router-dom";
import { CenteredMenu } from "./CenteredMenu";
import { Logo } from "./Logo";
import { Section } from "./Section";

const Header: React.FC = () => {
  return (
    <Section className="px-3 py-6">
      <CenteredMenu
        logo={<Logo />}
        rightMenu={
          <>
            <li className="ml-1 mr-2.5" data-fade>
              <Link to="/sign-in">Entrar</Link>
            </li>
            <li>
              <Link className={buttonVariants()} to="/sign-up">
                Criar Conta
              </Link>
            </li>
          </>
        }
      >
        <li>
          <Link to="/sign-up">Aula Particular</Link>
        </li>
        <li>
          <Link to="/sign-up">Aulões</Link>
        </li>
        <li>
          <Link to="/sign-up">Provas Antigas CSANL</Link>
        </li>
        <li>
          <Link to="/sign-up">Provas ENEM</Link>
        </li>
      </CenteredMenu>
    </Section>
  );
};

export default Header;
