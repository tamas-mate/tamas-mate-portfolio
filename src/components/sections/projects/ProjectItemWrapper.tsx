import ProjectItem from "./ProjectItem";

import type { ProjectProps } from "@/types";
import { imageMap, type ImageKey } from "@/utils/utils";

const ProjectItemWrapper = (project: ProjectProps) => {
	const getProjectImages = (projectImages: ImageKey[]) => {
		return projectImages.map((image) => imageMap[image]);
	};

	return (
		<ProjectItem
			title={project.title}
			description={project.description}
			images={getProjectImages(project.images)}
			technologies={project.technologies}
			status={project.status}
		/>
	);
};

export default ProjectItemWrapper;
