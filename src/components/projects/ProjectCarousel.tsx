import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import type { ProjectCarouselProps } from "@/types";

const ProjectCarousel = ({ images, title }: ProjectCarouselProps) => {
	return (
		<Swiper navigation={true} modules={[Navigation]} className="w-full h-160 project-swiper">
			<SwiperSlide className="w-full">
				<img src={images[0]} alt={title} className="w-full h-full object-contain" />
			</SwiperSlide>
			<SwiperSlide className="w-full">
				<img src={images[1]} alt={title} className="w-full h-full object-contain" />
			</SwiperSlide>
		</Swiper>
	);
};

export default ProjectCarousel;
