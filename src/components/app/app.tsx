import { FC, useState } from "react";
import { Header } from "../header/header";
import { ShapeSelector } from "../shapeselector/shapeselector";
import AppStyles from "./app.module.css";
import { OnSelectShapeButton } from "../shapeselector/shapeselector";
import { CalculatorForm } from "../calculatorform/calculatorform";

export const App: FC = () => {
	const [activeShape, setActiveShape] = useState<number>(0);

	const onSelectShapeSelector: OnSelectShapeButton = (index: number): void => {
		setActiveShape(index);
	};

	const t = (e: number) => {
		console.debug(e);
	};

	return (
		<div className={AppStyles.app}>
			<Header />
			<ShapeSelector activeShape={activeShape} onSelectShapeButton={onSelectShapeSelector} />
			<CalculatorForm activeShape={activeShape} onSubmit={t} />
		</div>
	);
};
