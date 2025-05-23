"use client";

import { useMenu } from "@/hooks/useMenu";
import { useClickOutside } from "@/hooks/useClickOutside";
import { cn } from "@/lib/utils.ts";
import { Link } from "react-router-dom";
import { ToggleMenuButton } from "../components/ToggleMenuButton";
import { useRef } from "react";
import { LocaleSwitcher } from "./LocaleSwitcher";

export const CenteredMenu = (props: {
  logo: React.ReactNode;
  children: React.ReactNode;
  rightMenu: React.ReactNode;
}) => {
  const { showMenu, handleToggleMenu } = useMenu();
  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutside(menuRef, () => {
    if (showMenu) {
      handleToggleMenu();
    }
  });

  const navClass = cn(
    "max-lg:w-full max-lg:bg-secondary max-lg:p-5",
    {
      "max-lg:hidden": !showMenu,
    }
  );

  return (
    <div ref={menuRef} className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between gap-x-4">
      <div className="flex items-center justify-between flex-1 lg:flex-initial">
        <Link to="/" className="flex-shrink-0">
          {props.logo}
        </Link>

        <div className="flex items-center gap-1 lg:hidden opacity-60 hover:opacity-100">
          <LocaleSwitcher />
          <ToggleMenuButton onClick={handleToggleMenu} />
        </div>
      </div>

      <nav className={cn("flex-grow rounded-t max-lg:mt-2", navClass)}>
        <ul className="flex justify-center gap-x-6 gap-y-1 text-lg font-medium max-lg:flex-col [&_a:hover]:opacity-100 [&_a]:opacity-60 max-lg:[&_a]:inline-block max-lg:[&_a]:w-full">
          {props.children}
        </ul>
      </nav>

      <div
        className={cn(
          "flex-shrink-0 rounded-b max-lg:w-full max-lg:border-t max-lg:border-border",
          navClass
        )}
      >
        <ul className="flex flex-row items-center gap-x-4 text-lg font-medium [&_li[data-fade]:hover]:opacity-100 [&_li[data-fade]]:opacity-60">
          <div className="hidden lg:block opacity-60 hover:opacity-100">
            <LocaleSwitcher />
          </div>
          {props.rightMenu}
        </ul>
      </div>
    </div>
  );
};
