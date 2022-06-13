import { FC } from "react";
import { IconBrandGithub } from "@tabler/icons";
import Package from "../../../package.json";
import HeaderStyles from "./header.module.css";
import CommonStyles from "../../common.module.css";

export const Header: FC = () => {
	return (
		<header className={HeaderStyles.header}>
			<h1>{Package.displayName}</h1>

			<a target={"_blank"} href={Package.repository} className={CommonStyles.commonButton}>
				<IconBrandGithub />
				<p>Visit GitHub Repository</p>
			</a>
		</header>
	);
};