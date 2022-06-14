import { FC } from "react";
import ResultsListStyles from "./resultslist.module.css";

export type ResultType = {
	area: number;
};

export type ResultsListProps = {
	results: ResultType[];
};

export const ResultsList: FC<ResultsListProps> = (props: ResultsListProps) => {
	const { results }: ResultsListProps = props;

	const resultsBox: JSX.Element[] = results.map((results: ResultType, key: number) => {
		return (
			<div key={key}>
				<strong>{results.area.toPrecision(5)}</strong>
			</div>
		);
	});

	return <output className={ResultsListStyles.resultsList}>{resultsBox}</output>;
};
