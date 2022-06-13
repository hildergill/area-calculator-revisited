import { IconCircle, IconTriangle, IconSquare, IconRectangle } from "@tabler/icons";

export type Shape<T> = {
	getName(): string;
	resolveArea(params: T): number;
	getShapeIcon(): JSX.Element;
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
		getShapeIcon: () => <IconCircle />
	},
	Triangle: {
		getName: () => "Triangle",
		resolveArea: ({ width, height }: TriangleParams) => 0.5 * width * height,
		getShapeIcon: () => <IconTriangle />
	},
	Square: {
		getName: () => "Square",
		resolveArea: ({ width }: SquareParams) => Math.pow(width, 2),
		getShapeIcon: () => <IconSquare />
	},
	Rectangle: {
		getName: () => "Rectangle",
		resolveArea: ({ width, height }: RectangleParams) => width * height,
		getShapeIcon: () => <IconRectangle />
	}
};
