import SectionTitle from "../SectionTitle";
import TimelineItem from "./TimelineItem";

import type { IconName, TimeLineProps } from "@/types";

const Timeline = ({ sectionId, title, iconName, timelineContent }: TimeLineProps) => {
	const renderTimelineItems = () => {
		const extraStyles = iconName === "work" ? "flex-[1_1_0] mb-8 last:mb-0" : "w-full mb-8 last:mb-0";
		return timelineContent.map((item, index) => {
			return <TimelineItem key={index} iconName={item.icon as IconName} wrapperExtraStyles={extraStyles} {...item} />;
		});
	};

	return (
		<section id={sectionId} className="py-15 sm:px-7.5">
			<SectionTitle title={title} iconName={iconName} />
			{renderTimelineItems()}
		</section>
	);
};
export default Timeline;
