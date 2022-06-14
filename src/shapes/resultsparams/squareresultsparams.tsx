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
