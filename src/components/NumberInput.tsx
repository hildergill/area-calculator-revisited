type NumberInputProps = {
	name: string;
};

const NumberInput = (props: NumberInputProps) => {
	const { name }: NumberInputProps = props;

	return <input type="number" name={name} id={name} min={1} step={0.01} value={1} required />;
};

export default NumberInput;
