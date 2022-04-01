import NumberInputStyles from "../styles/NumberInput.module.scss";

type NumberInputProps = {
	name: string;
};

const NumberInput = (props: NumberInputProps) => {
	const { name }: NumberInputProps = props;

	const { numberInput } = NumberInputStyles;

	return <input className={numberInput} type="number" name={name} id={name} min={1} step={0.01} defaultValue={1} required />;
};

export default NumberInput;