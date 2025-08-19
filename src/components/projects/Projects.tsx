import SectionTitle from "../SectionTitle";
import SectionWrapper from "../SectionWrapper";
import ProjectItem from "./ProjectItem";

import { imageMap } from "../../utils/utils";
import type { ProjectsProps } from "@/types";

const Projects = ({ projects }: ProjectsProps) => {
	const getProjectImages = (project: { images: string[] }) => {
		return project.images.filter((image) => imageMap[image]).map((image) => imageMap[image]);
	};

	return (
		<section id="projects" className="py-15 sm:px-7.5">
			<SectionTitle title="Projects" iconName="projects" />
			<SectionWrapper>
				{projects.map((project, index) => {
					const updatedProject = { ...project, images: getProjectImages(project) };
					return <ProjectItem key={index} {...updatedProject} />;
				})}
			</SectionWrapper>
		</section>
	);
};

export default Projects;
