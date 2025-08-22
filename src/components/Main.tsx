import { useTranslation } from "react-i18next";

import SideNav from "./sidenav/SideNav";
import Summary from "./summary/Summary";
import Projects from "./projects/Projects";
import Overview from "./overview/Overview";
import Timeline from "./timeline/Timeline";
import Skills from "./skills/Skills";
import Languages from "./languages/Languages";
import Quote from "./quote/Quote";
import History from "./history/History";

import type { MainProps } from "@/types";

const Main = ({ navItems, summary, projects, overview, timeline, skills, languages, quote }: MainProps) => {
	const { t } = useTranslation();
	// TODO: 2 refs for timelines, callback jumpToWorkHistoryHandler, forwardRef
	return (
		<main className="flex flex-col gap-y-15 max-w-260 w-full">
			<SideNav navItems={navItems} />
			<Summary summary={summary} />
			<Projects projects={projects} />
			<Overview overview={overview} />
			<Timeline
				sectionId="work-history"
				title={t("main.sections.work-history")}
				iconName="work"
				timelineContent={timeline.work}
			/>
			<Timeline
				sectionId="education"
				title={t("main.sections.education")}
				iconName="education"
				timelineContent={timeline.education}
			/>
			<Skills skills={skills} />
			<Languages languages={languages} />
			<Quote {...quote} />
			<History timeline={timeline} />
		</main>
	);
};

export default Main;
