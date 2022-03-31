import { useTranslation } from "react-i18next";
import { IconBrandGithub } from "@tabler/icons";
import { repository } from "../../package.json";

import HeaderComponentStyles from "../styles/HeaderComponent.module.scss";

type OnSkipComponentProps = {
	(): void;
};

type HeaderComponentProps = {
	onSkipHeaderComponent: OnSkipComponentProps;
};

const HeaderComponent = (props: HeaderComponentProps) => {
	const { t } = useTranslation();

	const { headerComponent, headerButtonBase, repoLink, skipToShapeSelectorButton } = HeaderComponentStyles,
		{ onSkipHeaderComponent }: HeaderComponentProps = props;

	const repoLinkClassName: string = [headerButtonBase, repoLink].join(" "),
		skipButton: string = [headerButtonBase, skipToShapeSelectorButton].join(" ");

	const onSkipHandler = (): void => {
		if (onSkipHeaderComponent) onSkipHeaderComponent();
	};

	return (
		<header className={headerComponent}>
			<h1>{t("common:appName")}</h1>

			<button className={skipButton} tabIndex={0} onClick={onSkipHandler}>
				<p>{t("headerComponent:skipToShapeSelector")}</p>
			</button>

			<a tabIndex={0} className={repoLinkClassName} href={repository} target="_blank" title={t("headerComponent:visitGithubRepository")}>
				<IconBrandGithub />
				<p>{t("headerComponent:visitGithubRepository")}</p>
			</a>
		</header>
	);
};

export default HeaderComponent;
