// This file is a part of area-calculator-revisited
// https://www.github.com/hildergill/area-calculator-revisited
// Copyright 2022 Hilder Gill <hildergill@gmail.com>

import ResultListStyles from "../resultslist/ResultList.module.scss";

type ResultBoxProps = {
	shapeName: string;
	area: number;
};

const ResultBox = (props: ResultBoxProps) => {
	const { area, shapeName }: ResultBoxProps = props;

	return (
		<div className={ResultListStyles.resultBox}>
			<strong>{shapeName}</strong>
			<p>{area}</p>
		</div>
	);
};

export default ResultBox;
