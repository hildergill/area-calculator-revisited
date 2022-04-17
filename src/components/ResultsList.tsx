// This file is a part of area-calculator-revisited
// https://www.github.com/hildergill/area-calculator-revisited
// Copyright 2022 Hilder Gill

import SidePanelStyles from "../styles/generic/SidePanel.module.scss";
import ResultListStyles from "../styles/ResultList.module.scss";

type ResultsListProps = {
	resultsBoxList: JSX.Element[];
};

const ResultsList = (props: ResultsListProps) => {
	const { resultsBoxList }: ResultsListProps = props;

	const resultsListClassName: string = [SidePanelStyles.sidePanel, SidePanelStyles.sidePanelRight, ResultListStyles.resultList].join(" ");

	return <output className={resultsListClassName}>{resultsBoxList}</output>;
};

export default ResultsList;
