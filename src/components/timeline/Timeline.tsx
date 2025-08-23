import SectionTitle from "../SectionTitle";
import TimelineItem from "./TimelineItem";

import type { IconName, TimeLineProps } from "@/types";

const Timeline = ({ sectionId, title, iconName, timelineContent }: TimeLineProps) => {
	return (
		<section id={sectionId} className="flex flex-col gap-y-7.5">
			<SectionTitle title={title} iconName={iconName} />
			{timelineContent.map((item, index) => {
				return <TimelineItem key={index} iconName={item.icon as IconName} {...item} />;
			})}
		</section>
	);
};
export default Timeline;
