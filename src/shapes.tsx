import { IconCircle, IconTriangle, IconSquare, IconRectangle } from "@tabler/icons";
import CommonStyles from "./common.module.css";

export type Shape<T> = {
	getName(): string;
	resolveArea(params: T): number;
	getShapeIcon(): JSX.Element;
	getCalculatorForm(): JSX.Element;
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
		getCalculatorForm: () => (
			<>
				<label htmlFor="radius">Radius</label>
				<input className={CommonStyles.commonInput} type="number" name="radius" id="radius" step={0.01} defaultValue={1} />
			</>
		)
	},
	Triangle: {
		getName: () => "Triangle",
		resolveArea: ({ width, height }: TriangleParams) => 0.5 * width * height,
		getShapeIcon: () => <IconTriangle />,
		getCalculatorForm: () => (
			<>
				<label htmlFor="width">Width</label>
				<input className={CommonStyles.commonInput} type="number" name="width" id="width" step={0.01} defaultValue={1} />
				<label htmlFor="height">Height</label>
				<input className={CommonStyles.commonInput} type="number" name="height" id="height" step={0.01} defaultValue={1} />
			</>
		)
	},
	Square: {
		getName: () => "Square",
		resolveArea: ({ width }: SquareParams) => Math.pow(width, 2),
		getShapeIcon: () => <IconSquare />,
		getCalculatorForm: () => (
			<>
				<label htmlFor="width">Width</label>
				<input className={CommonStyles.commonInput} type="number" name="width" id="width" step={0.01} defaultValue={1} />
			</>
		)
	},
	Rectangle: {
		getName: () => "Rectangle",
		resolveArea: ({ width, height }: RectangleParams) => width * height,
		getShapeIcon: () => <IconRectangle />,
		getCalculatorForm: () => (
			<>
				<label htmlFor="width">Width</label>
				<input className={CommonStyles.commonInput} type="number" name="width" id="width" step={0.01} defaultValue={1} />
				<label htmlFor="height">Height</label>
				<input className={CommonStyles.commonInput} type="number" name="height" id="height" step={0.01} defaultValue={1} />
			</>
		)
	}
};
