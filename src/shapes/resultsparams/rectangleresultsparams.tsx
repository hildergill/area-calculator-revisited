import { FC } from "react";
import { RectangleParams } from "../index";

export const RectangleResultsParams: FC<RectangleParams> = ({ width, height }: RectangleParams) => {
	return (
		<p>
			{width} &times; {height}
		</p>
	);
};
