import { useMemo, useRef } from "react";
import type Swiper from "swiper";

import { SwiperContext } from "./swiper-context";

import type { ChildrenProvider } from "@/types";

const SwiperProvider = ({ children }: ChildrenProvider) => {
	const outerSwiperRef = useRef<Swiper | null>(null);
	const value = useMemo(
		() => ({
			outerSwiperRef,
			setSwiperRef: (el: Swiper | null) => (outerSwiperRef.current = el),
			lockSwiper: () => {
				if (outerSwiperRef.current) outerSwiperRef.current.allowTouchMove = false;
			},
			unlockSwiper: () => {
				if (outerSwiperRef.current) outerSwiperRef.current.allowTouchMove = true;
			},
		}),
		[],
	);

	return <SwiperContext value={value}>{children}</SwiperContext>;
};

export default SwiperProvider;
