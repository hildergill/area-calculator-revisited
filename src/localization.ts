import i18next, { Resource } from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import CommonZh from "../locales/zh/common.json";
import HeaderComponentZh from "../locales/zh/headercomponent.json";
import ShapesZh from "../locales/zh/shapes.json";
import CalculatorFormZh from "../locales/zh/calculatorform.json";

import CommonZhCN from "../locales/zh-CN/common.json";
import HeaderComponentZhCN from "../locales/zh-CN/headercomponent.json";
import ShapesZhCN from "../locales/zh-CN/shapes.json";
import CalculatorFormZhCN from "../locales/zh-CN/calculatorform.json";

import CommonEs from "../locales/es/common.json";
import HeaderComponentEs from "../locales/es/headercomponent.json";
import ShapesEs from "../locales/es/shapes.json";
import CalculatorFormEs from "../locales/es/calculatorform.json";

import CommonEn from "../locales/en/common.json";
import HeaderComponentEn from "../locales/en/headercomponent.json";
import ShapesEn from "../locales/en/shapes.json";
import CalculatorFormEn from "../locales/en/calculatorform.json";

import CommonHi from "../locales/hi/common.json";
import HeaderComponentHi from "../locales/hi/headercomponent.json";
import ShapesHi from "../locales/hi/shapes.json";
import CalculatorFormHi from "../locales/hi/calculatorform.json";

export const resources: Resource = {
	zh: {
		common: CommonZh,
		headerComponent: HeaderComponentZh,
		shapes: ShapesZh,
		calculatorForm: CalculatorFormZh
	},
	"zh-CN": {
		common: CommonZhCN,
		headerComponent: HeaderComponentZhCN,
		shapes: ShapesZhCN,
		calculatorForm: CalculatorFormZhCN
	},
	es: {
		common: CommonEs,
		headerComponent: HeaderComponentEs,
		shapes: ShapesEs,
		calculatorForm: CalculatorFormEs
	},
	en: {
		common: CommonEn,
		headerComponent: HeaderComponentEn,
		shapes: ShapesEn,
		calculatorForm: CalculatorFormEn
	},
	hi: {
		common: CommonHi,
		headerComponent: HeaderComponentHi,
		shapes: ShapesHi,
		calculatorForm: CalculatorFormHi
	}
};

i18next
	.use(initReactI18next)
	.use(I18nextBrowserLanguageDetector)
	.init({
		supportedLngs: ["zh", "zh-CN", "es", "en", "hi"],
		resources
	});
