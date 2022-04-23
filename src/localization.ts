// This file is a part of area-calculator-revisited
// https://www.github.com/hildergill/area-calculator-revisited
// Copyright 2022 Hilder Gill

import i18next, { Resource } from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import zh from "../locales/zh.json";
import zhCn from "../locales/zh-cn.json";
import es from "../locales/es.json";
import en from "../locales/en.json";

export const resources: Resource = {
	en,
	es,
	zh,
	"zh-CN": zhCn
} as const;

i18next
	.use(initReactI18next)
	.use(I18nextBrowserLanguageDetector)
	.init({
		resources,
		supportedLngs: ["zh", "zh-CN", "es", "en"],
		fallbackLng: "en"
	});
