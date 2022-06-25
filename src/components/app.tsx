// This file is a part of area-calculator-revisited
// https://github.com/hildergill/area-calculator-revisited
// Copyright 2022 Hilder Gill <hildergill@gmail.com>

import { FC, useState } from "react";
import { Header } from "./header";
import { ShapeSelector } from "./shapeselector";
import AppStyles from "../stylesheets/app.module.css";
import { OnSelectShapeButton } from "./shapeselector";
import { CalculatorForm, OnSubmitCalculatorForm } from "./calculatorform";
import { ResultType, ResultsList } from "./resultslist";
import { Shapes } from "../shapes";

export const App: FC = () => {
	const [activeShape, setActiveShape] = useState<number>(0);
	const [results, setResults] = useState<ResultType[]>([]);

	const onSelectShapeSelector: OnSelectShapeButton = (index: number): void => {
		setActiveShape(index);
	};

	const onSubmitCalculatorForm: OnSubmitCalculatorForm = (params: any, results: number) => {
		setResults((currentResultsList: ResultType[]) => {
			const resultsObject: ResultType = {
				area: results,
				paramsElements: Object.values(Shapes)[activeShape].getResultsParams(params)
			};

			return [...currentResultsList, resultsObject];
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
