import { useRef } from "react";
import { useTranslation } from "react-i18next";

import History from "../sections/history/History";
import Languages from "../sections/languages/Languages";
import Overview from "../sections/overview/Overview";
import Projects from "../sections/projects/Projects";
import Quote from "../sections/quote/Quote";
import Skills from "../sections/skills/Skills";
import Summary from "../sections/summary/Summary";
import Timeline from "../sections/timeline/Timeline";
import MobileMenu from "../sidenav/MobileMenu";
import SideNav from "../sidenav/SideNav";

import SwiperProvider from "@/context/swiper/SwiperProvider";
import type { MainProps } from "@/types";

const Main = ({ navItems, summary, projects, overview, timeline, skills, languages, quote }: MainProps) => {
	const { t } = useTranslation();
	const workHistoryTimelineRef = useRef<HTMLElement | null>(null);
	const educationTimelineRef = useRef<HTMLElement | null>(null);

	const handleScrollToTimeline = (sectionId: string) => {
		if (sectionId === "work_history") workHistoryTimelineRef.current?.scrollIntoView();
		if (sectionId === "education") educationTimelineRef.current?.scrollIntoView();
	};

	return (
		<main className="flex w-full max-w-260 flex-col gap-y-15 sm:px-7.5 xl:px-0">
			<SideNav navItems={navItems} />
			<MobileMenu navItems={navItems} />
			<Summary summary={summary} />
			<SwiperProvider>
				<Projects projects={projects} />
			</SwiperProvider>
			<Overview overview={overview} />
			<Timeline
				ref={workHistoryTimelineRef}
				sectionId="work_history"
				title={t("main.sections.work_history")}
				iconName="work"
				timelineContent={timeline.work}
			/>
			<Timeline
				ref={educationTimelineRef}
				sectionId="education"
				title={t("main.sections.education")}
				iconName="education"
				timelineContent={timeline.education}
			/>
			<Skills skills={skills} />
			<Languages languages={languages} />
			<Quote {...quote} />
			<History timeline={timeline} onClick={handleScrollToTimeline} />
		</main>
	);
};

export default Main;
