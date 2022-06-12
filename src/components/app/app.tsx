import { FC } from "react";
import { Header } from "../header/header";
import AppStyles from "./app.module.css";

export const App: FC = () => {
	return (
		<div className={AppStyles.app}>
			<Header />
		</div>
	);
};
