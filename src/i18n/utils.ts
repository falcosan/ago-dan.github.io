import { ui, defaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getBrowserLocales(options = {}) {
  const defaultOptions = {
    languageCodeOnly: false,
  };

  const browserLocales =
    window?.navigator.languages == null
      ? [navigator.language]
      : navigator.languages;

  if (!browserLocales) return;

  return browserLocales.map((locale) => {
    const trimmedLocale = locale.trim();

    return trimmedLocale.split(/-|_/)[0];
  });
}
