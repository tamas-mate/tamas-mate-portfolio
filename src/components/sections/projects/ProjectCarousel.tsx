import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useTheme } from "@/context/theme-context";

import type { ProjectCarouselProps } from "@/types";
import { cl } from "@/utils/utils";

const ProjectCarousel = ({ images, title }: ProjectCarouselProps) => {
	const { isDark } = useTheme();

	return (
		<Swiper
			modules={[Autoplay, Navigation]}
			autoplay={{
				delay: 5000,
				disableOnInteraction: true,
			}}
			navigation
			nested
			className={cl("project-carousel swiper-no-swiping h-160 w-full", isDark && "project-swiper-dark")}
		>
			{images.map((image, index) => (
				<SwiperSlide key={title + " image " + index}>
					<img src={image} alt={title + " image " + index} className="h-full w-full object-contain" />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default ProjectCarousel;
