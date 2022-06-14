import { FC } from "react";
import { TriangleParams } from "../index";

export const TriangleResultsParams: FC<TriangleParams> = ({ width, height }: TriangleParams) => {
	return (
		<p>
			&frac12; &times; {width} &times; {height}
		</p>
	);
};
