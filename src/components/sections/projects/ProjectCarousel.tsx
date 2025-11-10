import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useTheme } from "@/context/theme-context";

import { useSwiper } from "@/context/swiper-context";
import type { ProjectCarouselProps } from "@/types";
import { cl } from "@/utils/utils";

const ProjectCarousel = ({ images, title }: ProjectCarouselProps) => {
	const { isDark } = useTheme();
	const { lockSwiper, unlockSwiper } = useSwiper();

	return (
		<Swiper
			modules={[Autoplay, Navigation]}
			autoplay={{
				delay: 5000,
				disableOnInteraction: true,
			}}
			navigation
			nested
			grabCursor
			spaceBetween={25}
			className={cl("project-carousel h-80 w-full lg:h-160", isDark && "project-swiper-dark")}
			onTouchStart={lockSwiper}
			onSliderFirstMove={lockSwiper}
			onTouchEnd={unlockSwiper}
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
