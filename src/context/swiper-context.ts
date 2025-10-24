import { createContext, useContext } from "react";

import type { SwiperContextType } from "@/types";

export const SwiperContext = createContext<SwiperContextType | undefined>(undefined);

export const useSwiper = () => {
	const swiperCtx = useContext(SwiperContext);

	if (!swiperCtx) {
		throw new Error("useSwiper must be used within a SwiperProvider");
	}

	return swiperCtx;
};
