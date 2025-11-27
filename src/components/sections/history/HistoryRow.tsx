import { useTranslation } from "react-i18next";

import SVGComponent from "../../ui/SVGComponent";

import type { HistoryRowProps, IconName } from "@/types";
import { cl } from "@/utils/utils";
import icons from "../../../assets/icons/data.json";

const HistoryRow = ({ index, item, onClick }: HistoryRowProps) => {
	const { t } = useTranslation();

	const checkTitle = (title: string) => {
		return title.includes(t("main.history.bachelor_keyword"))
			? t("main.history.bachelor_short")
			: title.includes(t("main.history.graduation_keyword"))
				? t("main.history.graduation_short")
				: title;
	};

	const checkSubtitle = (subtitle: string) => {
		return subtitle.includes("Sapientia") ? "Sapientia" : subtitle;
	};

	return (
		<div className="history-row-wrapper">
			<div
				className={cl(
					"group relative flex w-full justify-center lg:w-1/2",
					index % 2 === 0 ? "lg:justify-end lg:pr-10" : "lg:justify-start lg:pl-10",
				)}
			>
				<div className="history-row-item" onClick={() => onClick(item.sectionId)}>
					<div className="bg-light-blue dark:bg-primary/50 dark:group-hover:bg-lighter-dark3 group-hover:bg-primary mt-1.5 rounded-sm p-3">
						<SVGComponent className={"fill-accent size-6"} {...icons[item.icon as IconName]} />
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
						"bg-border-gray dark:bg-gray group-hover:bg-accent absolute top-[calc(50%-0.5rem)] hidden size-4 rounded-full duration-300 lg:block",
						index % 2 === 0 ? "-right-2.5" : "-left-1.5",
					)}
				></div>
			</div>
		</div>
	);
};

export default HistoryRow;
