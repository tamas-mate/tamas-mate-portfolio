import { useTranslation } from "react-i18next";

import SectionTitle from "../../ui/SectionTitle";
import HistoryRow from "./HistoryRow";

import type { HistoryProps } from "@/types";

const normalizeTimeline = (timeline: HistoryProps["timeline"]) => {
	return Object.values(timeline).flatMap((section) =>
		section.map((rawItem) => {
			const isWork = "extra_content" in rawItem;
			const sectionId = isWork ? "work_history" : "education";

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
	const timelineItems = normalizeTimeline(timeline);

	return (
		<section id="timeline" className="flex flex-col gap-y-7.5">
			<SectionTitle title={t("main.sections.timeline")} iconName={"timeline"} stroke />
			<div className="history-wrapper">
				{timelineItems.map((item, index) => (
					<HistoryRow key={index} index={index} item={item} onClick={onClick} />
				))}
			</div>
		</section>
	);
};

export default History;
