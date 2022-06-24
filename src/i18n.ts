// This file is a part of area-calculator-revisited
// https://www.github.com/hildergill/area-calculator-revisited
// Copyright 2022 Hilder Gill <hildergill@gmail.com>

import i18next, { InitOptions } from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

const i18nInitOptions: InitOptions = {
	fallbackLng: "en"
};

i18next.use(initReactI18next).use(HttpBackend).use(I18nextBrowserLanguageDetector).init(i18nInitOptions);
