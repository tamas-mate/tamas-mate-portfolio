import { useTranslation } from "react-i18next";

import { cl } from "@/utils/utils";

import type { OverviewContentProps } from "@/types";

const OverviewContent = ({ className, years, description }: OverviewContentProps) => {
	const { t } = useTranslation();

	return (
		<div className={cl("relative py-7.5 px-12 overflow-hidden bg-secondary rounded-sm", className)}>
			<div className="absolute left-0 top-0 w-full h-full">
				<div className="absolute -top-18 -right-10 text-[12rem] font-bold text-lighter-dark2">{t(years)}</div>
			</div>
			<div className="flex items-center uppercase text-xl">
				<span className="text-8xl font-semibold text-accent mr-10 pb-3">{t(years)}</span> <span>{t(description)}</span>
			</div>
		</div>
	);
};

export default OverviewContent;
