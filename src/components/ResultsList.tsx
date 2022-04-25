// This file is a part of area-calculator-revisited
// https://www.github.com/hildergill/area-calculator-revisited
// Copyright 2022 Hilder Gill

import { useTranslation } from "react-i18next";
import SidePanelStyles from "../styles/generic/SidePanel.module.scss";
import ResultListStyles from "../styles/ResultList.module.scss";

type ResultsListProps = {
	resultsBoxList: JSX.Element[];
};

const ResultsList = (props: ResultsListProps) => {
	const { t } = useTranslation();

	const { resultsBoxList }: ResultsListProps = props;

	const resultsListClassName: string = [SidePanelStyles.sidePanel, SidePanelStyles.sidePanelRight, ResultListStyles.resultList].join(" ");

	return (
		<output className={resultsListClassName} title={t("titles:resultsList")}>
			{resultsBoxList}
		</output>
	);
};

export default ResultsList;
