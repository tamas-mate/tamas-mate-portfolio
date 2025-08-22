import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import type { ProjectProps } from "@/types";
import { useTranslation } from "react-i18next";

const ProjectItem = ({ title, description, images, technologies, status }: ProjectProps) => {
	const { t } = useTranslation();

	return (
		<>
			<div className="flex flex-col gap-y-4">
				<Swiper navigation={true} modules={[Navigation]} className="w-full h-160 project-swiper">
					<SwiperSlide className="w-full">
						<img src={images[0]} alt={title} className="w-full h-full object-contain" />
					</SwiperSlide>
					<SwiperSlide className="w-full">
						<img src={images[1]} alt={title} className="w-full h-full object-contain" />
					</SwiperSlide>
				</Swiper>
				<p className="text-xl font-semibold">{t(title)}</p>
				<p className="text-pretty">{t(description)}</p>
				<div className="flex flex-wrap gap-4">
					{technologies.map((tech, index) => (
						<span key={index} className="px-3 py-1 bg-accent text-black rounded-full">
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
