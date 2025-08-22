import { useTranslation } from "react-i18next";
import { useMemo, useCallback } from "react";

import SectionTitle from "../SectionTitle";
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

const History = ({ timeline }: HistoryProps) => {
	const { t } = useTranslation();

	const timelineItems = useMemo(() => normalizeTimeline(timeline), [timeline]);

	const onHandleSectionScroll = useCallback((sectionId: string) => {
		if (!sectionId) return;
		document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
	}, []);

	return (
		<section id="timeline">
			<SectionTitle title={t("main.sections.timeline")} iconName={"timeline"} stroke />
			<div
				className="relative flex flex-col items-center gap-y-12 w-full py-7.5 px-12 rounded-sm bg-secondary 
			lg:before:absolute lg:before:top-0 lg:before:bottom-0 lg:before:left-1/2 lg:before:w-1  lg:before:bg-gray/35 lg:before:my-7.5"
			>
				{timelineItems.map((item, index) => (
					<HistoryRow key={index} index={index} item={item} onClick={onHandleSectionScroll} />
				))}
			</div>
		</section>
	);
};

export default History;
