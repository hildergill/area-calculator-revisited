import { useTranslation } from "react-i18next";

const HeaderComponent = () => {
	const { t } = useTranslation();

	return (
		<header>
			<h1>{t("common:appName")}</h1>
		</header>
	);
};

export default HeaderComponent;
