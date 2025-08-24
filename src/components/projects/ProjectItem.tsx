import { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";

import type { ProjectProps } from "@/types";

const ProjectCarousel = lazy(() => import("./ProjectCarousel"));

const ProjectItem = ({ title, description, images, technologies, status }: ProjectProps) => {
	const { t } = useTranslation();

	return (
		<>
			<div className="flex flex-col gap-y-4">
				<Suspense fallback={<div className="w-10 h-10 animate-pulse rounded-md" />}>
					<ProjectCarousel images={images} title={title} />
				</Suspense>
				<p className="text-xl font-semibold">{t(title)}</p>
				<p className="text-pretty">{t(description)}</p>
				<div className="flex flex-wrap gap-4">
					{technologies.map((tech) => (
						<span key={tech} className="px-3 py-1 bg-accent text-black rounded-full">
							{tech}
						</span>
					))}
				</div>
				<p className="text-sm">{t(status)}</p>
			</div>
		</>
	);
};
export default ProjectItem;
