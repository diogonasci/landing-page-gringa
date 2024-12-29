import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import contentEN from "./locales/en/content.json";
import contentPT from "./locales/pt/content.json";

const resources = {
  en: {
    content: contentEN,
  },
  pt: {
    content: contentPT,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt",
  fallbackLng: "pt",
  ns: ["content"], // namespace
  defaultNS: "content",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;