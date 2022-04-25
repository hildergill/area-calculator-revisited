// This file is a part of area-calculator-revisited
// https://www.github.com/hildergill/area-calculator-revisited
// Copyright 2022 Hilder Gill <hildergill@gmail.com>

import "react-i18next";
import en from "../locales/en.json";

declare module "react-i18next" {
	interface CustomTypeOptions {
		resources: typeof en;
	}
}
