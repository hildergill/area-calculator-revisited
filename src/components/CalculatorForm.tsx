import { useTranslation } from "react-i18next";
import ShapeCollection from "../shapecollection";

type CalculatorFormProps = {
	activeIndex: number;
};

const CalculatorForm = (props: CalculatorFormProps) => {
	const { activeIndex }: CalculatorFormProps = props;

	const { t } = useTranslation();

	const { getCalculatorForm } = Object.values(ShapeCollection)[activeIndex];

	return (
		<form>
			{getCalculatorForm(t)}
			<input type="submit" value="Calculate" />
		</form>
	);
};

export default CalculatorForm;
