import { FC, useState } from "react";
import { Header } from "../header/header";
import { ShapeSelector } from "../shapeselector/shapeselector";
import AppStyles from "./app.module.css";
import { OnSelectShapeButton } from "../shapeselector/shapeselector";

export const App: FC = () => {
	const [activeShape, setActiveShape] = useState<number>(0);

	const onSelectShapeSelector: OnSelectShapeButton = (index: number): void => {
		setActiveShape(index);
	};

	return (
		<div className={AppStyles.app}>
			<Header />
			<ShapeSelector activeShape={activeShape} onSelectShapeButton={onSelectShapeSelector} />
		</div>
	);
};
