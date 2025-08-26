import { memo } from "react";
import { useTranslation } from "react-i18next";

import SVGComponent from "../SVGComponent";

import icons from "../../assets/icons/data.json";
import { cl } from "@/utils/utils";
import type { HistoryRowProps, IconName } from "@/types";

const HistoryRow = memo(({ index, item, onClick }: HistoryRowProps) => {
	const { t } = useTranslation();

	const checkTitle = (title: string) => {
		return title.includes(t("main.history.bachelor-keyword"))
			? t("main.history.bachelor-short")
			: title.includes(t("main.history.graduation-keyword"))
				? t("main.history.graduation-short")
				: title;
	};

	const checkSubtitle = (subtitle: string) => {
		return subtitle.includes("Sapientia") ? "Sapientia" : subtitle;
	};

	return (
		<div
			className="relative w-full flex justify-center  before:absolute before:top-full before:left-1/2 before:w-1
					before:h-full before:bg-accent last:before:content-none lg:odd:justify-start lg:before:content-none lg:even:justify-end"
		>
			<div
				className={cl(
					"group relative flex justify-center w-full lg:w-1/2",
					index % 2 === 0 ? "lg:pr-10 lg:justify-end" : "lg:pl-10 lg:justify-start",
				)}
			>
				<div
					className="w-87.5 flex justify-start items-start gap-10 pl-10 py-5 bg-primary dark:bg-lighter-dark3 rounded-sm hover:cursor-pointer group-hover:bg-primary"
					onClick={() => onClick(item.sectionId!)}
				>
					<div className="bg-light-blue dark:bg-primary/50 rounded-sm p-3 mt-1.5 group-hover:bg-lighter-dark3">
						<SVGComponent
							className={"min-w-6 max-w-6 w-6 min-h-6 max-h-6 h-6 fill-accent"}
							{...icons[item.icon as IconName]}
						/>
					</div>
					<div className="flex flex-col gap-y-2">
						<p className="text-base font-bold">{checkTitle(t(item.title))}</p>
						<span>{checkSubtitle(t(item.subTitle))}</span>
						<span>{t(item.location)}</span>
						<span className="text-gray">{item.date}</span>
					</div>
				</div>
				<div
					className={cl(
						"hidden absolute top-[calc(50%-0.5rem)] size-4 bg-border-gray dark:bg-gray rounded-full group-hover:bg-accent duration-300 lg:block",
						index % 2 === 0 ? "-right-2.5" : "-left-1.5",
					)}
				></div>
			</div>
		</div>
	);
});

export default HistoryRow;
