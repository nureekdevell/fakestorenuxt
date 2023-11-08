import { defineI18nConfig } from "#i18n";

export default defineI18nConfig(() => ({
  legacy: false,
  availableLocales: ["uz", "ru", "en", "tr"],
  locale: "en",
}));
