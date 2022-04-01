import { useTranslation } from "react-i18next";
import ShapeCollection from "../shapecollection";

import CalculatorFormStyle from "../styles/CalculatorForm.module.scss";

type CalculatorFormProps = {
	activeIndex: number;
};

const CalculatorForm = (props: CalculatorFormProps) => {
	const { activeIndex }: CalculatorFormProps = props;

	const { t } = useTranslation();

	const { getCalculatorForm } = Object.values(ShapeCollection)[activeIndex];

	const { calculatorForm } = CalculatorFormStyle;

	return (
		<form className={calculatorForm}>
			{getCalculatorForm(t)}
			<input type="submit" value={String(t("calculatorForm:calculateButton"))} />
		</form>
	);
};

export default CalculatorForm;
