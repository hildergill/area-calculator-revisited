import SidePanelStyles from "../styles/generic/SidePanel.module.scss";

type ResultsListProps = {
	resultsBoxList: JSX.Element[];
};

const ResultsList = (props: ResultsListProps) => {
	const { resultsBoxList }: ResultsListProps = props;

	const resultsListClassName: string = [SidePanelStyles.sidePanel, SidePanelStyles.sidePanelRight].join(" ");

	return <output className={resultsListClassName}>{resultsBoxList}</output>;
};

export default ResultsList;
