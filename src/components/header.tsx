// This file is a part of area-calculator-revisited
// https://www.github.com/hildergill/area-calculator-revisited
// Copyright 2022 Hilder Gill <hildergill@gmail.com>

import { FC } from "react";
import { IconBrandGithub } from "@tabler/icons";
import Package from "../../package.json";
import HeaderStyles from "../stylesheets/header.module.css";
import CommonStyles from "../stylesheets/common.module.css";

export const Header: FC = () => {
	return (
		<header className={HeaderStyles.header}>
			<h1>{Package.displayName}</h1>

			<a target="_blank" rel="noreferrer" href={Package.repository} className={CommonStyles.commonButton}>
				<IconBrandGithub />
				<p>Visit GitHub Repository</p>
			</a>
		</header>
	);
};
