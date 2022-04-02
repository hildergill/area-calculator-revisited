import ResultListStyles from "../styles/ResultList.module.scss";

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
