// This file is a part of area-calculator-revisited
// https://github.com/hildergill/area-calculator-revisited
// Copyright 2022 Hilder Gill <hildergill@gmail.com>

import { FC } from "react";
import { IconBrandGithub } from "@tabler/icons";
import Package from "../../package.json";
import HeaderStyles from "../stylesheets/header.module.css";
import CommonStyles from "../stylesheets/common.module.css";
import { useTranslation } from "react-i18next";

export const Header: FC = () => {
	const { t } = useTranslation();

	return (
		<header className={HeaderStyles.header}>
			<h1>{Package.displayName}</h1>

			<a tabIndex={0} target={"_blank"} rel={"noreferrer"} href={Package.repository} className={CommonStyles.commonButton}>
				<IconBrandGithub role={"none"} />
				<p>{t("header.visitRepo")}</p>
			</a>
		</header>
	);
};
