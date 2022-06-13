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
		const { active, inactive } = ShapeSelectorStyles,
			className: string = key === activeShape ? active : inactive;

		return (
			<button className={className} key={key}>
				{shape.getShapeIcon()}
				<p>{shape.getName()}</p>
			</button>
		);
	});

	return <nav className={ShapeSelectorStyles.shapeSelector}>{shapeButtons}</nav>;
};
