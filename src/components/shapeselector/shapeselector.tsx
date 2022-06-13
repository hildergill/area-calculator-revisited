import { FC } from "react";
import { Shapes, Shape } from "../../shapes";

export const ShapeSelector: FC = () => {
	const shapeArray = Object.values(Shapes);

	const shapeButtons: JSX.Element[] = shapeArray.map((shape: Shape<any>, key: number) => {
		return <button key={key}>{shape.getName()}</button>;
	});

	return <nav>{shapeButtons}</nav>;
};
