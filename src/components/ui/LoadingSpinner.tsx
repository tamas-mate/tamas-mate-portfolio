import { useTranslation } from "react-i18next";

const LoadingSpinner = () => {
	const { t } = useTranslation();

	return (
		<div className="flex-center h-screen flex-col gap-4" role="status">
			<div
				className="border-accent h-20 w-20 rounded-full border-t-4 border-b-4 motion-safe:animate-spin"
				aria-hidden="true"
			></div>
			<p>{t("loading")}</p>
		</div>
	);
};

export default LoadingSpinner;
