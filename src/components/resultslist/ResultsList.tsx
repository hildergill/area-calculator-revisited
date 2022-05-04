// This file is a part of area-calculator-revisited
// https://www.github.com/hildergill/area-calculator-revisited
// Copyright 2022 Hilder Gill <hildergill@gmail.com>

import SidePanelStyles from "../../styles/SidePanel.module.scss";
import ResultListStyles from "./ResultsList.module.scss";

type ResultsListProps = {
	resultsBoxList: JSX.Element[];
};

const ResultsList = (props: ResultsListProps) => {
	const { resultsBoxList }: ResultsListProps = props;

	const resultsListClassName: string = [SidePanelStyles.sidePanel, SidePanelStyles.sidePanelRight, ResultListStyles.resultList].join(" ");

	return <output className={resultsListClassName}>{resultsBoxList}</output>;
};

export default ResultsList;
