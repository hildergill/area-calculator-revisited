import { createRef, FormEvent, FormEventHandler, RefObject } from "react";
import { useTranslation } from "react-i18next";
import ShapeCollection from "../shapecollection";

import CalculatorFormStyle from "../styles/CalculatorForm.module.scss";
import GenericButtonStyles from "../styles/GenericButton.module.scss";

type OnSubmitCalculatorForm = {
	(area: number): void;
};

type CalculatorFormProps = {
	activeIndex: number;
	onSubmit?: OnSubmitCalculatorForm;
};

const CalculatorForm = (props: CalculatorFormProps) => {
	const { activeIndex, onSubmit }: CalculatorFormProps = props;

	const calculatorFormRef: RefObject<HTMLFormElement> = createRef();

	const { t } = useTranslation();

	const { getCalculatorForm, calculateArea } = Object.values(ShapeCollection)[activeIndex];

	const { calculatorForm } = CalculatorFormStyle,
		{ genericButton } = GenericButtonStyles;

	const onSubmitCalculatorFormHandler: FormEventHandler = (event: FormEvent) => {
		event.preventDefault();

		const inputObjectString: string[] = [],
			r = calculatorFormRef.current?.querySelectorAll('input[type="number"]');

		r?.forEach(({ value, name }: any) => inputObjectString.push(`"${name}":${value}`));

		const objectToParse: string = "{" + inputObjectString.join(",") + "}",
			inputObject = JSON.parse(objectToParse);

		if (onSubmit) onSubmit(calculateArea(inputObject));
	};

	return (
		<form className={calculatorForm} ref={calculatorFormRef} onSubmit={onSubmitCalculatorFormHandler}>
			{getCalculatorForm(t)}
			<input type="submit" className={genericButton} value={String(t("calculatorForm:calculateButton"))} />
		</form>
	);
};

export default CalculatorForm;
