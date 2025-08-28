import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import SectionTitle from "../../ui/SectionTitle";
import HistoryRow from "./HistoryRow";

import type { HistoryProps } from "@/types";

const normalizeTimeline = (timeline: HistoryProps["timeline"]) => {
	return Object.values(timeline).flatMap((section) =>
		section.map((rawItem) => {
			const isWork = "extraContent" in rawItem;
			const sectionId = isWork ? "work-history" : "education";

			return {
				title: rawItem.title,
				subTitle: rawItem.subTitle,
				location: rawItem.location,
				date: rawItem.date,
				icon: rawItem.icon,
				sectionId,
			};
		}),
	);
};

const History = ({ timeline, onClick }: HistoryProps) => {
	const { t } = useTranslation();
	const timelineItems = useMemo(() => normalizeTimeline(timeline), [timeline]);

	return (
		<section id="timeline" className="flex flex-col gap-y-7.5">
			<SectionTitle title={t("main.sections.timeline")} iconName={"timeline"} stroke />
			<div className="bg-secondary border-border-gray lg:before:bg-border-gray dark:lg:before:bg-gray/35 relative flex w-full flex-col items-center gap-y-12 rounded-sm border border-solid px-12 py-7.5 lg:before:absolute lg:before:top-0 lg:before:bottom-0 lg:before:left-1/2 lg:before:my-7.5 lg:before:w-1">
				{timelineItems.map((item, index) => (
					<HistoryRow key={index} index={index} item={item} onClick={onClick} />
				))}
			</div>
		</section>
	);
};

export default History;
