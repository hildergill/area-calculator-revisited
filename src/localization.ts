import i18next, { Resource } from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import CommonEn from "../locales/en/common.json";
import HeaderComponentEn from "../locales/en/headercomponent.json";
import ShapesEn from "../locales/en/shapes.json";
import CalculatorFormEn from "../locales/en/calculatorform.json";

import CommonZh from "../locales/zh/common.json";
import HeaderComponentZh from "../locales/zh/headercomponent.json";
import ShapesZh from "../locales/zh/shapes.json";
import CalculatorFormZh from "../locales/zh/calculatorform.json";

export const resources: Resource = {
	zh: {
		common: CommonZh,
		headerComponent: HeaderComponentZh,
		shapes: ShapesZh,
		calculatorForm: CalculatorFormZh
	},
	en: {
		common: CommonEn,
		headerComponent: HeaderComponentEn,
		shapes: ShapesEn,
		calculatorForm: CalculatorFormEn
	}
};

i18next
	.use(initReactI18next)
	.use(I18nextBrowserLanguageDetector)
	.init({
		supportedLngs: ["zh", "en"],
		resources
	});
