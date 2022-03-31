import { useTranslation } from "react-i18next";
import { IconBrandGithub } from "@tabler/icons";
import { repository } from "../../package.json";

import HeaderComponentStyles from "../styles/HeaderComponent.module.scss";

const HeaderComponent = () => {
	const { t } = useTranslation();

	const { headerComponent } = HeaderComponentStyles;

	return (
		<header className={headerComponent}>
			<h1>{t("common:appName")}</h1>

			<a href={repository} target="_blank" title={t("headerComponent:visitGithubRepository")}>
				<IconBrandGithub />
				<p>{t("headerComponent:visitGithubRepository")}</p>
			</a>
		</header>
	);
};

export default HeaderComponent;
