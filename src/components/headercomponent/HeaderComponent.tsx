// This file is a part of area-calculator-revisited
// https://www.github.com/hildergill/area-calculator-revisited
// Copyright 2022 Hilder Gill <hildergill@gmail.com>

import { useTranslation } from "react-i18next";
import { repository } from "../../../package.json";

import HeaderComponentStyles from "./HeaderComponent.module.scss";
import ButtonStyles from "../../styles/generic/Button.module.scss";

type OnSkipComponentProps = {
	(): void;
};

type HeaderComponentProps = {
	onSkipHeaderComponent: OnSkipComponentProps;
};

const HeaderComponent = (props: HeaderComponentProps) => {
	const { t } = useTranslation();

	const { onSkipHeaderComponent }: HeaderComponentProps = props;

	const repoLinkClassName: string = [ButtonStyles.button, HeaderComponentStyles.repoLink].join(" "),
		skipButton: string = [ButtonStyles.button, HeaderComponentStyles.skipToShapeSelectorButton].join(" ");

	const onSkipHandler = (): void => {
		if (onSkipHeaderComponent) onSkipHeaderComponent();
	};

	return (
		<header className={HeaderComponentStyles.headerComponent} role="banner">
			<h1>{t("common:appName")}</h1>

			<button className={skipButton} tabIndex={0} onClick={onSkipHandler}>
				<p>{t("headerComponent:skipToShapeSelector")}</p>
			</button>

			<a tabIndex={0} className={repoLinkClassName} href={repository} target="_blank" title={t("headerComponent:visitGithubRepository")}>
				<p>{t("headerComponent:visitGithubRepository")}</p>
			</a>
		</header>
	);
};

export default HeaderComponent;
