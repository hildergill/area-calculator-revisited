// This file is a part of area-calculator-revisited
// https://github.com/hildergill/area-calculator-revisited
// Copyright 2022 Hilder Gill <hildergill@gmail.com>

import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Shapes, Shape } from "../shapes";
import ShapeSelectorStyles from "../stylesheets/shapeselector.module.css";

export type OnSelectShapeButton = {
	(index: number): void;
};

export type ShapeSelectorProps = {
	activeShape: number;
	onSelectShapeButton?: OnSelectShapeButton;
};

export const ShapeSelector: FC<ShapeSelectorProps> = (props: ShapeSelectorProps) => {
	const { activeShape, onSelectShapeButton }: ShapeSelectorProps = props;

	const shapeArray = Object.values(Shapes);

	const { t } = useTranslation();

	const shapeButtons: JSX.Element[] = shapeArray.map((shape: Shape<any>, key: number) => {
		const { active, inactive } = ShapeSelectorStyles,
			className: string = key === activeShape ? active : inactive;

		const onButtonClickHandler = () => {
			if (onSelectShapeButton) onSelectShapeButton(key);
		};

		return (
			<button tabIndex={0} title={shape.getName(t)} onClick={onButtonClickHandler} className={className} key={key}>
				{shape.getShapeIcon()}
				<p>{shape.getName(t)}</p>
			</button>
		);
	});

	return <nav className={ShapeSelectorStyles.shapeSelector}>{shapeButtons}</nav>;
};
