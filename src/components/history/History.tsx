import SectionTitle from "../SectionTitle";
import SVGComponent from "../SVGComponent";

import icons from "../../assets/icons/data.json";
import type { HistoryProps, IconName } from "@/types";

const History = ({ timeline }: HistoryProps) => {
	const renderHistoryItems = () => {
		const timelineItems = [];

		for (const key in timeline) {
			for (const item of timeline[key as keyof typeof timeline]) {
				if ("extraContent" in item) {
					timelineItems.push({ ...item, extraContent: [], sectionId: "work-history" });
				} else {
					if (item.title.includes("Bachelor's degree (BSc)")) {
						item.title = "Bachelor's degree (BSc)";
						item.subTitle = "Sapientia";
					} else if (item.title.includes("Graduation")) {
						item.title = "Graduation Diploma";
					}

					timelineItems.push({ ...item, sectionId: "education" });
				}
			}
		}

		return timelineItems.map((item, index) => {
			return (
				<div
					key={index}
					className="relative w-full flex justify-center  before:absolute before:top-full before:left-1/2 before:w-1
					before:h-full before:bg-accent last:before:content-none lg:odd:justify-start lg:before:content-none lg:even:justify-end"
				>
					<div
						className={`group relative flex justify-center w-full lg:w-1/2 ${
							index % 2 === 0 ? "lg:pr-10 lg:justify-end" : "lg:pl-10 lg:justify-start"
						}`}
					>
						<div
							className="w-87.5 flex justify-start items-start gap-10 pl-10 py-5 bg-lighter-dark3 rounded-sm hover:cursor-pointer group-hover:bg-primary"
							onClick={() => handleSectionScroll(item.sectionId)}
						>
							<div className="bg-primary/50 rounded-sm p-3 mt-1.5 group-hover:bg-lighter-dark3">
								<SVGComponent
									className={"min-w-6 max-w-6 w-6 min-h-6 max-h-6 h-6 fill-accent"}
									{...icons[item.icon as IconName]}
								/>
							</div>
							<div className="flex flex-col gap-y-2">
								<p className="text-base font-bold">{item.title}</p>
								<span>{item.subTitle}</span>
								<span>{item.location}</span>
								<span className="text-gray">{item.date}</span>
							</div>
						</div>
						<div
							className={`hidden absolute top-[calc(50%-0.5rem)] ${
								index % 2 === 0 ? "-right-2.5" : "-left-1.5"
							}  size-4 bg-gray rounded-full lg:block group-hover:bg-accent duration-300`}
						></div>
					</div>
				</div>
			);
		});
	};

	const handleSectionScroll = (sectionId: string) => {
		if (!sectionId) return;

		const section = document.getElementById(sectionId);

		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section id="timeline">
			<SectionTitle title="Timeline" iconName={"timeline"} stroke />
			<div
				className="relative flex flex-col items-center gap-y-12 w-full py-7.5 px-12 rounded-sm bg-secondary 
			lg:before:absolute lg:before:top-0 lg:before:bottom-0 lg:before:left-1/2 lg:before:w-1  lg:before:bg-gray/35 lg:before:my-7.5"
			>
				{renderHistoryItems()}
			</div>
		</section>
	);
};

export default History;
