// This file is a part of area-calculator-revisited
// https://www.github.com/hildergill/area-calculator-revisited
// Copyright 2022 Hilder Gill <hildergill@gmail.com>

import { FC } from "react";
import CommonStyles from "../../stylesheets/common.module.css";
import Constants from "../../constants.json";
import { useTranslation } from "react-i18next";

export const WidthHeightCalculatorForm: FC = () => {
	const { t } = useTranslation();

	return (
		<>
			<label htmlFor="width">{t("inputs.width")}</label>

			<input
				className={CommonStyles.commonInput}
				type="number"
				name="width"
				id="width"
				step={Constants.inputs.step}
				defaultValue={Constants.inputs.defaultValue}
			/>

			<label htmlFor="height">{t("inputs.height")}</label>

			<input
				className={CommonStyles.commonInput}
				type="number"
				name="height"
				id="height"
				step={Constants.inputs.step}
				defaultValue={Constants.inputs.defaultValue}
			/>
		</>
	);
};
