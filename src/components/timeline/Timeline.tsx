// import { cl } from "@/utils/utils";
import SectionTitle from "../SectionTitle";
import TimelineItem from "./TimelineItem";

import type { IconName, TimeLineProps } from "@/types";

const Timeline = ({ sectionId, title, iconName, timelineContent }: TimeLineProps) => {
	return (
		<section id={sectionId}>
			<SectionTitle title={title} iconName={iconName} />
			{timelineContent.map((item, index) => {
				return (
					<TimelineItem
						key={index}
						iconName={item.icon as IconName}
						wrapperExtraStyles="w-full mb-8 last:mb-0"
						// TODO: WTF???? wrapperExtraStyles={cl(iconName === "work" ? "flex-[1_1_0] mb-8 last:mb-0" : "w-full mb-8 last:mb-0")}
						{...item}
					/>
				);
			})}
		</section>
	);
};
export default Timeline;
