import SectionTitle from "../SectionTitle";
import SectionWrapper from "../SectionWrapper";
import ProjectItemWrapper from "./ProjectItemWrapper";

import type { ProjectsProps } from "@/types";

const Projects = ({ projects }: ProjectsProps) => {
	return (
		<section id="projects">
			<SectionTitle title="Projects" iconName="projects" />
			<SectionWrapper>
				{projects.map((project, index) => {
					return <ProjectItemWrapper key={index} {...project} />;
				})}
			</SectionWrapper>
		</section>
	);
};

export default Projects;
