import { FC } from "react";
import { Header } from "../header/header";
import { ShapeSelector } from "../shapeselector/shapeselector";
import AppStyles from "./app.module.css";

export const App: FC = () => {
	return (
		<div className={AppStyles.app}>
			<Header />
			<ShapeSelector activeShape={0} />
		</div>
	);
};
