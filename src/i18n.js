import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { arabicLanguage } from "./writeLang/arabic";
import { englishLanguage } from "./writeLang/english";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: englishLanguage,
    },
    ar: {
      translation: arabicLanguage,
    },
  },
});

export default i18n;
