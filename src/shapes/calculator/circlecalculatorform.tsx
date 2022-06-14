import { FC } from "react";
import CommonStyles from "../../common.module.css";
import Constants from "../../constants.json";

export const CircleCalculatorForm: FC = () => {
	return (
		<>
			<label htmlFor="radius">Radius</label>

			<input
				className={CommonStyles.commonInput}
				type="number"
				name="radius"
				id="radius"
				step={Constants.inputs.step}
				defaultValue={Constants.inputs.defaultValue}
			/>
		</>
	);
};
