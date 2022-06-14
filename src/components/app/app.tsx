import { FC, useState } from "react";
import { Header } from "../header/header";
import { ShapeSelector } from "../shapeselector/shapeselector";
import AppStyles from "./app.module.css";
import { OnSelectShapeButton } from "../shapeselector/shapeselector";
import { CalculatorForm, OnSubmitCalculatorForm } from "../calculatorform/calculatorform";
import { ResultType, ResultsList } from "../resultslist/resultslist";

export const App: FC = () => {
	const [activeShape, setActiveShape] = useState<number>(0);
	const [results, setResults] = useState<ResultType[]>([]);

	const onSelectShapeSelector: OnSelectShapeButton = (index: number): void => {
		setActiveShape(index);
	};

	const onSubmitCalculatorForm: OnSubmitCalculatorForm = (area: number) => {
		setResults((currentResultsList: ResultType[]) => {
			return [...currentResultsList, { area }];
		});
	};

	return (
		<div className={AppStyles.app}>
			<Header />
			<ShapeSelector activeShape={activeShape} onSelectShapeButton={onSelectShapeSelector} />
			<CalculatorForm activeShape={activeShape} onSubmit={onSubmitCalculatorForm} />
			<ResultsList results={results} />
		</div>
	);
};
