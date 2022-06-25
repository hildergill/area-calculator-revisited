// This file is a part of area-calculator-revisited
// https://github.com/hildergill/area-calculator-revisited
// Copyright 2022 Hilder Gill <hildergill@gmail.com>

import { FC } from "react";
import { SquareParams } from "../index";

export const SquareResultsParams: FC<SquareParams> = ({ width }: SquareParams) => {
	return (
		<p>
			{width}
			<sup>2</sup>
		</p>
	);
};
