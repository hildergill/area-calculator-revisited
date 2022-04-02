import ResultBoxStyles from "../styles/ResultBox.module.scss";

type ResultBoxProps = {
	area: number;
};

const ResultBox = (props: ResultBoxProps) => {
	const { area }: ResultBoxProps = props;

	return (
		<div className={ResultBoxStyles.resultBox}>
			<p>{area}</p>
		</div>
	);
};

export default ResultBox;
