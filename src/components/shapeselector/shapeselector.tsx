import { FC } from "react";
import { Shapes, Shape } from "../../shapes";
import ShapeSelectorStyles from "./shapeselector.module.css";

export type ShapeSelectorProps = {
	activeShape: number;
};

export const ShapeSelector: FC<ShapeSelectorProps> = (props: ShapeSelectorProps) => {
	const { activeShape }: ShapeSelectorProps = props;

	const shapeArray = Object.values(Shapes);

	const shapeButtons: JSX.Element[] = shapeArray.map((shape: Shape<any>, key: number) => {
		return <button key={key}>{shape.getName()}</button>;
	});

	return <nav className={ShapeSelectorStyles.shapeSelector}>{shapeButtons}</nav>;
};
