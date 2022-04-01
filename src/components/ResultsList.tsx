type ResultsListProps = {
	resultsBox: JSX.Element[];
};

const ResultsList = (props: ResultsListProps) => {
	const { resultsBox }: ResultsListProps = props;

	return <output>{resultsBox}</output>;
};

export default ResultsList;
