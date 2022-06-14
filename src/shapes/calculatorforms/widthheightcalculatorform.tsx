import { FC } from "react";
import CommonStyles from "../../common.module.css";
import Constants from "../../constants.json";

export const WidthHeightCalculatorForm: FC = () => {
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

			<label htmlFor="height">Height</label>

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
