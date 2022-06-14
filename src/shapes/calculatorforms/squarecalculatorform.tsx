// This file is a part of area-calculator-revisited
// https://www.github.com/hildergill/area-calculator-revisited
// Copyright 2022 Hilder Gill <hildergill@gmail.com>

import { FC } from "react";
import CommonStyles from "../../common.module.css";
import Constants from "../../constants.json";

export const SquareCalculatorForm: FC = () => {
	return (
		<>
			<label htmlFor="width">Width</label>

			<input
				className={CommonStyles.commonInput}
				type="number"
				name="width"
				id="width"
				step={Constants.inputs.step}
				defaultValue={Constants.inputs.defaultValue}
			/>
		</>
	);
};
