import { useRef } from "react";
import { useTranslation } from "react-i18next";

import SideNav from "../sidenav/SideNav";
import MobileMenu from "../sidenav/MobileMenu";
import Summary from "../sections/summary/Summary";
import Projects from "../sections/projects/Projects";
import Overview from "../sections/overview/Overview";
import Timeline from "../sections/timeline/Timeline";
import Skills from "../sections/skills/Skills";
import Languages from "../sections/languages/Languages";
import Quote from "../sections/quote/Quote";
import History from "../sections/history/History";

import type { MainProps, TimeLineScrollHandle } from "@/types";

const Main = ({ navItems, summary, projects, overview, timeline, skills, languages, quote }: MainProps) => {
	const { t } = useTranslation();
	const workHistoryTimelineRef = useRef<TimeLineScrollHandle>(null);
	const educationTimelineRef = useRef<TimeLineScrollHandle>(null);

	const scrollToRelevantTimeline = (sectionId: string) => {
		if (sectionId === "work-history") workHistoryTimelineRef.current?.scrollIntoView();
		if (sectionId === "education") educationTimelineRef.current?.scrollIntoView();
	};

	return (
		<main className="flex w-full max-w-260 flex-col gap-y-15 sm:px-7.5 xl:px-0">
			<SideNav navItems={navItems} />
			<MobileMenu navItems={navItems} />
			<Summary summary={summary} />
			<Projects projects={projects} />
			<Overview overview={overview} />
			<Timeline
				handleRef={workHistoryTimelineRef}
				sectionId="work-history"
				title={t("main.sections.work-history")}
				iconName="work"
				timelineContent={timeline.work}
			/>
			<Timeline
				handleRef={educationTimelineRef}
				sectionId="education"
				title={t("main.sections.education")}
				iconName="education"
				timelineContent={timeline.education}
			/>
			<Skills skills={skills} />
			<Languages languages={languages} />
			<Quote {...quote} />
			<History timeline={timeline} onClick={scrollToRelevantTimeline} />
		</main>
	);
};

export default Main;
