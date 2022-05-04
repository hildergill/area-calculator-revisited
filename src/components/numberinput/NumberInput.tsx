// This file is a part of area-calculator-revisited
// https://www.github.com/hildergill/area-calculator-revisited
// Copyright 2022 Hilder Gill <hildergill@gmail.com>

import NumberInputStyles from "./NumberInput.module.scss";

type NumberInputProps = {
	name: string;
};

const NumberInput = (props: NumberInputProps) => {
	const { name }: NumberInputProps = props;

	const { numberInput } = NumberInputStyles;

	return <input className={numberInput} type="number" name={name} id={name} min={1} step={0.01} defaultValue={1} required />;
};

export default NumberInput;
