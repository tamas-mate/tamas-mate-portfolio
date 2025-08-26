import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { useTheme } from "@/context/theme-context";

import { cl } from "@/utils/utils";
import type { ProjectCarouselProps } from "@/types";

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
