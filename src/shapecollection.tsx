import { TFunction } from "react-i18next";

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
				<input type="number" name="radius" id="radius" />
			</>
		)
	},
	circleDiameter: {
		getShapeName: (t: TFunction) => t("shapes:circleDiameter:name"),
		calculateArea: ({ diameter }) => Math.PI * diameter,
		getCalculatorForm: (t: TFunction) => (
			<>
				<label htmlFor="diameter">{t("shapes:circleDiameter.inputs.diameter")}</label>
				<input type="number" name="diameter" id="diameter" />
			</>
		)
	}
};

export default ShapeCollection;
