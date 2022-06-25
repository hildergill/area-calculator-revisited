// This file is a part of area-calculator-revisited
// https://github.com/hildergill/area-calculator-revisited
// Copyright 2022 Hilder Gill <hildergill@gmail.com>

import { FC } from "react";
import { TriangleParams } from "../index";

export const TriangleResultsParams: FC<TriangleParams> = ({ width, height }: TriangleParams) => {
	return (
		<p>
			&frac12; &times; {width} &times; {height}
		</p>
	);
};
