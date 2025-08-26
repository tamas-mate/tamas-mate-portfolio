import { useTranslation } from "react-i18next";

import SVGComponent from "../../ui/SVGComponent";
import TimelineItemDetails from "./TimelineItemDetails";

import icons from "../../../assets/icons/data.json";
import type { TimelineItemProps } from "@/types";
import { cl } from "@/utils/utils";

const TimelineItem = ({ iconName, title, subTitle, location, date, extraContent }: TimelineItemProps) => {
	const { t } = useTranslation();

	return (
		<div className="bg-secondary border-border-gray flex items-start gap-2 rounded-sm border border-solid px-12 py-7.5">
			<div className="flex items-start justify-around gap-10">
				<div className={`bg-light-blue dark:bg-lighter-dark3 mt-1.5 rounded-sm p-3`}>
					<SVGComponent className={"fill-accent size-6"} {...icons[iconName!]} />
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
