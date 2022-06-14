// This file is a part of area-calculator-revisited
// https://www.github.com/hildergill/area-calculator-revisited
// Copyright 2022 Hilder Gill <hildergill@gmail.com>

import { FC } from "react";
import { CircleParams } from "../index";

export const CircleResultsParams: FC<CircleParams> = ({ radius }: CircleParams) => {
	return <p>{radius} &times; &pi;</p>;
};
