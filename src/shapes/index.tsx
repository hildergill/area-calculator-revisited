// This file is a part of area-calculator-revisited
// https://www.github.com/hildergill/area-calculator-revisited
// Copyright 2022 Hilder Gill <hildergill@gmail.com>

import { IconCircle, IconTriangle, IconSquare, IconRectangle } from "@tabler/icons";
import { CircleCalculatorForm } from "./calculatorforms/circlecalculatorform";
import { SquareCalculatorForm } from "./calculatorforms/squarecalculatorform";
import { WidthHeightCalculatorForm } from "./calculatorforms/widthheightcalculatorform";
import { CircleResultsParams } from "./resultsparams/circleresultsparams";
import { RectangleResultsParams } from "./resultsparams/rectangleresultsparams";
import { SquareResultsParams } from "./resultsparams/squareresultsparams";
import { TriangleResultsParams } from "./resultsparams/triangleresultsparams";

export type Shape<T> = {
	getName(): string;
	resolveArea(params: T): number;
	getShapeIcon(): JSX.Element;
	getCalculatorForm(): JSX.Element;
	getResultsParams(params: T): JSX.Element;
};

export type CircleParams = { radius: number };
export type TriangleParams = { width: number; height: number };
export type SquareParams = { width: number };
export type RectangleParams = { width: number; height: number };

export type ShapeCollection = {
	Circle: Shape<CircleParams>;
	Triangle: Shape<TriangleParams>;
	Square: Shape<SquareParams>;
	Rectangle: Shape<RectangleParams>;
};

export const Shapes: ShapeCollection = {
	Circle: {
		getName: () => "Circle",
		resolveArea: ({ radius }: CircleParams) => Math.PI * radius,
		getShapeIcon: () => <IconCircle />,
		getCalculatorForm: () => <CircleCalculatorForm />,
		getResultsParams: (params: CircleParams) => <CircleResultsParams {...params} />
	},
	Triangle: {
		getName: () => "Triangle",
		resolveArea: ({ width, height }: TriangleParams) => 0.5 * width * height,
		getShapeIcon: () => <IconTriangle />,
		getCalculatorForm: () => <WidthHeightCalculatorForm />,
		getResultsParams: (params: TriangleParams) => <TriangleResultsParams {...params} />
	},
	Square: {
		getName: () => "Square",
		resolveArea: ({ width }: SquareParams) => Math.pow(width, 2),
		getShapeIcon: () => <IconSquare />,
		getCalculatorForm: () => <SquareCalculatorForm />,
		getResultsParams: (params: SquareParams) => <SquareResultsParams {...params} />
	},
	Rectangle: {
		getName: () => "Rectangle",
		resolveArea: ({ width, height }: RectangleParams) => width * height,
		getShapeIcon: () => <IconRectangle />,
		getCalculatorForm: () => <WidthHeightCalculatorForm />,
		getResultsParams: (params: RectangleParams) => <RectangleResultsParams {...params} />
	}
};
