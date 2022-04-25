// This file is a part of area-calculator-revisited
// https://www.github.com/hildergill/area-calculator-revisited
// Copyright 2022 Hilder Gill

import { RefObject } from "react";
import { useTranslation } from "react-i18next";
import ShapeCollection from "../shapecollection";

import ShapeSelectorStyles from "../styles/ShapeSelector.module.scss";
import SidePanelStyles from "../styles/generic/SidePanel.module.scss";

type OnSelectedShapeSelector = {
	(index: number): void;
};

type ShapeSelectorProps = {
	activeIndex: number;
	shapeSelectorRef: RefObject<HTMLButtonElement>;
	onSelected?: OnSelectedShapeSelector;
};

const ShapeSelector = (props: ShapeSelectorProps) => {
	const { t } = useTranslation();

	const { activeIndex, onSelected, shapeSelectorRef }: ShapeSelectorProps = props;

	const shapeSelectorButtons: JSX.Element[] = Object.values(ShapeCollection).map((shape, key) => {
		const styleString: string = [
			ShapeSelectorStyles.shapeSelectorButtonBase,
			activeIndex === key ? ShapeSelectorStyles.shapeSelectorButtonActive : ""
		].join(" ");

		const onSelectedHandler = () => {
			if (onSelected) onSelected(key);
		};

		const shapeSelectorButtonChildren: JSX.Element = (
			<>
				<p>{shape.getShapeName(t)}</p>
			</>
		);

		return key === 0 ? (
			<button className={styleString} key={key} ref={shapeSelectorRef} onClick={onSelectedHandler}>
				{shapeSelectorButtonChildren}
			</button>
		) : (
			<button className={styleString} key={key} onClick={onSelectedHandler}>
				{shapeSelectorButtonChildren}
			</button>
		);
	});

	const shapeSelectorClassName: string = [SidePanelStyles.sidePanel, SidePanelStyles.sidePanelLeft].join(" ");

	return (
		<nav className={shapeSelectorClassName} title={t("titles:shapeSelector")}>
			{shapeSelectorButtons}
		</nav>
	);
};

export default ShapeSelector;
