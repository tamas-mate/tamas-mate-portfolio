import { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";

import type { ProjectProps } from "@/types";

const ProjectCarousel = lazy(() => import("./ProjectCarousel"));

const ProjectItem = ({ title, description, images, technologies, status }: ProjectProps) => {
	const { t } = useTranslation();
	const titleTxt = t(title);
	const descTxt = t(description);
	const statusTxt = t(status);

	return (
		<>
			<div className="flex flex-col gap-y-4">
				<Suspense fallback={<div className="h-10 w-10 animate-pulse rounded-md" />}>
					<ProjectCarousel images={images} title={title} />
				</Suspense>
				<h3 className="text-xl font-semibold">{titleTxt}</h3>
				<p className="text-pretty">{descTxt}</p>
				<div className="flex flex-wrap gap-4">
					{technologies.map((tech) => (
						<span key={tech} className="bg-accent rounded-full px-3 py-1 text-black">
							{tech}
						</span>
					))}
				</div>
				<p className="text-sm">{statusTxt}</p>
			</div>
		</>
	);
};
export default ProjectItem;
