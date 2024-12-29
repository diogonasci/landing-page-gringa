"use client";

import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export const LocaleSwitcher = () => {
  const { i18n } = useTranslation();

  const handleToggleLanguage = () => {
    const nextLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(nextLang);
  };

  return (
    <Button
      onClick={handleToggleLanguage}
      className="flex items-center gap-2 p-2 focus-visible:ring-offset-0 min-w-[72px] justify-center"
      variant="ghost"
      size="sm"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-5 stroke-current stroke-2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0M3.6 9h16.8M3.6 15h16.8" />
        <path d="M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 0 18" />
      </svg>
      <span className="text-sm font-medium">
        {i18n.language === "pt" ? "EN" : "PT"}
      </span>
    </Button>
  );
};
