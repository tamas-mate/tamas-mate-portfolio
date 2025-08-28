import { useImperativeHandle, useRef } from "react";

import SectionTitle from "../../ui/SectionTitle";
import TimelineItem from "./TimelineItem";

import type { IconName, TimeLineProps } from "@/types";

const Timeline = ({ handleRef, sectionId, title, iconName, timelineContent }: TimeLineProps) => {
	const sectionRef = useRef<HTMLElement>(null);

	useImperativeHandle(handleRef, () => {
		return {
			scrollIntoView() {
				sectionRef.current?.scrollIntoView({ behavior: "smooth" });
			},
		};
	}, []);

	return (
		<section ref={sectionRef} id={sectionId} className="flex flex-col gap-y-7.5">
			<SectionTitle title={title} iconName={iconName} />
			{timelineContent.map((item, index) => {
				return <TimelineItem key={"timeline-item-" + index} iconName={item.icon as IconName} {...item} />;
			})}
		</section>
	);
};
export default Timeline;
