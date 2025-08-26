import { useTranslation } from "react-i18next";

import { cl } from "@/utils/utils";

import type { OverviewContentProps } from "@/types";

const OverviewContent = ({ className, years, description }: OverviewContentProps) => {
	const { t } = useTranslation();

	return (
		<div
			className={cl(
				"bg-secondary border-border-gray relative overflow-hidden rounded-sm border border-solid px-12 py-7.5",
				className,
			)}
		>
			<div className="absolute top-0 left-0 h-full w-full">
				<div className="text-lighter-dark2/10 dark:text-lighter-dark2 absolute -top-18 -right-10 text-[12rem] font-bold">
					{t(years)}
				</div>
			</div>
			<div className="flex items-center text-xl uppercase">
				<span className="text-accent mr-10 pb-3 text-8xl font-semibold">{t(years)}</span> <span>{t(description)}</span>
			</div>
		</div>
	);
};

export default OverviewContent;
