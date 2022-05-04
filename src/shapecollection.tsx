// This file is a part of area-calculator-revisited
// https://www.github.com/hildergill/area-calculator-revisited
// Copyright 2022 Hilder Gill <hildergill@gmail.com>

import { TFunction } from "react-i18next";
import NumberInput from "./components/numberinput/NumberInput";

type ShapeType<Params> = {
	getShapeName(t: TFunction): string;
	getCalculatorForm(t: TFunction): JSX.Element;
	getFormula(): JSX.Element;
	calculateArea(params: Params): number;
};

type ShapeCollectionType = {
	circleRadius: ShapeType<{ radius: number }>;
	circleDiameter: ShapeType<{ diameter: number }>;
	triangle: ShapeType<{ width: number; height: number }>;
	square: ShapeType<{ width: number }>;
	rectangle: ShapeType<{ width: number; height: number }>;
};

const ShapeCollection: ShapeCollectionType = {
	circleRadius: {
		getShapeName: (t: TFunction) => t("shapes:circleRadius:name"),
		calculateArea: ({ radius }) => 2 * Math.PI * radius,
		getFormula: () => <>A = 2 &middot; &pi; &middot; r</>,
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
		getFormula: () => <>A = &pi; &middot; d</>,
		getCalculatorForm: (t: TFunction) => (
			<>
				<label htmlFor="diameter">{t("shapes:circleDiameter.inputs.diameter")}</label>
				<NumberInput name="diameter" />
			</>
		)
	},
	triangle: {
		getShapeName: (t: TFunction) => t("shapes:triangle:name"),
		calculateArea: ({ width, height }) => 0.5 * width * height,
		getFormula: () => <>A = &frac12; &middot; w &middot; h</>,
		getCalculatorForm: (t: TFunction) => (
			<>
				<label htmlFor="width">{t("shapes:triangle.inputs.width")}</label>
				<NumberInput name="width" />
				<label htmlFor="height">{t("shapes:triangle.inputs.height")}</label>
				<NumberInput name="height" />
			</>
		)
	},
	square: {
		getShapeName: (t: TFunction) => t("shapes:square:name"),
		calculateArea: ({ width }) => Math.pow(width, 2),
		getFormula: () => (
			<>
				A = w<sup>2</sup>
			</>
		),
		getCalculatorForm: (t: TFunction) => (
			<>
				<label htmlFor="width">{t("shapes:square.inputs.width")}</label>
				<NumberInput name="width" />
			</>
		)
	},
	rectangle: {
		getShapeName: (t: TFunction) => t("shapes:rectangle:name"),
		calculateArea: ({ width, height }) => width * height,
		getFormula: () => <>A = w &middot; h</>,
		getCalculatorForm: (t: TFunction) => (
			<>
				<label htmlFor="width">{t("shapes:rectangle.inputs.width")}</label>
				<NumberInput name="width" />
				<label htmlFor="height">{t("shapes:rectangle.inputs.height")}</label>
				<NumberInput name="height" />
			</>
		)
	}
};

export default ShapeCollection;
