type ResultsListProps = {
	resultsBoxList: JSX.Element[];
};

const ResultsList = (props: ResultsListProps) => {
	const { resultsBoxList }: ResultsListProps = props;

	return <output>{resultsBoxList}</output>;
};

export default ResultsList;
