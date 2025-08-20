import { useCallback } from "react";

import ProjectItem from "./ProjectItem";

import { imageMap } from "@/utils/utils";
import type { ProjectProps } from "@/types";

const ProjectItemWrapper = (project: ProjectProps) => {
	const getProjectImages = useCallback((project: { images: string[] }) => {
		return project.images.filter((image) => imageMap[image]).map((image) => imageMap[image]);
	}, []);

	return (
		<ProjectItem
			title={project.title}
			description={project.description}
			images={getProjectImages(project)}
			technologies={project.technologies}
			status={project.status}
		/>
	);
};

export default ProjectItemWrapper;
