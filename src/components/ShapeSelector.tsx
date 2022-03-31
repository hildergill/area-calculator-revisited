import { useTranslation } from "react-i18next";
import ShapeCollection from "../shapecollection";

const ShapeSelector = () => {
	const { t } = useTranslation();

	const shapeSelectorButtons: JSX.Element[] = Object.values(ShapeCollection).map((shape) => {
		return (
			<button>
				<p>{shape.getShapeName(t)}</p>
			</button>
		);
	});

	return <nav>{shapeSelectorButtons}</nav>;
};

export default ShapeSelector;
