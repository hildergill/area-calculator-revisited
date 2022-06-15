// This file is a part of area-calculator-revisited
// https://www.github.com/hildergill/area-calculator-revisited
// Copyright 2022 Hilder Gill <hildergill@gmail.com>

import { FC, FormEvent, FormEventHandler } from "react";
import { Shapes } from "../shapes";
import { IconCheck, IconX } from "@tabler/icons";
import CalculatorFormStyles from "../stylesheets/calculatorform.module.css";
import CommonStyles from "../stylesheets/common.module.css";

export type OnSubmitCalculatorForm = {
	(params: any, results: number): void;
};

export type CalculatorFormProps = {
	activeShape: number;
	onSubmit?: OnSubmitCalculatorForm;
};

export const CalculatorForm: FC<CalculatorFormProps> = (props: CalculatorFormProps) => {
	const { activeShape, onSubmit }: CalculatorFormProps = props;

	const { getName, getCalculatorForm, resolveArea } = Object.values(Shapes)[activeShape];

	const onSubmitCalculatorForm: FormEventHandler = (event: FormEvent) => {
		event.preventDefault();

		const { radius, width, height } = event.target as any,
			inputObject: any = {};

		if (radius) inputObject["radius"] = radius.value;
		if (width) inputObject["width"] = width.value;
		if (height) inputObject["height"] = height.value;

		if (onSubmit) onSubmit(inputObject, resolveArea(inputObject));
	};

	return (
		<main className={CalculatorFormStyles.calculatorForm}>
			<h2>{getName()}</h2>

			<form onSubmit={onSubmitCalculatorForm}>
				{getCalculatorForm()}

				<div className={CalculatorFormStyles.controlButtonContainer}>
					<button type="reset" className={CommonStyles.commonButton}>
						<p>Reset</p>
						<IconX />
					</button>

					<button type="submit" className={CommonStyles.commonButton}>
						<p>Submit</p>
						<IconCheck />
					</button>
				</div>
			</form>
		</main>
	);
};
