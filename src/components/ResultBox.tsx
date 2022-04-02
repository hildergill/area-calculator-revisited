type ResultBoxProps = {
	area: number;
};

const ResultBox = (props: ResultBoxProps) => {
	const { area }: ResultBoxProps = props;

	return (
		<div>
			<p>{area}</p>
		</div>
	);
};

export default ResultBox;
