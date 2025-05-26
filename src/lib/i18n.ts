import vi from "./content/vi";
import en from "./content/en";

export function useTranslation(lang: 'vi' | 'en') {
  return lang === 'vi' ? vi : en;
}

export type I18nType = ReturnType<typeof useTranslation>;
