import Skills from "./skills/Skills";
import Languages from "./languages/Languages";
import Summary from "./summary/Summary";
import Projects from "./projects/Projects";
import Overview from "./overview/Overview";
import Timeline from "./timeline/Timeline";
import Quote from "./quote/Quote";
import History from "./history/History";

import content from "../data/content.json";
import SideNav from "./sidenav/SideNav";

const Main = () => {
	return (
		<>
			<SideNav navItems={content.navItems} />
			<Summary summary={content.summary} />
			<Projects projects={content.projects} />
			<Overview overview={content.overview} />
			<Timeline sectionId="work-history" title="Work History" iconName="work" timelineContent={content.timeline.work} />
			<Timeline
				sectionId="education"
				title="Education"
				iconName="education"
				timelineContent={content.timeline.education}
			/>
			<Skills skills={content.skills} />
			<Languages languages={content.languages} />
			<Quote quote={content.quote.text} author={content.quote.author} />
			<History timeline={content.timeline} />
		</>
	);
};

export default Main;
