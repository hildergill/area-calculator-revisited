import { useTranslation } from "react-i18next";
import ShapeCollection from "../shapecollection";

import ShapeSelectorStyles from "../styles/ShapeSelector.module.scss";

type OnSelectedShapeSelector = {
	(index: number): void;
};

type ShapeSelectorProps = {
	activeIndex: number;
	onSelected?: OnSelectedShapeSelector;
};

const ShapeSelector = (props: ShapeSelectorProps) => {
	const { t } = useTranslation();

	const { shapeSelector, shapeSelectorButtonBase, shapeSelectorButtonActive } = ShapeSelectorStyles;

	const shapeSelectorButtons: JSX.Element[] = Object.values(ShapeCollection).map((shape, key) => {
		const { activeIndex, onSelected }: ShapeSelectorProps = props,
			styleString: string = [shapeSelectorButtonBase, activeIndex === key ? shapeSelectorButtonActive : ""].join(" ");

		const onSelectedHandler = () => {
			if (onSelected) onSelected(key);
		};

		return (
			<button className={styleString} key={key} onClick={onSelectedHandler}>
				<p>{shape.getShapeName(t)}</p>
			</button>
		);
	});

	return <nav className={shapeSelector}>{shapeSelectorButtons}</nav>;
};

export default ShapeSelector;
