import { TFunction } from "react-i18next";

type ShapeType<Params> = {
	getShapeName(t: TFunction): string;
	calculateArea(params: Params): number;
};

type ShapeCollectionType = {
	circleRadius: ShapeType<{ radius: number }>;
	circleDiameter: ShapeType<{ diameter: number }>;
};

const ShapeCollection: ShapeCollectionType = {
	circleRadius: {
		getShapeName: (t: TFunction) => t("shapes:circleRadius:name"),
		calculateArea: ({ radius }) => 2 * Math.PI * radius
	},
	circleDiameter: {
		getShapeName: (t: TFunction) => t("shapes:circleDiameter:name"),
		calculateArea: ({ diameter }) => Math.PI * diameter
	}
};

export default ShapeCollection;
