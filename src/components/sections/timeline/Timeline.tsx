import SectionTitle from "../../ui/SectionTitle";
import TimelineItem from "./TimelineItem";

import type { IconName, TimeLineProps } from "@/types";

const Timeline = ({ ref, sectionId, title, iconName, timelineContent }: TimeLineProps) => {
	return (
		<section ref={ref} id={sectionId} className="flex flex-col gap-y-7.5">
			<SectionTitle title={title} iconName={iconName} />
			{timelineContent.map((item, index) => {
				return <TimelineItem key={"timeline-item-" + index} iconName={item.icon as IconName} {...item} />;
			})}
		</section>
	);
};
export default Timeline;
