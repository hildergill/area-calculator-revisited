// This file is a part of area-calculator-revisited
// https://www.github.com/hildergill/area-calculator-revisited
// Copyright 2022 Hilder Gill <hildergill@gmail.com>

import { createRef, FormEvent, FormEventHandler, RefObject } from "react";
import { useTranslation } from "react-i18next";
import ShapeCollection from "../shapecollection";

import CalculatorFormStyle from "../styles/CalculatorForm.module.scss";
import ButtonStyles from "../styles/generic/Button.module.scss";

type OnSubmitCalculatorForm = {
	(area: number, shapeName: string): void;
};

type CalculatorFormProps = {
	activeIndex: number;
	onSubmit?: OnSubmitCalculatorForm;
};

const CalculatorForm = (props: CalculatorFormProps) => {
	const { activeIndex, onSubmit }: CalculatorFormProps = props;

	const calculatorFormRef: RefObject<HTMLFormElement> = createRef();

	const { t } = useTranslation();

	const { getCalculatorForm, calculateArea, getShapeName, getFormula } = Object.values(ShapeCollection)[activeIndex];

	const onSubmitCalculatorFormHandler: FormEventHandler = (event: FormEvent) => {
		event.preventDefault();

		const inputObjectString: string[] = [],
			r = calculatorFormRef.current?.querySelectorAll('input[type="number"]');

		r?.forEach(({ value, name }: any) => inputObjectString.push(`"${name}":${value}`));

		const objectToParse: string = "{" + inputObjectString.join(",") + "}",
			inputObject = JSON.parse(objectToParse);

		if (onSubmit) onSubmit(calculateArea(inputObject), getShapeName(t));
	};

	return (
		<form className={CalculatorFormStyle.calculatorForm} ref={calculatorFormRef} onSubmit={onSubmitCalculatorFormHandler}>
			<h2>{getFormula()}</h2>
			{getCalculatorForm(t)}
			<input type="submit" className={ButtonStyles.button} value={String(t("calculatorForm:calculateButton"))} />
		</form>
	);
};

export default CalculatorForm;
