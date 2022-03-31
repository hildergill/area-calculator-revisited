import { useTranslation } from "react-i18next";

import HeaderComponentStyles from "../styles/HeaderComponent.module.scss";

const HeaderComponent = () => {
	const { t } = useTranslation();

	const { headerComponent } = HeaderComponentStyles;

	return (
		<header className={headerComponent}>
			<h1>{t("common:appName")}</h1>
		</header>
	);
};

export default HeaderComponent;
