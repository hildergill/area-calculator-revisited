import { RefObject } from "react";
import { useTranslation } from "react-i18next";
import ShapeCollection from "../shapecollection";

import ShapeSelectorStyles from "../styles/ShapeSelector.module.scss";

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

	const { shapeSelector, shapeSelectorButtonBase, shapeSelectorButtonActive } = ShapeSelectorStyles,
		{ activeIndex, onSelected, shapeSelectorRef }: ShapeSelectorProps = props;

	const shapeSelectorButtons: JSX.Element[] = Object.values(ShapeCollection).map((shape, key) => {
		const styleString: string = [shapeSelectorButtonBase, activeIndex === key ? shapeSelectorButtonActive : ""].join(" ");

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

	return <nav className={shapeSelector}>{shapeSelectorButtons}</nav>;
};

export default ShapeSelector;
