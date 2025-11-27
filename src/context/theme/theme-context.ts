import { createContext, useContext } from "react";

import type { ThemeContextType } from "@/types";

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
	const themeCtx = useContext(ThemeContext);

	if (!themeCtx) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}

	return themeCtx;
};
