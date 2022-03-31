import i18next, { Resource } from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import CommonEn from "../locales/en/common.json";
import HeaderComponentEn from "../locales/en/headercomponent.json";
import ShapesEn from "../locales/en/shapes.json";

export const resources: Resource = {
	en: {
		common: CommonEn,
		headerComponent: HeaderComponentEn,
		shapes: ShapesEn
	}
};

i18next
	.use(initReactI18next)
	.use(I18nextBrowserLanguageDetector)
	.init({
		supportedLngs: ["en"],
		resources
	});
