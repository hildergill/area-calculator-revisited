// This file is a part of area-calculator-revisited
// https://www.github.com/hildergill/area-calculator-revisited
// Copyright 2022 Hilder Gill

import i18next, { Resource } from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "../locales/en.json";

export const resources: Resource = {
	en
} as const;

i18next
	.use(initReactI18next)
	.use(I18nextBrowserLanguageDetector)
	.init({
		resources,
		supportedLngs: ["en"],
		fallbackLng: "en"
	});
