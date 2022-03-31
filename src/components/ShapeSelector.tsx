import { useTranslation } from "react-i18next";
import ShapeCollection from "../shapecollection";

import ShapeSelectorStyles from "../styles/ShapeSelector.module.scss";

const ShapeSelector = () => {
	const { t } = useTranslation();

	const { shapeSelector } = ShapeSelectorStyles;

	const shapeSelectorButtons: JSX.Element[] = Object.values(ShapeCollection).map((shape) => {
		return (
			<button>
				<p>{shape.getShapeName(t)}</p>
			</button>
		);
	});

	return <nav className={shapeSelector}>{shapeSelectorButtons}</nav>;
};

export default ShapeSelector;
