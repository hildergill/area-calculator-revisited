import { TFunction } from "react-i18next";
import NumberInput from "./components/NumberInput";

type ShapeType<Params> = {
	getShapeName(t: TFunction): string;
	getCalculatorForm(t: TFunction): JSX.Element;
	calculateArea(params: Params): number;
};

type ShapeCollectionType = {
	circleRadius: ShapeType<{ radius: number }>;
	circleDiameter: ShapeType<{ diameter: number }>;
};

const ShapeCollection: ShapeCollectionType = {
	circleRadius: {
		getShapeName: (t: TFunction) => t("shapes:circleRadius:name"),
		calculateArea: ({ radius }) => 2 * Math.PI * radius,
		getCalculatorForm: (t: TFunction) => (
			<>
				<label htmlFor="radius">{t("shapes:circleRadius.inputs.radius")}</label>
				<NumberInput name="radius" />
			</>
		)
	},
	circleDiameter: {
		getShapeName: (t: TFunction) => t("shapes:circleDiameter:name"),
		calculateArea: ({ diameter }) => Math.PI * diameter,
		getCalculatorForm: (t: TFunction) => (
			<>
				<label htmlFor="diameter">{t("shapes:circleDiameter.inputs.diameter")}</label>
				<NumberInput name="diameter" />
			</>
		)
	}
};

export default ShapeCollection;
