export type Shape<T> = {
	getName(): string;
	resolveArea(params: T): number;
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
		resolveArea: ({ radius }: CircleParams) => Math.PI * radius
	},
	Triangle: {
		getName: () => "Triangle",
		resolveArea: ({ width, height }: TriangleParams) => 0.5 * width * height
	},
	Square: {
		getName: () => "Square",
		resolveArea: ({ width }: SquareParams) => Math.pow(width, 2)
	},
	Rectangle: {
		getName: () => "Rectangle",
		resolveArea: ({ width, height }: RectangleParams) => width * height
	}
};
