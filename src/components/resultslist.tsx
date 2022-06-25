// This file is a part of area-calculator-revisited
// https://github.com/hildergill/area-calculator-revisited
// Copyright 2022 Hilder Gill <hildergill@gmail.com>

import { FC } from "react";
import ResultsListStyles from "../stylesheets/resultslist.module.css";

export type ResultType = {
	area: number;
	paramsElements: JSX.Element;
};

export type ResultsListProps = {
	results: ResultType[];
};

export const ResultsList: FC<ResultsListProps> = (props: ResultsListProps) => {
	const { results }: ResultsListProps = props;

	const resultsBox: JSX.Element[] = results.map((results: ResultType, key: number) => {
		return (
			<li key={key} className={ResultsListStyles.resultsBox}>
				{results.paramsElements}
				<strong>{results.area.toPrecision(5)}</strong>
			</li>
		);
	});

	return <ul className={ResultsListStyles.resultsList}>{resultsBox}</ul>;
};
