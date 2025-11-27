import { createContext, useContext } from "react";

import type { MobileMenuContextType } from "@/types";

export const MobileMenuContext = createContext<MobileMenuContextType | undefined>(undefined);

export const useMobileMenu = () => {
	const mobileMenuCtx = useContext(MobileMenuContext);

	if (!mobileMenuCtx) {
		throw new Error("useMobileMenu must be used within a MobileMenuProvider");
	}

	return mobileMenuCtx;
};
