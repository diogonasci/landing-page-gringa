"use client";

import { useMenu } from "@/hooks/useMenu";
import { cn } from "@/lib/utils.ts";
import { Link } from "react-router-dom";
import { ToggleMenuButton } from "../components/ToggleMenuButton";

export const CenteredMenu = (props: {
  logo: React.ReactNode;
  children: React.ReactNode;
  rightMenu: React.ReactNode;
}) => {
  const { showMenu, handleToggleMenu } = useMenu();

  const navClass = cn("max-lg:w-full max-lg:bg-secondary max-lg:p-5", {
    "max-lg:hidden": !showMenu,
  });

  return (
    <div className="flex items-center justify-between w-full">
      {/* Logo alinhado à esquerda */}
      <div className="flex-shrink-0">
        <Link to="/">{props.logo}</Link>
      </div>

      {/* Menu centralizado */}
      <nav
        className={cn(
          "hidden lg:flex justify-center flex-1 max-lg:mt-2 rounded-t",
          navClass
        )}
      >
        <ul className="flex gap-x-6 text-lg font-medium [&_a:hover]:opacity-100 [&_a]:opacity-60">
          {props.children}
        </ul>
      </nav>

      {/* Botões alinhados à direita */}
      <div
        className={cn(
          "flex items-center flex-shrink-0 space-x-4",
          "rounded-b max-lg:border-t max-lg:border-border",
          navClass
        )}
      >
        <ul className="flex items-center gap-x-1.5 text-lg font-medium [&_li[data-fade]:hover]:opacity-100 [&_li[data-fade]]:opacity-60">
          {props.rightMenu}
        </ul>
        <div className="lg:hidden">
          <ToggleMenuButton onClick={handleToggleMenu} />
        </div>
      </div>
    </div>
  );
};
