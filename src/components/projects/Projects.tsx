import { useTranslation } from "react-i18next";

import SectionTitle from "../SectionTitle";
import SectionWrapper from "../SectionWrapper";
import ProjectItemWrapper from "./ProjectItemWrapper";

import type { ProjectsProps } from "@/types";

const Projects = ({ projects }: ProjectsProps) => {
	const { t } = useTranslation();

	return (
		<section id="projects" className="flex flex-col gap-y-7.5">
			<SectionTitle title={t("main.sections.projects")} iconName="projects" />
			<SectionWrapper>
				{projects.map((project, index) => {
					return <ProjectItemWrapper key={index} {...project} />;
				})}
			</SectionWrapper>
		</section>
	);
};

export default Projects;
