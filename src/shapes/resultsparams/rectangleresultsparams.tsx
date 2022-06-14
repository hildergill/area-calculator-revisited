// This file is a part of area-calculator-revisited
// https://www.github.com/hildergill/area-calculator-revisited
// Copyright 2022 Hilder Gill <hildergill@gmail.com>

import { FC } from "react";
import { RectangleParams } from "../index";

export const RectangleResultsParams: FC<RectangleParams> = ({ width, height }: RectangleParams) => {
	return (
		<p>
			{width} &times; {height}
		</p>
	);
};
