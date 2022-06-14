import { FC } from "react";
import { CircleParams } from "../index";

export const CircleResultsParams: FC<CircleParams> = ({ radius }: CircleParams) => {
	return <p>{radius} &times; &pi;</p>;
};
