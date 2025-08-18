import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import type { ProjectProps } from "@/types";

const ProjectItem = (project: ProjectProps) => {
	return (
		<>
			<div className="flex flex-col gap-y-4">
				<Swiper navigation={true} modules={[Navigation]} className="w-full h-160 project-swiper">
					<SwiperSlide className="w-full">
						<img src={project.images[0]} alt={project.title} className="w-full h-full object-contain" />
					</SwiperSlide>
					<SwiperSlide className="w-full">
						<img src={project.images[1]} alt={project.title} className="w-full h-full object-contain" />
					</SwiperSlide>
				</Swiper>
				<h1 className="text-xl font-semibold">{project.title}</h1>
				<p className="text-pretty">{project.description}</p>
				<div className="flex flex-wrap gap-4">
					{project.technologies.map((tech, index) => (
						<span key={index} className="px-3 py-1 bg-accent text-black rounded-full">
							{tech}
						</span>
					))}
				</div>
				<p className="text-sm">{project.status}</p>
			</div>
		</>
	);
};
export default ProjectItem;
