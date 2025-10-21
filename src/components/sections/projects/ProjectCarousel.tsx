import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useTheme } from "@/context/theme-context";

import type { ProjectCarouselProps } from "@/types";
import { cl } from "@/utils/utils";

const ProjectCarousel = ({ images, title }: ProjectCarouselProps) => {
	const { isDark } = useTheme();

	return (
		<Swiper navigation modules={[Navigation]} className={cl("h-160 w-full", isDark && "project-swiper-dark")}>
			{images.map((image, index) => (
				<SwiperSlide className="w-full">
					<img src={image} alt={title + " image " + index} className="h-full w-full object-contain" />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default ProjectCarousel;
