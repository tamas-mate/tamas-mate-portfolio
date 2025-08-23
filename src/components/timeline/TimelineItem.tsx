import { useTranslation } from "react-i18next";

import SVGComponent from "../SVGComponent";
import TimelineItemDetails from "./TimelineItemDetails";

import icons from "../../assets/icons/data.json";
import type { TimelineItemProps } from "@/types";
import { cl } from "@/utils/utils";

const TimelineItem = ({ iconName, title, subTitle, location, date, extraContent }: TimelineItemProps) => {
	const { t } = useTranslation();

	return (
		<div className="flex items-start py-7.5 px-12 gap-2 bg-secondary rounded-sm">
			<div className="flex justify-around items-start gap-10">
				<div className={`bg-lighter-dark3 rounded-sm p-3 mt-1.5`}>
					<SVGComponent className={"min-w-6 max-w-6 w-6 min-h-6 max-h-6 h-6 fill-accent"} {...icons[iconName!]} />
				</div>
				<div className={cl("flex flex-col gap-y-2", extraContent && "lg:w-50")}>
					<p className="text-base font-bold">{t(title)}</p>
					<span>{t(subTitle)}</span>
					<span>{t(location)}</span>
					<span className="text-gray">{date}</span>
					<div className="lg:hidden">
						{extraContent && <TimelineItemDetails extraContent={extraContent as string[]} />}
					</div>
				</div>
				<div className="hidden lg:block">
					{extraContent && <TimelineItemDetails extraContent={extraContent as string[]} />}
				</div>
			</div>
		</div>
	);
};

export default TimelineItem;
