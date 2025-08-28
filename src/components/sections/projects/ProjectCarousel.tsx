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
		<Swiper navigation={true} modules={[Navigation]} className={cl("h-160 w-full", isDark && "project-swiper-dark")}>
			<SwiperSlide className="w-full">
				<img src={images[0]} alt={title} className="h-full w-full object-contain" />
			</SwiperSlide>
			<SwiperSlide className="w-full">
				<img src={images[1]} alt={title} className="h-full w-full object-contain" />
			</SwiperSlide>
		</Swiper>
	);
};

export default ProjectCarousel;
