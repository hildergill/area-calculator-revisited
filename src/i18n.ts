import i18next, { InitOptions } from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import * as en from "./locales/en.json";

const resources = {
	en
} as const;

const i18nInitOptions: InitOptions = {
	supportedLngs: ["en"],
	fallbackLng: "en",
	resources
};

i18next.use(initReactI18next).use(I18nextBrowserLanguageDetector).init(i18nInitOptions);
